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
    <div className="mx-auto container text-center">
      <h2>Something went wrong!</h2>
      <h3>{error?.message}</h3>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
