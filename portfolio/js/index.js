const projectsData = [
    {
        imageSrc: '../resources/images/pharaohz.png',
        title: 'Pharaohz Cart',
        projectLink: 'http://pharaohz.net/',
        githubLink: 'https://github.com/edomanuli/pharaohz-cart'
    },

    {
        imageSrc: '',
        title: '',
        projectLink: '',
        githubLink: ''
    },

    {
        imageSrc: '',
        title: '',
        projectLink: '',
        githubLink: ''
    },

]

const projects = () => {
    const projectContent = document.querySelector('.projects');

    projectsData.forEach((project) => {
        // Create a new card element for each project
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '18rem';

        // Create the image element
        const image = document.createElement('img');
        image.src = project.imageSrc;
        image.classList.add('card-img-top', 'projects-img');
        image.alt = 'Project Image';

        // Create the card body element
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Create the title element
        const title = document.createElement('h5');
        title.classList.add('card-title', 'projects-title');
        title.textContent = project.title;

        // Create the site link element
        const siteLink = document.createElement('a');
        siteLink.href = project.projectLink;
        siteLink.classList.add('btn', 'btn-primary', 'site-link');
        siteLink.textContent = 'Visit Site';

        // Create the GitHub link element
        const gitLink = document.createElement('a');
        gitLink.href = project.githubLink;
        gitLink.classList.add('btn', 'btn-primary', 'github');
        gitLink.textContent = 'GitHub';

        // Append elements to the card body
        cardBody.appendChild(title);
        cardBody.appendChild(siteLink);
        cardBody.appendChild(gitLink);

        // Append the image and card body to the card
        card.appendChild(image);
        card.appendChild(cardBody);

        // Append the card to the main project content
        projectContent.appendChild(card);
    });
}

projects();