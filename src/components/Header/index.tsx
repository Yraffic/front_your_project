import { Box, Text } from "@chakra-ui/react"
import { useState } from "react"
import { ButtonApp } from "../Button"



export const Header = ()=>{
    const [showBtn, setShowBtn] = useState(false)

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
            {
                showBtn &&
                <ButtonApp 
                    name="sair" 
                    color="grey"
                    size="lg"
                />
            }
        </Box>
    )
}