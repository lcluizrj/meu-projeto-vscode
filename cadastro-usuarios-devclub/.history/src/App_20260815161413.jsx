import { Container } from "./styles"
import { Title } from "./styles"
function Home() {

return (
  <Container>
    <Topbackground>
      <img />
    </Topbackground>

    <Form> 
      <Title></Title>Cadastro Usuarios </Form>
    <Name>

    <Label>Name <span>*</span></Label>
    <Input type="text" placeholder="Digite Seu nome" />

    <Label > Senha <span>*</span></Label>
    <Input type="number" placeholder="Digite sua senha"/>

     <Label > E-mail <span>*</span></Label>
    <Input type="e-mail" placeholder="Digite seu E-mail"/>

    </Name>

  </Container>
)

}

export default Home