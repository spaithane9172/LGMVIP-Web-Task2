import React, { useState } from 'react'
import "../css/Navbar.css"
import { Ucard } from './Ucard'
import { Loading } from './Loading'
export const Navbar = () => {
  const [pdata,setPdata]=useState();
  let [loading,setLoading]=useState(false)
  let [page,setPage]=useState(1);
  const getData = async ()=>{
    const url=`https://reqres.in/api/users?page=${page}`;
    setLoading(true);
    let data= await fetch(url)
    data=await data.json();
    setPdata(data.data)
    setLoading(false)
  }
  const next=()=>{
    setPage(page+=1)
    getData();
  }
  const previous=()=>{
    setPage(page-=1)
    getData() 
  }
  return (
    <>
      <nav>
        <div className='title'>
          <h2>User Info</h2>
        </div>
        <div className='btn'>
          <button onClick={getData}>Get Info</button>
        </div>
      </nav>
      <div className='Cards'>
        {loading && <Loading/>}
        {
          pdata && pdata.map((element,index)=>{
            return <Ucard key={index} fname={element.first_name} lname={element.last_name} email={element.email} image={element.avatar}/>;
          })
        }
      </div>
      <div className='footer'>
        <button disabled={page===1?true:false} onClick={previous}>Previous</button>
        <button disabled={page===2?true:false} onClick={next}>Next</button>
      </div>
    </>
  )
}
