const projects = [
  {
    tag: "Personal Project",
    title: "Bike Rental",
    text: "An e-commerce web app built with ReactJS.",
    skills: ["React", "Redux", "Express.js", "REST API"],
    img: "./assets/images/bike-rental-preview-1.png",
    src: "https://github.com/ralmeida094/bike-rental",
    demo: "https://almeida-bike-rental.netlify.com"
  },
  {
    tag: "Personal Project",
    title: "Countries",
    text:
      "A web app built with Vanilla JavaScript for displaying info about countries, filtered by region and/or name.",
    skills: ["JavaScript", "Sass", "REST API"],
    img: "./assets/images/countries-preview-1.png",
    src: "https://github.com/ralmeida094/countries",
    demo: "https://ralmeida094.github.io/countries/"
  },
  {
    tag: "Personal Project",
    title: "Palette",
    text:
      "A web app built with React for generating palettes of random fonts and colors fetched from the Google Fonts and Colormind REST APIs.",
    skills: ["React", "Express", "REST API"],
    img: "./assets/images/palette-preview-1.png",
    src: "https://github.com/ralmeida094/palette",
    demo: "https://ralmeida094-palette.herokuapp.com/"
  }
];

const portfolio = document.getElementById("portfolio");

const createHTMLElement = (tagName, props, children = []) => {
  const newElement = document.createElement(tagName);

  Object.keys(props).forEach(p => (newElement[p] = props[p]));
  children.forEach(child => newElement.appendChild(child));

  return newElement;
};

projects.forEach(project => {
  const tag = createHTMLElement("h6", {
    className: "project-card__tag",
    innerText: `${project.tag}`
  });

  const title = createHTMLElement("h4", {
    className: "project-card__title",
    innerText: `${project.title}`
  });

  const cardHeader = createHTMLElement(
    "div",
    {
      className: "project-card__header"
    },
    (children = [tag, title])
  );

  const description = createHTMLElement("p", {
    className: "project-card__text",
    innerText: `${project.text}`
  });

  const cardBody = createHTMLElement(
    "div",
    {
      className: "project-card__body"
    },
    (children = [description])
  );

  const linkLabelGithub = createHTMLElement("span", {
    className: "visually-hidden",
    innerText: "Source Code"
  });

  const iconGithub = createHTMLElement("img", {
    className: "icon icon--md",
    src: "../assets/svg/github.svg",
    alt: ""
  });

  const linkIconSrc = createHTMLElement(
    "a",
    {
      href: `${project.src}`,
      target: "_blank",
      rel: "noopener"
    },
    (children = [iconGithub, linkLabelGithub])
  );

  const linkLabelDemo = createHTMLElement("span", {
    className: "visually-hidden",
    innerText: "Live Demo"
  });

  const iconDemo = createHTMLElement("img", {
    className: "icon icon--md",
    src: "../assets/svg/demo.svg",
    alt: ""
  });

  const linkIconDemo = createHTMLElement(
    "a",
    {
      href: `${project.demo}`,
      target: "_blank",
      rel: "noopener"
    },
    (children = [iconDemo, linkLabelDemo])
  );

  const listItem1 = createHTMLElement(
    "li",
    {
      className: "list-item"
    },
    (children = [linkIconSrc])
  );

  const listItem2 = createHTMLElement(
    "li",
    {
      className: "list-item"
    },
    (children = [linkIconDemo])
  );

  const linksList = createHTMLElement(
    "ul",
    {
      className: "project-card__links-list"
    },
    (children = [listItem1, listItem2])
  );

  const skillsItemsArray = project.skills.map(skill =>
    createHTMLElement("li", {
      className: "list-item",
      innerText: `${skill}`
    })
  );
  const skillsList = createHTMLElement(
    "ul",
    { className: "project-card__skills-list" },
    (children = skillsItemsArray)
  );

  const cardFooter = createHTMLElement(
    "div",
    { className: "project-card__footer" },
    (children = [skillsList, linksList])
  );

  const projectCard = createHTMLElement(
    "div",
    { className: "project-card" },
    (children = [cardHeader, cardBody, cardFooter])
  );

  const projectPreview = createHTMLElement("img", {
    className: "project-img",
    src: `${project.img}`,
    alt: ""
  });

  const projectHTML = createHTMLElement(
    "div",
    { className: "project" },
    (children = [projectPreview, projectCard])
  );

  portfolio.appendChild(projectHTML);
});

// const projectHTMLTemplate = `
//     <div class="project">
//       <div class="project-img" style="background: url(); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>

//       <div class="project-card">
//         <div class="project-card__header">
//           <h6 class="project-card__tag">${project.tag}</h6>
//           <h4 class="project-card__title">${project.title}</h4>
//         </div>

//         <div class="project-card__body">
//           <p class="project-card__text">${project.text}</p>
//         </div>

//         <div class="project-card__footer">
//           <ul class="project-card__skills-list">
//             ${skillsList}
//           </ul>
//           <ul class="project-card__links-list">
//             <li class="list-item">
//               <a class="icon icon--md fab fa-github" href="${project.src}" target="_blank" rel="noopener">
//                 <span class="visually-hidden">Code</span>
//               </a>
//             </li>
//             <li class="list-item">
//               <a class="icon icon--md fas fa-external-link-alt" href="${project.demo}" target="_blank" rel="noopener">
//                 <span class="visually-hidden">Demo</span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
// `;
