import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

const FormSubmission = () => {
  const [formData, setFormData] = useState({
    title: "",
    completed: "",
  });
  const [token,setToken] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
      axios
        .post("https://jsonplaceholder.typicode.com/todos", { formData })
        .then((res) => {console.log(res.data); setToken(res.data.token)});
        console.log(token)
    } catch (error) {
      console.log("Error creating data", error);
    }
  };

  const handleLogout = () => {
    setToken('');
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        {token ? <button onClick={handleLogout}>Logout</button> : (
          <form onSubmit={handleSubmit}>
          <label>
            Title: {" "}
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Completed?:{" "}
            <select name="completed" value={formData.completed}  onChange={handleInputChange}>
              <option value="" hidden>
                select value
              </option>
              <option value={true}>true</option>
              <option value={false}>false</option>
            </select>
          </label>

          <button type="submit">Submit Data</button>
        </form>
        )}
        

      </div>
    </>
  );
};

export default FormSubmission;
