import "./style.css";

const About = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          
        </div>
        <div>
          <strong>Libraries:</strong>
          <li>Bootstrap</li>
          <li>Express.js</li>
          <li>Material-ui</li>
          <li>React.js</li>
        </div>

        <div>
          <strong>Tools:</strong>
          <li>Webpack</li>
          <li>Heroku</li>
          <li>Git & Github</li>
        </div>

        <div>
          <strong>Uint Test:</strong>
          <li>Jest</li>
          <li>React-test</li>
         
        </div>
        <div>
          <strong>Database:</strong>
          <li>MySQL</li>
          <li>MongoDB</li>
         
        </div>
      </div>
    </div>
  );
};

export default About;