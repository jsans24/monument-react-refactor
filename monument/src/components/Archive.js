import React from 'react';
import Article, { articleList } from './Article';



const Archive = (props) => {

  const getArticles = articleList.map((articleObj, index) => {
    return <Article article={articleObj} key={index} />;
  });

  return (
    <section>
      <h2>From the Archive</h2>

      <div className="grid-wrapper articles">
        {getArticles}
      </div>
    </section>
  );
};

export default Archive;