import { FaEnvelope, FaIdBadge, FaPhone } from "react-icons/fa"

const ClientInfo = ({client}) => {
  return (
    <>
        <h2>Client Informaton</h2>
        <ul className="list-group">
            <li className="list-group-item mt-2 mb-2">
                <FaIdBadge className="icon" /> { client.name }
            </li>
            <li className="list-group-item mb-2">
                <FaEnvelope className="icon" /> { client.email }
            </li>
            <li className="list-group-item mb-2">
                <FaPhone className="icon" /> { client.phone }
            </li>
        </ul>
    </>
  )
}

export default ClientInfo