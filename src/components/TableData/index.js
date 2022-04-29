import React, { Component } from "react";
import { Container } from "reactstrap";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { TableFooter, TextField, Autocomplete, Stack } from "@mui/material";
// import "bootstrap/dist/css/bootstrap.min.css";
// import TablePagination from " @material-ui/core/TablePagination";
// import PaginationItem from "@mui/material/PaginationItem";
// import { DataGrid } from "@mui/x-data-grid";

class App extends Component {
  state = {
    items: [],
    page: 0,
    rowsPerPage: 20,
    totalRows: 0,
    getGender: "",
    getNames: "",
  };

  getItems() {
    let url = `https://randomuser.me/api/?page=${this.state.page + 1}&results=${
      this.state.rowsPerPage
    }&seed=abc`;
    // let url = `https://randomuser.me/api/?results=20`;
    // let url = "https://jsonplaceholder.typicode.com/users";
    console.log("DATA NI" + url);
    fetch(url)
      .then((res) => res.json())
      .then((items) => {
        console.log(items.results, "items");
        this.setState({
          items: items.results,
          totalRows: items.info.results,
          // getGender: "",
        });
      })
      .catch((err) => console.log(err));
  }
  resetFilter = () => {
    // this.state.getGender = "";
    this.setState({ getGender: "" });
    let url = `https://randomuser.me/api/?page=${this.state.page + 1}&results=${
      this.state.rowsPerPage
    }&seed=abc`;
    // let url = `https://randomuser.me/api/?results=20`;
    // let url = "https://jsonplaceholder.typicode.com/users";
    console.log("DATA NI" + url);
    fetch(url)
      .then((res) => res.json())
      .then((items) => {
        console.log(items.results, "items");
        this.setState({
          items: items.results,
          totalRows: items.info.results,
        });
      })
      .catch((err) => console.log(err));
  };
  getItemsGender(value) {
    // let url = `https://randomuser.me/api/?results=20&inc=gender${this.state.getGender}`;
    let url = `https://randomuser.me/api/?gender=${value}`;

    console.log("DATA NI" + url);
    fetch(url)
      .then((res) => res.json())
      .then((items) => {
        console.log(items.results, "items");
        this.setState({
          items: items.results,
          totalRows: items.info.results,
        });
      })
      .catch((err) => console.log(err));
  }
  // getItemsNames() {
  //   let url = `https://randomuser.me/api/?results=5&inc=${this.state.getNames},${this.state.getGender},nat&noinfo`;

  //   console.log("DATA NI" + url);
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((items) => {
  //       console.log(items.results, "items");
  //       this.setState({
  //         items: items.results,
  //         totalRows: items.info.results,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }

  componentDidMount() {
    this.getItems();
  }
  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: parseInt(event.target.value, 10) });
    // this.setState({ rowsPerPage: +event.target.value });
    this.setState({ page: 0 });
  };

  handleChangePage = (event, newPage) => {
    console.log(newPage, "newPage");
    this.setState({ page: newPage });
  };
  // onChange = useAsyncDebounce((value) => {
  //   setGlobalFilter(value || undefined);
  // }, 200);

  // handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  render() {
    const listgender = ["Female", "Male"];
    return (
      <>
        <Stack direction="row">
          <div>
            {this.state.getNames}
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
              sx={{ mr: 2 }}
              onChange={(event, newValue) => {
                this.setState({ getNames: event.target.value });
                // this.getItemsNames();
              }}
            />
          </div>
          <div>
            <button
            // onClick={this.getItemsNames}
            >
              Searching
            </button>
            {/* <Button onClick={this.resetFilter()}>Reset Filter</Button> */}
          </div>
          {/* {this.state.getGender} */}
          <div>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={listgender}
              // value={this.state.getGender}
              // onChange={(event, newValue) => {
              //   this.getItemsGender(newValue);
              // }}
              onChange={(event, value) => this.getItemsGender(value)}
              size="small"
              sx={{ width: 300, mx: 2 }}
              renderInput={(params) => <TextField {...params} label="Gender" />}
            />
          </div>
          <div>
            <button onClick={this.resetFilter}>Reset Filter</button>
            {/* <Button onClick={this.resetFilter()}>Reset Filter</Button> */}
          </div>
        </Stack>
        <div>
          <Container className="App">
            {/* <Row>
              <Col>
                {this.state.items ? (
                  <DataTable items={this.state.items} />
                ) : null}
              </Col>
            </Row> */}
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">USERNAME</TableCell>
                    <TableCell align="center">NAME</TableCell>
                    <TableCell align="center">EMAIL</TableCell>
                    <TableCell align="center">GENDER</TableCell>
                    <TableCell align="center">REGISTERED DATE</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.items
                    .slice(
                      this.state.page * this.state.rowsPerPage,
                      this.state.page * this.state.rowsPerPage +
                        this.state.rowsPerPage
                    )
                    .map((column, index) => {
                      return (
                        <>
                          {column !== "" ? (
                            <TableRow key={column.id}>
                              <TableCell
                                key={column.id}
                                align={column.align}
                                style={{
                                  height: "50px",
                                  width: "150px",
                                  alignItems: "center",
                                  justifyItems: "center",
                                  textAlign: "center",
                                }}
                              >
                                {column.login.username}
                              </TableCell>
                              <TableCell
                                key={column.id}
                                style={{
                                  height: "50px",
                                  width: "150px",
                                  alignItems: "center",
                                  justifyItems: "center",
                                  textAlign: "center",
                                }}
                              >
                                {column.name.first} {column.name.last}
                              </TableCell>
                              <TableCell
                                key={column.id}
                                style={{
                                  height: "50px",
                                  width: "150px",
                                  alignItems: "center",
                                  justifyItems: "center",
                                  textAlign: "center",
                                }}
                              >
                                {column.email}
                              </TableCell>
                              <TableCell
                                key={column.id}
                                style={{
                                  height: "50px",
                                  width: "150px",
                                  alignItems: "center",
                                  justifyItems: "center",
                                  textAlign: "center",
                                }}
                              >
                                {column.gender}
                              </TableCell>
                              <TableCell
                                key={column.id}
                                style={{
                                  height: "50px",
                                  width: "150px",
                                  alignItems: "center",
                                  justifyItems: "center",
                                  textAlign: "center",
                                }}
                              >
                                {column.registered.date}
                              </TableCell>
                            </TableRow>
                          ) : (
                            <div>{column.error}</div>
                          )}
                        </>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={this.state.items.length}
                  rowsPerPage={this.state.rowsPerPage}
                  page={this.state.page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={this.handleChangePage}
                  onRowsPerPageChange={this.handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Container>
        </div>
      </>
    );
  }
}

class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  detail = () => {
    return this.name + " " + this.color;
  };
}

const animal = new Animal("Dog", "Black");
console.log(animal.detail());

// closure function
function outerFunction(param) {
  var variableInOuterFunction = 10;

  return function innerFunction() {
    console.log(variableInOuterFunction);
    console.log(param);
  };
}

console.log(outerFunction("Hello")());


// module pattern
var myModule = (function () {
  return {
    publicMethod: function () {
      console.log("public method");
    },
  };
})();

console.log(myModule.publicMethod());
export default App;
