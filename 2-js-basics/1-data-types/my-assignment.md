# Data Types Practice

## 문제 요약

쇼핑 카트를 만드는데 필요한 데이터 타입 정리

## 풀이

문제를 풀기 위해 먼저 배운 데이터 타입을 정리

### 데이터 타입

#### 1. Boolean

- `true`, `false` 값을 나타내는 타입

#### 2. Null

- `null` 값을 나타내는 타입
- 없음을 의미

#### 3. Undefined

- `undefined` 값을 나타내는 타입
- 정의되지 않음을 의미

#### 4. Number

- [64bit의 숫자값](https://en.wikipedia.org/wiki/Double-precision_floating-point_format)을 나타냄
- 정수만을 위한 특별한 자료는 없음
- `+/-Infinity`, `NaN` (not a number) 도 있음

#### 5. String

- 문자열을 나타내는 타입
- `''` `""` 로 표현 가능
- immutable 함
- 템플릿 문자열 (`, back-quote) 다음과 같이 변수를 문자열에 표현 가능

```js
let a = 10;
let b = 'hello';
let c = `${a} ${b}`;
```

#### 6. Symbol

- 어떠한 데이터에 고유한 아이디를 부여하기 위한 자료형
- new 를 사용하지 않음
- ECMAScript 2015 (6) 에 추가됨
- 익명성을 가지고 있어 Object에 키로 할당 되었을 때 오브젝트 이터레이터에 잡히지 않음
- 외부에서 접근하는 것을 방지하고자 할 때 사용

### 그래서 필요한 데이터 타입은?

쇼핑 카트는 다음과 같은 개념이 필요

- 물건
  - 물건 이름: String
  - 물건 가격: Number
  - 물건 개수: Number
- 총 가격: Number

따라서 String과 Number가 필요하다

## References

- [microsoft/Web-Dev-For-Beginners: 2-1 data types](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/1-data-types/translations/README.ko.md)
- [MDN: 자바스크립트의 자료형](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)
- [MDN: Symbol](https://developer.mozilla.org/ko/docs/Glossary/Symbol)
