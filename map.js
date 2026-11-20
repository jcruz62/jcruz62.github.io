// ============================================================
// map.js  —  the knowledge map on the homepage
//
// HOW IT'S ORGANIZED
//   Each degree is a tab.  Each tab has:
//     a HUB      (the degree, in the middle)
//     BRANCHES   (courses and jobs, in a ring around the hub)
//     TOPICS     (skills; they appear when you click a branch)
//
// TO ADD SOMETHING: edit PART 1 only.
//   - New course or job: copy one { label: ..., type: ..., topics: [...] } line.
//   - Not finished yet? Add  status: "upcoming"  or  status: "self-study".
//     Those bubbles look lighter, and the side panel says so.
//   - New skill: add it to a branch's topics list.
//   - If two branches list the exact same topic name, they share ONE
//     bubble on the map. That's how courses get connected.
// ============================================================


// ---------- PART 1: YOUR DATA (edit this) ----------

const DEGREES = {
  biostat: {
    label: "Biostatistics",
    school: "MS · UC San Diego",
    color: "var(--blue)",
    branches: [
      { label: "Biostatistical Methods I", type: "course",
        topics: ["Linear Regression", "Confounding", "Interaction Effects", "ANOVA", "Multiple Comparisons", "Regression Diagnostics", "Variable Selection", "Bootstrap", "R Programming"] },
      { label: "Biostatistical Methods II", type: "course",
        topics: ["Generalized Linear Models", "Logistic Regression", "Poisson Regression", "Loglinear Models", "Categorical Data Analysis", "Maximum Likelihood", "Quasi-Likelihood"] },
      { label: "Foundations in Biostatistics", type: "course", note: "Two-quarter sequence in probability and mathematical statistics.",
        topics: ["Random Variables", "Probability Distributions", "Expectation & Variance", "Sampling Distributions", "Convergence", "Maximum Likelihood", "Sufficiency", "Hypothesis Testing", "Confidence Intervals", "Asymptotic Theory"] },
      { label: "Systems Biology & Bioengineering II", type: "course", note: "Large-scale biological data analysis.",
        topics: ["Large-Scale Data Analysis", "Multi-Omics Analysis", "Biological Networks", "Machine Learning Methods"] },
      { label: "Clinical Trials", type: "course", status: "self-study", note: "Learning this on my own.",
        topics: ["Trial Design", "Randomization", "Power Analysis", "Interim Monitoring", "Research Ethics"] },
      { label: "Statistical Learning & Multivariate Analysis", type: "course",
        topics: ["Classification", "Regularization", "Decision Trees", "PCA", "Clustering", "Model Evaluation"] },
      { label: "Analysis of Longitudinal Data", type: "course",
        topics: ["Linear Mixed Models", "Generalized Linear Mixed Models", "GEE", "Missing Data", "Model Selection", "Power Analysis"] },
      { label: "Statistical Computing", type: "course",
        topics: ["R Programming", "Reproducible Code", "Debugging", "Code Optimization", "R Packages"] },
      { label: "Statistical NLP", type: "course",
        topics: ["Language Models", "Text Classification", "Embeddings"] },
      { label: "Web Mining & Recommender Systems", type: "course",
        topics: ["Collaborative Filtering", "Latent Factor Models", "Model Evaluation"] },
      { label: "Biostatistics Practicum", type: "course", note: "Two-quarter sequence.",
        topics: ["Simulation Studies", "Bootstrap", "Negative Binomial Regression", "Robust Standard Errors"] },
      { label: "Statistical Methods for Observational Studies", type: "course", status: "upcoming", note: "Winter 2027.",
        topics: ["Causal Inference", "Propensity Scores", "Inverse Probability Weighting", "Instrumental Variables", "Sensitivity Analysis"] },
      { label: "Comparative Biomedical Imaging", type: "course", status: "upcoming", note: "Winter 2027.",
        topics: ["Medical Imaging", "Imaging Modalities"] },
      { label: "Healthcare Robotics", type: "course", status: "upcoming", note: "Winter 2027.",
        topics: ["Healthcare Robotics", "Human-Robot Interaction"] },
      { label: "Handshake", type: "work", note: "AI Research Assistant, Mathematics and Computer Science.",
        topics: ["AI Evaluation", "Multimodal AI", "Graph Theory", "Algorithms", "Random Variables"] },
      { label: "Monte Carlo Methods Paper", type: "work",
        topics: ["Simulation Studies", "Uncertainty Quantification", "R Programming", "Python"] },
      { label: "GLP-1 & Mental Health Study", type: "work",
        topics: ["Survey Weighting", "Regression", "Survey Data Analysis"] },
      { label: "Head & Neck Pilot Trial", type: "work",
        topics: ["Randomization", "Trial Design", "Clinical Data Analysis"] }
    ]
  },

  bioinfo: {
    label: "Bioinformatics",
    school: "BS · UC Santa Cruz",
    color: "var(--green)",
    branches: [
      { label: "Probability Theory", type: "course",
        topics: ["Random Variables", "Probability Distributions", "Expectation & Variance"] },
      { label: "Applied Bayesian Statistics", type: "course",
        topics: ["Bayesian Inference", "Bayes Factors", "Conjugate Priors", "Hierarchical Models", "Shrinkage", "MCMC", "Laplace Approximation", "Linear Mixed Models", "Generalized Linear Mixed Models"] },
      { label: "Math Foundations", type: "course", note: "Calculus III and Mathematical Methods.",
        topics: ["Linear Algebra", "Multivariable Calculus"] },
      { label: "Discrete Math", type: "course",
        topics: ["Logic & Proofs", "Combinatorics", "Graph Theory"] },
      { label: "Python Programming", type: "course", note: "Beginning Python and Programming Abstractions.",
        topics: ["Python", "Object-Oriented Programming", "Recursion"] },
      { label: "Research Programming in the Life Sciences", type: "course",
        topics: ["Python", "Object-Oriented Programming", "Biopython", "Team-Based Development"] },
      { label: "Computer Systems & C", type: "course", note: "C Programming and Assembly Language.",
        topics: ["C", "Memory Management", "Assembly"] },
      { label: "Data Structures & Algorithms", type: "course",
        topics: ["Data Structures", "Algorithms", "Graph Algorithms", "Algorithm Complexity"] },
      { label: "Database Management", type: "course",
        topics: ["SQL", "Relational Databases"] },
      { label: "Machine Learning", type: "course",
        topics: ["Classification", "Regression", "Bayesian Learning", "Neural Networks", "Decision Trees", "Boosting"] },
      { label: "Scientific Data Visualization", type: "course",
        topics: ["Data Visualization", "Matplotlib", "NumPy", "Publication Figures"] },
      { label: "Genetics in the Genomics Era", type: "course",
        topics: ["Genetics", "Genomics", "Sequencing Technologies"] },
      { label: "Computational Biology Tools", type: "course",
        topics: ["Genome Browsers", "BLAST", "Sequence Alignment", "Motif Finding", "Phylogenetics", "Protein Structure"] },
      { label: "Evolutionary Genomics", type: "course",
        topics: ["Molecular Evolution", "Scientific Writing", "Research Presentations"] },
      { label: "Bioinformatics Models & Algorithms", type: "course",
        topics: ["Sequence Alignment", "Hidden Markov Models", "Protein Sequence Analysis"] },
      { label: "Computational Genomics & Systems Biology", type: "course",
        topics: ["Sequence Mapping", "RNA-seq Quantification", "Variant Calling", "Graphical Models", "Gene Regulatory Networks", "Single-Cell Analysis"] },
      { label: "AzulBio Internship", type: "work", note: "Bioinformatics Intern.",
        topics: ["Nextflow", "BLAST", "Microbiome Analysis"] },
      { label: "Corbett-Detig Lab", type: "work", note: "Undergraduate Researcher.",
        topics: ["Phylogenetics", "Mutation Analysis", "Permutation Tests", "Data Visualization"] }
    ]
  }
};


