var qtd = prompt('Type how many numbers you want')
var speed = prompt('how fast you want it? (recomended: 50 to 100')

var c1 = document.getElementById('c1')
var c2 = document.getElementById('c2')
var c3 = document.getElementById('c3')
var code

var num = 1

setInterval(function lol(){
        num++
        if(num > qtd){
                qtd = prompt('more?')
                clearInterval(lol())
        }

        let c1Item = document.createElement('li')
        let c2Item = document.createElement('li')
        let c3Item = document.createElement('li')

        c1Item.textContent = Math.random()
        c2Item.textContent = Math.random()
        c3Item.textContent = Math.random()

        c1.appendChild(c1Item)
        c2.appendChild(c2Item)
        c3.appendChild(c3Item)

        window.scrollTo(0, document.body.scrollHeight)

}, speed)