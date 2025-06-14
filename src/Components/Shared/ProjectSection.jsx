import ProjectItem from './ProjectItem';
import projectsData from './projectsData';
import SectionHeading from './SectionHeading';
// import ProjectList from './ProjectList'; // No longer directly used here for main display

const ProjectSection = () => {
  return (
    <section className="global-container bg-gray-100 py-16">
      <SectionHeading title="Our Services" highlightWord="Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projectsData.map((category) => (
          <ProjectItem 
            key={category.category} 
            project={{
              title: category.category,
              description: category.mainDescription.substring(0, 150) + '...', // Use a snippet of the main description
              image: category.mainImage,
              link: category.link, // Link to the service detail page
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
