import { Button } from "@chakra-ui/react"

interface Props {
    name: string
    color: string
    size?: string
}

export const ButtonApp = ({name, color, size}: Props)=> {
    return(
        <Button 
            color={color} 
            variant='link'
            size={size}
        >
            {name}
        </Button>
    )
}