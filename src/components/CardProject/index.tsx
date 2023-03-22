import {
    Card, Text
} from "@chakra-ui/react";
import { ButtonApp } from "../Button";

interface Props {
    name: string
    description: string
    date?: Date
}

export const CardProject = ({name, description, date}: Props) => {
    return (
        <Card 
        minHeight='6rem'
        minWidth='6rem'
        display='flex'
        align='center'
        justifyContent='space-evenly'
        padding='1rem'
        flexDirection='column'
        >
            <Text as='b'>{name}</Text>
            <Text>{description}</Text>
            <ButtonApp name="ver detalhes" color="black"/>
        </Card>
    )
}