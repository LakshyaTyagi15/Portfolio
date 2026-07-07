import useReveal from '../useReveal';
import './Skills.css';

const skillsData = [
  {
    category: "Languages",
    skills: ["C/C++", "SQL", "JavaScript"]
  },
  {
    category: "Frameworks",
    skills: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth"]
  },
  {
    category: "Tools & OS",
    skills: ["Git", "GitHub", "PostMan", "VS Code", "Vim/NeoVim", "Arch Linux", "Windows 11/10"]
  },
  {
    category: "Libraries & DBs",
    skills: ["Bcrypt", "Multer", "Mongoose", "Oracle Database"]
  },
  {
    category: "Core Concepts",
    skills: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"]
  }
];

const Skills = () => {
  const titleRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="section" id="skills">
      <div className="container">
        <hr className="section-divider" />

        <div className="reveal" ref={titleRef}>
          <p className="section-label">02 — Skills</p>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-grid reveal reveal-stagger" ref={gridRef}>
          {skillsData.map((category, index) => (
            <div className="skill-group" key={index}>
              <h3 className="skill-category">{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span className="skill-tag" key={idx}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
