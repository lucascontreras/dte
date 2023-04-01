import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ClientFinder from '../apis/ClientFinder';
import { ClientsContext } from "../context/ClientsContext";
import ClientListCSS from './ClientList.module.css';

const ClientList = (props) => {
  const {clients, setClients} = useContext(ClientsContext);
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ClientFinder.get('/');
        setClients(response.data.data.clients);
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []); //empty array --> it will only run when the component mounts
  
  const handleDelete = async (id) => {
    try {
      const response = await ClientFinder.delete(`/${id}`);
      setClients(clients.filter(client => {
        return client.id !== id;
      }));
      // console.log(response);
    }
    catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (id) => {
    history.push(`/clients/${id}/update`)
  }

  const handleClientSelect = (id) => {
    history.push(`/clients/${id}`)
  }
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Create order</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {clients && clients.map(client => { //if clients exist, then render them
            return (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>
                  <button
                    onClick={() => handleClientSelect(client.id)}
                    className={ClientListCSS.nuevaGuia}>
                    New delivery order
                  </button>
                </td>
                <td>
                  <button
                    className={ClientListCSS.modificar}
                    onClick={() => handleUpdate(client.id)}>
                    Update client
                  </button>
                </td>
                <td>
                  <button
                    className={ClientListCSS.eliminar}
                    onClick={() => handleDelete(client.id)}>
                    Delete client
                  </button>
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td>Cliente 1</td>
            <td><button>Nueva guía</button></td>
            <td><button>Modificar cliente</button></td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default ClientList;