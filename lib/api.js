//melhor forma de lidar com promises é a função async abaixo

export async function buscaDadosGit(){
  try{    
    const res = await fetch("https://api.github.com/users/MatGoulart3003")
    const body = await res.json() 

    return body.name
  } catch (error){
    console.log(error)
  } finally {
    console.log("Corinthians")
  }
  
}