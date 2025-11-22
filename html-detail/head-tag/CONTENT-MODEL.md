## CONTENT MODEL 

- HTML 5에서 도입된 개념 

- Flow Content, Metadata Content, Sectioning Content, Heading content, Phrasing Content, Embedded Content, Interactive Content 등 

    - 일부 요소들이 예외적인 특성을 갖게 됨 

1. Flow Content

    - 대부분의 HTML 요소에서 사용할 수 있는 콘텐츠 모델

    - 인라인 요소, 블록 요소, 몇몇 특수 요소를 포함 

2. Metadata Content 

    - 문서의 meta 정보를 나타내는 요소 

    - <head> 요소 안에서 사용됨 

3. Sectioning Content 

    - 문서의 섹션을 나누는 요소 

    - outline을 만들기 위한 <article>, <aside>, <nav>, <section> 태그들이 포함됨 

4. Heading Content 

    - 섹션의 제목을 나타내는 요소

    - <h1> ~ <hgroup> 등이 포함됨 

5. Phrasing Content

    - 대부분의 콘텐츠를 포함하는 인라인 요소 모델 

    - 텍스트, 이미지, 하이퍼링크 등이 포함됨 

6. Embedded Content 

    - 외부 콘텐츠를 나타내는 요소 

    - 이미지, 비디오, 오디오, canvas 등이 포함됨 

7. Interactive Content 

    - 사용자와 상호작용하는 콘텐츠를 나타내는 요소 

    - 폼 요소, iframe 요소가 포함됨 

- <p> 태그: 블록 요소이지만, 문단이라는 의미 때문에 다른 블록 요소를 포함할 수 없음 & 인라인 요소만 허용


- W3C validator 사용해서 디버깅해 볼 것 

`HTML은 단순한 마크업 언어를 넘어서 문서의 구조와 의미를 전달하는 중요한 역할을 함`

- 각 요소의 의미와 용도에 맞게 사용하는 것이 중요 