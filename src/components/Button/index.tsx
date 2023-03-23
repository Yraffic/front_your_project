import { Button } from "@chakra-ui/react"
import { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    name: string
    color?: string
    size?: string
}

export const ButtonApp = ({name, color, size}: Props)=> {
    return(
        <Button 
            color={color ? color : 'teal'}
            variant='link'
            size={size}
        >
            {name}
        </Button>
    )
}