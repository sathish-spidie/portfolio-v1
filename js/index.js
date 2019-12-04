const projects = [
  {
    tag: "Personal Project",
    title: "Palette",
    text:
      "A web app built with React for generating palettes of random fonts and colors fetched from the Google Fonts and Colormind REST APIs.",
    skills: ["React", "Express", "REST API"],
    img: "./assets/images/palette-preview-1.png",
    src: "https://github.com/ralmeida094/palette",
    demo: "https://ralmeida094-palette.herokuapp.com/"
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
  }
];

const portfolio = document.getElementById("portfolio");

const getBodyAlignment = alignment => {
  return alignment ? "aligned-left" : "aligned-right";
};

const getContentAlignment = alignment => {
  return alignment
    ? "flex-col--aligned-start--evenly"
    : "flex-col--aligned-end--evenly";
};

let leftAligned = true;

projects.forEach(project => {
  let skillsList = "";
  let newProject;

  project.skills.forEach(
    skill => (skillsList += `<li class="list-item">${skill}</li> `)
  );

  let imgSrc = project.img;

  newProject = `
    <div class="project">
      <div class="project-img ${getBodyAlignment(
        leftAligned
      )}" style="background: url(${imgSrc}); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>

      <div class="project-card ${getBodyAlignment(!leftAligned)}">
        <div class="project-card__header ${getContentAlignment(!leftAligned)}">
          <h6 class="project-card__tag">${project.tag}</h6>
          <h4 class="project-card__title">${project.title}</h4>
        </div>

        <div class="project-card__body">
          <p class="project-card__text">${project.text}</p>
        </div>

        <div class="project-card__footer ${getContentAlignment(!leftAligned)}">
          <ul class="project-card__skills-list flex-row--justified-end">
            ${skillsList}
          </ul>
          <ul class="project-card__links-list flex-row--justified-end">
            <li class="list-item">
              <a class="icon icon--md fab fa-github" href="${
                project.src
              }" target="_blank" rel="noreferrer">
                <span class="visually-hidden">Code</span>
              </a>
            </li>
            <li class="list-item">
              <a class="icon icon--md fas fa-external-link-alt" href="${
                project.demo
              }" target="_blank" rel="noreferrer">
                <span class="visually-hidden">Demo</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
`;

  leftAligned = !leftAligned;
  portfolio.insertAdjacentHTML("beforeend", newProject);
});
