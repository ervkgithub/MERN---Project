
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import Loader from "./Loader";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const {loading, error, data} = useQuery(GET_PROJECTS);

    if(loading) return <Loader />
    if(error) return <p>Something went wrong</p>

    console.log("data", data)

  return <>
        { data.projects.length > 0 ? (
            <div className="flex flex-wrap mt-8 mb-10">
                { data.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        ) : (<p>No Projects</p>) }
    </>

}

export default Projects