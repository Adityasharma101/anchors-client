import React from 'react'
import test from '../../assets/test.jpg'
import {BiSolidCommentMinus} from 'react-icons/bi'
import {BsFillEyeFill } from 'react-icons/bs'
import {AiFillLike} from 'react-icons/ai'
import {FaIndianRupeeSign} from 'react-icons/fa6'
import {PiMedalFill} from 'react-icons/pi'


import './Earncontainer.scss'
const Earncontainer = ({data}) => {
  return (
    <div className="earn_container">
        <div className="video_image">
            <div className="top_earner">
                <PiMedalFill className='earner_icon'/>
                <p>Top Earner Video</p>
            </div>
            <img src={data.thumbnailUrl} alt="Video_image" />
            <h3>Uploaded On - {data.date }</h3>
        </div>
        <div className="video_content">
            <p className='title'>{data.videoTitle}</p>
            <p className='content'><BsFillEyeFill  className='video_content_icon'/>{data.views}</p>
            <p className='content'><AiFillLike  className='video_content_icon'/>{data.likes}</p>        
            <p className='content'><BiSolidCommentMinus  className='video_content_icon'/>{data.comments}</p>
        </div>
        <div className="video_earning">
            <h2 className='money'><span><FaIndianRupeeSign/></span>{data.earnings}</h2>
            <div className="check_btn">
                <p>Check How?</p>
            </div>
        </div>
    </div>
  )
}

export default Earncontainer