import GallerySection from "./gallerySection";
import { ProjectBigviewData } from "./projectBigview";
import ProjectContainer, { ProjectContainerProps } from "./projectContainer";

interface ProjectSectionProps {
  projects: Omit<ProjectContainerProps, "onOpen">[];
  onOpen: (data: ProjectBigviewData) => void;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects, onOpen }) => {
  return (
    <GallerySection title="Projects">
      <div className="grid w-full gap-5" style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(286px, 1fr))"
      }}>
        {projects.map((project, index) => (
          <ProjectContainer
            key={index}
            onOpen={onOpen}
            {...project}
          />
        ))}
      </div>
    </GallerySection>
  );
};

export default ProjectSection;
