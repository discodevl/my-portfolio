import React from "react";
import { FlipSentences } from "./flip-sentences";
import { cn } from "@/lib/utils";

type Props = {
    displayName: string
    sentencesArr: string[];
};

function ProfileInfo({displayName, sentencesArr}: Props) {
  return (
    <div className="flex flex-1 flex-col">
      <div
        className={cn(
          "flex grow items-end pb-1 pl-4",
          "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
        )}
      >
        <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
          {"text-3xl "}
          <span className="inline dark:hidden">text-zinc-950</span>
          <span className="hidden dark:inline">text-zinc-50</span>
          {" font-medium"}
        </div>
      </div>

      <div className="border-t border-edge">
        <h1 className="flex items-center pl-4 text-3xl font-semibold">
          {displayName}
        </h1>

        <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
          <FlipSentences sentences={sentencesArr}/>
        </div>
      </div>
      {/* <SimpleTooltip content="I'm from Việt Nam">
          <svg
            className="absolute top-0 -left-px h-8 sm:h-9"
            viewBox="0 0 30 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="30" height="20" fill="#F00" />
            <polygon
              points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85"
              fill="#FFEB00"
            />
          </svg>
        </SimpleTooltip> */}
    </div>
  );
}

export default ProfileInfo;
