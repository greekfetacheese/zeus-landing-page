import React from "react";
import clsx from "clsx";

const LinuxUrl = "";
const WindowsUrl = "";

export const LinuxButton = ({ dark }: { dark?: boolean }) => {
  return (
    <a href={LinuxUrl}>
      <button
        type="button"
        className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", {
          "text-white bg-foreground": dark,
          "text-foreground bg-white": !dark,
        })}
      >
        <div className="mr-3">
        
        </div>
        <div>
          <div className="text-s">Download for</div>
          <div className="-mt-1 font-sans text-xl font-semibold">Linux</div>
        </div>
      </button>
    </a>
  );
};

export const WindowsButton = ({ dark }: { dark?: boolean }) => {
  return (
    <a href={WindowsUrl}>
      <button
        type="button"
        className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", {
          "text-white bg-foreground": dark,
          "text-foreground bg-white": !dark,
        })}
      >
        <div className="mr-3">

        </div>
        <div>
          <div className="text-s">Download for</div>
          <div className="-mt-1 font-sans text-xl font-semibold">Windows</div>
        </div>
      </button>
    </a>
  );
};
