import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import "./App.css";
import React, { useState } from "react";
import Card from "./components/Card";
import { Fields } from "./components/Fields";

function App() {
  const [Form, setForm] = useState({});
  // const [Email, SetEmail] = useState();
  const [Data, SetData] = useState([]);

  const RemoveHandler = index => {
    const arr = [...Data];
    arr.splice(index, 1); // Remove the last element from the array
    SetData(arr);
  };

  const UserHandler = event => {
    setForm({ ...Form, User: event.target.value });
  };
  const EmailHandler = event => {
    setForm({ ...Form, Email: event.target.value });
  };
  const SubmitHandler = event => {
    if (Form.User.trim().length === 0 || Form.Email.trim().length === 0) {
      return console.log("working");
    } else {
      event.preventDefault();
      SetData([...Data, Form]);
      console.log([Data]);
      setForm({ User: "", Email: "" });
    }
  };

  return (
    <div className=".App">
      <Header />
      <div className="form">
        <Stack direction="row" spacing={1}>
          <TextField
            required
            value={Form.User}
            onChange={UserHandler}
            id="outlined-basic"
            label="User"
            variant="outlined"
          />
          <TextField
            required
            value={Form.Email}
            onChange={EmailHandler}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button variant="contained" onClick={SubmitHandler}>
            <AddIcon />
          </Button>
        </Stack>
      </div>

      <Card>
        <div className="data-show">
          <h1>Name</h1>

          <h1>Email</h1>

          <h1>Remove</h1>
        </div>
        {Data.map((element, index) => {
          return (
            <Fields
              name={element.User}
              email={element.Email}
              index={element.index}
              key={index}
              RemoveHanlder={() => RemoveHandler(index)}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default App;
