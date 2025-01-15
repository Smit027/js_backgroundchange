
// const buton = document.querySelectorAll('.button')
// const bg_change= document.querySelector('body')

// buton.forEach(function(buton){
//     buton.addEventListener('click',function(e){
//         console.log(e.target)

//         function colorchnge(){
//             bg_change.style.backgroundColor = e.target.id      
//         }
//         if(e.target.id === 'grey'){

//             colorchnge() 
//         }
//         if(e.target.id === 'white'){
//             colorchnge() 
//         }
//     })
// })

const buton= document.querySelectorAll('.button')
const body = document.querySelector('body')

body.style.backgroundColor ='red'   

buton.forEach((select)=> {
    console.log(select)
    select.addEventListener('click',function(e){
        console.log(e.target)
        
        if(e.target.id ==='grey'){
            body.style.backgroundColor =e.target.id
        }
        if(e.target.id ==='white'){
            body.style.backgroundColor =e.target.id
        }
        if(e.target.id ==='blue'){
            body.style.backgroundColor =e.target.id
        } 
        if(e.target.id ==='yellow'){
            body.style.backgroundColor =e.target.id
        } 
        if(e.target.id ==='purple'){
            body.style.backgroundColor =e.target.id
        } 
    })
})


