import { Box, Button, Input } from "@chakra-ui/react";
import { Layout } from "../../components/Layout";


export const Login = ()=>{
    return (
      <Layout>
        <Box 
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='column'
          width='30rem'
          height='30rem'
          gap='1rem'
          padding='1rem'
          backgroundColor='white'
        >
          <Input variant='flushed' placeholder='Flushed' />
          <Input variant='flushed' placeholder='Flushed' />
          <Button colorScheme='teal' variant='link'>
            Button
          </Button>
        </Box>
      </Layout>
    );
  }
  