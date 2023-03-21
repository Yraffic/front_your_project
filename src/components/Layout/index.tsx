import { Box } from "@chakra-ui/react";
import { Header } from "../Header";


export const Layout = ({children}: any )=>{
    return (
      <Box
        display='flex'
        alignItems='center'
        flexDirection='column'
        width='100vw'
        height='100vh'
        backgroundColor='gray.100'
        padding='1rem'
      >
        <Header/>
        {children}
      </Box>
    );
  }