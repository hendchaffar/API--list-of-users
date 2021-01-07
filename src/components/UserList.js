import axios from 'axios';
import { useEffect, useState } from 'react'
import UserCard from './UserCard'
import Header from './Header'

const UserList=()=> {
    const [data, setData] = useState([]);
    const [statu, setStatu] =useState(false)
    


    useEffect(()=>{
    function fetchData() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(x=> setData(x.data))
        .catch(err=> console.log(err))
    }
    fetchData();
    }, []);

    return (
        <div>
            <Header setStatu={setStatu} statu={statu}/>
        <div className='cards'> 
            {statu ? data.map(el=> <UserCard el={el}  />) : <h1 style={{color:'red'}}> Please LogIn </h1> }
        </div>
        </div>
    )
}
export default UserList