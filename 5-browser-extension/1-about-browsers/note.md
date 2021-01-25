# 5. Browser Extension - 1: 브라우저에 대한 모든 것

브라우저 익스텐션을 만들려면 브라우저에 대한 동작 방식을 알아야 하므로, 해당 장에선 브라우저에 대해 다뤄볼 예정

![URL을 주소 바에 입력하면 생기는 일 다이어그램 이미지](https://raw.githubusercontent.com/microsoft/Web-Dev-For-Beginners/main/5-browser-extension/1-about-browsers/images/sketchnote.jpg)

> from [this MS web tutorial](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/5-browser-extension/1-about-browsers/images/sketchnote.jpg)

## 브라우저

- 엔드 유저가 서버에 컨텐츠를 접근하여 웹 페이지로 볼 수 있도록 제공해주는 소프트웨어

### 브라우저 확장

- 반복 작업을 빠르게 할 때 브라우저로 연결하면 편리합니다.

### 확장 설치

브라우저 확장을 작성하고 배포하는 법 알아보기

1. npm build
2. 브라우저 ... 의 extensions 패널로 이동
3. load unpacked 를 선택해서 build 폴더 (/dist) 에서 새 확장을 올림
4. 이미 설치된 확장 프로그램을 다시 불러오는 경우는 reload

위를 해볼 프로젝트를 만들어 보자

### 준비사항

- co2 signal api key: fdfd795e74b23ab7
- code for you region: KR
- node 설치

### npm command history

```sh
npm init
npm install webpack --save-dev
npm install webpack-cli --save-dev
npm install axios --save
```

