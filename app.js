let h3= document.querySelector('h3')
let inp=document.querySelector('input')
let ul=document.querySelector('ul')
let btn=document.querySelector('button')


btn.addEventListener('click',function(){
    let li=document.createElement('li')
 li.innerText=inp.value;
 ul.appendChild(li)

let delbtn=document.createElement("button")
 delbtn.innerText="Button"
 delbtn.classList.add(".delbtn")
 li.appendChild(delbtn)
 inp.value="";

})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
      let listItem=event.target.parentElement;
      console.log(listItem)
      listItem.remove()

    }
})

