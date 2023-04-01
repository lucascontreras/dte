import React, {useState, createContext} from "react";

export const ClientsContext = createContext();

export const ClientsContextProvider = props => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  const addClients = (client) => {
    setClients([...clients, client])
  }
  return (
    <ClientsContext.Provider
      value = {{clients, setClients, addClients, selectedClient, setSelectedClient}}
    >
      { props.children }
    </ClientsContext.Provider>
  )
}