import styled from '@emotion/styled'
import { Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link, NavLink } from 'react-router-dom';

const SecNavBar = () => {
    const [container,setContainer] = useState(["Home","Categories",])
    const Nav = styled(Stack)({
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#EBE8E7",
        height: '50px',
        fontFamily: "sans-serif"
    })
  return (
    <Nav direction="row">
        <Stack direction="row" >
        {container.map(item =>{
            return(
                <>
                    {(item != "Categories") && <Typography sx={{mr: 3,cursor:"pointer"}}>{item}</Typography>}
                    {(item === "Categories") && <NavLink to="/categories" className= 'link' exact><Typography sx={{cursor:"pointer"}}>{item}</Typography></NavLink>}
                    {(item === "Categories")?<NavLink to="/categories" className= 'link' exact><KeyboardArrowDownIcon sx={{cursor:"pointer"}}/></NavLink>:""}
                </>
            )
        })}
        </Stack>
    </Nav>
  )
}

export default SecNavBar