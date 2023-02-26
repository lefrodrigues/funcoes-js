//Closure é o escopo quando essa funçao é declarada


const x = 'Gobal'

function fora() {
    const x = 'Local'
function dentro (){
    return x
}
return dentro
}

const minhaFuncao = fora ()
console.log(minhaFuncao())

