"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div className="min-h-[100dvh] w-full m-0 flex flex-row justify-center items-center overflow-auto">
      <div className="p-2 text-center">
        <h2>Something went wrong!</h2>
        <h3>{error?.message}</h3>
        <button onClick={() => reset()}>Try again</button>
      </div>
    </div>
  );
}
