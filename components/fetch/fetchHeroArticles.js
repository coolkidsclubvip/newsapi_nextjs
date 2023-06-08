async function fetchHeroArticles() {
  // fetch hero section articles
  const res1 = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY1}`
  );

  const data1 = await res1.json();

  if (!res1.ok) {
    throw new Error(
      `Failed to fetch posts - Error ${res1.status}: ${data1.message}`
    );
  }
  const articles1 = data1.articles;

  return articles1;
}

export default fetchHeroArticles;
