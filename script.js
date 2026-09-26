const panel = document.getElementById("infoPanel");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("closeButton");
const panelContent = document.getElementById("panelContent");
const rewardPort = document.getElementById("rewardPort");

const sections = {

  play: `
    <p class="panel-kicker">PLAY</p>

    <h2>Can you wait for the light?</h2>

    <p>
      Try a short behavioral task inspired by the 5-choice serial reaction time task.
    </p>

    <p>
      Wait for the stimulus, respond when it appears,
      and see how your response profile compares with other SfN visitors.
    </p>

    <button class="panel-button" onclick="startGame()">
      Start the task
    </button>
  `,

  question: `
    <p class="panel-kicker">THE QUESTION</p>

    <h2>
      Why do individuals diverge in their vulnerability to addiction?
    </h2>

    <p>
      Individuals exposed to similar experiences can follow very different behavioral trajectories.
    </p>

    <p>
      I am interested in understanding where those differences come from,
      and whether vulnerability can be detected before compulsive behavior emerges.
    </p>

    <div class="mini-grid">

      <div>
        <strong>Decision-making</strong>
        <p>How do individuals value rewards and update behavior?</p>
      </div>

      <div>
        <strong>Neural circuits</strong>
        <p>Which circuit states promote resilient or maladaptive trajectories?</p>
      </div>

      <div>
        <strong>Molecular & epigenetic states</strong>
        <p>Can biological differences predict vulnerability?</p>
      </div>

    </div>
  `,

  research: `
    <p class="panel-kicker">CURRENT RESEARCH</p>

    <h2>What I work on</h2>

    <div class="project-card">
      <h3>SNc → DMS dopamine & impulsivity</h3>
      <p>
        Studying how projection-specific dopaminergic signaling contributes
        to distinct dimensions of impulsive behavior.
      </p>

      <div class="tags">
        <span>Dopamine</span>
        <span>Fiber photometry</span>
        <span>DREADDs</span>
        <span>5-CSRTT</span>
      </div>
    </div>

    <div class="project-card">
      <h3>pyControl behavioral platforms</h3>
      <p>
        Building and adapting behavioral tasks for studying
        action impulsivity, response inhibition, and decision-making.
      </p>

      <div class="tags">
        <span>pyControl</span>
        <span>Python</span>
        <span>5-CSRTT</span>
        <span>Go/No-go</span>
      </div>
    </div>

    <div class="project-card">
      <h3>Epigenomic exploration</h3>
      <p>
        Beginning to explore publicly available ATAC-seq datasets
        to study biological variability related to vulnerability.
      </p>

      <div class="tags">
        <span>ATAC-seq</span>
        <span>Epigenomics</span>
        <span>Public datasets</span>
      </div>
    </div>
  `,

  next: `
    <p class="panel-kicker">WHERE I'M GOING</p>

    <h2>
      From behavioral differences to biological vulnerability
    </h2>

    <p>
      My current work began with a question about heterogeneity within impulsive behavior.
    </p>

    <p>
      I now want to extend that question across individuals:
      why do some subjects remain flexible while others progress toward
      persistent and compulsive behavior?
    </p>

    <p class="big-question">
      Can we identify vulnerability before the transition happens?
    </p>

    <p>
      I am especially interested in approaching this through
      decision-making, circuit dynamics, and molecular or epigenetic mechanisms.
    </p>
  `,

  connect: `
    <p class="panel-kicker">CONNECT</p>

    <h2>Let’s talk at SfN.</h2>

    <p>
      I’m Soyeon Lee, a neuroscience researcher at Korea University
      preparing for PhD applications for Fall 2027.
    </p>

    <div class="link-stack">

      <a href="#" target="_blank">CV</a>

      <a href="https://github.com/oreoneuro" target="_blank">
        GitHub
      </a>

      <a href="mailto:soyeonia21@korea.ac.kr">
        Email
      </a>

      <a href="#" target="_blank">
        LinkedIn
      </a>

    </div>

    <p class="poster-note">
      SfN poster details coming soon.
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
    <p class="panel-kicker">COMMUNITY</p>

    <h2>Reward collected.</h2>

    <p>
      Compare your score with other SfN visitors.
    </p>

    <div class="leaderboard-preview">

      <div>
        <span>#1</span>
        <strong>Subject 018</strong>
      </div>

      <div>
        <span>#2</span>
        <strong>Subject 041</strong>
      </div>

      <div>
        <span>#3</span>
        <strong>Subject 007</strong>
      </div>

    </div>

    <p>
      The full leaderboard will appear here once the playable task is connected.
    </p>
  `;

  panel.classList.add("active");
  overlay.classList.add("active");
});


closeButton.addEventListener("click", closePanel);
overlay.addEventListener("click", closePanel);


function startGame() {

  panelContent.innerHTML = `
    <p class="panel-kicker">PLAY</p>

    <h2>Game prototype coming next.</h2>

    <p>
      This button will open the interactive 5-CSRTT-inspired task.
    </p>

    <p>
      Next step: stimulus timing, premature responses,
      reaction time scoring, and leaderboard submission.
    </p>
  `;
}
