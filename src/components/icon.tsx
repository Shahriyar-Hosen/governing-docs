import { FC, SVGProps } from "react";

interface IconSvgProps extends SVGProps<SVGSVGElement>, IClassName {
  size?: number;
}

export const Arrow: FC<IconSvgProps> = (props) => (
  <svg
    width="11"
    height="18"
    viewBox="0 0 11 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.86316 17.0136L10.8189 8.9696L2.77488 1.01387L0.785942 3.02487L6.81896 8.99167L0.852154 15.0247L2.86316 17.0136Z"
      fill="currentColor"
    />
  </svg>
);
