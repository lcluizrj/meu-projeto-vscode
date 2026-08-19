import { Container } from "./styles"
import { Title } from "./styles"
function Home() {

return (
  <Container>
    
    <Title> Cadastro Usuarios </Title>
    <form>

    <Label>Name <span>*</span></Label>
    <Input type="text" placeholder="Digite Seu nome" />

    <Label > Senha <span>*</span></Label>
    <Input type="number" placeholder="Digite sua senha"/>








    </form>






  </Container>
)

}

export default Home