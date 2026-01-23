import PreviewIcon from "../../assets/icons/PreviewIcon";
import GameIcon from "../icons/GameIcon";

const LaptopPreviewButton = ({
  onClick,
  screenImage,
  disabled = false,
  icon = "preview",
}: {
  onClick?: () => void;
  screenImage: string;
  disabled?: boolean;
  icon?: "preview" | "game" | React.FC;
}) => {
  const icons = {
    preview: PreviewIcon,
    game: GameIcon,
  };
  const Icon = (typeof icon === "string" ? icons[icon] : icon) ?? PreviewIcon;
  return (
    <section
      className={`relative flex items-center justify-center w-10 h-10 overflow-visible transition-all 
        ${
          disabled
            ? "cursor-not-allowed opacity-60 grayscale"
            : "group cursor-pointer"
        }`}
      onClick={!disabled ? onClick : undefined}
    >
      <div className="scale-[0.18] shrink-0 origin-center transition-transform duration-500">
        <div className="relative w-64 perspective-[1500px]">
          <div
            className={`absolute inset-0 flex items-center justify-center z-30 transition-all duration-300
            ${
              !disabled
                ? "group-hover:opacity-0 group-hover:scale-50 group-hover:-translate-y-10"
                : ""
            }`}
          >
            <Icon
              className={`w-50 h-50 ${
                disabled
                  ? "text-zinc-500 fill-zinc-600"
                  : "text-light-blue/80 fill-light-blue"
              }`}
            />
          </div>

          <div
            className={`relative z-20 overflow-hidden rounded-t-3xl bg-zinc-950 p-3 
                        transition-all duration-400 ease-in-out origin-bottom
                        transform-[rotateX(-87deg)] opacity-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]
                        ${
                          !disabled
                            ? "group-hover:transform-[rotateX(0deg)] group-hover:opacity-100"
                            : ""
                        }`}
          >
            <div className="absolute inset-x-0 top-0 flex items-center justify-center">
              <div className="flex h-6 w-20 items-center justify-center rounded-b-md bg-zinc-950">
                <div className="size-1.5 rounded-full bg-zinc-800 ring-2 ring-zinc-700/75" />
              </div>
            </div>

            <div className="aspect-16/10 w-full overflow-hidden rounded-t-2xl bg-zinc-900">
              {!disabled && (
                <img
                  src={screenImage}
                  alt="Project Preview"
                  className="w-full h-full object-cover object-top"
                />
              )}
            </div>

            <div className="absolute inset-x-10 bottom-0 h-4 bg-light-blue/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          <div className="relative -mx-10 z-10">
            <div
              className={`relative h-6 w-full rounded-b-3xl bg-linear-to-r from-zinc-800 via-zinc-950 to-zinc-800 shadow-2xl 
              ${disabled ? "from-zinc-900 via-zinc-950 to-zinc-900" : ""}`}
            >
              <div className="absolute inset-0 flex items-start justify-center">
                <div className="h-2.5 w-24 rounded-b-xl border-x border-b border-zinc-600/20 bg-linear-to-r from-zinc-800 via-zinc-700 to-zinc-800 opacity-50" />
              </div>

              <div className="absolute -bottom-1.5 left-10 h-1.5 w-12 rounded-b-full bg-black/40" />
              <div className="absolute right-10 -bottom-1.5 h-1.5 w-12 rounded-b-full bg-black/40" />
            </div>
          </div>

          {!disabled && (
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-8 bg-light-blue/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          )}
        </div>
      </div>
    </section>
  );
};

export default LaptopPreviewButton;
