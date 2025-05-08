import { useState } from "react";
import GallerySection from "./gallerySection";
import ProjectModal, { ProjectModalData } from "./projectModal";
import ProjectContainer, { ProjectContainerProps } from "./projectContainer";

interface ProjectSectionProps {
  projects: ProjectContainerProps[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  const [modalData, setModalData] = useState<ProjectModalData | undefined>(undefined);

  const modalOpen = (data: ProjectModalData) => {
    setModalData(data);
    document.body.classList.add('overflow-hidden');
  };
  const modalClose = () => {
    setModalData(undefined);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <GallerySection title="Projects">
      <ProjectModal data={modalData} onClose={modalClose} />
      <div className="grid w-full mx-auto gap-5 sm:grid-cols-[repeat(auto-fit,minmax(clamp(100%/4,260px,100%/2),1fr))]">
        {projects.map((project, index) => (
          <ProjectContainer
            key={index}
            onOpen={modalOpen}
            {...project}
          />
        ))}
      </div>
    </GallerySection>
  );
};

export default ProjectSection;
