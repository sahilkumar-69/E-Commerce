import React from 'react'
import "./popular.css"
import Item from '../item/Item'
import dt from '../../Assets/data'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {
                dt.map((item,index)=>{
                    return <Item key={index} data={item}   />
                })
            }
        </div>
    </div>
  )
}

export default Popular