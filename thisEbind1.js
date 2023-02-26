const pessoa = {
    saudaçao: 'Bom dia!',
    falar() {
        console.log(this.saudaçao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()//conflito de paradigmas

const falardepessoa = pessoa.falar.bind(pessoa)
falardepessoa()