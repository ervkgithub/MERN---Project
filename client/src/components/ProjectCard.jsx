import { Link } from "react-router-dom";
const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="max-w-sm mr-8 mb-10 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
        {/* <a href="#!">
          <img
            className="rounded-t-lg"
            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
            alt=""
            height="100"
          />
        </a> */}
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {project.name}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {project.description}
          </p>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {project.status}
          </p>
          <Link
            to={`/projects/${project.id}`}
            className="btn btn-light inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
