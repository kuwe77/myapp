import logo from "./logo.svg";
import "./App.css";
import { InputText } from 'primereact/inputtext';
import {useRef, useState} from 'react';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { Toast } from 'primereact/toast';
import axios from 'axios';


function App() {
  
  // const axios_getUserList = () =>{
  //   console.log("8888888888888888888888888")
  //   axios.get(`http://localhost:3000/api/v1/users/getall`)
  //   .then(res => {
  //     const namaa = res.data;
  //     console.log(namaa.data[0].name)
  //     setText(namaa.data[0].name)
  //   })
  //   .catch(e=>{})
  // }

  const axios_post = (text) => {
    console.log("8888888888888888888888888")
    const API_URL = "http://localhost:3000/api/v1/users"
    axios.patch(`${API_URL}/resetPassword`, {
      email: `${text}`
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch(err => console.log(err))
  };

  
  
  const [text, setText] = useState('')
  const toastRef = useRef();
  const onButtonClick = ()=> {
    axios_post(text);
  }
  return (
    <div className="App">
      <Toast ref={toastRef} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h5>Put your email to reset Password</h5>
        <div className="field">
              <label htmlFor="username1" className="block">Email: </label>
              <InputText id='in' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <br />
        <br />
        
        <Button label="Reset Password" icon="pi pi-search" onClick={onButtonClick}/>
        <br />

        {/* <InputText id='in' value={text} onChange={(e) => setText(e.target.value)} /> */}
        {/* <Button label="Get User List" icon="pi pi-bolt" onClick={axios_getUserList}/> */}
      </header>
      
 
    </div>
  );
}

export default App;