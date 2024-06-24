import HomeContainer from "../../containers/home/index";
import {
  getTopRatedMovies,
  getPopularMovies,
  getCategories,
  getSingleCategory,
} from "../../../services/movie";

export default async function Home({ params }) {
  let selectedCategory;

  const topRatedPromise = getTopRatedMovies();
  const popularPromise = getPopularMovies();
  const categoriePromise = getCategories();
  const [
    { results: TopRatedMovies },
    { results: PopularMovies },
    { genres: Categories },
  ] = await Promise.all([topRatedPromise, popularPromise, categoriePromise]);
  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }
  return (
    <HomeContainer
      categories={Categories}
      PopularMovies={PopularMovies}
      TopRatedMovies={TopRatedMovies}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 6) : [],
      }}
    />
  );
}
