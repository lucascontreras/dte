import React, { useContext, useState } from "react";
import ClientFinder from "../apis/ClientFinder";
import { ClientsContext } from "../context/ClientsContext";
import AddClientCSS from './AddClient.module.css';

const AddClient = () => {
  const {addClients} = useContext(ClientsContext);
  const [name, setName] = useState("");
  const [rut, setRut] = useState(""); //TODO --> ADD ALL FIELDS
  const handleSubmit = async (e) => { //FIXME --> rut is not passing from state to the server (bc is a number??)
    e.preventDefault(); //prevent reloading the page which is the default behavior, if we were to do that we'd lose the state
    try {
      // console.log('rut: ', rut);
      const response = await ClientFinder.post("/", {
        //in axios, we use this object to represent our body
        name,
        rut
      });
      addClients(response.data.data.client); //so the list of clients gets updated after submit
      console.log('response: ', response);
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <form action="" className={AddClientCSS.container}>
        New client: 
        <div className="col">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="col">
          <input
            value={rut}
            onChange={e => setRut(parseInt(e.target.value))}
            type="number"
            placeholder="RUT"
          />
        </div>
        <button
          className={AddClientCSS.crear}
          type="submit"
          onClick={handleSubmit}
        >
          Create client
        </button>
      </form>
    </div>
  )
}

export default AddClient;