import React from "react";

const CardImageStacked = () => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden mx-auto  border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900">
      <img
        className="w-full"
        src="https://picsum.photos/id/238/200/100"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-zinc-500 dark:text-zinc-400 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
};
const CardNoImg = () => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden mx-auto  border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 py-8">
      <div className="px-6 mb-6">
        <h1 className="font-bold text-xl mb-2">The Coldest Sunset</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 ">
        <button className="rounded-lg dark:bg-white dark:text-black  bg-gray-800 px-4 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 duration-200">
          Button text
        </button>
      </div>
    </div>
  );
};

export { CardImageStacked, CardNoImg };
