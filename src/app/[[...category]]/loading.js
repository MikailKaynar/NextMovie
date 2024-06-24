import { CategoriesLoading } from "../../components/Categories/loading";
import { FeatureMovieLoading } from "../../components/Featured-movie/loading";
import { MoviesSectionLoading } from "../../components/Movies-section/loading";
import React from "react";

const loading = () => {
  return (
    <div>
      <FeatureMovieLoading/>
      <CategoriesLoading />
      <MoviesSectionLoading/>
      <MoviesSectionLoading/>
      <MoviesSectionLoading/>
    </div>
  );
};

export default loading;
