import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import ClientInfo from "../components/ClientInfo";

const ProjectDetail = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT, {
        variables:{id}
    });

    if(loading) return <Loader />
    if(error) return <p>Something went wrong</p>

  return (
    <>
        { !loading && !error && (
              <div className="max-w-xs mr-8 mt-10 mb-10 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
              {/* <a href="#!">
                <img
                  className="rounded-t-lg img"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  alt=""
                  height="100"
                />
              </a> */}
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {data.project.name}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {data.project.description}
                </p>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {data.project.status}
                </p>
                <ClientInfo client={data.project.client} />
                <Link
                  to={`/`}
                  className="btn btn-light inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                >
                  Back
                </Link>
              </div>
            </div>
        )}
    </>
  )
}

export default ProjectDetail