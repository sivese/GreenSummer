type Project = {
    id: string;
    name: string;
    description: string;
    image: string;
};

function ProjectPreview({ project } : { project: Project }) {
    return (
        <div className="project-preview">
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover mb-4" />
            <h2>{project.name}</h2>
            <p>{project.description}</p> 
        </div>
    );
}

export default ProjectPreview;