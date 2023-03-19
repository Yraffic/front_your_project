import { Box, Text } from "@chakra-ui/react"


export const Header = ()=>{
    return(
        <Box
            width='100vw'
            padding='1.5rem'
            textAlign='center'
        >
            <Text
            as='b'
            fontSize='2.5rem'
            >
                Your Projects
            </Text>
        </Box>
    )
}