// ============================================================
// PART 2: BUILD THE BUBBLES FROM YOUR DATA
// You shouldn't need to edit anything below this line.
// ============================================================

// Every bubble lives in this object, looked up by its id.
const nodes = {};

// For each topic, the list of branches that teach it.
// Example: parentsOf["topic-python"] = ["bioinfo-4", "bioinfo-5", "biostat-8"]
const parentsOf = {};

// Turn a name into a safe id. "Power Analysis" becomes "power-analysis".
function makeId(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

for (const degreeKey in DEGREES) {
  const degree = DEGREES[degreeKey];

  // The hub sits in the middle of the map, at position (0, 0).
  nodes["hub-" + degreeKey] = {
    id: "hub-" + degreeKey,
    kind: "hub",
    degree: degreeKey,
    label: degree.label,
    x: 0,
    y: 0,
    fixed: true            // the hub never moves
  };

  // The branches are spread evenly in an oval ring around the hub.
  const count = degree.branches.length;

  for (let i = 0; i < count; i++) {
    const branch = degree.branches[i];
    const id = degreeKey + "-" + i;
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;   // start at the top, go clockwise
    const homeX = Math.cos(angle) * 430;
    const homeY = Math.sin(angle) * 300;

    nodes[id] = {
      id: id,
      kind: "branch",
      degree: degreeKey,
      index: i,
      label: branch.label,
      type: branch.type,
      status: branch.status,
      x: homeX,
      y: homeY,
      homeX: homeX,        // where this branch likes to sit
      homeY: homeY
    };

    // One bubble per topic name, shared by every branch that lists it.
    for (const topicName of branch.topics) {
      const topicId = "topic-" + makeId(topicName);

      if (parentsOf[topicId] === undefined) {
        parentsOf[topicId] = [];
      }
      parentsOf[topicId].push(id);

      if (nodes[topicId] === undefined) {
        nodes[topicId] = { id: topicId, kind: "topic", label: topicName, x: 0, y: 0 };
      }
    }
  }
}

// A topic taught in BOTH degrees is marked "shared" and drawn in purple.
for (const topicId in parentsOf) {
  const degreesSeen = new Set();
  for (const branchId of parentsOf[topicId]) {
    degreesSeen.add(nodes[branchId].degree);
  }
  nodes[topicId].shared = degreesSeen.size > 1;
}

function colorOf(node) {
  if (node.kind === "topic" && node.shared) {
    return "var(--purple)";
  }
  if (node.kind === "topic") {
    return DEGREES[nodes[parentsOf[node.id][0]].degree].color;
  }
  return DEGREES[node.degree].color;
}


// ============================================================
// PART 3: WHAT'S SHOWING RIGHT NOW
// ============================================================

let currentTab = "biostat";        // which degree tab is open
const openBranches = new Set();    // which branches are expanded
let selectedId = null;             // which bubble is selected

// The branches in the current tab that teach this topic.
function parentsInTab(topicId) {
  const result = [];
  for (const branchId of parentsOf[topicId]) {
    if (nodes[branchId].degree === currentTab) {
      result.push(branchId);
    }
  }
  return result;
}

// Which bubbles should be on screen?
function visibleIds() {
  const ids = ["hub-" + currentTab];

  const branchCount = DEGREES[currentTab].branches.length;
  for (let i = 0; i < branchCount; i++) {
    ids.push(currentTab + "-" + i);
  }

  for (const topicId in parentsOf) {
    const parents = parentsInTab(topicId);
    const anyOpen = parents.some(function (branchId) { return openBranches.has(branchId); });
    if (anyOpen) {
      ids.push(topicId);
    }
  }
  return ids;
}

// Which lines should be drawn? Each line is [fromId, toId, preferredLength].
function visibleLinks(ids) {
  const links = [];
  const showing = new Set(ids);

  const branchCount = DEGREES[currentTab].branches.length;
  for (let i = 0; i < branchCount; i++) {
    links.push(["hub-" + currentTab, currentTab + "-" + i, 360]);
  }

  for (const topicId in parentsOf) {
    if (!showing.has(topicId)) continue;
    for (const branchId of parentsInTab(topicId)) {
      if (openBranches.has(branchId)) {
        links.push([branchId, topicId, 150]);
      }
    }
  }
  return links;
}


// ============================================================
// PART 4: DRAW THE BUBBLES
// ============================================================

const box = document.getElementById("map-box");
const world = document.getElementById("map-world");
const linesSvg = document.getElementById("map-lines");
const panel = document.getElementById("map-panel");

const bubbleElements = {};   // id -> the <button> on the page
let currentIds = [];
let currentLinks = [];

function renderBubbles() {
  const ids = visibleIds();
  const keep = new Set(ids);

  // Remove bubbles that should no longer show.
  for (const id in bubbleElements) {
    if (!keep.has(id)) {
      bubbleElements[id].remove();
      delete bubbleElements[id];
    }
  }

  for (const id of ids) {
    const node = nodes[id];
    let button = bubbleElements[id];

    // A topic appearing for the first time starts just outside its branch.
    if (node.kind === "topic" && button === undefined) {
      const parentId = parentsInTab(id).find(function (branchId) { return openBranches.has(branchId); });
      const parent = nodes[parentId];
      const distance = Math.hypot(parent.x, parent.y) || 1;
      const nudge = Object.keys(bubbleElements).length % 5 - 2;
      node.x = parent.x + (parent.x / distance) * 160 + nudge * 12;
      node.y = parent.y + (parent.y / distance) * 160 + nudge * 18;
      node.vx = 0;
      node.vy = 0;
    }

    if (button === undefined) {
      button = document.createElement("button");
      button.type = "button";
      button.dataset.id = id;
      world.appendChild(button);
      bubbleElements[id] = button;
    }

    // Classes control the look (see map.css).
    let classes = "map-node " + node.kind;
    if (node.type === "work") classes += " work";
    if (node.status !== undefined) classes += " later";   // upcoming or self-study
    button.className = classes;
    button.style.setProperty("--c", colorOf(node));

    if (node.kind === "hub") {
      button.style.background = colorOf(node);
      button.innerHTML = node.label + " <small>" + DEGREES[node.degree].school + "</small>";
    } else if (node.kind === "branch") {
      const isOpen = openBranches.has(id);
      const topicCount = DEGREES[node.degree].branches[node.index].topics.length;
      button.setAttribute("aria-expanded", isOpen);
      button.innerHTML =
        '<span class="dot" style="background:' + colorOf(node) + '"></span>' +
        node.label +
        '<span class="count">' + topicCount + '</span>' +
        '<span class="plus" aria-hidden="true">' + (isOpen ? "−" : "+") + '</span>';
    } else {
      button.innerHTML = '<span class="dot" style="background:' + colorOf(node) + '"></span>' + node.label;
    }
  }

  // Measure each bubble so the layout knows how big it is.
  for (const id of ids) {
    nodes[id].w = bubbleElements[id].offsetWidth;
    nodes[id].h = bubbleElements[id].offsetHeight;
  }
  return ids;
}

// Move every bubble and line to its current position.
function drawPositions() {
  for (const id of currentIds) {
    const node = nodes[id];
    bubbleElements[id].style.transform =
      "translate(" + (node.x - node.w / 2) + "px, " + (node.y - node.h / 2) + "px)";
  }

  let svg = "";
  for (const link of currentLinks) {
    const a = nodes[link[0]];
    const b = nodes[link[1]];
    const touchesSelected = selectedId !== null && (link[0] === selectedId || link[1] === selectedId);
    let style = "";
    if (touchesSelected) {
      style = ' class="hot" style="stroke:' + colorOf(nodes[selectedId]) + '"';
    } else if (selectedId !== null && b.kind === "topic") {
      style = ' opacity="0.5"';
    }
    svg += '<line x1="' + a.x + '" y1="' + a.y + '" x2="' + b.x + '" y2="' + b.y + '"' + style + '/>';
  }
  linesSvg.innerHTML = svg;
}

// Highlight the selected bubble and its neighbors.
function paintSelection() {
  const neighbors = new Set();
  for (const link of currentLinks) {
    if (link[0] === selectedId) neighbors.add(link[1]);
    if (link[1] === selectedId) neighbors.add(link[0]);
  }
  for (const id in bubbleElements) {
    const element = bubbleElements[id];
    element.classList.toggle("selected", id === selectedId && nodes[id].kind !== "hub");
    element.classList.toggle("near", neighbors.has(id));
    const fade = selectedId !== null && id !== selectedId && !neighbors.has(id) && nodes[id].kind === "topic";
    element.classList.toggle("faded", fade);
  }
  drawPanel();
}


// ============================================================
// PART 5: LAYOUT (a tiny physics simulation)
//   - lines act like springs
//   - bubbles push each other away
//   - branches stay near their spot in the ring
//   - topics sit just outside the branch they came from
//   - no two bubbles overlap
// ============================================================

let energy = 0;           // how much the bubbles are still moving (0 = still)
let animating = false;

function step() {
  const list = currentIds.map(function (id) { return nodes[id]; });

  for (const node of list) {
    if (node.vx === undefined) node.vx = 0;
    if (node.vy === undefined) node.vy = 0;
  }

  // 1. Springs along each line.
  for (const link of currentLinks) {
    const a = nodes[link[0]];
    const b = nodes[link[1]];
    const preferredLength = link[2];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const distance = Math.hypot(dx, dy) || 1;
    const pull = (distance - preferredLength) / distance * 0.06 * energy;

    // A branch isn't dragged around by its own topics.
    const aStaysPut = a.fixed || (a.kind === "branch" && b.kind === "topic");
    if (!aStaysPut) { a.vx += dx * pull; a.vy += dy * pull; }
    if (!b.fixed)   { b.vx -= dx * pull; b.vy -= dy * pull; }
  }

  // 2. Bubbles push each other away.
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      const a = list[i];
      const b = list[j];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const distanceSquared = dx * dx + dy * dy + 1;
      if (distanceSquared > 360000) continue;   // too far apart to matter
      const push = 900 * energy / distanceSquared;
      if (!a.fixed) { a.vx -= dx * push; a.vy -= dy * push; }
      if (!b.fixed) { b.vx += dx * push; b.vy += dy * push; }
    }
  }

  // 3. Pull each bubble toward where it belongs, then move it.
  for (const node of list) {
    if (node.fixed) continue;

    let targetX;
    let targetY;
    let strength;

    if (node.kind === "branch") {
      targetX = node.homeX;
      targetY = node.homeY;
      strength = 0.12;
    } else {
      // Average spot just outside each open branch that teaches this topic.
      const openParents = parentsInTab(node.id).filter(function (branchId) { return openBranches.has(branchId); });
      targetX = 0;
      targetY = 0;
      for (const branchId of openParents) {
        const parent = nodes[branchId];
        const distance = Math.hypot(parent.x, parent.y) || 1;
        targetX += parent.x + (parent.x / distance) * 170;
        targetY += parent.y + (parent.y / distance) * 170;
      }
      targetX = targetX / Math.max(openParents.length, 1);
      targetY = targetY / Math.max(openParents.length, 1);
      strength = 0.03;
    }

    node.vx += (targetX - node.x) * strength * energy;
    node.vy += (targetY - node.y) * strength * energy;
    node.vx = node.vx * 0.55;     // friction
    node.vy = node.vy * 0.55;
    node.x += node.vx;
    node.y += node.vy;
  }

  // 4. No overlaps: treat each bubble as a rectangle and slide them apart.
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const a = list[i];
        const b = list[j];
        const overlapX = (a.w + b.w) / 2 + 14 - Math.abs(b.x - a.x);
        const overlapY = (a.h + b.h) / 2 + 12 - Math.abs(b.y - a.y);
        if (overlapX <= 0 || overlapY <= 0) continue;

        let shareA = 0.5;
        let shareB = 0.5;
        if (a.fixed) { shareA = 0; shareB = 1; }
        if (b.fixed) { shareA = 1; shareB = 0; }

        if (overlapY < overlapX) {
          const direction = b.y >= a.y ? 1 : -1;
          a.y -= direction * overlapY * shareA;
          b.y += direction * overlapY * shareB;
        } else {
          const direction = b.x >= a.x ? 1 : -1;
          a.x -= direction * overlapX * shareA;
          b.x += direction * overlapX * shareB;
        }
      }
    }
  }

  energy = energy * 0.975;   // slowly calm down
}

