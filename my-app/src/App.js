import './App.css';
import projects from './projects.js';

function Header() {
  return <div className="Header">
    <h1>Sophie Stone</h1>
    <div id="icons">
    <a href="https://github.com/smstone0">    
      <img src="github-mark/github-mark-white.svg" alt="GitHub" width="32.66" height= "32"></img>
    </a>
    <div id="icon-padding"></div>
    <a href="https://www.linkedin.com/in/sophie-stone-/">    
      <img src="/In-White-96.png" alt="LinkedIn" width="32.66" height= "32"></img>
    </a>
    </div>
  </div>
}

function Body() {
  return <div className="body">
    <ProjectList></ProjectList>
  </div>
}

function ProjectList() {
  return (
    <section>
    <h1>Projects</h1>
    <div id="projectList">
    {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
      </div>
    </section>
  )
}

function Project({project}) {
  return (
    <div class="project">
      <a href={project.url}>
        <h3>{project.title}</h3>
        <p>{project.date}</p>
        <p>{project.description}</p>
      </a>
    </div>
  );  
}

function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>
      <Body></Body>
    </div>
  );
}

export default App;
