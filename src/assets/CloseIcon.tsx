import * as React from "react";
import { SVGProps } from "react";

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
    <path
      d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      stroke="none"
    />
  </svg>
);