// Re-render and let the bubbles move into place with animation.
function relayout(startEnergy) {
  currentIds = renderBubbles();
  currentLinks = visibleLinks(currentIds);
  paintSelection();
  energy = Math.max(energy, startEnergy);
  if (!animating) {
    animating = true;
    requestAnimationFrame(animate);
  }
}

function animate() {
  step();
  step();
  step();
  drawPositions();
  if (energy > 0.01) {
    requestAnimationFrame(animate);
  } else {
    animating = false;
  }
}

// Run the simulation instantly (no animation), used when a tab opens.
function settleNow() {
  for (let i = 0; i < 260; i++) {
    step();
  }
  energy = 0.02;
  drawPositions();
}


// ============================================================
// PART 6: PAN AND ZOOM
// ============================================================

const view = { x: 0, y: 0, scale: 1 };

function applyView() {
  world.style.transform = "translate(" + view.x + "px, " + view.y + "px) scale(" + view.scale + ")";
}

// Zoom in or out, keeping the point under the mouse in place.
function zoomAt(pointX, pointY, factor) {
  const newScale = Math.min(2.2, Math.max(0.25, view.scale * factor));
  view.x = pointX - (pointX - view.x) * (newScale / view.scale);
  view.y = pointY - (pointY - view.y) * (newScale / view.scale);
  view.scale = newScale;
  applyView();
}

