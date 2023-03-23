import { Flex, Grid } from "@chakra-ui/react";
import { Card } from "../../components/Card";
import { CardProject } from "../../components/CardProject";
import { DrawerComponent } from "../../components/Drawer";
import { Layout } from "../../components/Layout";

export const HomePage = () => {
  return (
    <Layout>
        <DrawerComponent />
      <Flex 
        width='100vw' 
        justifyContent='space-between'
        padding='0 1rem'
      >
        <Card>
          <Grid
            templateColumns='repeat(3, 1fr)'
            gap='0.5rem'
          >
            <CardProject
              name="primeiro Projeto"
              description="teste do componete card"
            />
            <CardProject
              name="primeiro Projeto"
              description="teste do componete card"
            />
            <CardProject
              name="primeiro Projeto"
              description="teste do componete card"
            />
            <CardProject
              name="primeiro Projeto"
              description="teste do componete card"
            />
            <CardProject
              name="primeiro Projeto"
              description="teste do componete card"
            />
            <CardProject
              name="primeiro Projeto"
              description="teste do componete card"
            />
            <CardProject
              name="primeiro Projeto"
              description="teste do componete card"
            />
            <CardProject
              name="primeiro Projeto"
              description="teste do componete card"
            />
            <CardProject
              name="primeiro Projeto"
              description="teste do componete card"
            />
             <CardProject
              name="primeiro Projeto"
              description="teste do componete card"
            />
             <CardProject
              name="primeiro Projeto"
              description="teste do componete card"
            />
             <CardProject
              name="primeiro Projeto"
              description="teste do componete card"
            />
          </Grid>
        </Card>
        <Card>
          Tarefas do projeto
        </Card>
      </Flex>
    </Layout>
  );
}


