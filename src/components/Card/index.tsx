import { Box } from "@chakra-ui/react"

export const Card = ({children}: any)=>{
    return (
        <Box 
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='column'
          width='30rem'
          height='30rem'
          borderRadius='1rem'
          gap='1rem'
          padding='1rem'
          backgroundColor='blue.200'
        >
            {children}
        </Box>
    )
}