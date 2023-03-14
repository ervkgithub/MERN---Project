import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";
 import { GET_CLIENTS } from '../queries/clientQuries';

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // refresh the page after deletion method 1 with refetchQueries
    refetchQueries:[{ query:GET_CLIENTS }]   

    // refresh the page after deletion method 2 with update

    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });
  return (
    <>
      <tr className="border-b dark:border-neutral-500">
        <td className="whitespace-nowrap px-6 py-4 font-medium">{client.id}</td>
        <td className="whitespace-nowrap px-6 py-4">{client.name}</td>
        <td className="whitespace-nowrap px-6 py-4">{client.email}</td>
        <td className="whitespace-nowrap px-6 py-4">{client.phone}</td>
        <td>
          <button
            onClick={deleteClient}
            className="inline-block rounded-full bg-red-900 p-2 uppercase leading-normal text-white"
          >
            <FaTrash className="text-red" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ClientRow;
