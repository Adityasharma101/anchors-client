import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";

import {BsPlayCircleFill} from 'react-icons/bs'

import "./Home.scss"
const Home = () => {
  return (

      <div className="home">
        <Navbar callback={false} />

        <div className="home_content">
          <div className="home_content_main">
            <span>
              Discover your earning
              <br />
              potential
            </span>
          </div>
          <div className="home_content_min">
            <span>
            Turn your Youtube expertise into a lucrative income <br />through resource sharing
            </span>
          </div>
        </div>

        <Search/>
        
        <BsPlayCircleFill className="home_play_icon"/>
      </div>

  );
};

export default Home;
