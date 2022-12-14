import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const Main = () => {
const [path,setPath] =useState('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2942c1fcec2bd56c30c3a84da3d65a17&hash=41ec9558d3576a8856574c48c38d5420')
const [item,setItem]=useState();
const [search,setSearch]=useState("");

useEffect(()=>{
    const charData = async()=>{
    const res = await axios.get(path);
   setItem(res.data.data.results)
}
charData()
},[path])

const searchMarvel=()=>{
    setPath(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=2942c1fcec2bd56c30c3a84da3d65a17&hash=41ec9558d3576a8856574c48c38d5420`)
  }
  return (
    <>
    <div className="header">
        <div className="bg">
            <img src='./images/bg.jpg' alt = '' />

        </div>
        <div className="search-bar">
            <img src="./images/Marvels.png" alt="logo" className='logo'/>
            <input type="search"  placeholder='Search Here'
                 className='search'
                 onChange={e=>setSearch(e.target.value)}
                 onKeyPress={searchMarvel}/>
        </div>
    </div>
    <div className="container">
        <Card />
        {
            (!item)? <p>No data found</p> : <Card data={item} />
        }
    </div>
    </>
  )
}
