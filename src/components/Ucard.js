import React from 'react'
import "../css/Ucard.css"
export const Ucard = (props) => {
  return (
    <>
        <div className='card'>
            <div className='img'>
                <img src={props.image} alt=''/>
            </div>
            <div className='description'>
                <p><b>Name : </b>{props.fname} {props.lname}</p>
                <p><b>Email : </b>{props.email}</p>
            </div>
        </div>
    </>
  )
}
