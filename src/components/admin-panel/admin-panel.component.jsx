import React from 'react'

import { Link } from 'react-router-dom'

import { BsPlusCircle, BsCardList } from 'react-icons/bs'

import './admin-panel.styles.scss'

const AdminPanel = () => {

    return (
        <div className='admin-panel'>
            <p>Admin panel</p>
            <div className='admin-links'>
                <Link to='/novy-produkt' className='icon'>

                    <BsPlusCircle />
                </Link>
                <Link to='/produkty' className='icon'>
                    <BsCardList />
                </Link>
            </div>
        </div>
    )
}

export default AdminPanel
