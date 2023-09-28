import React, { useState } from "react";
import { AiFillYoutube } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

import "./Search.scss";
const Search = () => {
  const navigate = useNavigate();
  const[input, setInput] = useState('');

  const handleInputChange =(e) =>{
    setInput(e.target.value)
  }


  const handleButtonCLick =async()=>{
    try {
      const response = await axios.post('http://localhost:3500/api',{
        "videoUrl" : input
      })

      const data = response.data;
      navigate('/earn',{state:{data}})
    } catch (error) {
      console.log(error)
    }
    setInput("")
  }

  return (
    <form className="search" method="post" >
      <AiFillYoutube className="search_icon" />
      <input type="text" placeholder=" Enter your Youtube link here" value={input} onChange={handleInputChange} />

      <div type="submit" className="search_button"onClick={handleButtonCLick} >Check Earning</div>
    </form>
  );
};

export default Search;
