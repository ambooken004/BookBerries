import React from 'react'
import {BsCart3 , BsGrid1X2Fill , BsFillArchiveFill , BsFillGrid3X2GapFill ,
     BsPeople , BsListCheck , BsMenuButtonWideFill , BsFillGearFill} from 'react-icons/bs';

import { useNavigate } from 'react-router-dom'


function Sidebar() {

    const navigate = useNavigate()

  return (
  <aside id = 'sidebar'>   
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsCart3 className= 'icon_header'/> BookBerries
                </div>
                <span className='icon close_icon'>X</span>
            </div>
            
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </a>
                </li>

                <li onClick ={()=>navigate("/admin/addnewbook")} className='sidebar-list-item'>Add a New Book</li>

                {/* <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillArchiveFill className='icon' /> Books
                    </a>
                </li> */}

                {/* <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGrid3X2GapFill className='icon' /> categories
                    </a>
                </li> */}

                {/* <li className='sidebar-list-item'>
                    <a href="">
                        <BsPeople className='icon' /> customers
                    </a>
                </li> */}

                {/* <li className='sidebar-list-item'>
                    <a href="">
                        <BsListCheck className='icon' /> inventory
                    </a>
                </li> */}

                {/* <li className='sidebar-list-item'>
                    <a href="">
                        <BsMenuButtonWideFill className='icon' /> reports
                    </a>
                </li> */}

                {/* <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGearFill className='icon' /> settings
                    </a>
                </li> */}
            </ul>
  </aside> 
  )
}

export default Sidebar
