import { Flex, Grid } from "@chakra-ui/react";
import { Card } from "../../components/Card";
import { CardProject } from "../../components/CardProject";
import { Layout } from "../../components/Layout";

export const HomePage = () => {
  return (
    <Layout>
      <Flex>
        <Card>
          <Grid
            templateColumns='repeat(2, 2fr)'
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
          </Grid>
        </Card>
      </Flex>
    </Layout>
  );
}


