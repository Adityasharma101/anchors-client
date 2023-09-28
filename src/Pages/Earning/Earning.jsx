import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Earncontainer from '../../components/Earncontainer/Earncontainer'
import { useLocation } from "react-router-dom";

const Earning = () => {
  const  location = useLocation();

  const {data} =location.state;
  console.log(data);

  return (
   <div className="earnings">
    <Navbar callback={true}/>
    <Earncontainer data = {data}/>
   </div>
  )
}

export default Earning