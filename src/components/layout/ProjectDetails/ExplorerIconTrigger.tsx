import type { IProject } from "../../../data/projectsData";
import Web from "../projectDrawers/Web";
import Mobile from "../projectDrawers/Mobile";
import FileExplorerAnimatedIcon from "../../ui/FileExplorerAnimatedIcon";
import ProjectStage from "./ProjectStage";

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
  return (
    <div className="grid place-content-center">
      <FileExplorerAnimatedIcon onClick={() => setOpen(true)} />
      <ProjectStage
        open={open}
        setOpen={setOpen}
        project={project}
        period={period}
      >
        {platform === "web" ? (
          <Web project={project} />
        ) : (
          <Mobile project={project} />
        )}
      </ProjectStage>
    </div>
  );
};
