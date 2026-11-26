/* ==========================================================
   Network map of Pujan's work.
   To add something: add a node to NODES and its links to EDGES.
   Node types decide the shape: person, research, experience,
   project, education, theme, interest.
   ========================================================== */
(function () {
  "use strict";

  var NODES = [
    { id: "pujan", type: "person", label: "Pujan Pant", sub: "Kathmandu" },

    { id: "trust", type: "research", label: "Trust in AI", sub: "Research interest",
      title: "Trust in AI",
      meta: "Main research interest",
      body: "<p>I want to understand how people develop beliefs about an AI system's capabilities, limitations, memory and reliability, and how those beliefs affect whether they accept, verify or reject its recommendations.</p><p>I'm especially interested in designing AI interfaces that support appropriate reliance: helping people accept correct advice while checking or rejecting incorrect advice.</p>" },
    { id: "mental", type: "theme", label: "Mental models of AI",
      body: "<p>The picture people build in their heads of what an AI can do, what it remembers and how reliable it is.</p>" },
    { id: "calibration", type: "theme", label: "Trust calibration",
      body: "<p>Whether the amount someone trusts an AI matches how trustworthy it actually is. Too much is over-reliance, too little is under-reliance.</p>" },
    { id: "reliance", type: "theme", label: "Appropriate reliance",
      body: "<p>Taking the AI's advice when it is right, and catching it when it is wrong.</p>" },
    { id: "interfaces", type: "theme", label: "Interface design",
      body: "<p>The design choices on screen that shape how much people lean on an AI: explanations, confidence cues, and when to ask for a second look.</p>" },

    { id: "paper", type: "research", label: "LLM-SC for sacred heritage", sub: "Pre-Print",
      title: "Adapting LLM-SC for Living Sacred Heritage",
      meta: '<a href="https://arxiv.org/abs/2610.35685" target="_blank" rel="noopener">arXiv:2610.35685</a>',
      body: "<p><em>Adapting LLM-SC to Living Sacred Heritage: Domain-Specific Extraction, Semantic Networks and Human Evaluation on Pashupatinath Temple Reviews.</em></p><p>Extends the LLM–social computing framework from museums to a living sacred site. The study collects 3,939 unique TripAdvisor reviews of Pashupatinath Temple written between 2008 and 2026. A GPT-4o pipeline reads a random sample of 2,500 of them, extracts entities and aspect-level sentiment, and maps them as a semantic network. 200 reviews were also checked by humans.</p>" },
    { id: "nepslm", type: "research", label: "Romanized Nepali SLMs", sub: "Pre-Print",
      title: "Small language models for Romanized Nepali",
      meta: '<a href="https://arxiv.org/abs/2611.12628" target="_blank" rel="noopener">arXiv:2611.12628</a>',
      body: "<p><em>Adapting Small Language Models to Romanized Nepali: Tokenizer Fertility, Reference Likelihood, and Generation Metrics.</em></p><p>Romanized Nepali, Nepali typed in Latin letters, is everywhere in chats and comments, but it has no standard spelling and very few resources. We fine-tuned three small open models (Llama-3.2-3B, Qwen2.5-3B and Gemma-2-2B) with QLoRA on 9,000 instruction examples and tested them on 1,000 held-out ones. Fine-tuning lifted chrF++ from 10&ndash;14 to about 30.</p><p>The model that scored best on likelihood was not always the one whose answers were closest to the references, so a single score can mislead. Done with Prof. Hari Sitaula at Montana Tech.</p>" },
    { id: "llms", type: "theme", label: "LLMs",
      body: "<p>Large language models: the engine of my sacred-heritage paper, my Romanized Nepali work and the agents in Dhago.</p>" },
    { id: "network", type: "theme", label: "Network analysis",
      body: "<p>Mapping people, places and ideas as nodes and the relations between them as links. My paper builds one from thousands of reviews; this page is a small one.</p>" },
    { id: "heritage", type: "theme", label: "Cultural heritage",
      body: "<p>Pashupatinath Temple in Kathmandu, seen through 18 years of visitor reviews.</p>" },

    { id: "kmc", type: "experience", label: "AI Instructor", sub: "2025",
      title: "AI Instructor",
      meta: "Kathmandu Metropolitan City, May – Jun 2025",
      body: "<p>Designed and taught 300+ hours of hands-on AI and Python to 75 students through the Skill Fair program, a nationwide program. The labs covered supervised learning, exploratory data analysis and calling LLM APIs, and 92% of the students finished a capstone project.</p>" },

    { id: "scala", type: "experience", label: "AI Engineer Intern", sub: "2024 – 25",
      title: "AI Engineer Intern",
      meta: "Scala Technologies, Sep 2024 – Feb 2025",
      body: "<p>Built a brain tumour segmentation pipeline that reached Dice scores of 92% on 2D slices and 97% on 3D volumes (BraTS), and a place recommendation and route system based on the tags a user picks. Deployed the inference pipeline with Docker, Azure and GitHub Actions.</p>" },
    { id: "routes", type: "theme", label: "Route optimisation",
      body: "<p>Recommending places from the interest tags a user picks, then finding a good route between them with Dijkstra's and A* algorithms. I built this at Scala Technologies.</p>" },
    { id: "tumour", type: "theme", label: "Brain tumour segmentation",
      body: "<p>Outlining tumours in brain scans with DenseNet, ResNet and attention-based models.</p>" },

    { id: "nrcc", type: "experience", label: "Research Trainee", sub: "2024",
      title: "Research Trainee",
      meta: "Nepal Research & Collaboration Center, Jun &ndash; Sep 2024",
      body: "<p>Reviewed 40+ papers on deep-learning architectures for medical computer vision. Also co-reviewed a paper in the same area with a PhD candidate from the University of South Dakota, helping with the gap analysis and the critique of its methods.</p>" },

    { id: "credit", type: "project", label: "Dhago", sub: "Hackathon 2026",
      title: "Dhago: multi-agent lending pipeline",
      meta: "GIBL AI/ML Hackathon 2026, selected for the onsite final",
      body: "<p>Five AI agents work through a loan application together, checking documents, income, credit score and Nepal Rastra Bank lending rules before reaching a decision. Built for borrowers with no payslips or formal credit history.</p><p>A compliance agent can veto a decision, a loan officer can override it, and every step leaves an audit trail. Cases with a middle-range score or a suspicious history go to a human reviewer. I built the Income Agent and the Score Agent; my teammate built the rest.</p>",
      links: [["View code on GitHub", "https://github.com/sagarnewpane/autonomous-credit-and-lending-orchestrator"]] },
    { id: "workbench", type: "project", label: "Agent Oversight Workbench", sub: "In progress",
      title: "Agent Oversight Workbench",
      meta: "Solo project, in progress",
      body: "<p>When an AI agent wants to copy a file or change a document, this puts a separate control layer in between. A policy engine checks the action, a risk engine scores it, a person approves or rejects the risky ones, and everything is logged.</p><p>Right now it is a working local prototype (React and FastAPI, with Gemini proposing the actions) with 49 automated tests passing. I am adding Supabase login so each person gets their own account.</p>",
      links: [["View code on GitHub", "https://github.com/pantpujan017/agent-oversight-workbench"]] },
    { id: "oversight", type: "theme", label: "Human oversight",
      body: "<p>A person can still approve, reject or override what an AI does, and there is a record of what happened.</p>" },
    { id: "agents", type: "theme", label: "Multi-agent systems",
      body: "<p>Several AI agents, each with one job, reaching a decision together.</p>" },

    { id: "car", type: "project", label: "Self-driving car", sub: "Final-year project",
      title: "Self-driving car",
      meta: "Final-year project",
      body: "<p>A Raspberry Pi car that detects objects on board in real time, at 20 frames per second, and navigates on its own.</p>",
      links: [["View code on GitHub", "https://github.com/pantpujan017/Self-Driving-Car"]] },
    { id: "vision", type: "theme", label: "Computer vision",
      body: "<p>Teaching machines to see: object detection on the self-driving car, and tumour segmentation in brain scans.</p>" },

    { id: "bsc", type: "education", label: "BSc (Hons) Computer Science", sub: "2022 – 2025",
      title: "BSc (Hons) Computer Science",
      meta: "Herald College Kathmandu, University of Wolverhampton, 2022 – 2025",
      body: "<p>First Class Honours. Final-year project: a self-driving car built on a Raspberry Pi.</p>" },

    { id: "outside", type: "interest", label: "Outside work",
      body: "<p>Football, workouts, books and long podcasts. I trekked to Annapurna Base Camp in 2025 and to Shey Phoksundo in 2026.</p>" },
    { id: "football", type: "interest", label: "Football", body: "<p>Playing and watching.</p>" },
    { id: "trek", type: "interest", label: "Annapurna Base Camp", sub: "2025",
      body: "<p>Trekked to Annapurna Base Camp in 2025.</p><div class=\"gallery\"><img class=\"wide\" src=\"assets/trek/abc-2.jpg\" width=\"1000\" height=\"563\" alt=\"Five trekkers sitting on a rock below a sunlit snowy ridge\" loading=\"lazy\"><img src=\"assets/trek/abc-1.jpg\" width=\"562\" height=\"1000\" alt=\"A trekker in a woolly hat and puffer jacket at base camp, with a snow-covered peak behind\" loading=\"lazy\"><img src=\"assets/trek/abc-3.jpg\" width=\"562\" height=\"1000\" alt=\"A trekker on a balcony with a forested valley and snow peaks behind\" loading=\"lazy\"><img class=\"tall\" src=\"assets/trek/abc-4.jpg\" width=\"750\" height=\"1000\" alt=\"Three trekkers on a stone path above a green valley\" loading=\"lazy\"></div>" },
    { id: "phoksundo", type: "interest", label: "Shey Phoksundo", sub: "2026",
      body: "<p>Trekked to Shey Phoksundo in 2026.</p><div class=\"gallery\"><img class=\"wide lake\" src=\"assets/trek/phoksundo-1.jpg\" width=\"750\" height=\"1000\" alt=\"A blue lake between rocky mountains, seen past a trekking lunch on a wooden table\" loading=\"lazy\"><img src=\"assets/trek/phoksundo-2.jpg\" width=\"573\" height=\"1000\" alt=\"A trekker in a green football shirt and cap walking a dirt trail below a forested slope\" loading=\"lazy\"><img src=\"assets/trek/phoksundo-3.jpg\" width=\"750\" height=\"1000\" alt=\"A trekker with arms raised in peace signs on a snowy trail\" loading=\"lazy\"><img src=\"assets/trek/phoksundo-4.jpg\" width=\"562\" height=\"1000\" alt=\"A trekker crossing a wooden bridge over a bright turquoise river\" loading=\"lazy\"><img src=\"assets/trek/phoksundo-5.jpg\" width=\"750\" height=\"1000\" alt=\"A trekker with a large backpack walking away along a dusty trail\" loading=\"lazy\"><img class=\"wide\" src=\"assets/trek/phoksundo-6.jpg\" width=\"1000\" height=\"563\" alt=\"A selfie of three trekkers on a forest trail\" loading=\"lazy\"></div>" },
    { id: "books", type: "interest", label: "Books & podcasts", body: "<p>Reading, and long-form podcasts.</p>" },
    { id: "workouts", type: "interest", label: "Workouts", body: "<p>Training most days.</p>" }
  ];

  // [from, to, dotted?]  Solid: direct parts of my work. Dotted: themes and looser ties.
  var EDGES = [
    ["pujan", "trust"], ["pujan", "paper"], ["pujan", "nepslm"], ["pujan", "credit"], ["pujan", "workbench"], ["pujan", "car"],
    ["pujan", "bsc"], ["pujan", "outside", true], ["pujan", "kmc"], ["pujan", "scala"], ["pujan", "nrcc"],
    ["trust", "mental"], ["trust", "calibration"], ["trust", "reliance"], ["trust", "interfaces"],
    ["paper", "llms", true], ["paper", "network", true], ["paper", "heritage", true],
    ["nepslm", "llms", true],
    ["credit", "agents", true], ["credit", "llms", true], ["credit", "oversight", true],
    ["workbench", "oversight", true],
    ["car", "vision", true], ["car", "bsc", true],
    ["scala", "routes"], ["scala", "tumour"], ["tumour", "vision", true], ["nrcc", "vision", true],
    ["outside", "football", true], ["outside", "trek", true], ["outside", "phoksundo", true], ["outside", "books", true], ["outside", "workouts", true]
  ];

  var TYPE_NAME = {
    person: "About", research: "Research", experience: "Experience", project: "Project",
    education: "Education", theme: "Theme", interest: "Outside work"
  };

  // Geometry
  var W = 800, H = 680, CX = 400, CY = 336, R1 = 186, R2 = 292;
  var NS = "http://www.w3.org/2000/svg";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var svg = document.getElementById("map-svg");
  var panel = document.getElementById("map-panel");
  if (!svg || !panel) return;
  document.documentElement.classList.add("has-map");

  var byId = {}, adj = {}, pos = {}, els = {}, edgeEls = [];
  NODES.forEach(function (n, i) { n.i = i; byId[n.id] = n; adj[n.id] = []; pos[n.id] = { x: CX, y: CY, o: 0 }; });
  EDGES.forEach(function (e) { adj[e[0]].push(e[1]); adj[e[1]].push(e[0]); });

  var focusId = "pujan";

  // ---------- Build SVG ----------
  function el(name, attrs, parent) {
    var x = document.createElementNS(NS, name);
    for (var k in attrs) x.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(x);
    return x;
  }
  // Phones: zoom in on the inner ring so labels stay readable
  var small = window.matchMedia("(max-width: 640px)");
  function setViewBox() {
    var vb = small.matches ? [CX - 262, CY - 250, 524, 520] : [0, 0, W, H];
    svg.setAttribute("viewBox", vb.join(" "));
  }
  setViewBox();
  if (small.addEventListener) small.addEventListener("change", setViewBox);
  var gEdges = el("g", { "class": "edges" }, svg);
  var gNodes = el("g", { "class": "nodes" }, svg);

  EDGES.forEach(function (e) {
    var line = el("line", { "class": "edge" + (e[2] ? " dotted" : "") }, gEdges);
    edgeEls.push({ a: e[0], b: e[1], line: line });
  });

  function symbol(type, g) {
    switch (type) {
      case "person":     return el("circle", { r: 9, "class": "sym" }, g);
      case "research":   return el("rect", { x: -6.5, y: -6.5, width: 13, height: 13, "class": "sym" }, g);
      case "experience": return el("path", { d: "M0,-8 L7.5,5.5 L-7.5,5.5 Z", "class": "sym" }, g);
      case "project":    return el("path", { d: "M0,-8 L8,0 L0,8 L-8,0 Z", "class": "sym" }, g);
      case "education":  return el("path", { d: "M0,-8 L7,-4 L7,4 L0,8 L-7,4 L-7,-4 Z", "class": "sym" }, g);
      case "theme":      return el("circle", { r: 4.5, "class": "sym" }, g);
      default:           return el("circle", { r: 3.5, "class": "sym" }, g);
    }
  }

  function wrap(label, max) {
    var words = label.split(" "), lines = [], cur = "";
    words.forEach(function (w) {
      if ((cur + " " + w).trim().length > max && cur) { lines.push(cur); cur = w; }
      else cur = (cur + " " + w).trim();
    });
    if (cur) lines.push(cur);
    return lines;
  }

  NODES.forEach(function (n) {
    var g = el("g", {
      "class": "node t-" + n.type, tabindex: "-1", role: "button",
      "aria-label": n.label + ", " + TYPE_NAME[n.type]
    }, gNodes);
    el("circle", { r: 17, "class": "halo" }, g);
    el("circle", { r: 15, "class": "hit" }, g);
    symbol(n.type, g);
    var t = el("text", { "class": "label", y: n.type === "person" ? 27 : 23, "text-anchor": "middle" }, g);
    wrap(n.label, 15).forEach(function (line, i) {
      var ts = el("tspan", { x: 0, dy: i === 0 ? 0 : 14 }, t);
      ts.textContent = line;
    });
    if (n.sub) {
      var s = el("tspan", { x: 0, dy: 14, "class": "sub" }, t);
      s.textContent = n.sub;
    }
    g.addEventListener("click", function () { setFocus(n.id); });
    g.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); setFocus(n.id); }
    });
    els[n.id] = g;
  });

  // ---------- Layout: focus in the middle, neighbours in a ring, theirs further out ----------
  function layout(fid) {
    var depth = {}; depth[fid] = 0;
    var ring1 = adj[fid].slice();
    ring1.forEach(function (id) { depth[id] = 1; });

    var fp = pos[fid];
    var first = fid === "pujan" && pos.pujan.o === 0;      // first draw: use the order in NODES
    ring1.sort(function (a, b) {
      if (first) return byId[a].i - byId[b].i;
      return angleOf(pos[a], fp) - angleOf(pos[b], fp);
    });

    var target = {};
    target[fid] = { x: CX, y: CY, o: 1 };

    // Decide each neighbour's own outer nodes first, so busy branches get more room.
    var kidsOf = {};
    ring1.forEach(function (pid) {
      kidsOf[pid] = adj[pid].filter(function (id) { return depth[id] === undefined; });
      kidsOf[pid].forEach(function (id) { depth[id] = 2; });
    });
    var weights = ring1.map(function (pid) { return 3 + kidsOf[pid].length; });
    var total = weights.reduce(function (s, w) { return s + w; }, 0) || 1;
    var unit = (Math.PI * 2) / total;

    var n1 = ring1.length;
    var start = first ? -Math.PI / 2 : (n1 ? angleOf(pos[ring1[0]], fp) : 0);
    var cursor = start - (weights[0] || 0) * unit / 2;
    var angle1 = {}, sector = {};
    ring1.forEach(function (id, k) {
      var a = cursor + weights[k] * unit / 2;
      cursor += weights[k] * unit;
      angle1[id] = a;
      sector[id] = weights[k] * unit;
      // With many neighbours, stagger every other one outward so labels don't collide.
      var r1 = R1 + (n1 > 9 && k % 2 === 1 ? 28 : 0);
      target[id] = { x: CX + r1 * Math.cos(a), y: CY + r1 * Math.sin(a), o: 1 };
    });

    ring1.forEach(function (pid) {
      var kids = kidsOf[pid], k = kids.length;
      var spread = Math.min(sector[pid] * 0.82, (k - 1) * 0.42);
      kids.forEach(function (id, j) {
        var a = angle1[pid] + (k > 1 ? -spread / 2 + j * (spread / (k - 1)) : 0);
        target[id] = { x: CX + R2 * Math.cos(a), y: CY + R2 * Math.sin(a), o: 0.62 };
      });
    });

    NODES.forEach(function (n) {
      if (!target[n.id]) target[n.id] = { x: CX, y: CY, o: 0 };
    });
    return { target: target, depth: depth };
  }

  function angleOf(p, c) {
    var a = Math.atan2(p.y - c.y, p.x - c.x);
    return a;
  }

  // ---------- Draw ----------
  function draw(depth) {
    NODES.forEach(function (n) {
      var p = pos[n.id], g = els[n.id];
      g.setAttribute("transform", "translate(" + p.x.toFixed(1) + " " + p.y.toFixed(1) + ")");
      g.style.opacity = p.o.toFixed(3);
    });
    edgeEls.forEach(function (e) {
      var a = pos[e.a], b = pos[e.b];
      e.line.setAttribute("x1", a.x.toFixed(1)); e.line.setAttribute("y1", a.y.toFixed(1));
      e.line.setAttribute("x2", b.x.toFixed(1)); e.line.setAttribute("y2", b.y.toFixed(1));
      var o = Math.min(a.o, b.o);
      var da = depth[e.a], db = depth[e.b];
      var shown = da !== undefined && db !== undefined && Math.min(da, db) <= 1;
      e.line.style.opacity = shown ? o.toFixed(3) : "0";
    });
  }

  var anim = null;
  function animateTo(result) {
    var from = {}, to = result.target, depth = result.depth;
    NODES.forEach(function (n) { from[n.id] = { x: pos[n.id].x, y: pos[n.id].y, o: pos[n.id].o }; });

    NODES.forEach(function (n) {
      var d = depth[n.id], g = els[n.id];
      g.classList.toggle("is-focus", d === 0);
      g.classList.toggle("is-near", d === 1);
      g.classList.toggle("is-far", d === 2);
      g.classList.toggle("is-hidden", d === undefined);
      g.setAttribute("tabindex", d === undefined ? "-1" : "0");
      g.setAttribute("aria-hidden", d === undefined ? "true" : "false");
      g.setAttribute("aria-pressed", d === 0 ? "true" : "false");
    });
    edgeEls.forEach(function (e) {
      e.line.classList.toggle("is-focus-edge", e.a === focusId || e.b === focusId);
    });

    var dur = reduceMotion ? 0 : 700, t0 = null;
    if (anim) cancelAnimationFrame(anim);
    function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
    function frame(ts) {
      if (t0 === null) t0 = ts;
      var t = dur ? Math.min(1, (ts - t0) / dur) : 1, e = ease(t);
      NODES.forEach(function (n) {
        var a = from[n.id], b = to[n.id];
        pos[n.id] = { x: a.x + (b.x - a.x) * e, y: a.y + (b.y - a.y) * e, o: a.o + (b.o - a.o) * e };
      });
      draw(depth);
      if (t < 1) anim = requestAnimationFrame(frame);
    }
    anim = requestAnimationFrame(frame);
  }

  // ---------- Panel ----------
  var SHAPES = [
    ["research", "Research"], ["experience", "Experience"], ["project", "Project"],
    ["education", "Education"], ["theme", "Theme"], ["interest", "Outside work"]
  ];

  function shapeSvg(type) {
    var s = {
      person: '<circle cx="8" cy="8" r="6"/>',
      research: '<rect x="2.5" y="2.5" width="11" height="11"/>',
      experience: '<path d="M8 1.5 L14.5 13 L1.5 13 Z"/>',
      project: '<path d="M8 1 L15 8 L8 15 L1 8 Z"/>',
      education: '<path d="M8 1.5 L14 5 L14 11 L8 14.5 L2 11 L2 5 Z"/>',
      theme: '<circle cx="8" cy="8" r="4"/>',
      interest: '<circle cx="8" cy="8" r="3.2"/>'
    }[type];
    return '<svg class="shape t-' + type + '" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">' + s + "</svg>";
  }

  function renderPanel(id) {
    var n = byId[id], h = "";
    if (id === "pujan") {
      h += '<p class="p-type">' + shapeSvg("person") + "About</p>";
      h += '<h2 class="p-title">Pujan Pant</h2>';
      h += '<p class="p-meta">CS Graduate, Human–AI Interaction Researcher</p>';
      h += '<div class="p-body"><p>I study how people come to trust AI, and how interfaces can help them rely on it exactly as much as it deserves. I graduated in Computer Science with First Class Honours in 2025.</p></div>';
      h += '<p class="p-links"><a href="mailto:pantpujan017@gmail.com">Email</a><a href="https://www.linkedin.com/in/pujan-pant/" target="_blank" rel="noopener">LinkedIn</a><a href="https://github.com/pantpujan017" target="_blank" rel="noopener">GitHub</a><a href="https://scholar.google.com/citations?user=BZLxGOgAAAAJ&hl=en" target="_blank" rel="noopener">Scholar</a><a href="assets/Pujan-Pant-CV.pdf" target="_blank" rel="noopener">CV</a></p>';
      h += '<div class="p-section"><h3>Explore</h3><ul class="p-groups">';
      SHAPES.forEach(function (s) {
        if (s[0] === "theme") return;
        var items = NODES.filter(function (x) { return x.type === s[0] && adj.pujan.indexOf(x.id) > -1; });
        if (!items.length) return;
        h += '<li><span class="g-name">' + shapeSvg(s[0]) + s[1] + "</span>";
        items.forEach(function (x) { h += '<button type="button" class="chip" data-go="' + x.id + '">' + (x.title || x.label) + "</button>"; });
        h += "</li>";
      });
      h += "</ul></div>";
      h += '<p class="p-hint">Select any node on the map. Solid lines link parts of my work, dotted lines link themes.</p>';
    } else {
      h += '<button type="button" class="p-back" data-go="pujan">Back to Pujan</button>';
      h += '<p class="p-type">' + shapeSvg(n.type) + TYPE_NAME[n.type] + "</p>";
      h += '<h2 class="p-title">' + (n.title || n.label) + "</h2>";
      if (n.meta) h += '<p class="p-meta">' + n.meta + "</p>";
      if (n.body) h += '<div class="p-body">' + n.body + "</div>";
      if (n.links) {
        h += '<p class="p-links">';
        n.links.forEach(function (l) { h += '<a href="' + l[1] + '" target="_blank" rel="noopener">' + l[0] + "</a>"; });
        h += "</p>";
      }
      h += '<div class="p-section"><h3>Connected to</h3><div class="chips">';
      adj[id].forEach(function (x) {
        h += '<button type="button" class="chip" data-go="' + x + '">' + shapeSvg(byId[x].type) + (byId[x].title && byId[x].type !== "research" ? byId[x].title : byId[x].label) + "</button>";
      });
      h += "</div></div>";
    }
    panel.innerHTML = h;
    panel.scrollTop = 0;
  }

  panel.addEventListener("click", function (ev) {
    var b = ev.target.closest("[data-go]");
    if (b) setFocus(b.getAttribute("data-go"), true);
  });

  // ---------- Focus ----------
  function setFocus(id, fromPanel) {
    focusId = id;
    var result = layout(id);
    animateTo(result);
    renderPanel(id);
    var live = document.getElementById("map-live");
    if (live) live.textContent = "Showing " + (byId[id].title || byId[id].label) + " and its connections.";
    if (fromPanel && els[id]) { try { els[id].focus({ preventScroll: true }); } catch (e) {} }
  }

  setFocus("pujan");
})();
