import React from 'react' ;
import style from './FrontEnd.module.css' ;

export default function FrontArticle({title, href, content}) {
  return (
    <div>
      <article className={style.divArticle} id="divHTML">
                <h2>
                    {title}
                </h2>
                <div>
                    <div className={style.divimg}>
                        <img src={href} alt={title} />
                    </div>
                    <p>
                        {content}
                    </p>
                </div>
            </article>
    </div>
  )
}
