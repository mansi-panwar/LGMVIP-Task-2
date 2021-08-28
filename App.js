import React ,{useEffect, useState} from 'react';
import "./styles.css";
import ClipLoader from "react-spinners/ClipLoader";

function App(){
  const [users,setUsers]=useState()
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false);
    },5000);
  },[])
  const getuser=async() =>{
    const res = await fetch("https://reqres.in/api/users?page=1");
    const data = await res.json();
    setUsers(data.data);
  }
return (
  <>
  <div>
  <div className="brand-name">LetsGrowMore</div>
  <div className="btn">
    <button onClick={getuser}>Users</button>
    </div>
    {
      loading ?
      <div className="center">
      <ClipLoader 
        color={"EFFB09"} 
        loading={loading} 
        size={150} 
        /></div>
      :
  <div className="container">
  {users?.map((now,id) => {
    return(
      <div className="grid" key={id}>
      <img src={now.avatar} alt="..."/>
        <div className="name">{now.first_name} {now.last_name}</div>
        <div className="email">{now.email}</div>
        <p></p>
        </div>
    );
  })}  
  </div>
    }
  </div>
  </>
);
}
export default App;