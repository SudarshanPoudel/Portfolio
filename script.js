// Thank you poge connect
str =  window.location.toString()
document.querySelector('#thank-you-page').value = str.replace('index', 'thanks')


// Easy to change Skills and projects
// Skills
skills = [
    {
        logo : '<i class="fa-solid fa-microchip"></i>',
        name : "Artificial Intellligence",
        detail : "I'm currently learning Data science, Machine learning and Natural language processing with python."
    },
    {
        logo : '<i class="fa-solid fa-code"></i>',
        name : "Frontend Devlopment",
        detail : "I've a great experties in HTML, CSS, JavaScript as well good knowledge of frameworks like Tailwind CSS, Bootstrap etc."
    },
    {
        logo : '<i class="fa-solid fa-server"></i>',
        name : "Other Skills",
        detail : "I've a basic knowledge of backend devlopment with PHP and MySQL as well as app devlopment with React Native"
    }
]

projects = [
    {
        image : 'project1.jpeg',
        name : 'Screen Score',
        detail: 'Complete Frontend Movie Website.',
        codelink: 'https://github.com/SudarshanPoudel/ScreenScore',
        demolink : 'https://sudarshanpoudel.github.io/ScreenScore/Html/homepage.html'
    },

]






let skillBox = document.querySelector('#skill-container')
skillBox.innerHTML = ''
skills.forEach(e => {
    let box = document.createElement('div');
    box.className = 'skill-box'
    box.innerHTML =`${e.logo} <h3>${e.name}</h3> <p>${e.detail}</p>`
    skillBox.appendChild(box)
});


let projectBox = document.querySelector('#project-container')
projectBox.innerHTML = ''

projects.forEach(e =>{
    let box = document.createElement('div');
    box.className = 'project-box'
    box.innerHTML = 
    `<div class="image"><img src="images/${e.image}" alt="${e.name}"></div>
    <div class="bg-blur"></div>
    <h3>${e.name}</h3>
    <p>${e.detail}</p>
    <div class="links">
        <a href="${e.codelink}"><i class="fa-solid fa-code"></i></a>
        <a href="${e.demolink}"><i class="fa-solid fa-link"></i></a>
    </div>`
    projectBox.appendChild(box)

})
