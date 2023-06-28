async function fetchAmArticles() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY1}`
  );
  const data = await res.json();
  const articles = data.articles;

  if (!res.ok) {
    throw new Error(
      `Failed to fetch posts - Error ${res.status}: ${data.message}`
    );
  }

  return articles;
}

export default fetchAmArticles;
