import React, { Component } from "react";
import { Table, Button } from "reactstrap";

class DataTable extends Component {
  render() {
    const items = this.props.items.map((item) => {
      return (
        <tr
        // key={item.id}
        >
          {/* <th scope="row">{item.id}</th> */}
          <td>{item.name.first + " " + item.name.last}</td>
          <td>{item.login.username}</td>
          <td>{item.gender}</td>
          <td>{item.email}</td>
          <td>{item.registered.date}</td>
          {/* <td>{item.username}</td>
          <td>{item.email}</td> */}
        </tr>
      );
    });

    return (
      <div
        style={{
          maxHeight: "600px",
          overflowY: "auto",
        }}
      >
        <Table responsive hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Registered Date</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </Table>
      </div>
    );
  }
}

export default DataTable;
