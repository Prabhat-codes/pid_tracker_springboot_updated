import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import Admin from './Admin';
const SelectionScreen = () => {
    const [fileId, setFileId] = useState(0)
    const [username, setusername] = useState('')
    let navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('token'))
        {
            navigate('/login')
        }
        else
        {
            fetch('http://localhost:9191/user/name', {
            method: 'POST',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}` || ''
            }
            }).then(response => {
                //console.log(response)
                return response.json()}).then(data => {
                console.log(data)
                //setFileList(data)
                setusername(data.user_name)
            })
        }
    },[])
  return (
    <div className='container mt-2'>
        {/* <Dashboard /> */}
        <Admin />

    </div>
  )
}

export default SelectionScreen