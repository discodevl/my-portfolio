"use client";

import { MailIcon } from "lucide-react";

import { IntroItem } from "./intro-item";

export function EmailItem({ email }: { email: string }) {

  return (
    <IntroItem
      icon={MailIcon}
      content={email}
      href={`mailto:${email}`}
    />
  );
}
