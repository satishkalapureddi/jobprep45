
import { useEffect, useState } from "react";
import "./App.css";

const phases = [
  {
    title: "Python Fundamentals",
    days: "Days 1–10",
    color: "blue",
    tasks: [
      "Variables, data types, input/output",
      "If-else and comparison operators",
      "For loop and while loop",
      "Strings and string methods",
      "Lists and tuples",
      "Dictionaries and sets",
      "Functions and recursion basics",
      "Prime, factorial and palindrome",
      "String and list coding problems",
      "Revision and 20-question test",
    ],
  },
  {
    title: "Problem Solving + SQL",
    days: "Days 11–20",
    color: "green",
    tasks: [
      "Arrays and searching",
      "Sorting basics",
      "Two-sum problem",
      "Second-largest number",
      "Frequency counting",
      "Time complexity basics",
      "SQL SELECT and WHERE",
      "ORDER BY and GROUP BY",
      "SQL JOIN and aggregate functions",
      "Subqueries and SQLite practice",
    ],
  },
  {
    title: "Aptitude + CS Fundamentals",
    days: "Days 21–30",
    color: "purple",
    tasks: [
      "Percentages, ratios and averages",
      "Profit and loss",
      "Time and work",
      "Speed and distance",
      "Reasoning: series and coding-decoding",
      "Verbal ability and comprehension",
      "OOP concepts",
      "DBMS and normalization",
      "Operating systems basics",
      "Computer networks and mock test",
    ],
  },
  {
    title: "Projects + Interview Prep",
    days: "Days 31–38",
    color: "orange",
    tasks: [
      "Revise Python and React",
      "Revise SQL",
      "Prepare project explanation",
      "Explain project architecture",
      "Prepare Deloitte simulation explanation",
      "Practice Python interview questions",
      "Practice SQL and DBMS questions",
      "Prepare HR interview answers",
    ],
  },
  {
    title: "Mock Tests + Applications",
    days: "Days 39–45",
    color: "teal",
    tasks: [
      "Full aptitude and coding mock test",
      "Python and SQL revision",
      "CS fundamentals revision",
      "Technical mock interview",
      "HR mock interview and resume review",
      "Final mock test and weak topics",
      "Apply to suitable fresher jobs",
    ],
  },
];

const checklist = [
  "Infosys application submit cheyyadam",
  "Python basics complete cheyyadam",
  "50 Python problems practice cheyyadam",
  "SQL lo 30 queries solve cheyyadam",
  "5 aptitude mock tests rayadam",
  "Project explanation prepare cheyyadam",
  "Resume and certificates verify cheyyadam",
  "3 technical mock interviews complete cheyyadam",
];

const studyPlan = [
  { subject: "Python Coding", time: "1 hour", target: "3–5 problems" },
  { subject: "Aptitude & Reasoning", time: "1 hour", target: "20 questions" },
  { subject: "SQL", time: "45 min", target: "5 queries" },
  { subject: "CS Fundamentals", time: "45 min", target: "1 topic" },
  { subject: "Interview Practice", time: "30 min", target: "2 questions" },
];

const links = [
  { name: "HackerRank Python", url: "https://www.hackerrank.com/domains/python" },
  { name: "HackerRank SQL", url: "https://www.hackerrank.com/domains/sql" },
  { name: "LeetCode", url: "https://leetcode.com/problemset/" },
  { name: "IndiaBIX Aptitude", url: "https://www.indiabix.com/" },
];

