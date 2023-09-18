# 자바스크립트 리마인드 - 1

그동안 사용했던 자바스크립트를 기초부터 다시 리마인드를 통해 놓쳤던 부분이나 제대로 이해하지 못한 부분을 학습하기 위해 [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Introduction) 참고하여 작성하는 글입니다.

# 문법과 자료형

## 1. 기본

자바스크립트(JavaScript)는 문법의 대부분을 Java와 C, C++을 비롯한 다른 언어들의 영향을 받았다.

자바스크립트는 대소문자를 구변하고, 유니코드 문자셋을 사용하여 영어뿐만 아니라 한국어, 독일어등을 사용할 수 있다.

자바스크립트의 한 문장을 명령문(statement)이라고 하며, 명령문의 구분을 세미콜론(;)으로 한다. 한줄이 한 명령문이면 상관없지만, 한줄에 두 명령문이 있다면 구분해주어야한다.

자바스크립트는 왼쪽에서 오른쪽으로 한줄씩 해석한다.

```Javascript
let 훈민정음 = "가나다라"; // 한국어

let Früh = "foobar"; // 독일어

let früh = "foobar2"; // 대소문자 구분

let statement = '명령문'; let statement2 = '명령문2' // 한줄에 선언이 두개
```

<br>

---

## 2. 주석

주석의 사용법은 다른 언어와 비슷하다.

VsCode에서는 **ctrl + /** 로 간단히 사용할 수 있다.

```javascript
// 한줄 주석

/* 여러줄을
 * 사용하는 주석
 */
```

---

## 3. 선언

자바스크립트는 세 가지의 변수 선언이 존재한다.

#### **var**

변수를 선언하고 동시에 값을 초기화(initialize)할 수 있다.

(※ 초기화란, 변수에 처음 값을 할당하거나 설정하는 것을 의미한다.)

호이스팅의 문제로 현재는 잘 사용하지 않는다.

재선언 및 재할당이 가능하다.

```javascript
var a = 1; // 최초 선언 및 할당
var a = 2; // 재선언 및 할당
a = 4; // 재할당
console.log(a); // 4
```

#### **let**

변수를 선언하고 동시에 값을 초기화할 수 있다.

재선언은 불가능하고, 재할당은 가능하다.

재선언을 하려고 하면 다음의 에러가 발생한다.

```javascript
let a = 1;
let a = 2; // Uncaught SyntaxError: Identifier 'a' has already been declared
```

#### **const**

var와 let과는 다르게 재할당이 되지 않는 상수이다.

선언과 동시에 할당을 해줘야한다.

재할당이 되지 않으므로 변하지않는 상수(constant)이다.

아래와 같이 선언 후 할당이 안되므로 반드시 한 줄에 선언과 할당을 해야한다.

```javascript
const c = 1 ;// O

// ==========

const c ;// X
c = 1;

// 'const' declarations must be initialized. - vscode 에러
// Uncaught SyntaxError: Missing initializer in const declaration - 크롬 브라우저 에러
```

### ※.스코프(Scope)

**var**, **let**, **const**는 각각 스코프가 존재한다.

스코프란, 변수가 유효한 범위를 나타내는 개념이다.

전역 스코프와 지역 스코프에 해당하는 함수 스코프, 블록 스코프가 있다.

전역 스코프(Global Scope)는 프로그램 전체에서 접근이 가능한 스코프이다.

```javascript
let global = "접근 가능"; // 전역 변수 선언

{
	// 블록 스코프에서 접근
	console.log(global);
}

function accessible() {
	// 함수 스코프에서 접근
	console.log(global);
}

accessible();
// 접근 가능
// 접근 가능
```

함수 스코프(function Scope)는 함수 범위(function 키워드) 안에서 유효한 스코프이며, 같은 함수 블록 안에서는 접근이 가능하지만 외부에서는 접근이 불가능 하다.

```javascript
function funcScope() {
	let a = 1;
	console.log(a);
}

funcScope(); // 1
console.log(a); // ReferenceError: a is not defined
```

블록 스코프(block scope)는 블록 안에서 유효한 스코프이다.

if문이나 for문을 사용할 때에 해당한다.

```javascript
{
	let a = 1;
	console.log(a);
}
console.log(a); // ReferenceError: a is not defined
```

변수 선언들도 해당하는 스코프가 있는데, var는 함수 스코프, let과 const는 블록 스코프에 해당한다.

var는 함수 스코프이므로, 블록에서 선언하더라도 바깥에서 사용할 수 있으나, let과 const는 블록 스코프이므로 블록 바깥으로 나갈 수 없다. var는 함수 스코프이므로 함수 바깥으로 나갈 순 없다.

```javascript
// var
function funcScope() {
	var a = 1;
}

console.log(a); // ReferenceError: a is not defined

/* ================== */

{
	var b = 2;
}

console.log(b); // 2

/* ================== */

{
	let c = 3;
}

console.log(c); // ReferenceError: c is not defined

/* ================== */
{
	const d = 4;
}

console.log(d); // ReferenceError: d is not defined
```

<br>

---

## 4. 호이스팅(hoisting)

<br>

최근에는 **var** 선언을 하지않는다.

**var**는 let과 const와는 다르게 선언이 전역 스코프, 함수 스코프 내에서 최상단으로 끌어올려지는 것을 의미한다.

이전에 다뤘던 실행 컨텍스트에서 var의 경우 컨텍스트의 구성 단계에서 undefined로 값을 초기화 해놓는 것으로 인해 발생하는 현상이다.

<br>

```javascript
console.log(a); // undefined

var a = 1;

console.log(a); // 1
```

<br>

다만, var는 함수 범위 안에서 나갈 수 없으므로 아래의 경우에는 에러를 발생시킨다.

함수를 실행하여 컨텍스트를 생성하더라도 함수 안에서 막히므로 접근할 수 없다.

<br>

```javascript
console.log(b); // ReferenceError: b is not defined

function bFunc() {
	var b = 1;
}
```

<br>

#### ※TDZ(Temporal Dead Zone)

let과 const의 경우 호이스팅은 일어나지 않는다. 정확히 말하자면, let과 const도 var와 같이 선언이 최상단으로 끌어올려지지만, 값이 초기화되어 undefined가 들어가지 않는다.

변수는 선언, 초기화, 할당 3단계로 이루어진다.

var는 선언과 초기화가 동시(메모리 할당 O)에 이루어지지만, let은 선언과 초기화가 동시에 이루어지지않아(메모리 할당 X) 접근할 수 없다.이 때 접근하면 참조 에러가 발생한다.

선언과 초기화의 사이단계에 속하고 이를 **TDZ(Temporal Dead Zone)**이라고 부른다.

<br>

#### ※.함수의 호이스팅

함수도 호이스팅이 발생한다.

함수의 선언은 function 키워드로 선언, 함수 표현식(변수에 할당), 화살표 함수가 있다.

이중 function 키워드의 경우 호이스팅이 발생하고, 함수 표현식의 경우에는 변수에 값으로써 할당하는 것이므로 호이스팅이 발생하지 않는다. 추후에 함수에 대해 학습할때 자세히 알아보도록 하자.
