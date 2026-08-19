import { Container } from "./styles"
import { Title } from "./styles"
function Home() {

return (
  <Container>
    <Topbackground>
      <img />
    </Topbackground>

    <Form> 
      <Title> Cadastro Usuarios </Title>
      div
         <InputLabel>Name <span>*</span></InputLabel>
         <Input type="text" placeholder="Digite Seu nome" />

         <Label > Senha <span>*</span></Label>
         <Input type="number" placeholder="Digite sua senha"/>

         <Label > E-mail <span>*</span></Label>
         <Input type="e-mail" placeholder="Digite seu E-mail"/>
    </Form>
    

  </Container>
)

}

export default Home