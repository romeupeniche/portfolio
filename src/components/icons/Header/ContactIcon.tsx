import * as React from "react";
const ContactIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const { className, ...rest } = props;

  return (
    <svg
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      className={className}
      width="32px"
      height="32px"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      fill="none"
    >
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12a9.97 9.97 0 0 0 2.738 6.875l-2.011 2.296a.5.5 0 0 0 .376.829z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ContactIcon;
