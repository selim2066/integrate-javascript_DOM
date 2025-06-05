console.log("hi my name is selimreza")
const liCollection = document.getElementsByTagName('li')
for (let li of liCollection) {
    console.log(li.innerText)
}

const ss = document.querySelector('h1')
ss.style.border = '2px solid black'
ss.style.fontFamily = "Arial, sans-serif"
ss.style.padding = "20px"
ss.style.backgroundColor = "black"

const liCollections = document.querySelectorAll('ul')
for (let item of liCollections) {
    const liItems = item.querySelectorAll('li')
    for (let li of liItems) {
        li.style.color = 'white'
    }
    item.style.backgroundColor = 'green'


}
const body = document.getElementsByTagName('body')[0]
body.style.backgroundColor = 'black'
// document.body.style.backgroundColor = 'black';


// add section 

// where to add
const sect = document.getElementById('section')
const sectionN = document.createElement('section')

// what to add
sectionN.innerHTML = ` <ul>
            <li>ajke arafar din</li>
            <li>ki khobor kemon aso</li>
            <li>valo naki</li>
        </ul>`
// add the child
sect.appendChild(sectionN)