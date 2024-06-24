import React from "react";
import Link from "next/link";

function Movie404() {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h1>Aradığın filmi malesef bulamadık :(</h1>
      <Link
        href="/"
        className="underline text-xl mt-2"
        style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
      >
        Ana Sayfa
      </Link>
    </div>
  );
}

export default Movie404;
