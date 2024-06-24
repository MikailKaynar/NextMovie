import React from "react";
import MovieContainer from "../../../containers/movie/index";
import { notFound } from "next/navigation";
import { getMovieDetail } from "../../../../services/movie";
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


async function MoviePage({params , searchParams }) {
  const movieDetail = await getMovieDetail(params.id);
  console.log(movieDetail);
  if (!movieDetail) {
    notFound();
  }
  if (searchParams.error === "true") {
    throw new Error("Bir hata oluştu");
  }
  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