// Zoom so every bubble fits in the box.
function fitToView() {
  let left = Infinity, top = Infinity, right = -Infinity, bottom = -Infinity;
  for (const id of currentIds) {
    const node = nodes[id];
    left = Math.min(left, node.x - node.w / 2);
    right = Math.max(right, node.x + node.w / 2);
    top = Math.min(top, node.y - node.h / 2);
    bottom = Math.max(bottom, node.y + node.h / 2);
  }
  const padding = 36;
  const boxWidth = box.clientWidth;
  const boxHeight = box.clientHeight;
  const scaleX = (boxWidth - padding * 2) / (right - left);
  const scaleY = (boxHeight - padding * 2) / (bottom - top);
  view.scale = Math.min(1.1, Math.max(0.25, Math.min(scaleX, scaleY)));
  view.x = boxWidth / 2 - (left + right) / 2 * view.scale;
  view.y = boxHeight / 2 - (top + bottom) / 2 * view.scale;
  applyView();
}

// Mouse wheel or trackpad scroll = zoom.
box.addEventListener("wheel", function (event) {
  event.preventDefault();
  const rect = box.getBoundingClientRect();
  zoomAt(event.clientX - rect.left, event.clientY - rect.top, Math.exp(-event.deltaY * 0.0015));
}, { passive: false });

