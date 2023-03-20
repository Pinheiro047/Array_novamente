let  res = document.getElementById('res')
let pais = ['Chile', 'Bolivia', 'Brasil', 'Argentina', 'Paraguai']
let cidade = new Array ('Tijucas','Itajais','São José')


console.log(pais[2])
console.log(cidade[1])
console.log(pais)


pais.push('Uruguai')
pais.unshift('Colombia')

function inserir(){
    
    pais.pop()
    pais.shift()
    res.innerHTML += pais + '<br>'
    res.innerHTML += cidade + '<br>'
}