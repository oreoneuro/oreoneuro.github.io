/* =========================================
   BASIC DOM
   ========================================= */

const panel =
  document.getElementById(
    "infoPanel"
  );

const overlay =
  document.getElementById(
    "overlay"
  );

const closeButton =
  document.getElementById(
    "closeButton"
  );

const panelContent =
  document.getElementById(
    "panelContent"
  );

const communityPort =
  document.getElementById(
    "communityPort"
  );


const gameModal =
  document.getElementById(
    "gameModal"
  );

const gameClose =
  document.getElementById(
    "gameClose"
  );



/* =========================================
   PORTFOLIO CONTENT
   ========================================= */

const sections = {

question: `

  <p class="panel-kicker">
    THE QUESTION
  </p>

  <h2>
    Why do similar individuals
    end up behaving so differently?
  </h2>

  <p>
    I am interested in the variability that is easy to average away.
  </p>

  <p>
    When individuals experience similar environments or manipulations
    but follow different behavioral trajectories,
    I want to know whether that difference is simply noise —
    or the beginning of the biological question.
  </p>

  <p class="big-question">
    Why do some individuals become vulnerable to compulsive behavior,
    while others remain flexible?
  </p>

  <p>
    I want to approach this question across three levels.
  </p>

  <div class="mini-grid">

    <div>
      <strong>
        Decision-making
      </strong>

      <p>
        How do individuals value rewards,
        learn from consequences,
        and update their behavior?
      </p>
    </div>

    <div>
      <strong>
        Neural circuits
      </strong>

      <p>
        Which circuit states bias individuals
        toward resilient or maladaptive trajectories?
      </p>
    </div>

    <div>
      <strong>
        Molecular & epigenetic states
      </strong>

      <p>
        Can biological differences reveal vulnerability
        before compulsive behavior emerges?
      </p>
    </div>

  </div>

`,

 research: `

  <p class="panel-kicker">
    RESEARCH
  </p>

  <h2>
    One question kept leading to another.
  </h2>

  <div class="research-story">

    <div class="story-step">

      <span class="story-number">
        01
      </span>

      <div>
        <h3>
          Is impulsivity one thing?
        </h3>

        <p>
          My current work began by asking whether distinct forms
          of impulsivity share the same neural mechanism.
        </p>
      </div>

    </div>


    <div class="story-arrow">
      ↓
    </div>


    <div class="story-step">

      <span class="story-number">
        02
      </span>

      <div>
        <h3>
          What does dopamine contribute?
        </h3>

        <p>
          I study how the SNc→DMS dopaminergic projection
          contributes to impulsive behavior using circuit manipulation,
          behavioral phenotyping and fiber photometry.
        </p>

        <div class="tags">
          <span>SNc → DMS</span>
          <span>Dopamine</span>
          <span>DREADDs</span>
          <span>Fiber photometry</span>
        </div>
      </div>

    </div>


    <div class="story-arrow">
      ↓
    </div>


    <div class="story-step">

      <span class="story-number">
        03
      </span>

      <div>
        <h3>
          Why do individuals diverge?
        </h3>

        <p>
          Studying different dimensions of impulsivity made me increasingly
          interested in heterogeneity itself:
          why similar subjects can follow very different behavioral trajectories.
        </p>
      </div>

    </div>


    <div class="story-arrow">
      ↓
    </div>


    <div class="story-step future">

      <span class="story-number">
        ?
      </span>

      <div>
        <h3>
          Can we detect vulnerability before compulsion emerges?
        </h3>

        <p>
          This is the question I hope to pursue in addiction research —
          connecting behavior and decision-making with circuit dynamics
          and molecular or epigenetic states.
        </p>
      </div>

    </div>

  </div>

`,
 build: `

  <p class="panel-kicker">
    HOW I WORK
  </p>

  <h2>
    If the tool I need doesn't exist,
    I like building it.
  </h2>

  <p>
    When my lab needed a way to measure action impulsivity,
    I built a pyControl-based 5-CSRTT platform from open-source hardware.
  </p>

  <p>
    That meant assembling the system,
    soldering and troubleshooting electronics,
    implementing the behavioral task,
    debugging training stages,
    and building the Python analysis pipeline.
  </p>

  <p>
    The platform is now used for 5-CSRTT experiments across the lab,
    and I am extending it with a Go/No-go task
    to study response inhibition and decision-making.
  </p>


  <div class="build-flow">

    <span>
      Question
    </span>

    <i>→</i>

    <span>
      Build
    </span>

    <i>→</i>

    <span>
      Debug
    </span>

    <i>→</i>

    <span>
      Measure
    </span>

    <i>→</i>

    <span>
      Ask again
    </span>

  </div>


  <div class="build-buttons">

    <button
      class="panel-button"
      id="seeRigButton"
      type="button"
    >
      See the rig
    </button>

    <a
      class="panel-button secondary"
      href="https://github.com/oreoneuro"
      target="_blank"
      rel="noopener noreferrer"
    >
      View code on GitHub
    </a>

  </div>

`,

 connect: `

  <p class="panel-kicker">
    CONNECT
  </p>

  <h2>
    Let's continue the conversation.
  </h2>

  <p>
    I'm Soyeon Lee, an M.S. researcher at Korea University
    interested in individual differences in addiction vulnerability.
  </p>

  <p>
    I am exploring neuroscience PhD opportunities for Fall 2027
    and would especially love to talk about
    decision-making, addiction circuits,
    behavioral variability, or epigenetic vulnerability.
  </p>

  <div class="link-stack">

    <a
      href="assets/Soyeon_Lee_CV.pdf"
      target="_blank"
    >
      Curriculum Vitae ↗
    </a>

    <a
      href="https://github.com/oreoneuro"
      target="_blank"
    >
      GitHub ↗
    </a>

    <a
      href="mailto:soyeonia21@korea.ac.kr"
    >
      Email ↗
    </a>

    <a
      href="#"
      target="_blank"
    >
      LinkedIn ↗
    </a>

  </div>


  <p class="sfn-note">
    At SfN 2026?<br>
    Find me at Poster [session / board].
  </p>

`,


/* =========================================
   SIDE PANEL
   ========================================= */

function openPanel(
  sectionName
) {

  panelContent.innerHTML =
    sections[
      sectionName
    ];

  panel.classList.add(
    "active"
  );

  overlay.classList.add(
    "active"
  );
}



function closePanel() {

  panel.classList.remove(
    "active"
  );

  overlay.classList.remove(
    "active"
  );
}



document
  .querySelectorAll(
    ".portfolio-poke"
  )
  .forEach(
    poke => {

      poke.addEventListener(
        "click",
        () => {

          const section =
            poke.dataset.section;


          if (
            section ===
            "play"
          ) {

            openGame();

          } else {

            openPanel(
              section
            );

          }

        }
      );

    }
  );


closeButton.addEventListener(
  "click",
  closePanel
);


overlay.addEventListener(
  "click",
  closePanel
);



/* =========================================
   COMMUNITY PLACEHOLDER
   ========================================= */

communityPort.addEventListener(
  "click",
  () => {

    panelContent.innerHTML = `

      <p class="panel-kicker">
        COMMUNITY
      </p>

      <h2>
        SfN leaderboard
      </h2>

      <p>
        Player scores will eventually appear here
        so you can compare your result
        with other SfN visitors.
      </p>

      <p>
        The next step is connecting the site
        to a shared database so scores from
        different phones can be ranked together.
      </p>

    `;

    panel.classList.add(
      "active"
    );

    overlay.classList.add(
      "active"
    );

  }
);



/* =========================================
   GAME CONFIG
   ========================================= */

const CFG = {

  n: 5,

  itis: [
    1500,
    2000,
    2500,
    3000,
    3500,
    4000
  ],

  sd:
    1000,

  lh:
    2000,

  timeout:
    2000
};



/* =========================================
   BUILD FIVE HOLES
   ========================================= */

const gWall =
  document.getElementById(
    "gWall"
  );


const gChamber =
  document.getElementById(
    "gChamber"
  );


const gMag =
  document.getElementById(
    "gMag"
  );


const gStatus =
  document.getElementById(
    "gStatus"
  );


const gTicks =
  document.getElementById(
    "gTicks"
  );


const gameResults =
  document.getElementById(
    "gameResults"
  );


const gHoles = [];


function buildGameWall() {

  gWall.innerHTML =
    "";

  gHoles.length =
    0;


  for (
    let i = 1;
    i <= 5;
    i++
  ) {

    const wrap =
      document.createElement(
        "div"
      );

    wrap.className =
      "hole-wrap";


    const hole =
      document.createElement(
        "button"
      );

    hole.type =
      "button";

    hole.className =
      "hole";

    hole.dataset.hole =
      i;


    const led =
      document.createElement(
        "span"
      );

    led.className =
      "led";


    const number =
      document.createElement(
        "span"
      );

    number.className =
      "hole-n";

    number.textContent =
      i;


    hole.appendChild(
      led
    );

    wrap.appendChild(
      hole
    );

    wrap.appendChild(
      number
    );

    gWall.appendChild(
      wrap
    );

    gHoles.push(
      hole
    );


    hole.addEventListener(
      "click",
      () =>
        onHole(
          i
        )
    );

  }

}


buildGameWall();



/* =========================================
   GAME STATE
   ========================================= */

let T;

let timers = [];


function later(
  fn,
  ms
) {

  const id =
    setTimeout(
      fn,
      ms
    );

  timers.push(
    id
  );
}



function clearTimers() {

  timers.forEach(
    clearTimeout
  );

  timers =
    [];
}



/* =========================================
   OPEN / CLOSE GAME
   ========================================= */

function openGame() {

  closePanel();

  resetTask();

  gameModal.classList.add(
    "active"
  );

  gameModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";
}



function closeGame() {

  clearTimers();

  gameModal.classList.remove(
    "active"
  );

  gameModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";
}


gameClose.addEventListener(
  "click",
  closeGame
);

const rigModal =
  document.getElementById(
    "rigModal"
  );

const rigClose =
  document.getElementById(
    "rigClose"
  );

function openRigGallery() {

  rigModal.classList.add(
    "active"
  );

  rigModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";
}


function closeRigGallery() {

  rigModal.classList.remove(
    "active"
  );

  rigModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";
}

panelContent.addEventListener(
  "click",
  event => {

    if (
      event.target.id ===
      "seeRigButton"
    ) {

      openRigGallery();

    }

  }
);

rigClose.addEventListener(
  "click",
  closeRigGallery
);

if (
  rigModal.classList.contains(
    "active"
  )
) {

  closeRigGallery();

  return;
}


/* =========================================
   STATUS
   ========================================= */

function setStatus(
  message,
  state = ""
) {

  gStatus.textContent =
    message;

  gStatus.className =
    "game-status " +
    state;
}



/* =========================================
   TRIAL RASTER
   ========================================= */

function renderTicks() {

  gTicks.innerHTML =
    "";


  for (
    let i = 0;
    i < CFG.n;
    i++
  ) {

    const tick =
      document.createElement(
        "span"
      );

    tick.className =
      "tick";


    if (
      T.trials[i]
    ) {

      tick.classList.add(
        T.trials[i]
          .outcome
      );

    } else if (
      i ===
      T.trial - 1 &&
      T.phase !==
      "done"
    ) {

      tick.classList.add(
        "current"
      );

    }


    gTicks.appendChild(
      tick
    );

  }

}



/* =========================================
   RESET
   ========================================= */

function resetTask() {

  clearTimers();


  T = {

    phase:
      "await",

    trial:
      0,

    trials:
      [],

    cue:
      null,

    cueAt:
      null

  };


  gHoles.forEach(
    hole => {

      hole.classList.remove(
        "cue"
      );

      hole.classList.remove(
        "poked"
      );

    }
  );


  gChamber.classList.remove(
    "house"
  );

  gChamber.classList.remove(
    "dark"
  );


  gMag.classList.remove(
    "has-pellet"
  );


  gMag.classList.add(
    "ready"
  );


  gameResults.hidden =
    true;


  setStatus(
    "Tap the food tray to start trial 1."
  );


  renderTicks();
}



/* =========================================
   FOOD TRAY
   ========================================= */

function onMagazine() {

  if (
    T.phase !==
      "await" &&
    T.phase !==
      "reward"
  ) {

    return;
  }


  gMag.classList.remove(
    "has-pellet"
  );


  if (
    T.trial >=
    CFG.n
  ) {

    finishGame();

    return;
  }


  T.trial +=
    1;


  T.phase =
    "iti";


  gMag.classList.remove(
    "ready"
  );


  gChamber.classList.add(
    "house"
  );


  setStatus(
    "Wait for the light…"
  );


  renderTicks();


  const iti =

    CFG.itis[

      Math.floor(
        Math.random() *
        CFG.itis.length
      )

    ];


  later(

    () => {

      T.phase =
        "cue";


      T.cue =
        1 +
        Math.floor(
          Math.random() *
          5
        );


      T.cueAt =
        performance.now();


      const target =
        gHoles[
          T.cue - 1
        ];


      target.classList.add(
        "cue"
      );


      setStatus(
        "Now! Tap the glowing hole."
      );


      /*
        cue itself disappears
        after stimulus duration
      */

      later(

        () => {

          target
            .classList
            .remove(
              "cue"
            );

        },

        CFG.sd

      );


      /*
        if no response
        within limited hold:
        omission
      */

      later(

        () => {

          if (
            T.phase ===
            "cue"
          ) {

            recordTrial(
              "omission"
            );


            timeout(
              "Missed it."
            );

          }

        },

        CFG.lh

      );

    },

    iti

  );

}



gMag.addEventListener(
  "click",
  onMagazine
);



/* =========================================
   HOLE RESPONSE
   ========================================= */

function onHole(
  number
) {

  const hole =
    gHoles[
      number - 1
    ];


  hole.classList.add(
    "poked"
  );


  setTimeout(

    () => {

      hole.classList.remove(
        "poked"
      );

    },

    110

  );


  /*
    premature:
    poke during ITI
  */

  if (
    T.phase ===
    "iti"
  ) {

    clearTimers();


    recordTrial(
      "premature"
    );


    timeout(
      "Too early!"
    );


    return;
  }



  /*
    response during cue / LH
  */

  if (
    T.phase ===
    "cue"
  ) {

    clearTimers();


    gHoles.forEach(
      h =>
        h.classList.remove(
          "cue"
        )
    );


    const latency =
      performance.now() -
      T.cueAt;


    /*
      correct
    */

    if (
      number ===
      T.cue
    ) {

      recordTrial(
        "correct",
        latency
      );


      T.phase =
        "reward";


      gMag.classList.add(
        "ready"
      );


      /*
        restart pellet animation
      */

      gMag.classList.remove(
        "has-pellet"
      );


      void
      gMag.offsetWidth;


      gMag.classList.add(
        "has-pellet"
      );


      if (
        T.trial >=
        CFG.n
      ) {

        setStatus(
          "Correct! Collect your final pellet.",
          "good"
        );

      } else {

        setStatus(
          "Correct — " +
          Math.round(
            latency
          ) +
          " ms. Collect your pellet.",
          "good"
        );

      }

    }


    /*
      incorrect
    */

    else {

      recordTrial(
        "incorrect",
        latency
      );


      timeout(
        "Wrong hole."
      );

    }

  }

}



/* =========================================
   RECORD TRIAL
   ========================================= */

function recordTrial(
  outcome,
  latency = null
) {

  T.trials.push({

    outcome:
      outcome,

    latency:
      latency

  });


  renderTicks();
}



/* =========================================
   TIMEOUT
   ========================================= */

function timeout(
  message
) {

  T.phase =
    "timeout";


  gChamber.classList.remove(
    "house"
  );


  gChamber.classList.add(
    "dark"
  );


  gMag.classList.remove(
    "ready"
  );


  setStatus(
    message +
    " Lights off.",
    "bad"
  );


  later(

    () => {

      gChamber.classList.remove(
        "dark"
      );


      if (
        T.trial >=
        CFG.n
      ) {

        finishGame();

        return;
      }


      T.phase =
        "await";


      gMag.classList.add(
        "ready"
      );


      setStatus(
        "Tap the food tray to start trial " +
        (
          T.trial + 1
        ) +
        "."
      );

    },

    CFG.timeout

  );

}



/* =========================================
   FINISH
   ========================================= */

function finishGame() {

  clearTimers();


  T.phase =
    "done";


  gChamber.classList.remove(
    "house"
  );


  gChamber.classList.remove(
    "dark"
  );


  gMag.classList.remove(
    "ready"
  );


  const premature =

    T.trials.filter(
      trial =>
        trial.outcome ===
        "premature"
    ).length;


  const correct =

    T.trials.filter(
      trial =>
        trial.outcome ===
        "correct"
    );


  const incorrect =

    T.trials.filter(
      trial =>
        trial.outcome ===
        "incorrect"
    ).length;


  const omission =

    T.trials.filter(
      trial =>
        trial.outcome ===
        "omission"
    ).length;


  const meanRT =

    correct.length

      ?

      Math.round(

        correct.reduce(

          (
            sum,
            trial
          ) =>

            sum +
            trial.latency,

          0

        ) /
        correct.length

      )

      :

      null;


  document
    .getElementById(
      "resultPremature"
    )
    .textContent =
      premature;


  document
    .getElementById(
      "resultCorrect"
    )
    .textContent =
      correct.length +
      "/5";


  document
    .getElementById(
      "resultRT"
    )
    .textContent =

      meanRT !==
      null

        ?

        meanRT +
        " ms"

        :

        "—";


  let copy =
    "";


  if (
    premature === 0
  ) {

    copy +=
      "You waited for every cue. ";

  } else if (
    premature === 1
  ) {

    copy +=
      "You jumped the gun once. ";

  } else {

    copy +=
      "You responded before the cue " +
      premature +
      " times. ";

  }


  if (
    correct.length ===
    CFG.n
  ) {

    copy +=
      "You also detected every target.";

  } else {

    copy +=
      "You made " +
      incorrect +
      " incorrect response(s) and " +
      omission +
      " omission(s).";

  }


  document
    .getElementById(
      "resultCopy"
    )
    .textContent =
      copy;


  gameResults.hidden =
    false;


  setStatus(
    "Done — here is your result.",
    "good"
  );


  gameResults.scrollIntoView({

    behavior:
      "smooth",

    block:
      "start"

  });

}



/* =========================================
   RESULT BUTTONS
   ========================================= */

document
  .getElementById(
    "playAgain"
  )
  .addEventListener(

    "click",

    () => {

      resetTask();


      gChamber.scrollIntoView({

        behavior:
          "smooth",

        block:
          "center"

      });

    }

  );


document
  .getElementById(
    "seeCommunity"
  )
  .addEventListener(

    "click",

    () => {

      closeGame();


      panelContent.innerHTML = `

        <p class="panel-kicker">
          COMMUNITY
        </p>

        <h2>
          SfN leaderboard
        </h2>

        <p>
          This is where your live rank
          and the SfN player directory
          will eventually appear.
        </p>

        <p>
          For now the game runs locally.
          The next step is connecting
          the results to a shared database.
        </p>

      `;


      panel.classList.add(
        "active"
      );


      overlay.classList.add(
        "active"
      );

    }

  );



/* =========================================
   ESC KEY
   ========================================= */

document.addEventListener(

  "keydown",

  event => {

    if (
      event.key ===
      "Escape"
    ) {

      if (
        gameModal
          .classList
          .contains(
            "active"
          )
      ) {

        closeGame();

      } else {

        closePanel();

      }

    }

  }

);



/* initial state */

resetTask();
