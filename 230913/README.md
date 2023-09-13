![JavaScript](https://velog.velcdn.com/images/char1ey95/post/bf9afeca-f6ef-4e91-90a3-51081d31bfec/image.png)

# JavaScript

[MDN 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Introduction)

MDN문서를 참고해서 JavaScript를 공부해보도록하자.

**JavaScript**는 웹 페이지를 `상호작용` 할 수 있도록 만드는 데 사용되는 `크로스 플랫폼`, `객체 지향 스크립팅 언어`이다.

이를 조금 알기쉽게 풀어서 말해보자면, 다음과 같이 말한다.

**JavaScript**는 웹페이지를 생동감 있게 만들기 위해 사용되는 언어로, 다양한 운영체제와 브라우저에서 동작하는, 객체 지향 프로그래밍 스크립트 언어이다.



## 1. 상호작용

여기서 상호작용은 웹페이지에서 버튼을 클릭하거나, 사용자의 동작에 따른 어떤 기능을 실행시키는 것을 의미한다. 동작에 따라서 페이지가 동적으로 작동할 수 있도록 한다.



## 2. 크로스 플랫폼

JavaScrit는 크로스 플랫폼이다. 이 뜻은 **JavaScript** 코드가 서로 다른 컴퓨터 시스템, 웹 브라우저에서 동작할 수 있다는 의미이다. 

Windows, macOS, Linux 와 같은 운영체제와 Chrome, Firefox, Edge 등과 같은 브라우저를 가리지 않고 동작하는 것을 말한다.

이러한 점을 이용해 웹, 모바일 앱을 개발할 때 유용하다.



## 3. 객체 지향 스트립팅 언어

**JavaScript**는 객체 지향 스크립팅 언어이다. 이 문장은 객체지향과 스크립트 언어 두 가지로 분리할 수 있다.

### 3-1. 객체 지향

**JavaScript**는 객체 지향 프로그래밍 방식으로 프로그램을 작성할 수 있다.
(함수형 프로그래밍과 같이 다른 방식으로도 가능)

**JavaScript**는 객체 지향 언어가 아닌 **프로토타입 언어**지만, 객체 지향 언어처럼 프로그래밍을 할 수 있다.

객체 지향의 자세한 내용을 적으면 길어지기 때문에 추후 포스팅을 작성하면 이곳에 링크를 달아두겠습니다....

### 3-2. 스크립트 언어

스크립트 언어란, 코드를 텍스트로 작성하고, 브라우저나 다른 실행환경에서 인터프리터로 실행할 수 있음을 의미한다.

예를 들어 Java의 경우 컴파일을 통해 번역을 거친후 실행시킬 수 있지만 **JavaScript**의 경우 인터프리터를 통해 실행하면서 번역을 한다.

---

![](https://velog.velcdn.com/images/char1ey95/post/1f307949-ebd4-4228-83e7-30117f5d842c/image.png)

# JavaScript는 어떻게 실행되는걸까?

[링크텍스트](https://developer.mozilla.org/ko/docs/Web/JavaScript)

|**JavaScript**는 인터프리터, Just-In-Time 컴파일 프로그래밍 언어이다.

MDN 문서에 따르면 위와 같이 표현하고 있다.


## 1. JavaScript의 컴파일

인터프리터, JIT 컴파일을 한 번 알아보자.

<br>

### 1-1. 인터프리터(Interpreter)

사전적 의미의 인터프리터이다.

인터프리터 - 고급 언어(JavaScript 등)로 작성된 원시코드 명령어들을 한번에 한 줄씩 읽어들여서 실행하는 프로그램

인터프리터란, 일반적으로 JavaScript를 브라우저에서 실행시킬때 JavaScript 코드를 브라우저가 이해할 수 있는 언어로 번역하는 과정이다.

<br>

### 1-2. JIT(Just-In-Time) 컴파일

웹에서는 페이지 이동을 할 때마다 위의 과정을 매번 진행한다. 이동시마다 번역을 하는데 V8엔진은 이 속도를 높이기 위해서 인터프리터 방식으로 컴파일을 하고 바이트 코드로 만들어 낸다.

컴파일 속도를 높이기 위해 바이크 코드를 저장(캐싱)해두고 컴파일 과정을 할 때에 캐싱한 코드를 참조함으로 컴파일 속도가 높아진다.

위와 같은 방식을 JIT 컴파일이라고한다.

<br>

<br>

## 2. V8 엔진

JavaScript를 실행시켜주는 V8 엔진에 대해서 알아보자.

V8 엔진은 구글이 개발한 오픈 소스 자바스크립트 엔진으로, 웹 브라우저에서 JavaScript 코드를 실행하는 데 사용된다. V8은 웹 브라우저와 함께 사용되는 것이 아니라, 웹 브라우저를 비롯한 다양한 환경(ex. NodeJS)에서 자바스크립트 코드를 실행하는 데 활용된다.


V8 엔진을 간략하게 그림으로 나타내보면 아래와 같이 나타낼 수 있다.

![](https://velog.velcdn.com/images/char1ey95/post/f04e8ffa-ed5b-4b0e-bfc2-bf3ed7cbbf62/image.png)

크게 Memory Heap과 Call Stack으로 이루어져있다.

V8엔진이 자바스크립트를 실행시키며 저장해야하는 데이터는 Heap에 함수처럼 실행시켜야 하는 것들은 Call Stack에 들어가 하나씩 순차적으로 실행한다.

(자바스크립트는 이 Call Stack이 하나만 존재하므로 싱글 스레드 방식이라고도 한다.)

<br>

### 2-1. 메모리힙(Memory Heap)

메모리힙에서 Heap이란 자료구조의 한 종류이다.

여기서는 동적 할당, 가비지 컬렉션 등과 같은 메모리에 관한 것을 다루며 이를 V8 엔진이 관리함으로써 개발자가 메모리의 할당, 해제와 같은 것을 직접 신경쓰지 않아도 된다.

<br>

### 2-2. 콜스택(Call Stack)

콜스택은 Stack이라는 자료구조를 따르며 가장 마지막에 들어간 데이터가 가장 먼저 나오는(Last In First Out) 성질을 가졌다.

위의 성질에 따라서 함수를 호출(실행)하게 된다.

```Javascript
console.log("1")
console.log("2")
console.log("3")
```

실행을 하게되면 익명함수가 Call Stack의 가장 아래에 쌓이고,

![](https://velog.velcdn.com/images/char1ey95/post/61d90654-f743-4f29-bc96-37a94606ab50/image.png)

코드를 순서대로 한줄 한줄 번역하여 실행한다.

![](https://velog.velcdn.com/images/char1ey95/post/a82567d2-6b1e-4436-99b8-4659d1ac3130/image.png)

가장 위의 console.log(1)이 콜스택에 들어갔다가 나온후 다음 차례로 console.log(2)가 들어있는 모습니다.

위의 코드가 모두 실행되고나면 익명함수가 콜스택에서 빠져나오게되며 콜스택이 비게된다.

![](https://velog.velcdn.com/images/char1ey95/post/6506046c-b709-4fa9-9fff-b997947be346/image.png)

데이터의 메모리와 실행에 관한 일을 V8 엔진이 맡아서 해주기 때문에 개발자는 코드를 작성하고 실행하는데만 신경쓰면 된다.

하지만 다음에 알아볼 이벤트 루프를 짚고 넘어가야 JavaScript의 실행을 좀 더 이해할 수 있다.

다음에는 이벤트 루프에 대해서 알아보도록 하자.