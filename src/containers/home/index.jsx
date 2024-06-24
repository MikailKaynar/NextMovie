import React from "react";
import { FeaturedMovie } from "../../components/Featured-movie/index";
import { Categories } from "../../components/Categories/index";
import { MoviesSection } from "../../components/Movies-section/index";
function HomeContainer({
  PopularMovies = [],
  TopRatedMovies = [],
  categories = [],
  selectedCategory,
}) {
  return (
    <div>
      <FeaturedMovie movie={TopRatedMovies?.[0]} />
      <Categories categories={categories.slice(0, 5)} />
      <Categories categories={categories.slice(5, 10)} />
      <Categories categories={categories.slice(10, 15)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((genre) => `${genre.id}` === selectedCategory.id)
              ?.name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection title="Popular" movies={PopularMovies.slice(1, 7)} />
      <MoviesSection
        title="Top Rated Movies"
        movies={TopRatedMovies.slice(1, 7)}
      />
    </div>
  );
}

export default HomeContainer;
