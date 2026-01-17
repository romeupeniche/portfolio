import type { SVGProps } from "react";

const MaximizeIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  const { className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      width="40px"
      height="40px"
      fill="currentColor"
      {...rest}
    >
      <path
        style={{
          opacity: 1,
          fill: "currentColor",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
        }}
        d="M0 652.362v127.156h24.896v-84.445l108.547 109.092 17.604-17.692L42.5 677.382h84.023v-25.02zm273.477 0v25.02h84.025L248.955 786.473l17.604 17.692 108.546-109.092v84.445H400V652.362zM133.443 900.56 24.896 1009.65v-84.443H0v127.156h126.523v-25.02H42.5l108.547-109.091zm133.116 0-17.604 17.692 108.547 109.092h-84.025v25.02H400V925.205h-24.895v84.443z"
        transform="translate(0 -652.362)"
      >
        <title>{"Maximize Image"}</title>
      </path>
    </svg>
  );
};
export default MaximizeIcon;
