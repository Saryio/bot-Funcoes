const axios = require('axios')
const input = require('readline-sync')
console.log("Para finalizar o processo use CTRL+C")

const commands = {
    buscar: (cep) => {
        axios({
            method: 'get',
            url: `https://viacep.com.br/ws/${cep}/json/`
        }).then(response => {
            console.log(response.data)
            commands.perguntar()
        }).catch(err => {
            console.log(err)
        })
    },
    perguntar: () => {

        let str = "";
        Object.keys(commands).forEach(element => {
            str += element+"\n"
        })

        let comando = input.question(`Que comando deseja executar?\n${str}\n`)
        if (comando === "buscar") {
            let cep = input.question('Digite o CEP (apenas numeros)\n')
            commands.buscar(cep)
        }
    }
}

commands.perguntar()