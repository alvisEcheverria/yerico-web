import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {

    const [ cart, setCart ] = useState(false);

    const titleMenu = [
        {
            title: 'Inicio',
            link: '/'
        },
        {
            title: '¿Quién Soy?',
            link: 'sobre-mi'
        },
        {
            title: 'Programas',
            link: 'programas'
        },
        {
            title: 'Blog',
            link: 'blog'
        },
        {
            title: 'Tienda',
            link: 'tienda'
        },

    ]
    return (
        <header className='w-full bg-dark p-5'>
            <nav className='max-w-5xl m-auto flex justify-between'>
                <p className='text-yellow'><span className='text-white'>Yerico</span> Rodriguez</p>
                <ul className='flex gap-5'>
                    {
                    titleMenu.map( (menu, index) =>(
                        <li className='text-white' key={index}>
                            <Link to={menu.link}><h3>{menu.title}</h3></Link>
                        </li>
                    ))
                    }
                </ul>
                <div>
                    <Link to='login' className='text-white'>Inicia Sesión</Link>
                    <FontAwesomeIcon icon={faCartShopping} onClick={()=> setCart(!cart)}/>
                    {

                    }
                </div>
            </nav>
        </header>
    );
};

export default Menu;