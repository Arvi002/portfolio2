
// LOGO //

const logo = ["Arvi's Portfolio"];

document.getElementById("logo").textContent = logo[0];


// NAVIGATION //


const navItems = [

    {name:"Home",link:"#hero"},
    {name:"About",link:"#about"},
    {name:"Projects",link:"#projects"},
    {name:"Contact",link:"#contact"}

];

const navContainer = document.getElementById("nav-links");

navItems.forEach(item=>{

    const li = document.createElement("li");

    const a = document.createElement("a");

    a.textContent = item.name;

    a.href = item.link;

    li.appendChild(a);

    navContainer.appendChild(li);

});



// HERO //


const heroData = [

{
title:"Hello, I'm Mark Arvi Carmelotes",
subtitle:"Third-Year Information Technology Student | Web Developer | Football Player"
}

];

const heroContainer = document.getElementById("hero-container");

heroData.forEach(hero=>{

    const h1 = document.createElement("h1");

    h1.className = "hero-title";

    h1.textContent = hero.title;

    const p = document.createElement("p");

    p.className = "hero-subtitle";

    p.textContent = hero.subtitle;

    heroContainer.appendChild(h1);

    heroContainer.appendChild(p);

});



// ABOUT //


const aboutData = [

{
title:"About Me",

description:"I am a 20-year-old third-year Information Technology student at Consolatrix College of Toledo City. I have a passion for web development, programming, and creating interactive websites and applications. I enjoy learning new technologies and continuously improving my coding skills through personal projects and hands-on practice. Outside of academics, I love playing football, exploring new games, and spending my free time playing Wuthering Waves (WuWa). I also enjoy watching football matches, keeping up with the latest technology trends, and challenging myself to become a better developer. My goal is to continue expanding my knowledge in software development and build innovative solutions that can make a positive impact."

}

];

const aboutContainer = document.getElementById("about-container");

aboutData.forEach(item=>{

    const h2 = document.createElement("h2");

    h2.textContent = item.title;

    const p = document.createElement("p");

    p.className = "about-text";

    p.textContent = item.description;

    aboutContainer.appendChild(h2);

    aboutContainer.appendChild(p);

});



// PROJECTS & HOBBIES //


const projects = [

{
title:"Portfolio Website",
description:"Created a personal portfolio using HTML, CSS and JavaScript."
},

{
title:"Football",
description:"One of my favorite hobbies and sports."
},

{
title:"Wuthering Waves",
description:"A game I enjoy playing during my free time."
},

{
title:"Java Programming",
description:"Learning Java and improving programming skills."
},

{
title:"Web Development",
description:"Building responsive and interactive websites."
},

{
title:"Data Structures",
description:"Studying algorithms and efficient coding techniques."
}

];

const projectsContainer = document.getElementById("projects-container");

const projectTitle = document.createElement("h2");

projectTitle.textContent = "Projects & Hobbies";

projectTitle.style.width = "100%";

projectTitle.style.textAlign = "center";

projectsContainer.appendChild(projectTitle);

projects.forEach(project=>{

    const card = document.createElement("div");

    card.className = "card";

    const h3 = document.createElement("h3");

    h3.textContent = project.title;

    const p = document.createElement("p");

    p.textContent = project.description;

    card.appendChild(h3);

    card.appendChild(p);

    projectsContainer.appendChild(card);

});



// CONTACT //


const contacts = [

{
label:"Email",
value:"markcarmelotes34@email.com",
link:"mailto:markcarmelotes34@email.com"
},

{
label:"Facebook",
value:"Arvi Carmelotes",
link:"https://facebook.com"
},

{
label:"GitHub",
value:"github.com/Markcarmelotes",
link:"https://github.com/Markcarmelotes"
}

];

const contactContainer = document.getElementById("contact-container");

const contactTitle = document.createElement("h2");

contactTitle.textContent = "Contact Me";

contactContainer.appendChild(contactTitle);

contacts.forEach(contact=>{

    const p = document.createElement("p");

    p.className = "contact-item";

    const strong = document.createElement("strong");

    strong.textContent = contact.label + ": ";

    const a = document.createElement("a");

    a.href = contact.link;

    a.target = "_blank";

    a.textContent = contact.value;

    p.appendChild(strong);

    p.appendChild(a);

    contactContainer.appendChild(p);

});



// FOOTER //

const footerData = [

{
text:"© 2026 Arvi's Portfolio | Consolatrix College of Toledo City | BSIT Third Year"
}

];

const footerContainer = document.getElementById("footer-container");

footerData.forEach(item=>{

    const p = document.createElement("p");

    p.textContent = item.text;

    footerContainer.appendChild(p);

});