// Dragging = move the map. Two fingers = pinch to zoom.
const fingers = new Map();
let dragStart = null;
let didDrag = false;
let pinchStart = null;

box.addEventListener("pointerdown", function (event) {
  if (event.target.closest(".map-zoom")) return;
  fingers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  didDrag = false;
  dragStart = { x: event.clientX, y: event.clientY, viewX: view.x, viewY: view.y };
  if (fingers.size === 2) {
    const points = Array.from(fingers.values());
    pinchStart = {
      distance: Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y),
      scale: view.scale
    };
  }
});

box.addEventListener("pointermove", function (event) {
  if (!fingers.has(event.pointerId)) return;
  fingers.set(event.pointerId, { x: event.clientX, y: event.clientY });

  if (fingers.size === 2 && pinchStart !== null) {
    const points = Array.from(fingers.values());
    const rect = box.getBoundingClientRect();
    const distance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
    const middleX = (points[0].x + points[1].x) / 2 - rect.left;
    const middleY = (points[0].y + points[1].y) / 2 - rect.top;
    zoomAt(middleX, middleY, (pinchStart.scale * distance / pinchStart.distance) / view.scale);
    didDrag = true;
    return;
  }

  const movedX = event.clientX - dragStart.x;
  const movedY = event.clientY - dragStart.y;
  if (!didDrag && Math.hypot(movedX, movedY) < 5) return;   // tiny wiggle, still a click
  if (!didDrag) {
    didDrag = true;
    box.setPointerCapture(event.pointerId);
    box.classList.add("dragging");
  }
  view.x = dragStart.viewX + movedX;
  view.y = dragStart.viewY + movedY;
  applyView();
});

