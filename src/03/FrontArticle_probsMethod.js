import React from 'react'

export default function FrontArticle(probs) {
  return (
    <div>
      <article id="divHTML">
                <h2>
                    {probs.title}
                </h2>
                <div>
                    <div id="divimg">
                        <img src={probs.href} alt={probs.title}/>
                    </div>
                    <p>
                        {probs.content}
                    </p>
                </div>
            </article>
    </div>
  )
}
