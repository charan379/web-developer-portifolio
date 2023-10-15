export default function Loading() {
  return (
    <div className="w-11/12 pt-6 flex gap-y-2 flex-col items-center justify-center max-h-[520px] max-w-[460px] m-5 bg-slate-50 rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] overflow-scroll sm:overflow-hidden">
      {/* <!-- Profile Photo --> */}
      <div className="animate-pulse">
        <div
          className="rounded-full bg-gray-300 rader-anime"
          style={{ width: "180px", height: "180px" }}
        ></div>
      </div>

      {/* <!-- Profile Information --> */}
      <div className="animate-pulse duration-200">
        <h1 className="font-roboto400 py-1 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 text-2xl font-semibold md:text-3xl text-center">
          <p className="text-center text-transparent bg-clip-text bg-gradient-to-l from-gray-200 via-gray-300 to-gray-400">
            Loading...
          </p>
        </h1>
        <p className=" text-base leading-normal text-gray-400 font-roboto400 text-center">
          Loading...
        </p>
      </div>

      {/* <!-- Buttons --> */}
      <div className="w-full animate-pulse duration-200">
        <div className="relative mt-2 px-2 w-full flex flex-row flex-wrap md:gap-1 font-roboto400 justify-around">
          <div className="min-h-[35px] min-w-[120px] sm:min-w-[180px] max-w-[20%] bg-gradient-to-r from-gray-400 to-gray-300 p-2 my-1 rounded-md"></div>
          <div className="min-h-[35px] min-w-[120px] sm:min-w-[180px] max-w-[20%] bg-gradient-to-r from-gray-400 to-gray-300 p-2 my-1 rounded-md"></div>
        </div>
      </div>

      {/* <!-- Contact Button --> */}
      <div className="w-full animate-pulse duration-200">
        <div className="relative w-full min-h-[50px] px-2 text-center">
          <button
            type="button"
            className="min-h-[35px]  min-w-[50%] w-full font-semibold bg-gradient-to-r from-gray-400 to-gray-300 p-2 my-1 rounded-md"
          ></button>
        </div>
      </div>

      {/* <!-- Social Links --> */}
      <div className="w-full animate-pulse">
        <div className="flex items-center justify-center gap-2 md:gap-7 relative p-2 w-full bg-slate-200 rounded-b-xl flex-row flex-wrap border-t-2">
          <div className="h-14 w-14 animate-spin bg-gradient-to-r from-gray-400 to-gray-300 p-2 my-1 rounded-full"></div>
          <div className="h-14 w-14 animate-spin bg-gradient-to-r from-gray-400 to-gray-300 p-2 my-1 rounded-full"></div>
          <div className="h-14 w-14 animate-spin bg-gradient-to-r from-gray-400 to-gray-300 p-2 my-1 rounded-full"></div>
          <div className="h-14 w-14 animate-spin bg-gradient-to-r from-gray-400 to-gray-300 p-2 my-1 rounded-full"></div>
          <div className="h-14 w-14 animate-spin bg-gradient-to-r from-gray-400 to-gray-300 p-2 my-1 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
