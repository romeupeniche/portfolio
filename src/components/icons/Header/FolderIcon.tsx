import * as React from "react";
const FolderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const { className, ...rest } = props;

  return (
    <svg
      className={className}
      width="32px"
      height="32px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      fill="none"
    >
      <path
        d="M4 21h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-9L9.297 3.445A1 1 0 0 0 8.465 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default FolderIcon;
