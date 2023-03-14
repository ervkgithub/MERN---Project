import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQuries";
import ClientRow from "../components/ClientRow";
import Loader from "./Loader";


const Clients = () => {
    const { loading, error, data} = useQuery(GET_CLIENTS);
    if(loading) return <Loader />
    if(error) return <p>Something went wrong</p>
  return (
    <>
        { !loading && !error && (
            <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">#ID</th>
                        <th scope="col" className="px-6 py-4">Name</th>
                        <th scope="col" className="px-6 py-4">Email</th>
                        <th scope="col" className="px-6 py-4">Phone</th>
                      </tr>
                    </thead>
                    <tbody>
                        { data.clients.map(client => (
                            <ClientRow key={client.id} client={client} />
                        ))}                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) }
    </>
  )
}

export default Clients