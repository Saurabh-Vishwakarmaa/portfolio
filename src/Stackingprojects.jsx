import React from 'react';
import './StackingCards.css';
import { 
  SiHtml5, SiCss3, SiReact, SiVite, SiJavascript, 
   SiPython, SiC, SiDart, SiTailwindcss, 
  SiMysql, SiFirebase, SiNodedotjs, SiExpress, SiMongodb ,SiGradle
} from 'react-icons/si';
import { FaMobile } from 'react-icons/fa';

const StackingCards = () => {
  const techIcons = [
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Vite', icon: SiVite, color: '#646CFF' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    // { name: 'Java', icon: SiJava, color: '#007396' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'C', icon: SiC, color: '#A8B9CC' },
    { name: 'Dart', icon: SiDart, color: '#0175C2' },
    {name:'Gradle',icon:SiGradle,color:'#FFFFFF'},
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }
  ];

  return (
    <div className="stacking-cards-container">
      <header>
        <div className='skills'>
            SOME THINGS THAT I DO
          {/* <h1>My Tech Journey</h1>
          <p>Crafting Digital Solutions Across Platforms</p> */}
        </div>
      </header>
      <main>
        <ul id="cards">
          <li className="card" id="card_1">
            <div className="card__content">
              <div>
                <div className='webs'> [1].&nbsp;&nbsp;&nbsp;WEB DEVELOPMENT</div>
                <p>Creating responsive and dynamic web applications using modern frameworks and technologies.</p>
                <div className="tech-icons">
                  {techIcons.slice(0, 6).map((tech, index) => (
                    <tech.icon key={index} color={tech.color} title={tech.name} />
                  ))}
                </div>
                {/* <p><a href="#" className="btn btn--accent">Explore Projects</a></p> */}
              </div>
              {/* <figure>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Web Development" />
              </figure> */}
            </div>
          </li>
          <li className="card" id="card_2">
            <div className="card__content">
              <div>
              <div className='andy'>[2].&nbsp;&nbsp;&nbsp;ANDROID DEVELOPMENT</div>
                <p>Building cross-platform mobile applications with Flutter and native technologies.</p>
                <div className="tech-icons">
                  <FaMobile size={40} color="#00A4EF" />
                  {techIcons.filter(tech => tech.name === 'Dart' || tech.name === 'Java'|| tech.name==='Gradle').map((tech, index) => (
                    <tech.icon key={index} color={tech.color} title={tech.name} />
                  ))}
                </div>
                {/* <p><a href="#" className="btn btn--accent">View Mobile Apps</a></p> */}
              </div>
              {/* <figure>
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3" alt="Mobile Development" />
              </figure> */}
            </div>
          </li>
          <li className="card" id="card_3">
            <div className="card__content">
              <div>
              <div className='bands'>[3].&nbsp;&nbsp;&nbsp;BACKEND AND DATABASES</div>
                <p>Developing robust server-side solutions and managing data with modern database technologies.</p>
                <div className="tech-icons">
                  {techIcons.slice(10).map((tech, index) => (
                    <tech.icon key={index} color={tech.color} title={tech.name} />
                  ))}
                </div>
                {/* <p><a href="#" className="btn btn--accent">Backend Projects</a></p> */}
              </div>
              {/* <figure>
                <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e" alt="Backend Development" />
              </figure> */}
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default StackingCards;