
# 이벤트 루프(EventLoop)

지난번에는 JavaScript의 V8엔진, Call Stack, Memory Heap에 대해 알아보았다.

JavaScript는 CallStack이 하나인 싱글스레드 방식이라고 언급했었다.

이로인해 코드를 실행하고 다음줄의 코드를 실행하는 순차적인 방식(동기적)으로 진행이된다.

하지만 이렇게 된다면 JavaScript가 사용된 웹 페이지를 이용하는데에 한번에 하나씩 동작을 하기 때문에 불편함점이 발생한다. 사용자와 상호 작용(클릭, 마우스 오버 등)을 하거나 웹 요청과 응답을 주고받거나 할 경우에는 동시에 작업이 이루어지듯이 보여야 한다.

멀티 스레드가 아닌 싱글스레드인 자바스크립트는 EventLoop를 사용해서 이를 가능하게했다.

<br>

## 이벤트 루프의 동작

다음은 이벤트 루프의 동작에 대해서 알아보도록 하자.

<br>

![이벤트 루프](https://velog.velcdn.com/images/char1ey95/post/00196a92-dd39-4f7f-a7c9-044f34edd873/image.png)

<br>

먼저 콜스택(Call Stack)을 보면 실행해야하는 함수들이 쌓여있다.

콜스택은 나중에 들어간 것이 먼저 실행되는 Last In First Out 구조다.

하지만 DOM, A-Jax와 같은 Web API 함수들을 만나게 되면 콜스택에서 처리하지 않고 이를 Web API 부분으로 나와 비동기적으로 처리한다.

그 사이 콜스택의 다음 함수들이 차례로 실행된다.

Web API에서 지정된 시간에 따라 실행이 된 함수들은 큐(Queue)로 넘어간다.

_※ 여기서 Queue는 자료구조의 한 종류로 먼저들어간 작업이 먼저실행되는 First In First Out(FIFO)구조이다._

콜스택(Call Stack)이 비게되면 큐(Queue)에 있던 작업들이 콜스택(Call Stack)으로 들어가 실행되게 된다. 이 작업을 해주는 것이 이벤트 루프이다.

_※ Queue에도 우선실행순위가 정해져있다.
( Microtask Queue → Animation Frames → Task Queue )_

이번엔 코드로 한번 살펴보자.

```javascript
console.log(1)

setTimeout(() => {
    console.log("EventLoop")
}, 3000)

console.log(2)
```

이를 실행하면 `console.log(1)`이 먼저 실행되고 `setTimeout`을 만난다.

`setTimeout`은 Web API에 속하므로 콜스택에서 빠져나온다.

그 다음 줄의 `console.log(2)`를 만나 실행한다.

3초가 지난후 `console.log("EventLoop")`가 실행된다.

![](https://velog.velcdn.com/images/char1ey95/post/bbeff52d-a00d-4ec3-a1a0-8d214e165634/image.png)

```javascript
console.log(1)

setTimeout(() => {
    console.log("EventLoop")
}, 0)

console.log(2)
```

이번엔 `setTimeout`의 시간을 0초로 바꿔서 실행해보자.

![](https://velog.velcdn.com/images/char1ey95/post/d94f0d94-4f23-4433-8978-793a72eb3584/image.png)

브라우저마다 기본으로 설정된 시간이 있긴하지만, `setTimeout`을 만나는 순간 Web API를 처리하는 부분으로 넘겨 반드시 Queue를 통해서 Call Stack에 들어가므로 위와 같은 결과가 도출된다.

우리는 이 이벤트 루프를 통해서 비동기적인 작업을 처리할 수 있으며  DOM을 통한 역동적인 화면이나 NodeJS를 이용한 서버적인 처리까지 할 수 있다.