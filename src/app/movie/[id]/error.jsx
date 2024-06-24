"use client";
import React from "react";
import Link from "next/link";

function Movie404() {
  return (
    <div
    className="flex flex-col items-center justify-center h-full "
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Bilinmeyen bir hata oluştu, bunun için özür dileriz! </h1>
      <Link
        href="/"
        style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
      >
        Ana Sayfa
      </Link>
    </div>
  );
}

export default Movie404;