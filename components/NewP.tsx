"use client";

import FlipBook from "@/components/FlipBookWrapper";

export default function NewP() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <FlipBook width={400} height={600}>
        <div>
          <iframe src="/bdmi.pdf#page=1" width="100%" height="100%" />
        </div>

      </FlipBook>
    </div>
  );
}
