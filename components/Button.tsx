"use client";

import { ButtonProps } from "@/types";

export default function Button({ title, ...props }: ButtonProps) {
  return (
    <button {...props} className={`custom-btn ${props.className}`}>
      <span className={`flex 1`}>{title}</span>
    </button>
  );
}
