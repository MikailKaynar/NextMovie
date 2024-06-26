import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import styles from "./styles.module.css"

function FeaturedMovie({ movie = {}, isCompact = true }) {
  const { poster_path, title, overview } = movie;

  return (
    <div className="flex flex-col gap-6 mt-14 mb-14">
      <h1 className="text-7xl">{title}</h1>
      <p className={`text-2xl max-w-50ch ${isCompact ? "line-clamp-2" : ""}`}>
        {overview}
      </p>
      <div className="flex gap-3">
        <Link
          className="flex items-center justify-center bg-[#eee] text-[#222] w-300 rounded-full text-xl font-bold"
          href={`/movie/${movie.id}`}
        >
          Play
        </Link>
        <button className="flex items-center justify-center border-2 border-solid border-[#eee] rounded-full w-16 h-16 text-[#eee]">
          <FaPlus />
        </button>
      </div>
      <div>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          className="h-auto -z-20 max-h-screen object-cover"
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
        />
      </div>
    </div>
  );
}

export { FeatureMovieLoading } from "./loading";
export { FeaturedMovie };
