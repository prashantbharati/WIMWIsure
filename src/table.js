import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const API = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com/users",
});

export default function BasicTable() {
  let data1 = API.get("/");
  console.log(data1, "LOL");
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold", fontSize: "25px" }}>
              Full Name
            </TableCell>
            <TableCell
              align="right"
              style={{ fontWeight: "bold", fontSize: "25px" }}
            >
              Username
            </TableCell>
            <TableCell
              align="right"
              style={{ fontWeight: "bold", fontSize: "25px" }}
            >
              Email&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data1.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.fullname}
              </TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
