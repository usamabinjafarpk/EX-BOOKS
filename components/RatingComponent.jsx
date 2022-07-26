import React from 'react'
import{Rating,Stack} from "@mui/material"


const RatingComponent = () => {
  return (
    <div>
        <Stack spacing={2}>
            <Rating name="simple-controlled" value={2} />
        </Stack>
    </div>
  )
}

export default RatingComponent