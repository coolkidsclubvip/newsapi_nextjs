import fetchHeroArticles from "./fetchHeroArticles";
import fetchBodyArticles from "./fetchBodyArticles";

async function getCombinedArticles() {
 const articles1 = await fetchHeroArticles();
 const articles2 = await fetchBodyArticles();
 const combinedArticles = [...articles1, ...articles2];
  if (combinedArticles.length===0) {
    throw new Error(
      "Failed to fetch combined news"
    );
  }


  return combinedArticles;
  
}

export default getCombinedArticles


