/***************** refactoring projects section***************** */

const projects = [
    {
      tittle:'Profesional Art Printing Data More',
      paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
      languages: ['html', 'boostrap', 'Ruby'],
      seeBtn: 'See Project'
    },
  
    {
      tittle:'Profesional Art Printing Data More',
      paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
      languages: ['html', 'boostrap', 'Ruby'],
      seeBtn: 'See Project'
    },
  
    {
      tittle:'Profesional Art Printing Data More',
      paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
      languages: ['html', 'boostrap', 'Ruby'],
      seeBtn: 'See Project'
    },
  
    {
      tittle:'Profesional Art Printing Data More',
      paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
      languages: ['html', 'boostrap', 'Ruby'],
      seeBtn: 'See Project'
    },
  
    {
      tittle:'Profesional Art Printing Data More',
      paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
      languages: ['html', 'boostrap', 'Ruby'],
      seeBtn: 'See Project'
    },
  
    {
      tittle:'Profesional Art Printing Data More',
      paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
      languages: ['html', 'boostrap', 'Ruby'],
      seeBtn: 'See Project'
    }
]
  
let cardWorks = document.querySelector('.card-works');

projects.forEach((project, index) => {
    
    // Create the elements
    let cardContainer = document.createElement('div');
    let projectTittle = document.createElement('h2');
    let projectDescrption = document.createElement('p');
    let ul = document.createElement('ul');
    let button = document.createElement('button');
    const cardClassName = `container-${(index % 3) +1}`;

    // Giving clasess
    cardContainer.classList.add(cardClassName);
    projectTittle.classList.add('project-tittle');
    projectDescrption.classList.add('project-description');
    ul.classList.add('project-tools');
    button.classList.add('project-button');

    // Assing values 
    projectTittle.textContent = project.tittle;
    projectDescrption.textContent = project.paragraph;
    button.textContent = project.seeBtn;

    project.languages.forEach((language) => {
        let li = document.createElement('li');
        li.classList.add('project-tools-list');
        li.textContent = language;
        ul.appendChild(li);
    })

    /* Append elements to cardContainer */
    cardContainer.appendChild(projectTittle);
    cardContainer.appendChild(projectDescrption);
    cardContainer.appendChild(ul);
    cardContainer.appendChild(button);

    cardWorks.appendChild(cardContainer);

})