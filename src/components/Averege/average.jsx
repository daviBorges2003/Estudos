import React from 'react'

import { Rating , Stack} from '@mui/material'

const Average = ({notes}) => {

  const notaAredondada = notes / 2

  return (
    <Stack
      spacing={-1}> 
      <Rating defaultValue={notaAredondada} readOnly precision={0.5}/>
    </Stack>
  )
}

export default Average