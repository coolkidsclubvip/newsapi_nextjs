async function fetchAuArticles() {
  const res = await fetch(
    `https://newsapi.org/v2/everything?sources=abc-news-au&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
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

export default fetchAuArticles;
