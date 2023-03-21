import { Box, Text, CloseButton } from "@chakra-ui/react"


export const Header = ()=>{
    return(
        <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            width='100vw'
            padding='0.8rem'
            textAlign='center'
        >
            <Text
                backgroundColor='blue.200'
                color='white'
                as='b'
                fontSize='2.5rem'
                borderTopEndRadius='0.8rem'
                borderBottomStartRadius='0.8rem'
                padding='0.9rem'
            >
                Your Projects
            </Text>
            <CloseButton />
        </Box>
    )
}