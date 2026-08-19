import {Title, Container, Topbackground, Form, ContainerInputs, InputLabel, Input, Button} from "./styles"

import UsersImage from './assets/users.png'

function Home() {

return (
  <Container>
    <Topbackground>
      <img src={UsersImage} />
    </Topbackground>

    <Form> 
      <Title> Cadastro Usuarios </Title>
      <ContainerInputs>
      <div>
         <div>
         <InputLabel>
         Name <span>: </span>
         </InputLabel>
         <Input type="text" placeholder="Digite Seu nome" />
         </div>

         <div>
         <InputLabel >
          Senha <span>: </span>
          </InputLabel>
         <Input type="number" placeholder="Digite sua senha"/>
         </div>

      </div>
         <div>
         <InputLabel >
          E-mail <span>: </span>
          </InputLabel>
         <Input type="e-mail" placeholder="Digite seu E-mail"/>
         </div>
      </ContainerInputs>
         <Button>Cadastrar Usuarios</Button>
    </Form>
    

  </Container>
)

}

export default Home