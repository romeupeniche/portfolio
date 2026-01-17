import type { SVGProps } from "react";

const PinIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  const { className, ...rest } = props;
  return (
    <svg
      className={className}
      width="32px"
      height="32px"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        clipRule="evenodd"
        d="M2 6v.293c0 1.429.486 2.815 1.379 3.93L8 16l4.621-5.776A6.3 6.3 0 0 0 14 6.293V6A6 6 0 0 0 2 6m6 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};
export default PinIcon;
