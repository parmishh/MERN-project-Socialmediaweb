import React from 'react'
import './TrendCard.css'
import {TrendData} from '../../Data/TrendData.js'
const TrendCard = () => {
  return (
   <div className="TrendCard">
       <h3>Documentations</h3>


       {TrendData.map((trend, id)=>{
            return(
                <div className="trend" key={id}>
                    <a href={trend.link} className="new">#{trend.name}</a>
                    <span>{trend.shares}k shares</span>
                </div>
            )
       })}
   </div>
  )
}

export default TrendCard