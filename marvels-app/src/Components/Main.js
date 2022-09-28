import React from 'react'


export const Main = () => {
  return (
    <>
    <div className="header">
        <div className="bg">
            <img src='./images/bg.jpg' alt = '' />

        </div>
        <div className="search-bar">
            <img src="./images/Marvels.png" alt="logo" className='logo'/>
            <input type="search"  placeholder='Search Here' className='search'/>
        </div>
    </div>
    
    </>
  )
}
