import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

  const[data,setData]=useState([])
  const[search,setSearch]=useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(result=>
        {setData(result.data)
         setSearch(result.data)})
  },[])

  const Search =(event)=>{
           setSearch(data.filter(Search=>Search.name.toLowerCase().includes(event.target.value)))
  }


  return (
    <div className='p-5 bg-light'>
      <div className='bg-white shadow border'>
        <input placeholder='Serch' type='text' className=' form-conytol' onChange={Search}/>
        <table className='table text-center'>
          <thead>
            <tr>
              <th >Id</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>WebSite</th>
            </tr>
          </thead>
          <tbody>
            {
              search.map((data,index)=>(
                   <tr key={index} >
                    <td >{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.website}</td>
                   </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Home
