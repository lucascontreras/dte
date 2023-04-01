import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ClientFinder from "../apis/ClientFinder";
import { ClientsContext } from "../context/ClientsContext";

const ClientDetail = () => {
  const { id } = useParams();
  const { selectedClient, setSelectedClient } = useContext(ClientsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ClientFinder.get(`/${id}`);
        setSelectedClient(response.data.data.client);
      } catch(err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {selectedClient && selectedClient.name /* && for it to not crash when nothing is retrieved */}
    </div>
  )
}

export default ClientDetail;