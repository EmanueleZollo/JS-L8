// const taskAdd = (submitEvent) => {
//     submitEvent.preventDefault()
//     let form = submitEvent.target
//     let input = form.elements
// }
const Hook = document.getElementById("list") 


//  const assign = () => {
//     Hook.innerHTML = 
//     ` <ul>  
//     <li onclick=""></li> <button>ELIMINA</button>
//     </ul>`
    
// }


function assign(){
    let putWordsInside = document.getElementById("Ntask")

    Hook.innerHTML += 
    ` 
    <li onclick="completa(event)">${putWordsInside.value}</li> <button>ELIMINA</button>
    `

}

const completa = (event) => {
    console.log(event.target);
}

