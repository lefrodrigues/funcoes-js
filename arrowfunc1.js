let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function() {
    return 'OLa'
}

ola = () => 'OLa'
ola = _ => 'OLa'
console.log(ola())