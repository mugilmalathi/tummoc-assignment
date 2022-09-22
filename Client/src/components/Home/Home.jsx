import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';

const Home = () => {

    const user = useSelector(selectUser)
    const dispatch = useDispatch();

   const handleLogout = (e)=>{
    e.preventDefault();
    dispatch(logout())
   }

   const[data, setData]=useState([]);

   useEffect(()=>{
    axios.get("http://localhost:8181/city")
    .then((res)=>{
      setData(res.data)
      console.log(res);
    })
   }, [])
   console.log(data, "checking data");

  return (
    <div>
        <h1>Welcome <span>{user.name}</span></h1>
        <button onClick={(e)=> handleLogout(e)}>Logout</button>
        <div style={{display:"flex", gap:"50px", width:"80%", height:"100vh", margin:"auto", marginTop:"30px"}}>
          {
            data.map((el)=>{
              return(
                <div style={{height:"150px", border:"1px solid gray", borderRadius:"10px", paddingLeft:"20px", paddingTop:"10px"}}>
                  <img src={el.logo} alt="" />
                  <div>{el.city_name}</div>
                  <div>{el.city_location}</div>
                  <div>{el.pincode}</div>
                  <div>{el.state}</div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Home