function endFinger(event) {
  fingers.delete(event.pointerId);
  if (fingers.size < 2) pinchStart = null;
  if (fingers.size === 0) box.classList.remove("dragging");
}
box.addEventListener("pointerup", endFinger);
box.addEventListener("pointercancel", endFinger);

document.getElementById("map-zoom-in").addEventListener("click", function () {
  zoomAt(box.clientWidth / 2, box.clientHeight / 2, 1.25);
});
document.getElementById("map-zoom-out").addEventListener("click", function () {
  zoomAt(box.clientWidth / 2, box.clientHeight / 2, 0.8);
});
document.getElementById("map-zoom-fit").addEventListener("click", fitToView);


// ============================================================
// PART 7: TABS, CLICKS, AND THE SIDE PANEL
// ============================================================

function switchTab(degreeKey, shouldFit) {
  currentTab = degreeKey;
  selectedId = null;
  document.querySelectorAll(".map-tab").forEach(function (tab) {
    tab.setAttribute("aria-selected", tab.dataset.tab === degreeKey);
  });
  currentIds = renderBubbles();
  currentLinks = visibleLinks(currentIds);
  paintSelection();
  energy = 1;
  settleNow();
  if (shouldFit !== false) fitToView();
}

document.querySelectorAll(".map-tab").forEach(function (tab) {
  tab.addEventListener("click", function () {
    switchTab(tab.dataset.tab);
  });
});

