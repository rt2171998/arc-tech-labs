import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const App = () => {
  const [data, setData] = useState([]);

  //async function to fetch user data from placeholder api
  const FetchDatafromApi = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) throw new Error("Network Response was not ok");
      let data = await response.json();
      console.log(data);
      setData((prevState) => [...data]);
    } catch (error) {
      console.log(error);
    }
  };
  // performing sideeffects in useeffect hook
  useEffect(() => {
    FetchDatafromApi();
  }, []);
  //using basic table component of material ui to display the fetched data in form of a tabe.
  return (
    <div className="tableContainer">
      {data.length ? (
        <TableContainer sx={{ width: "100vw" }} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="cell">ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>*{" "}
              </TableRow>
            </TableHead>
            <TableBody>
              {/*               mapping all user in rows od data
               */}{" "}
              {data.map((user) => (
                <TableRow key={user.id}>
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
