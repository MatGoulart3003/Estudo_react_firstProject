
////////////////////////////////////
// Nullish COalescing Operator
////////////////////////////////////

import { buscaDadosGit } from "./lib/api";
import * as math from './lib/math'
import { soma } from "./lib/sum";

const idade = 0;

//0,'',[], false, undefined, null => falsy (tvalores nao validos para operador || (ou))

console.log( 'sua idade é (com || )' + (idade || "Não informado") +  " Sua idade é (com ??) " + (idade ?? "Não informado"))

////////////////////////////////////
//Objetos - Manipulações úteis no Javascript
////////////////////////////////////

const user = {
  name:"Mateus",
  age: 27,
  address:{
    street: "Rua Sete de Setembro",
    number: 379,
     zip:{
       code: "37660000",
       city: "Paraisopolis"
     },
    //  showFullAddres(){
    //   return 'Full Adress'
    //  }
  },
}
console.log('name' in user)
console.log(Object.keys(user))
console.log(JSON.stringify( Object.values(user)))
console.log(JSON.stringify(Object.entries(user)))

////////////////////////////////////
//Desestruturação de Objetos
////////////////////////////////////

const {address, age: idadeUsuario, nickname = "Goulart" } = user
console.log(JSON.stringify({address , idadeUsuario, nickname}))

function showAge ({age}){
  return age
}

console.log(showAge(user))

////////////////////////////////////
//Rest Oparator
////////////////////////////////////

const {name, age, ...rest} = user
console.log(JSON.stringify(rest))

const array = [1,2,3,4,5,6,7,8,9,10,]

const [first,, third, ...resto] = array
console.log(JSON.stringify({first, third, resto}))

////////////////////////////////////
// Short Syntax
////////////////////////////////////

 const teamName = "Corinthians"
 const yearFundation = 1910

 const corinthians = {
  teamName,
  yearFundation
 }

console.log(corinthians)

////////////////////////////////////
//Optional Chaining
////////////////////////////////////

console.log(user.address?.zip?.code ?? 'Não informado')
console.log(user.address?.showFullAddres?.() ?? 'Não informado')

////////////////////////////////////
//Metodos de array
////////////////////////////////////

const arrayMap = array.map(item => {
  if(item%2 === 0){
    return item * 10;  
  }return item;
  //sempre irá retornar um array do mesmo tamanho
})

console.log(arrayMap)

const arrayFilter = array
  .filter(item => item % 2 !== 0)
  .map(item => item * 10)

console.log(arrayFilter)
  //filtra arrays por condição (podemos concatenar metodos de array)


const todosItensSaoNumeros = array.every(item => typeof item === 'number')
console.log(todosItensSaoNumeros)
const arrayTestEvery = [1,2,3,4,5,6,7,8,9,10,"corinthians"]
console.log(arrayTestEvery.every(item => typeof item === 'number'))

// metodo every retorna sempre um boolean, se todos os itens do array satisfazerem a condição, true, senão, false

const peloMenosUmItemNumero = array.some(item => typeof item === 'number')
const arrayTestSome = ['um', 'dois', "tres", 'quatro', 'corinthians']
console.log(peloMenosUmItemNumero)
console.log(arrayTestSome.some(item => typeof item === 'number'))

// metodo some retorna sempre um boolean, se ao menos um dos itens do array satisfazer a condição, true, senão, false

console.log(array.find(item => item % 2 === 0))

//retorna o primeiro item que satisfaz a condição

console.log(array.findIndex(item => item % 2 === 0))

//retorna o index do primeiro item que satisfaz a condição

console.log( array.reduce((acc, item) => {
  return acc + item
}))

//retorna o acc, (reduz o array a algo)


////////////////////////////////////
//Template Literals
////////////////////////////////////

console.log(`O melhor time do Brasil é o ${teamName ?? "Não informado"}`)

////////////////////////////////////
// Promises
///////////////////////////////////

fetch("https://api.github.com/users/MatGoulart3003")
  .then(res => {
    return res.json()
  })
  .then(body =>{
    console.log(body)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() =>{
    console.log("Corinthians")
  })



buscaDadosGit().then(name => {
  console.log(name)
})

////////////////////////////////////
// importações
///////////////////////////////////
console.log(math.soma(5,10))
console.log(math.sub(5,10))
console.log(soma(5,50))

