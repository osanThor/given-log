"use client";

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};
export default function MainError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-full gap-5">
      <h2 className="text-lg">Error가 발생했습니다.</h2>
      <button
        className="px-2 py-1 text-red-400 border border-red-400 rounded"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
