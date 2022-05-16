import { forwardRef } from "react";
import Image from "next/image";

// hero icons
import { ThumbUpIcon } from "@heroicons/react/outline";

const BASE_PATH = "https://images.tmdb.org/t/p/original/";

const Thumbnail = forwardRef(({ data }, ref) => {
  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        src={
          `${BASE_PATH}${data.backdrop_path || data.poster_path}` ||
          `${BASE_PATH}${data.poster_path}`
        }
        alt={data?.title || data?.original_title || data?.original_name}
        width={1920}
        height={1080}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{data.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {data?.title || data?.original_title || data?.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {data.media_type && data.media_type + " • "}
          {data.release_date || data.first_air_date} •{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {data.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
