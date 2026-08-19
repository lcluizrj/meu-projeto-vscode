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
         <InputLabel > Senha <span>*</span></InputLabel>
         <Input type="number" placeholder="Digite sua senha"/>
         </div>

      </div>
         <div>
         <Label > E-mail <span>*</span></Label>
         <Input type="e-mail" placeholder="Digite seu E-mail"/>
         </div>
    </Form>
    

  </Container>
)

}

export default Home