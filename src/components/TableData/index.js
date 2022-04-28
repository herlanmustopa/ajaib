import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import DataTable from "./DataTable";
// import "bootstrap/dist/css/bootstrap.min.css";
// import TablePagination from "@material-ui/core/TablePagination";
import TablePagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

class App extends Component {
  state = {
    items: [],
    page: 0,
    rowsPerPage: 10,
    totalRows: 0,
  };

  getItems() {
    let url = `https://randomuser.me/api/?page=${this.state.page + 1}&results=${
      this.state.rowsPerPage
    }&seed=abc`;
    // let url = `https://randomuser.me/api/?page=1&results=10&seed=abc`;
    // let url = "https://jsonplaceholder.typicode.com/users";
    console.log("DATA NI" + url);
    fetch(url)
      .then((res) => res.json())
      .then((items) => {
        console.log(items.results, "items");
        this.setState({ items: items.results, totalRows: items.info.results });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getItems();
  }
  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: parseInt(event.target.value, 10) });
    this.setState({ page: 0 });
  };
  handleChangePage = (event, newPage) => {
    console.log(newPage, "newPage");
    this.setState({ page: newPage }, () => {
      this.getItems();
    });
  };

  render() {
    return (
      <div>
        <Container className="App">
          <Row>
            <Col>
              <h1 style={{ margin: "20px 0" }}>CRUD Database</h1>
            </Col>
          </Row>

          <Row>
            <Col>
              {this.state.items ? <DataTable items={this.state.items} /> : null}
            </Col>
          </Row>
          <TablePagination
            component="div"
            count={this.state.totalRows}
            page={this.state.page}
            onChangePage={this.handleChangePage}
            rowsPerPage={this.state.rowsPerPage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Container>
      </div>
    );
  }
}

export default App;
