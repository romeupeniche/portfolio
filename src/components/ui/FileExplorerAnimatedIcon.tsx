// Code by Cobp via UIVerse - https://uiverse.io/Cobp/mighty-pig-13
const FileExplorerAnimatedIcon: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <section
      className="relative group flex items-center justify-center w-10 h-10 overflow-visible cursor-pointer"
      onClick={onClick}
    >
      <div className="sm:scale-[0.18] scale-[0.14] shrink-0 origin-center">
        <div className="file relative w-60 h-40 origin-bottom perspective-[1500px] z-50">
          <div
            className="work-5 bg-dark-blue w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative 
            after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-dark-blue after:rounded-t-2xl 
            before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-dark-blue before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]"
          />

          <div className="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:transform-[rotateX(-20deg)]" />
          <div className="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:transform-[rotateX(-30deg)]" />
          <div className="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:transform-[rotateX(-38deg)]" />

          <div
            className="work-1 absolute bottom-0 bg-linear-to-t from-main-blue to-light-blue w-full h-[156px] rounded-2xl rounded-tr-none 
            after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-4 after:bg-light-blue after:rounded-t-2xl 
            before:absolute before:content-[''] before:-top-2.5 before:right-[142px] before:size-3 before:bg-light-blue before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] 
            transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#65bbf0,inset_0_-20px_40px_#488196]
            group-hover:transform-[rotateX(-46deg)_translateY(1px)]"
          />
        </div>
      </div>
    </section>
  );
};

export default FileExplorerAnimatedIcon;
