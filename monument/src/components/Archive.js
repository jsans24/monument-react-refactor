import React from 'react';
import Article, { Articles } from './Article';



const Archive = (props) => {

  const ArticleComponents = Article.map((articleObj, index) => {
    articleObj.key = index;
    return Articles(articleObj);
  });

  return (
    <section>
      <h2>From the Archive</h2>

      <div className="grid-wrapper articles">
        {ArticleComponents}
      </div>
    </section>
  );
};

export default Archive;