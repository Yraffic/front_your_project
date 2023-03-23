import { Box } from "@chakra-ui/react"

export const Card = ({children}: any)=>{
    return (
        <Box 
          display='flex'
          alignItems='center'
          flexDirection='column'
          borderRadius='1rem'
          maxHeight='70vh'
          width='40vw'
          overflowY='auto'
          gap='1rem'
          padding='1rem'
          backgroundColor='blue.200'
        >
            {children}
        </Box>
    )
}