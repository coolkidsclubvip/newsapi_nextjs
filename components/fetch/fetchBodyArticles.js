async function fetchBodyArticles() {
  // fetch articles in body
  const res2 = await fetch(
    `https://newsapi.org/v2/everything?sources=bbc-news&pageSize=30&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY1}`

    // `https://newsapi.org/v2/top-headlines?sources=abc-news-au&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY1}` //abc news-au
  );

  const data2 = await res2.json();

  if (!res2.ok) {
    throw new Error(
      `Failed to fetch posts - Error ${res2.status}: ${data2.message}`
    );
  }
  const articles = data2.articles;
  const articles2 = articles.filter(
    (article) =>
      (article.author !== null &&
        article.description !==
          "The latest five minute news bulletin from BBC World Service.") 
  );


  // console.log("articles2 in the body are: ", articles2);

  return articles2;
}

export default fetchBodyArticles;
