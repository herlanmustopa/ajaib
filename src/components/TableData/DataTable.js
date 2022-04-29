import React, { Component } from "react";
import { Table } from "reactstrap";

class DataTable extends Component {
  render() {
    const items = this.props.items.map((item) => {
      return (
        <tr key={item.id.value}>
          <td
            style={{
              height: "50px",
              width: "200px",
              alignItems: "center",
              justifyItems: "center",
              textAlign: "center",
            }}
          >
            {item.name.first + " " + item.name.last}
          </td>
          <td
            style={{
              height: "50px",
              width: "200px",
              alignItems: "center",
              justifyItems: "center",
              textAlign: "center",
            }}
          >
            {item.login.username}
          </td>
          <td
            style={{
              height: "50px",
              width: "200px",
              alignItems: "center",
              justifyItems: "center",
              textAlign: "center",
            }}
          >
            {item.gender}
          </td>
          <td
            style={{
              height: "50px",
              width: "400px",
              alignItems: "center",
              justifyItems: "center",
              textAlign: "center",
            }}
          >
            {item.email}
          </td>
          <td
            style={{
              height: "50px",
              width: "00px",
              alignItems: "center",
              justifyItems: "center",
              textAlign: "center",
            }}
          >
            {item.registered.date}
          </td>
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
