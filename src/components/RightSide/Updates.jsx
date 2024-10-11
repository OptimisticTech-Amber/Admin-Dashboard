import React from 'react'
import { UpdatesData } from '../../data/data';
import "./Updates.css"
const Updates = () => {
  return (
    <div className="Updates">
    {UpdatesData.map((update) => {
      return (
        <div className="update">
          <img src={update.img} alt="profile" />
          <div className="noti">
            <div  style={{marginBottom: '0.5rem'}}>
              <span>{update.name}</span>
              <span> {update.noti}</span>
            </div>
              <span>{update.time}</span>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default Updates