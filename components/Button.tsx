"use client";

import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  title: string;
};

export default function Button({ title, ...props }: ButtonProps) {
  return (
    <button {...props} className={`custom-btn ${props.className}`}>
      <span className={`flex 1`}>{title}</span>
    </button>
  );
}
