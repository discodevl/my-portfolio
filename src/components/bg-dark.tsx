"use client";
import { useTheme } from "next-themes";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function BgDark({ children }: Props) {
  const { theme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <div className="min-h-screen w-full relative">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundColor: "#0a0a0a",
              backgroundImage: `
       radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
       radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
     `,
              backgroundSize: "10px 10px",
              imageRendering: "pixelated",
            }}
          />
          <div className="relative z-10">{children}</div>
        </div>
      ) : (
        <div className="min-h-screen w-full bg-white relative">
          {/* Diagonal Stripes Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
            }}
          />
          <div className="relative z-10">{children}</div>
        </div>
      )}
    </>
  );
}

export default BgDark;
