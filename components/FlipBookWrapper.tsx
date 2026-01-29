"use client";

import dynamic from "next/dynamic";

const FlipBook = dynamic(() => import("react-pageflip"), {
  ssr: false
}) as any;

export default FlipBook;
