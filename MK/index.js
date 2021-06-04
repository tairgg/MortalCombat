let player1 = {
name:'SCORPION',
hp:'50',
img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
weapon:'sword',
attack:function(name){
    console.log(name+ `Fight...`)
}


}
let player2 = {
    name:'SUB-ZERO',
    hp:'80',
    img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon:'sword',
    attack:function(name){
        console.log(name+ `Fight...`)
    }
    
    
    }


function createPlayer(playerOne,person,health,imgOne)
 {
    const arenas = document.querySelector('.arenas')
    const player1 = document.createElement('div')
    player1.classList.add(playerOne)
    arenas.appendChild(player1)
    const progressbar = document.createElement('div')
    progressbar.classList.add('progressbar')
    player1.appendChild(progressbar)

  

    const character= document.createElement('div')
    character.classList.add('character')
    player1.appendChild(character)


    const life = document.createElement('div')
    life.classList.add('life')
    life.style.width=health+'px' ;
    progressbar.appendChild(life)

    const name = document.createElement('div')
    name.classList.add('name')
    name.innerText = person;
    progressbar.appendChild(name)

    const img = document.createElement('img')
    img.src = imgOne;
    character.appendChild(img)

     }

     createPlayer('player1', player1.name, player1.hp,player1.img);
     




     function createPlayer(playerTwo,person,health,imgTwo)
     {
    const arenas = document.querySelector('.arenas')
    const player2 = document.createElement('div')
    player2.classList.add(playerTwo)
    arenas.appendChild(player2)
    const progressbar = document.createElement('div')
    progressbar.classList.add('progressbar')
    player2.appendChild(progressbar)

  

    const character= document.createElement('div')
    character.classList.add('character')
    player2.appendChild(character)


    const life = document.createElement('div')
    life.classList.add('life')
    life.style.width=health+'px' ;
    progressbar.appendChild(life)

    const name = document.createElement('div')
    name.classList.add('name')
    name.innerHTML = person;
    progressbar.appendChild(name)

    const img2 = document.createElement('img')
    img2.src = imgTwo
    character.appendChild(img2)

     }

     createPlayer('player2', player2.name, player2.hp,player2.img);