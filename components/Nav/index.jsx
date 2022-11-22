import { useRouter } from "next/router";

import requests from "../../utils/requests";

function setActiveClassName(key, { query }) {
  const { genre } = query;

  if (!genre) return "";

  return genre === key ? "text-red-500" : "";
}

function Nav() {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className={`last:pr-24 cursor-pointer transition duration transform hover:scale-125 hover:text-white active:text-red-500 ${setActiveClassName(
              key,
              router
            )}`}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
