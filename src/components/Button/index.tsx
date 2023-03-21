import { Button } from "@chakra-ui/react"

interface Props {
    name: string
    color: string
}

export const ButtonApp = ({name, color}: Props)=> {
    return(
        <Button color={color} variant='link'>
            {name}
        </Button>
    )
}