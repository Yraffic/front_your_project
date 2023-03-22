import { Input, Text } from "@chakra-ui/react";
import { ButtonApp } from "../../components/Button";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";


export const Login = ()=>{
    return (
      <Layout>
        <Card>
          <Text
           as='b'
           color='white'
          >
            Login
          </Text>
          <Input variant='flushed' placeholder='Nome de Usuario' minWidth='20rem'/>
          <Input variant='flushed' placeholder='Senha' />
          <ButtonApp name="Entrar" color="white" size="lg"/>
        </Card>
      </Layout>
    );
  }
  