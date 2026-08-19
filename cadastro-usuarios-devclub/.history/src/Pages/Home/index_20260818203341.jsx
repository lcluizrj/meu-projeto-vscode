import { useRef } from "react"

import { Title, Container, Topbackground, Form, ContainerInputs, InputLabel, Input, Button } from "./styles"

import UsersImage from '../../assets/users.png'

function Home() {

  const inputName = useRef ()

  const inputAge =useRef ()

  const iputEmail = useRef ()

  return (
    <Container>
      <Topbackground>
        <img src={UsersImage} alt="Imagens-Usuarios" />
      </Topbackground>

      <Form>
        <Title> Cadastro Usuarios </Title>
        <ContainerInputs>

          <div>
            <InputLabel>
              Name <span>: </span>
            </InputLabel>
            <Input type="text" placeholder="Digite Seu nome" ref={inputName} />
          </div>

          <div>
            <InputLabel >
              Senha <span>: </span>
            </InputLabel>
            <Input type="number" placeholder="Digite sua senha" ref={}/>
          </div>


        </ContainerInputs>
        <div style={{ width: '100%' }}>
          <InputLabel >
            E-mail <span>: </span>
          </InputLabel>
          <Input type="e-mail" placeholder="Digite seu E-mail" />
        </div>

        <Button>Cadastrar Usuarios</Button>
      </Form>


    </Container>
  )

}

export default Home