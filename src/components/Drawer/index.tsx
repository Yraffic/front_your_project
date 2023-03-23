import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Stack,
    FormLabel,
    Input,
    Box,
    Textarea,
    Button,
  } from '@chakra-ui/react'
import { useRef } from 'react'

export const DrawerComponent = ()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = useRef()
  
    return (
      <>
        <Button  
        colorScheme='teal' 
        onClick={onOpen}
        margin='0.5rem'
        >
          Criar Projeto
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Criar novo Projeto
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing='24px'>
                <Box>
                  <FormLabel htmlFor='username'>Nome</FormLabel>
                  <Input
                    ref={firstField}
                    id='username'
                    placeholder='Digite o nome do Projeto'
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor='desc'>Descrição</FormLabel>
                  <Textarea id='desc' />
                </Box>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
              <Button  
                    colorScheme='red' 
                    mr={3} 
                    onClick={onClose}
                >
                Cancelar
              </Button>
              <Button colorScheme='teal'>Adcionar</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }