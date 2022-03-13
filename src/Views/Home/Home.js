// import ListPosts from './ListPosts';
// import React, { useState, useEffect } from 'react';
import React, { Suspense } from 'react';
const ListPosts = React.lazy(()=>import('./ListPosts'))
// 

function Home() {
  // const [news, setNews] = useState();

  
  return (
    <>
    <Suspense fallback={<p>Carregando</p>}>
      <ListPosts/>
    </Suspense>
    </>
  );
}

export default Home;
