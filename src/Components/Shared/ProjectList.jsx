import ProjectItem from './ProjectItem';

const ProjectList = ({ category }) => {
  return (
    <div>
      <h3 className="mb-4 border-l-4 border-green-600 pl-2 text-xl font-semibold">
        {category.category}
      </h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {category.projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
