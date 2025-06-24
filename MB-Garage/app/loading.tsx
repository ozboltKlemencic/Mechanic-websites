import React from "react";

const loading = () => {
  return (
    <div className="bg-gradient flex h-screen w-full items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <div className="flex size-28 animate-spin items-center justify-center rounded-full border-8 border-transparent border-t-green-500 text-4xl"></div>
      </div>
    </div>
  );
};

export default loading;
