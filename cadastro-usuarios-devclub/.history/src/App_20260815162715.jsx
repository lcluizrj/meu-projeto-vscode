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
      <div>
         <div>
         <InputLabel>Name <span>*</span></InputLabel>
         <Input type="text" placeholder="Digite Seu nome" />
         </div>
         <div>

         <Label > Senha <span>*</span></Label>
         <Input type="number" placeholder="Digite sua senha"/>
         </div
      </div>

         <Label > E-mail <span>*</span></Label>
         <Input type="e-mail" placeholder="Digite seu E-mail"/>
    </Form>
    

  </Container>
)

}

export default Home