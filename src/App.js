import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

function App() {

  const baseUrl="https://localhost:7161/api/GetActives";

  const [data, setData] = useState([]);

  const Get = async()=>{
    await axios.get(baseUrl).then(response => {
      setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    Get();
  })

  return (
    <div className="App">
      <h2>AppMessage.Net</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>title</th>
            <th>altTime</th>
            <th>userId</th>
          </tr>
        </thead>
        <tbody>
          {data.map(message=>(
            <tr key={message.id}>
              <td>{message.title}</td>
              <td>{message.altTime}</td>
              <td>{message.userId}</td>
              <td>
                <button className = "btn btn-primary">Edit</button>{"  "}
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <header className="App-header">
        <button className="btn btn-success">Adicionar Mensagem</button>
      </header>
    </div>
  );
}

export default App;
