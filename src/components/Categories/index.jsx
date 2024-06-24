import React from "react";
import Link from "next/link";


function Categories({ categories }) {
  return (
    <div className="flex h-14 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          className="flex items-center justify-center border border-solid border-[#333] w-full h-full rounded-md font-bold bg-zinc-950/75"
          href={`/${category.id}`}
        >
          <div>{category.name}</div>
        </Link>
      ))}
    </div>
  );
}

export { Categories };