import styled from '@emotion/styled'
import { Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
                    {(item === "Categories") && <Typography sx={{cursor:"pointer"}}>{item}</Typography>}
                    {(item === "Categories")?<KeyboardArrowDownIcon sx={{cursor:"pointer"}}/>:""}
                </>
            )
        })}
        </Stack>
    </Nav>
  )
}

export default SecNavBar