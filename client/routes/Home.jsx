import React from "react";
import AddClient from "../components/AddClient";
import Header from "../components/Header";
import ClientList from "../components/ClientList";

const Home = () => {
  return (
    <div>
      <Header/>
      <ClientList/>
      <AddClient/>
    </div>
  )
}

export default Home;