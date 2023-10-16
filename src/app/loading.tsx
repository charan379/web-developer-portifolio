export default function Loading() {
  return (
    <main className="min-h-[100dvh] w-full m-0 flex flex-row justify-center items-center overflow-auto">
      <div className="w-[95%] pt-6 flex gap-y-2 flex-col items-center justify-center max-h-[720px] max-w-[480px] m-5 bg-slate-50 rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] overflow-scroll sm:overflow-hidden">
        {/* <!-- Profile Photo --> */}
        <div className="animate-pulse">
          <div
            className="rounded-full bg-gradient-to-r from-gray-400 to-gray-300 rader-anime"
            style={{ width: "180px", height: "180px" }}
          ></div>
        </div>

        {/* <!-- Profile Information --> */}
        <div className="w-full pt-2 gap-3 flex flex-col items-center justify-center">
          <div className="animate-pulse min-h-[25px] min-w-[60px] sm:min-w-[80px] max-w-[10%] bg-gradient-to-r from-gray-400 to-gray-300 p-2 my-1 rounded-md"></div>
          <div className="animate-pulse min-h-[25px] min-w-[120px] sm:min-w-[180px] max-w-[20%] bg-gradient-to-r from-gray-400 to-gray-300 p-2 my-1 rounded-md"></div>
          <div className="animate-pulse h-[5px] w-[90%] bg-gradient-to-r from-gray-400 to-gray-300 p-2 my-1 rounded-md"></div>
          <div className="animate-pulse h-[5px] w-[80%] bg-gradient-to-r from-gray-400 to-gray-300 p-2 my-1 rounded-md"></div>
        </div>

        {/* <!-- Buttons --> */}
        <div className="w-full animate-pulse duration-200">
          <div className="relative px-2 w-full flex flex-row flex-wrap md:gap-1 font-roboto400 justify-around">
            <div className="min-h-[35px] min-w-[120px] sm:min-w-[180px] max-w-[20%] bg-gradient-to-r from-gray-400 to-gray-300 p-2 my-1 rounded-md"></div>
            <div className="min-h-[35px] min-w-[120px] sm:min-w-[180px] max-w-[20%] bg-gradient-to-r from-gray-400 to-gray-300 p-2 my-1 rounded-md"></div>
          </div>
        </div>

        {/* <!-- Contact Button --> */}
        <div className="w-full animate-pulse duration-200">
          <div className="relative w-full min-h-[50px] px-2 text-center">
            <button
              type="button"
              className="min-h-[35px]  min-w-[50%] w-full font-semibold bg-gradient-to-br from-gray-400 to-gray-300 p-2 my-1 rounded-md"
            ></button>
          </div>
        </div>

        {/* <!-- Social Links --> */}
        <div className="w-full animate-pulse">
          <div className="flex items-center justify-center gap-2 sm:gap-7 relative pb-1 w-full bg-slate-200 rounded-b-xl flex-row flex-wrap border-t-2">
            <div className="h-14 w-14 bg-gradient-to-r from-gray-400 to-gray-300 my-1 rounded-full"></div>
            <div className="h-14 w-14 bg-gradient-to-r from-gray-400 to-gray-300 my-1 rounded-full"></div>
            <div className="h-14 w-14 bg-gradient-to-r from-gray-400 to-gray-300 my-1 rounded-full"></div>
            <div className="h-14 w-14 bg-gradient-to-r from-gray-400 to-gray-300 my-1 rounded-full"></div>
            <div className="h-14 w-14 bg-gradient-to-r from-gray-400 to-gray-300 my-1 rounded-full"></div>
          </div>
        </div>
      </div>
    </main>

  );
}
