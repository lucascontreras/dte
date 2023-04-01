import React from "react";

const OrderList = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Item</th>
            <th>Quantity</th>
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
        </tbody>
      </table>
    </div>
  )
}

export default OrderList;