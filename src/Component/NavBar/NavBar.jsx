import React from 'react'
import logo from '../../assets/Logo-sin-fondo.png'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {

  return (
    <nav className='NavConfig'>
        <img id='LogoNavMobile' src={logo} alt="LogoCanastasDeVida" />
        <ul className='navBar'>
            <li className='LinkTittle'> <NavLink to='/'>INICIO</NavLink></li>
            <li className='LinkTittle'> <NavLink to='/nosotros'>NOSOTROS</NavLink></li>
            <li className='LinkTittle'> <NavLink to='/nuestras-historias'>NUESTRAS HISTORIAS</NavLink></li>
            <Link to='/'>
                <img id='LogoNav' src={logo} alt="LogoCanastasDeVida" />
            </Link>
            <li className='LinkTittle'> <NavLink to='/contactanos'>CONTACTANOS</NavLink></li>
            <li className='LinkTittle'> <NavLink to='/login'>LOGIN</NavLink></li>
            <li className='LinkTittle'> <NavLink to='/unete-al-cambio'>UNETE AL CAMBIO</NavLink></li>
        </ul>
        <div className='Menu'>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
  )
}