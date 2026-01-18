import type { SVGProps } from "react";

const AtIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  const { className, ...rest } = props;

  return (
    <div className="rounded-full">
      <svg
        className={`rounded-full ${className}`}
        width="32px"
        height="32px"
        viewBox="0 0 24 24"
        data-name="Flat Color"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M12 22a10 10 0 1 1 .66-20A10.18 10.18 0 0 1 22 12.31v2.19a3.5 3.5 0 0 1-6.75 1.3 5 5 0 1 1 .07-7.53A1 1 0 0 1 16 8a1 1 0 0 1 1 1v5.5a1.5 1.5 0 0 0 3 0v-2.19A8.18 8.18 0 0 0 12.53 4 8 8 0 0 0 4 12a8 8 0 0 0 8 8 7.7 7.7 0 0 0 2.66-.46 1 1 0 0 1 .68 1.88A9.9 9.9 0 0 1 12 22m0-13a3 3 0 1 0 3 3 3 3 0 0 0-3-3"
          style={{ fill: "currentColor" }}
        />
      </svg>
    </div>
  );
};

export default AtIcon;
