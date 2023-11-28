// import Like from "../04/Like";
import FrontArticle from "./FrontArticle";

function FrontEnd() {
    const data = [ // data는 array, array 안에는 key:value pair로 이루어진 objects가 들어있다.
        {
            title: 'HTML',
            href: './images/html.png',
            content: 'HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용'
        },
        {
            title: 'CSS',
            href: './images/css.png',
            content: 'Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어'
        },
        {
            title: 'JavaScript',
            href: './images/js.png',
            content: '자바스크립트 설명'
        },
        {
            title: 'React',
            href: './images/react.png',
            content: '사용자 인터페이스를 만들기 위한 JavaScript 라이브러리'
        },
        {
            title: 'NextJS',
            href: './images/react.png',
            content: '사용자 인터페이스를 만들기 위한 JavaScript 웹 프레임워크'
        }
    ];
    return (
        <>
            {
                data.map((item, idx) => // 중괄호 쓰려면 return 넣어줘야함, 하지만 FrontArticle 내부 item 변경해야 하므로 중괄호 생략, ``문자 이용 등...

                    <FrontArticle
                        key={`article${idx}`} // key를 만들어줘야함.
                        title={item.title}
                        href={item.href}
                        content={item.content}
                    />

                )
            }
        </>
    );
}

export default FrontEnd;