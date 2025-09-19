import React from "react";

type Props = {
    imgUrl: string
};

function Avatar({imgUrl}: Props) {
  return (
    <div className="shrink-0 border-t border-r border-edge">
      <div className="mx-[2px] my-[3px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
          alt={`s avatar`}
          src={
            imgUrl
          }
          fetchPriority="high"
        />
      </div>
    </div>
  );
}

export default Avatar;
