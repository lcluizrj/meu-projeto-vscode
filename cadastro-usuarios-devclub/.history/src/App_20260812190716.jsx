import { Container } from "./styles"
import { Title } from "./styles"
function Home() {

return (
  <Container>
    
    <Title> Cadastro Usuarios </Title>
    <Form>

    <Label>Name <span>*</span></Label>
    <Input type="text" placeholder="Digite Seu nome" />

    <Label > Senha <span>*</span></Label>
    <Input type="number" placeholder="Digite sua senha"/>

     <Label > E-mail <span>*</span></Label>
    <Input type="e" placeholder="Digite seu E-mail"/>








    </Form>






  </Container>
)

}

export default Home