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
      Why do individuals diverge
      in their vulnerability to addiction?
    </h2>

    <p>
      Individuals exposed to similar experiences
      can follow very different behavioral trajectories.
    </p>

    <p>
      I want to understand where those differences
      come from — and whether vulnerability can be
      identified before compulsive behavior emerges.
    </p>

    <div class="mini-grid">

      <div>

        <strong>
          Decision-making
        </strong>

        <p>
          How do individuals value rewards
          and update behavior?
        </p>

      </div>


      <div>

        <strong>
          Neural circuits
        </strong>

        <p>
          Which circuit states promote
          resilient or maladaptive trajectories?
        </p>

      </div>


      <div>

        <strong>
          Molecular & epigenetic states
        </strong>

        <p>
          Can biological differences
          predict vulnerability?
        </p>

      </div>

    </div>
  `,


  research: `

    <p class="panel-kicker">
      CURRENT RESEARCH
    </p>

    <h2>
      What I work on
    </h2>


    <div class="project-card">

      <h3>
        SNc → DMS dopamine & impulsivity
      </h3>

      <p>
        Studying how projection-specific
        dopaminergic signaling contributes
        to distinct dimensions of impulsive behavior.
      </p>

      <div class="tags">

        <span>Dopamine</span>

        <span>
          Fiber photometry
        </span>

        <span>DREADDs</span>

        <span>5-CSRTT</span>

      </div>

    </div>


    <div class="project-card">

      <h3>
        pyControl behavioral platforms
      </h3>

      <p>
        Building and adapting behavioral tasks
        for studying action impulsivity,
        response inhibition and decision-making.
      </p>

      <div class="tags">

        <span>pyControl</span>

        <span>Python</span>

        <span>5-CSRTT</span>

        <span>Go / No-go</span>

      </div>

    </div>


    <div class="project-card">

      <h3>
        Epigenomic exploration
      </h3>

      <p>
        Exploring publicly available ATAC-seq
        datasets as a way to think about
        biological variability and vulnerability.
      </p>

      <div class="tags">

        <span>ATAC-seq</span>

        <span>Epigenomics</span>

        <span>
          Public datasets
        </span>

      </div>

    </div>
  `,


  next: `

    <p class="panel-kicker">
      WHERE I'M GOING
    </p>

    <h2>
      From behavioral differences
      to biological vulnerability
    </h2>

    <p>
      My research began with heterogeneity
      within impulsive behavior.
    </p>

    <p>
      I now want to extend that question
      across individuals:
      why do some remain behaviorally flexible
      while others progress toward persistent
      and compulsive behavior?
    </p>

    <p class="big-question">
      Can vulnerability be identified
      before the transition happens?
    </p>

    <p>
      I am especially interested in approaching
      that question through decision-making,
      neural circuits and molecular or epigenetic mechanisms.
    </p>
  `,


  connect: `

    <p class="panel-kicker">
      CONNECT
    </p>

    <h2>
      Let's talk at SfN.
    </h2>

    <p>
      I'm Soyeon Lee,
      a neuroscience researcher at Korea University
      exploring PhD opportunities for Fall 2027.
    </p>

    <div class="link-stack">

      <a
        href="#"
        target="_blank"
      >
        CV
      </a>

      <a
        href="https://github.com/oreoneuro"
        target="_blank"
      >
        GitHub
      </a>

      <a
        href="mailto:soyeonia21@korea.ac.kr"
      >
        Email
      </a>

      <a
        href="#"
        target="_blank"
      >
        LinkedIn
      </a>

    </div>

    <p style="
      margin-top:24px;
      font-size:0.85rem;
      opacity:0.6;
    ">
      SfN poster details coming soon.
    </p>
  `

};



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