// Select a bubble. Clicking a branch on the map also opens or closes it.
function select(id, clickedOnMap) {
  const node = nodes[id];

  if (node.kind !== "topic" && node.degree !== currentTab) {
    switchTab(node.degree, false);
    clickedOnMap = false;
  }

  if (node.kind === "branch") {
    if (clickedOnMap && openBranches.has(id)) {
      openBranches.delete(id);
    } else {
      openBranches.add(id);
    }
  }

  if (node.kind === "topic") {
    for (const branchId of parentsInTab(id)) {
      openBranches.add(branchId);
    }
  }

  selectedId = id;
  relayout(0.6);
  drawPositions();
}

// One listener for the whole page.
document.addEventListener("click", function (event) {
  // Bubbles and chips in the panel carry data-id.
  const target = event.target.closest("[data-id]");
  if (target !== null) {
    const onMap = target.classList.contains("map-node");
    if (onMap && didDrag) {          // that was a drag, not a click
      didDrag = false;
      return;
    }
    select(target.dataset.id, onMap);
    return;
  }

  // Course links elsewhere on the page carry data-branch="Course Name".
  const courseLink = event.target.closest("[data-branch]");
  if (courseLink !== null) {
    for (const degreeKey in DEGREES) {
      const branches = DEGREES[degreeKey].branches;
      for (let i = 0; i < branches.length; i++) {
        if (branches[i].label === courseLink.dataset.branch) {
          select(degreeKey + "-" + i, false);
          fitToView();
        }
      }
    }
  }
});

