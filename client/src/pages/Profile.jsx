import React from 'react'
import { NavLink } from 'react-router';

export const button = 'bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-md';

const Profile = () => {
  return (
    <div className='flex gap-5'>
    <NavLink to='/profile/register'><h2 className={button}>Register</h2></NavLink>
    <h2 className={button}>Login</h2>

    </div>
  )
}

export default Profile