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

    { id: "paper", type: "research", label: "LLM-SC for sacred heritage", sub: "In preparation",
      title: "Adapting LLM-SC for Living Sacred Heritage",
      meta: "Paper in preparation, 2026",
      body: "<p><em>Domain-Specific Semantic Extraction, Aspect-Level Sentiment, and Network Analysis of Pashupatinath Reviews.</em></p><p>Extends the LLM–social computing framework from museums to a living sacred site. A GPT-4o pipeline reads 3,939 TripAdvisor reviews of Pashupatinath Temple written between 2008 and 2026, extracts entities and aspect-level sentiment, and maps them as a semantic network.</p>" },
    { id: "llms", type: "theme", label: "LLMs",
      body: "<p>Large language models: the engine of my sacred-heritage paper and of the agents in the credit-scoring project.</p>" },
    { id: "network", type: "theme", label: "Network analysis",
      body: "<p>Mapping people, places and ideas as nodes and the relations between them as links. My paper builds one from thousands of reviews; this page is a small one.</p>" },
    { id: "heritage", type: "theme", label: "Cultural heritage",
      body: "<p>Pashupatinath Temple in Kathmandu, seen through 18 years of visitor reviews.</p>" },

    { id: "kmc", type: "experience", label: "AI Instructor", sub: "2025",
      title: "AI Instructor",
      meta: "Kathmandu Metropolitan City, May – Jun 2025",
      body: "<p>Taught 300+ hours of hands-on AI and Python sessions, turning complex topics into practical skills. Co-led classes on machine learning, exploratory data analysis and AI tools.</p>" },

    { id: "scala", type: "experience", label: "AI Engineer Intern", sub: "2024 – 25",
      title: "AI Engineer Intern",
      meta: "Scala Technologies, Sep 2024 – Feb 2025",
      body: "<p>Led a team building route optimisation and place recommendations based on the tags a user selects. Worked on brain tumour segmentation using state-of-the-art deep-learning models.</p>" },
    { id: "routes", type: "theme", label: "Route optimisation",
      body: "<p>Recommending places from the interest tags a user picks, then finding a good route between them. I led the team on this at Scala Technologies.</p>" },
    { id: "tumour", type: "theme", label: "Brain tumour segmentation",
      body: "<p>Outlining tumours in brain scans with state-of-the-art deep-learning models.</p>" },

    { id: "credit", type: "project", label: "Multi-agent credit scoring", sub: "Hackathon 2026",
      title: "Multi-agent autonomous credit scoring",
      meta: "Selected for the GIBL AI/ML Hackathon 2026",
      body: "<p>Five AI agents work through a loan application together, checking documents, income, credit score and Nepal Rastra Bank lending rules before reaching a decision. Built for borrowers with no payslips or formal credit history.</p>",
      links: [["View code on GitHub", "https://github.com/sagarnewpane/autonomous-credit-and-lending-orchestrator"]] },
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
      body: "<p>Football, workouts, books and long podcasts. I trekked to Annapurna Base Camp in 2025.</p>" },
    { id: "football", type: "interest", label: "Football", body: "<p>Playing and watching.</p>" },
    { id: "trek", type: "interest", label: "Trekking", sub: "ABC 2025", body: "<p>Annapurna Base Camp in 2025.</p>" },
    { id: "books", type: "interest", label: "Books & podcasts", body: "<p>Reading, and long-form podcasts.</p>" },
    { id: "workouts", type: "interest", label: "Workouts", body: "<p>Training most days.</p>" }
  ];

  // [from, to, dotted?]  Solid: direct parts of my work. Dotted: themes and looser ties.
  var EDGES = [
    ["pujan", "trust"], ["pujan", "paper"], ["pujan", "credit"], ["pujan", "car"],
    ["pujan", "bsc"], ["pujan", "outside", true], ["pujan", "kmc"], ["pujan", "scala"],
    ["trust", "mental"], ["trust", "calibration"], ["trust", "reliance"], ["trust", "interfaces"],
    ["paper", "llms", true], ["paper", "network", true], ["paper", "heritage", true],
    ["credit", "agents", true], ["credit", "llms", true],
    ["car", "vision", true], ["car", "bsc", true],
    ["scala", "routes"], ["scala", "tumour"], ["tumour", "vision", true],
    ["outside", "football", true], ["outside", "trek", true], ["outside", "books", true], ["outside", "workouts", true]
  ];

  var TYPE_NAME = {
    person: "About", research: "Research", experience: "Experience", project: "Project",
    education: "Education", theme: "Theme", interest: "Outside work"
  };

  // Geometry
  var W = 800, H = 680, CX = 400, CY = 336, R1 = 178, R2 = 292;
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
    var weights = ring1.map(function (pid) { return 2 + kidsOf[pid].length; });
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
      target[id] = { x: CX + R1 * Math.cos(a), y: CY + R1 * Math.sin(a), o: 1 };
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
      h += '<p class="p-links"><a href="mailto:pantpujan017@gmail.com">Email</a><a href="https://www.linkedin.com/in/pujan-pant/" target="_blank" rel="noopener">LinkedIn</a><a href="https://github.com/pantpujan017" target="_blank" rel="noopener">GitHub</a><a href="assets/Pujan-Pant-CV.pdf" target="_blank" rel="noopener">CV</a></p>';
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
