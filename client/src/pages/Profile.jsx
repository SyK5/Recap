import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router';
import { MainContext } from '../../hooks/context/mainContext';

export const button = 'bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-md';

const Profile = () => {

  const [userState, userDispatch] = useContext(MainContext);

  useEffect(() => {
    console.log('userState: ', userState);
    
  }, [])

  return (
    <div className='flex gap-5'>
    <NavLink to='/profile/register'><h2 className={button}>Register</h2></NavLink>
    <h2 className={button}>Login</h2>

    </div>
  )
}

export default Profile