document.getElementById("map-expand-all").addEventListener("click", function () {
  const branchCount = DEGREES[currentTab].branches.length;
  for (let i = 0; i < branchCount; i++) {
    openBranches.add(currentTab + "-" + i);
  }
  relayout(1);
  settleNow();
  fitToView();
});

document.getElementById("map-collapse-all").addEventListener("click", function () {
  openBranches.clear();
  selectedId = null;
  relayout(0.6);
  settleNow();
  fitToView();
});

// A small round button for the side panel.
function chipFor(id) {
  const node = nodes[id];
  return '<button type="button" class="chip" data-id="' + id + '">' +
         '<span class="dot" style="background:' + colorOf(node) + '"></span>' + node.label +
         '</button>';
}

function drawPanel() {
  if (selectedId === null) {
    panel.innerHTML =
      '<p class="category" style="color:var(--text2)">How to explore</p>' +
      '<h3>Start in the middle.</h3>' +
      '<p style="color:var(--text3)">The hub is my degree. Each bubble around it is a course or a job. ' +
      'Click one to see what I learned there, and click a skill to see everywhere it comes up.</p>';
    return;
  }

  const node = nodes[selectedId];

  if (node.kind === "hub") {
    const degree = DEGREES[node.degree];
    let chips = "";
    for (let i = 0; i < degree.branches.length; i++) {
      chips += chipFor(node.degree + "-" + i);
    }
    panel.innerHTML =
      '<p class="category" style="color:' + degree.color + '">Degree</p>' +
      '<h3>' + degree.label + '</h3>' +
      '<p style="color:var(--text3)">' + degree.school + '</p>' +
      '<p class="label">Courses and work</p>' +
      '<div class="row">' + chips + '</div>';
    return;
  }

  if (node.kind === "branch") {
    const degree = DEGREES[node.degree];
    const branch = degree.branches[node.index];
    let kindLabel = "Course";
    if (branch.type === "work") kindLabel = "Work & research";
    if (branch.status === "upcoming") kindLabel = "Upcoming course";
    if (branch.status === "self-study") kindLabel = "Self-study · In progress";
    const school = degree.school.split("· ")[1];
    let chips = "";
    for (const topicName of branch.topics) {
      chips += chipFor("topic-" + makeId(topicName));
    }
    panel.innerHTML =
      '<p class="category" style="color:' + degree.color + '">' + kindLabel + ' · ' + school + '</p>' +
      '<h3>' + branch.label + '</h3>' +
      (branch.note ? '<p style="color:var(--text3)">' + branch.note + '</p>' : '') +
      '<p class="label">What I learned</p>' +
      '<div class="row">' + chips + '</div>';
    return;
  }

  // A topic
  let chips = "";
  for (const branchId of parentsOf[selectedId]) {
    chips += chipFor(branchId);
  }
  panel.innerHTML =
    '<p class="category" style="color:' + colorOf(node) + '">Skill' + (node.shared ? ' · From both degrees' : '') + '</p>' +
    '<h3>' + node.label + '</h3>' +
    '<p class="label">Where it shows up</p>' +
    '<div class="row">' + chips + '</div>';
}


// ---------- START ----------
switchTab("biostat", true);
window.addEventListener("resize", fitToView);
