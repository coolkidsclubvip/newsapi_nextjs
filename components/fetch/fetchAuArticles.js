async function fetchAuArticles() {
 const res = await fetch(
   `https://newsapi.org/v2/everything?sources=abc-news-au&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY1}`
 );
 const data = await res.json();
 const articles = data.articles;

  if (!res.ok) {
    throw new Error(
      `Failed to fetch posts - Error ${res.status}: ${data.message}`
    );
  }
console.log("auARTICLES ARE:", articles);

 const articles2 = articles.filter(
   (article) =>
     article.author !== null &&
     article.description !==
       "The latest five minute news bulletin from BBC World Service."
 );


  return articles2;
}

export default fetchAuArticles;
