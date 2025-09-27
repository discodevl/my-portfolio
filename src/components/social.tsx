import React from "react";

import { SOCIAL_LINKS } from "@/resources/data-social";
import { Panel } from "./panel";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { SocialLink } from "@/resources/types";


export function SocialLinks() {
  return (
    <Panel>
      <h2 className="sr-only">Social Links</h2>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SOCIAL_LINKS.map((link, index) => {
            return <SocialLinkItem key={index} {...link} />;
          })}
        </div>
      </div>
    </Panel>
  );
}


export function SocialLinkItem({ icon, title, description, href }: SocialLink) {
  return (
    <a
      className={cn(
        "group/link flex cursor-pointer items-center gap-4 rounded-2xl p-4 pr-2 transition-colors select-none",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
      href={href}
      target="_blank"
      rel="noopener"
    >
      {/* <div className="relative size-12 shrink-0">
        <Image
          className="rounded-xl"
          src={icon}
          alt={title}
          width={48}
          height={48}
          quality={100}
          unoptimized
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/8 ring-inset dark:ring-white/8" />
      </div> */}

      <Image
        className="shrink-0"
        src={icon}
        alt={title}
        width={48}
        height={48}
        quality={100}
        unoptimized
      />

      <div className="flex-1">
        <h3 className="flex items-center font-medium underline-offset-4 group-hover/link:underline">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      <ArrowUpRightIcon className="size-4 text-muted-foreground" />
    </a>
  );
}

