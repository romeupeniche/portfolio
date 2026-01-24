import type { IProject } from "../../../data/projectsData";
import Web from "../projectDrawers/Web";
import Mobile from "../projectDrawers/Mobile";
import FileExplorerAnimatedIcon from "../../ui/FileExplorerAnimatedIcon";
import ProjectStage from "./ProjectStage";
import { useCallback, useState } from "react";

export const ExplorerIconWithDrawer = ({
  project,
  open,
  setOpen,
  period,
}: {
  project: IProject;
  open: boolean;
  setOpen: (value: boolean) => void;
  period: string;
}) => {
  const { platform } = project;
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const nextImage = useCallback(
    () => setCurrentImageIndex((prev) => (prev + 1) % project.images.length),
    [project.images.length],
  );

  const prevImage = useCallback(
    () =>
      setCurrentImageIndex(
        (prev) => (prev - 1 + project.images.length) % project.images.length,
      ),
    [project.images.length],
  );
  return (
    <div className="grid place-content-center">
      <FileExplorerAnimatedIcon onClick={() => setOpen(true)} />
      <ProjectStage
        open={open}
        setOpen={setOpen}
        project={project}
        period={period}
        nextImage={nextImage}
        prevImage={prevImage}
      >
        {platform === "web" ? (
          <Web
            project={project}
            setCurrentImageIndex={setCurrentImageIndex}
            currentImageIndex={currentImageIndex}
            nextImage={nextImage}
            prevImage={prevImage}
          />
        ) : (
          <Mobile
            project={project}
            setCurrentImageIndex={setCurrentImageIndex}
            currentImageIndex={currentImageIndex}
            nextImage={nextImage}
            prevImage={prevImage}
          />
        )}
      </ProjectStage>
    </div>
  );
};
