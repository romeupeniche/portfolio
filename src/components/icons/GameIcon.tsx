import type { SVGProps } from "react";

const GameIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  const { className, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      {...props}
      className={className}
      width="32px"
      height="32px"
      preserveAspectRatio="xMinYMin meet"
      fill="currentColor"
      {...rest}
    >
      <path
        d="M30.838 18.634h.002l-2.107-9.173C28.081 7.458 26.221 6 24 6c-1.63 0-3.065.792-3.977 2h-8.045C11.065 6.792 9.63 6 8 6 5.779 6 3.919 7.458 3.267 9.461L1.16 18.633h.002C1.06 19.073 1 19.529 1 20a5.996 5.996 0 0 0 11.651 2h6.698A5.997 5.997 0 0 0 31 20c0-.471-.06-.927-.162-1.366M10 16H9v1a1 1 0 1 1-2 0v-1H6a1 1 0 1 1 0-2h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2m13 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
        style={{
          fill: "currentColor",
        }}
      />
    </svg>
  );
};
export default GameIcon;
