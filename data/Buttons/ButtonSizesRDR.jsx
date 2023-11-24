import React from 'react';

const ButtonSizes = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      {/* Small Button */}
      <button
        className="rounded-lg  bg-blue-500 px-3 py-1.5 text-center text-xs font-medium text-white shadow transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300"
      >
        Button text
      </button>

      {/* Regular Button */}
      <button
        className="rounded-lg  bg-blue-500 px-4 py-2 text-center text-sm font-medium text-white shadow-xl transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300"
      >
        Button text
      </button>

      {/* Medium Button */}
      <button
        className="rounded-lg  bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-md transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300"
      >
        Button text
      </button>

      {/* Large Button */}
      <button
        className="rounded-lg  bg-blue-500 px-6 py-3 text-center text-lg font-medium text-white shadow-lg transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300"
      >
        Button text
      </button>

      {/* Extra Large Button */}
      <button
        className="rounded-lg  bg-blue-500 px-8 py-4 text-center text-lg font-medium text-white shadow-lg  transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300"
      >
        Button text
      </button>
    </div>
  );
};

export default ButtonSizes;