function loadSaved(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

export default function App() {
  const [page, setPage] = useState("Home");
  const [completed, setCompleted] = useState(() =>
    loadSaved("jobprep45_completed", {})
  );
  const [checked, setChecked] = useState(() =>
    loadSaved("jobprep45_checklist", [])
  );
  const [notes, setNotes] = useState(() =>
    localStorage.getItem("jobprep45_notes") || ""
  );
  const [selectedPhase, setSelectedPhase] = useState(0);

  useEffect(() => {
    localStorage.setItem("jobprep45_completed", JSON.stringify(completed));
  }, [completed]);

  useEffect(() => {
    localStorage.setItem("jobprep45_checklist", JSON.stringify(checked));
  }, [checked]);

  useEffect(() => {
    localStorage.setItem("jobprep45_notes", notes);
  }, [notes]);

  const totalTasks = phases.reduce((sum, phase) => sum + phase.tasks.length, 0);
  const doneTasks = Object.values(completed).filter(Boolean).length;
  const percent = Math.round((doneTasks / totalTasks) * 100);
  const checklistPercent = Math.round((checked.length / checklist.length) * 100);

  const toggleTask = (phaseIndex, taskIndex) => {
    const key = `${phaseIndex}-${taskIndex}`;
    setCompleted((old) => ({ ...old, [key]: !old[key] }));
  };

  const navItems = [
    ["Home", "⌂"],
    ["Roadmap", "▤"],
    ["Daily Plan", "▦"],
    ["Practice Links", "↗"],
    ["Progress", "▥"],
    ["Notes", "▧"],
  ];

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand"><span className="brand-icon">◎</span> JobPrep <b>45</b></div>
        <div className="top-message">Better Skills → Better Opportunities → Your Dream Job</div>
        <div className="avatar">SK</div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <div className="side-label">MENU</div>
          {navItems.map(([name, icon]) => (
            <button
              key={name}
              className={`nav-item ${page === name ? "active" : ""}`}
              onClick={() => setPage(name)}
            >
              <span>{icon}</span>{name}
            </button>
          ))}
          <div className="side-tip">
            <strong>Keep going, Satish!</strong>
            <p>Small steps every day lead to big results.</p>
          </div>
        </aside>

        <main className="main">
          {page === "Home" && (
            <>
              <section className="welcome">
                <div>
                  <h1>Hello Satish 👋</h1>
                  <p>Your 45-day journey to get job ready starts here.</p>
                </div>
                <div className="target-card">
                  <span className="target-icon">◎</span>
                  <div>
                    <strong>Target</strong>
                    <p>Infosys (System Engineer) + Other Fresher Jobs</p>
                    <small>Application deadline: Sep 29, 2026</small>
                  </div>
                </div>
              </section>

              <section className="stats">
                <div className="stat green"><span>▣</span><small>Total Days</small><strong>45</strong><small>days</small></div>
                <div className="stat purple"><span>✓</span><small>Tasks Completed</small><strong>{doneTasks}</strong><small>of {totalTasks}</small></div>
                <div className="stat blue"><span>◷</span><small>Daily Study Time</small><strong>4–5</strong><small>hours</small></div>
                <div className="stat orange"><span>◎</span><small>Current Phase</small><strong>Phase 1</strong><small>Python Fundamentals</small></div>
              </section>

              <section className="progress-card">
                <div className="section-heading"><strong>Overall Progress</strong><b>{percent}%</b></div>
                <div className="progress-track"><div style={{ width: `${percent}%` }} /></div>
                <small>{doneTasks} of {totalTasks} roadmap tasks completed</small>
              </section>

              <section className="section">
                <h2>▣ 45-Day Roadmap</h2>
                <div className="phase-grid">
                  {phases.map((phase, i) => {
                    const done = phase.tasks.filter((_, j) => completed[`${i}-${j}`]).length;
                    return (
                      <button className={`phase-card ${phase.color}`} key={phase.title}
                        onClick={() => { setSelectedPhase(i); setPage("Roadmap"); }}>
                        <div className="phase-top">
                          <span className="phase-icon">{["🐍", "▤", "🧠", "</>", "✓"][i]}</span>
                          <strong>Phase {i + 1}: {phase.title}</strong>
                          <small>{phase.days}</small>
                        </div>
                        <ul>{phase.tasks.slice(0, 4).map((task) => <li key={task}>{task}</li>)}</ul>
                        <div className="mini-progress"><div><span style={{ width: `${done / phase.tasks.length * 100}%` }} /></div><small>{done}/{phase.tasks.length}</small><b>›</b></div>
                      </button>
                    );
                  })}
                </div>
              </section>
            </>
          )}

          {page === "Roadmap" && (
            <section className="page-section">
              <h1>45-Day Roadmap</h1>
              <p className="subtitle">Complete each task and track your progress.</p>
              <div className="phase-tabs">
                {phases.map((phase, i) => (
                  <button key={phase.title} className={selectedPhase === i ? "selected" : ""}
                    onClick={() => setSelectedPhase(i)}>Phase {i + 1}</button>
                ))}
              </div>
              <div className={`detail-card ${phases[selectedPhase].color}`}>
                <h2>{phases[selectedPhase].title}</h2>
                <p>{phases[selectedPhase].days}</p>
                <div className="task-list">
                  {phases[selectedPhase].tasks.map((task, j) => (
                    <label className="task" key={task}>
                      <input type="checkbox" checked={!!completed[`${selectedPhase}-${j}`]}
                        onChange={() => toggleTask(selectedPhase, j)} />
                      <span>{task}</span>
                    </label>
                  ))}
                </div>
                <div className="progress-track"><div style={{ width: `${phases[selectedPhase].tasks.filter((_, j) => completed[`${selectedPhase}-${j}`]).length / phases[selectedPhase].tasks.length * 100}%` }} /></div>
              </div>
              <div className="phase-navigation">
                <button disabled={selectedPhase === 0} onClick={() => setSelectedPhase(selectedPhase - 1)}>← Previous</button>
                <button disabled={selectedPhase === 4} onClick={() => setSelectedPhase(selectedPhase + 1)}>Next Phase →</button>
              </div>
            </section>
          )}

          {page === "Daily Plan" && (
            <section className="page-section">
              <h1>Daily Study Plan</h1>
              <p className="subtitle">Follow this routine every day. Take short breaks between sessions.</p>
              <div className="table-card">
                <div className="study-row study-head"><span>Subject</span><span>Time</span><span>Daily Target</span></div>
                {studyPlan.map((item) => (
                  <div className="study-row" key={item.subject}>
                    <strong>{item.subject}</strong><span>{item.time}</span><span>{item.target}</span>
                  </div>
                ))}
              </div>
              <div className="info-card"><strong>Tip</strong><p>Start with the most difficult topic while you are fresh. Review yesterday's topics for 10 minutes.</p></div>
            </section>
          )}

          {page === "Practice Links" && (
            <section className="page-section">
              <h1>Practice Links</h1>
              <p className="subtitle">Free websites to practice coding, SQL and aptitude.</p>
              <div className="link-grid">
                {links.map((link) => (
                  <a className="link-card" href={link.url} target="_blank" rel="noreferrer" key={link.name}>
                    <span>↗</span><strong>{link.name}</strong><b>Open website →</b>
                  </a>
                ))}
              </div>
            </section>
          )}

          {page === "Progress" && (
            <section className="page-section">
              <h1>Your Progress</h1>
              <p className="subtitle">Track your completed roadmap tasks and preparation checklist.</p>
              <div className="progress-card big-progress">
                <strong>Roadmap completion</strong><h2>{percent}%</h2>
                <div className="progress-track"><div style={{ width: `${percent}%` }} /></div>
                <small>{doneTasks} / {totalTasks} tasks completed</small>
              </div>
              <div className="check-card">
                <div className="section-heading"><h2>Job Preparation Checklist</h2><b>{checked.length}/{checklist.length}</b></div>
                <div className="progress-track"><div style={{ width: `${checklistPercent}%` }} /></div>
                {checklist.map((item, i) => (
                  <label className="task" key={item}>
                    <input type="checkbox" checked={checked.includes(i)}
                      onChange={(e) => setChecked(old => e.target.checked ? [...old, i] : old.filter(x => x !== i))} />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </section>
          )}

          {page === "Notes" && (
            <section className="page-section">
              <h1>My Notes</h1>
              <p className="subtitle">Write important topics, interview questions or things to revise.</p>
              <textarea className="notes" value={notes} onChange={(e) => setNotes(e.target.value)}
                placeholder="Type your notes here..." />
              <small className="saved">Notes automatically save in this browser.</small>
            </section>
          )}
          <footer>JobPrep 45 · Your daily progress matters. Keep learning, Satish! 💪</footer>
        </main>
      </div>
    </div>
  );
}