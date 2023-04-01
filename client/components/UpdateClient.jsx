import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ClientFinder from "../apis/ClientFinder";
import { ClientsContext } from "../context/ClientsContext";

const UpdateClient = (props) => {
  const { id } = useParams();
  let history = useHistory();
  const { clients } = useContext(ClientsContext);
  const [name, setName] = useState("");
  const [rut, setRut] = useState("");

  useEffect(() => {
    const fetchData = async() => {
      const response = await ClientFinder.get(`/${id}`);
      console.log(response.data.data);
      setName(response.data.data.client.name);
      setRut(response.data.data.client.rut);
    }
    fetchData();
  }, []); //empty dependency array so we only run this when the component mounts

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedClient = await ClientFinder.put(`/${id}`, {
      name,
      rut
    });
    history.push('/');
  }

  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="rut">RUT</label>
          <input
            value={rut}
            onChange={(e) => setRut(parseInt(e.target.value))}
            id="rut"
            type="number"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateClient;