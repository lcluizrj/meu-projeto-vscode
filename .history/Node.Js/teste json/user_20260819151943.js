const user = {
    nome:"Luiz",
    endereço:"Rua jose vilas boas 300",
    email:"luiz_junior_rj@hotmail.com",
    idade:31,
    filhos:null,
    hobies:["codar","filmes","series"],
    empresas:{
        LcEsteticaAutomotiva:{
            funda:2021,
            colaboradores:2,
            fechamento:2025
        },
        Loggi:{
            inicio:2025,
            ate:2026
        
        }
    }
}

const userjson = JSON.stringify(user)


const userjsontojs = JSON.parse(userjson)

console.log(userjsontojs)