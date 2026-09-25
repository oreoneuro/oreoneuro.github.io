
const panel = document.getElementById("infoPanel");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("closeButton");
const panelContent = document.getElementById("panelContent");
const rewardPort = document.getElementById("rewardPort");

const sections = {

  about: `
    <h2>About Me</h2>

    <p>
      I am Soyeon Lee, a neuroscience researcher at Korea University.
    </p>

    <p>
      My research focuses on individual differences in behavior
      and vulnerability to addiction.
    </p>

    <p>
      I am particularly interested in how decision-making,
      neural circuits, and molecular mechanisms interact
      to shape divergent behavioral trajectories.
    </p>
  `,

  question: `
    <h2>The Question</h2>

    <p>
      Why do individuals exposed to similar experiences
      diverge in their vulnerability to addiction?
    </p>

    <p>
      I am interested in studying this question across
      three levels:
    </p>

    <p>
      <strong>Decision-making</strong><br>
      How do individuals value rewards and update behavior?
    </p>

    <p>
      <strong>Neural circuits</strong><br>
      Which circuit states predispose individuals to maladaptive behavior?
    </p>

    <p>
      <strong>Molecular & epigenetic mechanisms</strong><br>
      Can biological states predict vulnerability before
      compulsive behavior emerges?
    </p>
  `,

  projects: `
    <h2>Current Projects</h2>

    <p>
      <strong>SNc → DMS dopamine and impulsivity</strong><br>
      Investigating projection-specific dopaminergic control
      of impulsive behavior.
    </p>

    <p>
      <strong>pyControl 5-CSRTT</strong><br>
      Developed an open-source behavioral platform
      for studying action impulsivity.
    </p>

    <p>
      <strong>Go / No-Go</strong><br>
      Developing a behavioral task to study response inhibition
      and decision-making.
    </p>

    <p>
      <strong>ATAC-seq</strong><br>
      Exploring publicly available epigenomic datasets
      to study biological variability.
    </p>
  `,

  cv: `
    <h2>Curriculum Vitae</h2>

    <p>
      My academic background, research experience,
      presentations, technical skills, and activities.
    </p>

    <p>
      CV PDF link will go here.
    </p>
  `,

  github: `
    <h2>GitHub</h2>

    <p>
      Code, behavioral pipelines, pyControl tasks,
      and ongoing analysis projects.
    </p>

    <p>
      GitHub profile link will go here.
    </p>
  `
};

function openPanel(sectionName) {

  panelContent.innerHTML = sections[sectionName];

  panel.classList.add("active");
  overlay.classList.add("active");
}

function closePanel() {

  panel.classList.remove("active");
  overlay.classList.remove("active");
}

document.querySelectorAll(".poke").forEach((poke) => {

  poke.addEventListener("click", () => {

    const section = poke.dataset.section;

    openPanel(section);

  });

});

rewardPort.addEventListener("click", () => {

  panelContent.innerHTML = `
    <h2>You found the reward.</h2>

    <p>
      Outside the lab, I play violin and enjoy orchestral music.
    </p>

    <p>
      Thanks for exploring my behavioral chamber.
    </p>

    <p>
      If we met at SfN, feel free to say hello.
    </p>
  `;

  panel.classList.add("active");
  overlay.classList.add("active");

});

closeButton.addEventListener("click", closePanel);

overlay.addEventListener("click", closePanel);
