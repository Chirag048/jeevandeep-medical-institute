import React, {useState} from 'react'
import Header from '../../headers/Header'
import Sidebar from '../../sidebar/Sidebar'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Header toggle={toggle} />
            <Sidebar  isOpen={isOpen} toggle={toggle} />
        </>
    )
}

export default Navbar
