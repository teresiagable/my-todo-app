import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-secondary bg-secodary'>
      <ul className='navbar-nav mr-auto '>
        <li className='nav-item'>
          <Link className='nav-link' to='/home'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/todomain'>
            Todo list
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/charactermain'>
            StarWar characters
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/contextdemo'>
            ContextDemo
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/usememo'>
            useMemo
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/usecallback'>
            useCallback
          </Link>
        </li>
      </ul>
    </nav>
  );
}
