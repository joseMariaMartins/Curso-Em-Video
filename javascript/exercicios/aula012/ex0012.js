var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} horas.`)
if (hora < 12) {
    console.log(" Bom Dia")
} else if (hora < 12) {
    console.log('Boa Tarde')
} else {
    console.log('Boa Noite') 
}