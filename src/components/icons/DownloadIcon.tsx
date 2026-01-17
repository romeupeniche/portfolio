import type { SVGProps } from "react";

const DownloadIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  const { className, ...rest } = props;

  return (
    <svg
      className={className}
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      {...rest}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M25 28H7m9-5V4M9 16l7 7 7-7"
      />
    </svg>
  );
};

export default DownloadIcon;
