https://developer.mozilla.org/ko/docs/Web/HTML/Reference/Elements/meta

charset

### head 태그 

- HTML 전체 문서의 정보(meta) 내용이 포함됨 

```html
<meta charset="UTF-8" />
```


```html
<meta name="viewport" 
    content="width=device-width, initial-scale=1.0"
/>
```
- 모바일 장치에서 viewport 설정을 통해 웹 페이지가 화면 크기에 맞게 나타나도록 함 

- `content="width=device-width"` : viewport의 width를 실제 장치의 width와 똑같이 만들어 줌

- `content="initial-scale=1.0"` ; 웹 페이지의 초기 화면 크기가 100%인 상태로 표시되도록 함

- 웹 사이트를 서비스로 출시하기 위해선, 다양한 <meta> 태그를 적절히 활용할 필요가 있음 



- 오픈 그래프 프로토콜: 웹 사이트에서 제공되는 콘텐츠가 SNS에서 공유될 때 그 정보를 구조화해서 알려주기 위한 역할을 함

### 브라우저 동작 원리 

- DOM, CSSOM, Render Tree, Layout, Painting


### async, defer 

- 스크립트를 비동기적으로 로드하는 방식 2가지

- async: 스크립트를 비동기적으로 다운로드하고, 다운로드 완료 즉시 실행됨 

- defer: 스크립트를 비동기적으로 다운로드하지만, HTML 파싱이 완료된후 실행함 

- async 속성: DOM 요소가 있는 경우에는 DOM 트리를 차단할 수도 있음 -> DOM에 의존성이 없는 독립적인 스크립트에 주로 사용됨 

- defer 속성: DOM 조작이나 다른 스크립트에 의존성이 있는 경우 더 적합하게 사용될 수 있음 


```html
<meta 
    http-equiv="X-UA-Compatible" content="IE=edge"
/>
```

http-equiv: 프래그마 지시문을 정의

    - x-ua-compatible

        - 지정할 경우, content 특성의 값은 반드시 "IE=edge"여야 합니다. 사용자 에이전트는 이 프래그마를 무시해야 합니다.