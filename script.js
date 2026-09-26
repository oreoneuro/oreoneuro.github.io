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

    <h2>Wait for the light.</h2>

    <p class="game-instruction">
      Start from the food tray. Wait. Then tap the glowing hole.
    </p>

    <div class="mini-chamber" id="gameChamber">

      <div class="game-holes">

        <button class="game-hole" data-hole="1">
          <span class="game-led"></span>
        </button>

        <button class="game-hole" data-hole="2">
          <span class="game-led"></span>
        </button>

        <button class="game-hole" data-hole="3">
          <span class="game-led"></span>
        </button>

        <button class="game-hole" data-hole="4">
          <span class="game-led"></span>
        </button>

        <button class="game-hole" data-hole="5">
          <span class="game-led"></span>
        </button>

      </div>

      <button class="game-tray" id="gameTray">
        FOOD TRAY
      </button>

    </div>

    <p class="game-status" id="gameStatus">
      Tap the food tray to start trial 1.
    </p>

    <div class="trial-progress" id="trialProgress"></div>
  `;

  initGame();
}

const GAME_CONFIG = {
  trials: 5,

  itiOptions: [
    1500,
    2000,
    2500,
    3000,
    3500,
    4000
  ],

  stimulusDuration: 1000,

  limitedHold: 2000,

  timeout: 2000
};


let gameState = null;
let gameTimers = [];


function clearGameTimers() {

  gameTimers.forEach(clearTimeout);

  gameTimers = [];
}


function gameLater(fn, ms) {

  const timer = setTimeout(fn, ms);

  gameTimers.push(timer);
}


function initGame() {

  clearGameTimers();

  gameState = {

    phase: "await",

    trial: 0,

    trials: [],

    cue: null,

    cueTime: null

  };


  document
    .querySelectorAll(".game-hole")
    .forEach((hole) => {

      hole.addEventListener("click", () => {

        handleHole(
          Number(hole.dataset.hole)
        );

      });

    });


  document
    .getElementById("gameTray")
    .addEventListener(
      "click",
      handleTray
    );


  updateTrialProgress();
}

function handleTray() {

  if (
    gameState.phase !== "await" &&
    gameState.phase !== "reward"
  ) {
    return;
  }


  if (
    gameState.trial >=
    GAME_CONFIG.trials
  ) {

    finishGame();

    return;
  }


  gameState.trial++;

  gameState.phase = "iti";


  setGameStatus(
    "Wait for the light…"
  );


  updateTrialProgress();


  const iti =
    GAME_CONFIG.itiOptions[
      Math.floor(
        Math.random() *
        GAME_CONFIG.itiOptions.length
      )
    ];


  gameLater(() => {

    showCue();

  }, iti);
}

function showCue() {

  gameState.phase = "cue";

  gameState.cue =
    Math.floor(Math.random() * 5) + 1;

  gameState.cueTime =
    performance.now();


  const hole =
    document.querySelector(
      `.game-hole[data-hole="${gameState.cue}"]`
    );


  hole.classList.add("cue");


  setGameStatus(
    "Now!"
  );


  gameLater(() => {

    hole.classList.remove("cue");

  }, GAME_CONFIG.stimulusDuration);


  gameLater(() => {

    if (gameState.phase === "cue") {

      recordTrial(
        "omission"
      );

      startTimeout(
        "Missed it."
      );

    }

  }, GAME_CONFIG.limitedHold);
}

function handleHole(holeNumber) {

  const hole =
    document.querySelector(
      `.game-hole[data-hole="${holeNumber}"]`
    );


  hole.classList.add("poked");

  setTimeout(() => {

    hole.classList.remove("poked");

  }, 100);


  /* Premature response */

  if (
    gameState.phase === "iti"
  ) {

    clearGameTimers();

    recordTrial(
      "premature"
    );

    startTimeout(
      "Too early!"
    );

    return;
  }


  /* Response after cue */

  if (
    gameState.phase === "cue"
  ) {

    clearGameTimers();


    document
      .querySelectorAll(".game-hole")
      .forEach((h) =>
        h.classList.remove("cue")
      );


    const reactionTime =
      performance.now() -
      gameState.cueTime;


    if (
      holeNumber ===
      gameState.cue
    ) {

      recordTrial(
        "correct",
        reactionTime
      );


      gameState.phase =
        "reward";


      setGameStatus(
        `Correct — ${Math.round(
          reactionTime
        )} ms. Collect the reward.`,
        "good"
      );


      document
        .getElementById("gameTray")
        .classList.add("reward");


    } else {

      recordTrial(
        "incorrect",
        reactionTime
      );


      startTimeout(
        "Wrong hole."
      );

    }

  }

}

function recordTrial(
  outcome,
  reactionTime = null
) {

  gameState.trials.push({

    outcome,

    reactionTime

  });


  updateTrialProgress();
}


function startTimeout(message) {

  gameState.phase =
    "timeout";


  document
    .getElementById(
      "gameChamber"
    )
    .classList.add("timeout");


  setGameStatus(
    message + " Lights off.",
    "bad"
  );


  gameLater(() => {

    document
      .getElementById(
        "gameChamber"
      )
      .classList.remove(
        "timeout"
      );


    if (
      gameState.trial >=
      GAME_CONFIG.trials
    ) {

      finishGame();

      return;
    }


    gameState.phase =
      "await";


    setGameStatus(
      `Tap the food tray to start trial ${
        gameState.trial + 1
      }.`
    );


  }, GAME_CONFIG.timeout);
}

document
  .getElementById("gameTray")
  .classList.remove("reward");

function setGameStatus(
  message,
  type = ""
) {

  const status =
    document.getElementById(
      "gameStatus"
    );


  status.textContent =
    message;


  status.className =
    "game-status " +
    type;
}


function updateTrialProgress() {

  const container =
    document.getElementById(
      "trialProgress"
    );


  if (!container) return;


  container.innerHTML = "";


  for (
    let i = 0;
    i < GAME_CONFIG.trials;
    i++
  ) {

    const dot =
      document.createElement(
        "span"
      );


    if (
      gameState.trials[i]
    ) {

      dot.classList.add(
        gameState.trials[i]
          .outcome
      );

    } else if (
      i === gameState.trial - 1
    ) {

      dot.classList.add(
        "current"
      );

    }


    container.appendChild(
      dot
    );
  }
}

function finishGame() {

  clearGameTimers();

  gameState.phase =
    "done";


  const premature =
    gameState.trials.filter(
      t =>
        t.outcome ===
        "premature"
    ).length;


  const correct =
    gameState.trials.filter(
      t =>
        t.outcome ===
        "correct"
    );


  const incorrect =
    gameState.trials.filter(
      t =>
        t.outcome ===
        "incorrect"
    ).length;


  const omissions =
    gameState.trials.filter(
      t =>
        t.outcome ===
        "omission"
    ).length;


  const meanRT =
    correct.length
      ? Math.round(
          correct.reduce(
            (sum, t) =>
              sum +
              t.reactionTime,
            0
          ) /
          correct.length
        )
      : null;


  showGameResult({

    premature,

    correct:
      correct.length,

    incorrect,

    omissions,

    reactionTime:
      meanRT

  });
}

function showGameResult(result) {

  panelContent.innerHTML = `

    <p class="panel-kicker">
      YOUR RESULT
    </p>

    <h2>
      Subject complete.
    </h2>

    <div class="result-grid">

      <div>
        <strong>
          ${result.premature}
        </strong>

        <span>
          PREMATURE
        </span>
      </div>


      <div>
        <strong>
          ${result.correct}/5
        </strong>

        <span>
          CORRECT
        </span>
      </div>


      <div>
        <strong>
          ${
            result.reactionTime
            ? result.reactionTime +
              " ms"
            : "—"
          }
        </strong>

        <span>
          MEAN RT
        </span>
      </div>

    </div>


    <p class="result-note">
      Your rank among SfN players
      will appear here.
    </p>


    <button
      class="panel-button"
      onclick="startGame()"
    >
      Play again
    </button>

  `;
}
