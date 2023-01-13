import React from 'react'
import {IconButton,InputAdornment,TextField} from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



const EssentialSearch = () => {
  return (
            <TextField 
                  InputProps={{
                    startAdornment: (
                      <InputAdornment>
                        <IconButton>
                          <SearchOutlinedIcon />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
              variant='outlined' 
              placeholder='Search Items...' 
              sx={{width: '40%',borderRadius: '8px',backgroundColor:'#e8e7e6'}}/>        
  )
}

export default EssentialSearch