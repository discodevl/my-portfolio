"use client";
import { PhoneIcon } from "lucide-react";
import { IntroItem } from "./intro-item";

export function PhoneItem({ phoneNumber }: { phoneNumber: string }) {

  return (
    <IntroItem
      icon={PhoneIcon}
      content={
        phoneNumber
      }
      href={`tel:${phoneNumber}`}
    />
  );
}
