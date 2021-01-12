# 1: HTML 소개 노트

## head

- metadata 들의 집합소
- 다음은 internet explorer에서 항상 최신 표준 모드로 렌더링 되게 하는 메타태그 ([ref](https://webdir.tistory.com/38))

```html
<meta http-equiv="X-UA-Compatible" content="ie=edge">
```

- [viewport](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
  - 웹 콘텐츠를 볼 수 있는 창 영역
  - 가상의 뷰포트에 먼저 렌더링된 다음 모바일의 뷰포트에 맞게 축소되어 보여줄 수 있음
  - 하지만 이는 [미디어 쿼리](https://developer.mozilla.org/ko/docs/Web/CSS/Media_Queries)를 사용하는 최적화된 페이지에 적합하지 않음

## body

- div는 block, span은 inline

## semantic mark-up

