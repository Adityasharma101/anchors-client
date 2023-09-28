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
      const response = await axios.post('http://52.66.204.208:3000/api',{
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
