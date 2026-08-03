import { Button } from '@chakra-ui/react'
import { Moon, Sun } from 'lucide-react'
import React from 'react'

function DarkMode({mode, onClickHandler}) {
  return (
    <Button onClick={onClickHandler}>
      { mode === "light" ? <Moon /> :  <Sun /> }
    </Button>
  )
}

export default DarkMode