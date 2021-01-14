# 추가적인 공부

## flexbox

> [FLEXBOX FROGGY site](https://flexboxfroggy.com/#ko)

### justify-content

- 좌우

```css
#pond {
  display: flex;
  justify-content: `one of [flex-start, flex-end, center, space-between, space-around]`;
}
```

- flex-start: 요소들을 컨테이너의 왼쪽으로 정렬합니다.
- flex-end: 요소들을 컨테이너의 오른쪽으로 정렬합니다.
- center: 요소들을 컨테이너의 가운데로 정렬합니다.
- space-between: 요소들 사이에 동일한 간격을 둡니다.
- space-around: 요소들 주위에 동일한 간격을 둡니다.

### align-items

- 아래위

```css
#pond {
  display: flex;
  align-items: `one of [flex-start, flex-end, center, baseline, stretch]`;
}
```

- flex-start: 요소들을 컨테이너의 꼭대기로 정렬합니다.
- flex-end: 요소들을 컨테이너의 바닥으로 정렬합니다.
- center: 요소들을 컨테이너의 세로선 상의 가운데로 정렬합니다.
- baseline: 요소들을 컨테이너의 시작 위치에 정렬합니다.
- stretch: 요소들을 컨테이너에 맞도록 늘립니다.

### flex-direction

- 요소들의 정렬 방식

```css
#pond {
  display: flex;
  flex-direction: `one of [row, row-reverse, column, column-reverse]`;
}
```

- row: 글자 순서대로
- row-reverse: 글자 순서의 역방향
- column: 위에서 아래
- column-reverse: 아래에서 위

### order

- 컨테이너의 순서 변경
- 기본값 0

### align-self

- align-items 사이에 개별 요소에 다르게 적용하고 싶은 align-items 속성

### flex-wrap

- 한 줄을 다 채웠을 때 어떻게하는가?
- nowrap: 한 줄에 정렬
- wrap: 넘어가는 건 다음 줄에
- wrap-reverse: 다음 줄에 넘어가긴한데 역순

### flex-flow

- `flex-flow: [flex-direction] [flex-wrap]`

### align-content

- 여러 줄 사이 간격 정책

```css
#pond {
  display: flex;
  flex-wrap: wrap;
  align-content: `one of [flex-start, flex-end, center, space-between, space-around, stretch]`;
}
```

## grid

> [grid garden](https://codepip.com/games/grid-garden/)

### 그리드 생성 및 위치 지정

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
  /* 5 * 5 */
}

#water {
  grid-column-start: 3; /* 시작 지점 */
  grid-column-end: 5; /* 종료 지점 (여기선 3, 4 칸이 water영역으로 표시됨) */
}

#water-reverse {
  grid-column-start: 5;
  grid-column-end: 3;
  /* #water 과 같은 영역임, 음수도 가능 */
}

#water-span {
  grid-column-start: 3;
  grid-column-end: span 2; /* span은 넓이 지정 */
}

#water-one-column {
  grid-column: [grid-column-start] / [grid-column-end];
}

/******************************/
/* column이 있다면 row 도 있겠쥬? */
/******************************/

#water-area {
  grid-area: [grid-row-start] / [grid-column-start] / [grid-row-end] / [grid-column-end];
}

#grid-order {
  /* 따로 grid-* 속성을 지정하지 않는다면 순서대로 표시함 
    이때 order를 사용함, z-index 같이 양수 음수 가능
  */
  order: [:number = 0]
}

#grid-repeat {
  display: grid;
  grid-template-columns: repeat(3, 20%);
  /* == grid-template-columns: 20% 20% 20%; */
}

#grid-fractional {
  /*
  grid의 새로운 단위 fractional `fr`
  1fr 3fr 로 지정하면 한 공간은 1/4, 다른 공간은 3/4 크기로 지정됨
  */
  grid-template-columns: 1fr 3fr;
  /*
  다른 공간을 미리 사이즈 할당하면 fr은 나머지 영역으로 쪼개서 사용함
  */
  grid-template-columns: 50px 1fr 50px;
}

#grid-template {
  display: grid;
  grid-template: [grid-template-rows] / [grid-template-colums];
}
```
