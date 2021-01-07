import React from 'react'

const Header =({setStatu,statu})=>{
    
    return (
        <div>
            <h1>List</h1>
            
    <button onClick={()=>setStatu(!statu)}>{(!statu)? 'LogIn' : 'LogOut' }</button>
        </div>
    )
}

export default Header
