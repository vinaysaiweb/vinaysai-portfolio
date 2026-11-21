import{Routes,Route,Link,useLocation}from'react-router-dom';import{useEffect}from'react';import{motion}from'framer-motion';import{ArrowDown,ArrowRight,ArrowUpRight,BrainCircuit,Code2,Database,GraduationCap,Microscope,BookOpen,BriefcaseBusiness,Mail,MapPin,Globe}from'lucide-react';import{profile,skills,projects,experience,interests}from'./data';import{Layout,Reveal,PageTitle}from'./components';
function Home(){return <div className="wrap"><section className="hero"><div className="herotext"><div className="availability"><i/> OPEN TO LEARNING & COLLABORATION</div><span className="eyebrow kicker">COMPUTER SCIENCE · AI & MACHINE LEARNING</span><motion.h1 initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:.9}}>Building<br/><em>Intelligence.</em></motion.h1><p className="lead">I'm <b>{profile.name}</b> — a computer science student exploring machine learning, generative AI and intelligent software systems.</p><div className="actions"><Link className="btn light" to="/projects">Explore my work <ArrowUpRight size={16}/></Link><Link className="btn outline" to="/about">More about me <ArrowRight size={15}/></Link></div><div className="socialline"><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={`mailto:${profile.email}`}>Email ↗</a></div></div><Reveal className="portraitbox glass"><div className="photo-wrap"><img src="/images/vinay-portrait.jpg" alt="Korada Vinay Sai in a navy university blazer"/><div className="photo-shade"/></div><div className="photocaption"><span>01 / INTRODUCTION</span><b>Korada Vinay Sai</b><small>AI & ML · Computer Science</small></div><div className="photo-chip">Curious by nature · Building by practice</div></Reveal><a href="#intro" className="scroll">SCROLL TO EXPLORE <ArrowDown size={14}/></a></section>
<section id="intro" className="intro"><Reveal><span className="eyebrow">A LITTLE ABOUT MY APPROACH</span><h2>I turn <em>complex ideas</em><br/>into thoughtful technology.</h2></Reveal><Reveal><p>My interests sit at the intersection of computer science, data and intelligent software. I learn by building, testing ideas and improving one iteration at a time.</p><Link className="textlink" to="/about">Get to know me <ArrowUpRight size={15}/></Link></Reveal></section>
<section className="section"><Reveal className="sectionhead"><div><span className="eyebrow">SELECTED WORK</span><h2>Ideas meet <em>execution.</em></h2></div><Link className="textlink" to="/projects">All projects <ArrowUpRight size={15}/></Link></Reveal><div className="projectgrid">{projects.slice(0,2).map((p,i)=><Reveal className="project glass" key={p.no}><div className={`art art${i}`}><span>{p.no}</span><div className="orb"/><small>{p.type.toUpperCase()}</small></div><div className="projectbody"><label>{p.status}</label><h3>{p.name}</h3><p>{p.desc}</p><div className="tags">{p.stack.map(t=><small key={t}>{t}</small>)}</div><a className="textlink" href={p.repo} target="_blank" rel="noreferrer">Explore repository <ArrowUpRight size={14}/></a></div></Reveal>)}</div></section>
<section className="section"><Reveal className="sectionhead"><div><span className="eyebrow">AREAS OF INTEREST</span><h2>Questions worth <em>exploring.</em></h2></div><Link className="textlink" to="/research">Research interests <ArrowUpRight size={15}/></Link></Reveal><div className="interestgrid">{interests.slice(0,4).map((x,i)=><Reveal className="interest glass" key={x}><span>0{i+1}</span><p>{x}</p></Reveal>)}</div></section><section className="closing glass"><div><span className="eyebrow">THE NEXT CHAPTER</span><h2>Good work starts<br/>with a <em>conversation.</em></h2></div><Link className="round" to="/contact"><ArrowUpRight/></Link></section></div>}
function About(){return <div className="wrap inner"><PageTitle number="01" label="ABOUT ME" title={<>Driven by questions.<br/><em>Grounded in building.</em></>} sub="I'm a B.Tech student in Computer Science & Engineering, specializing in Artificial Intelligence and Machine Learning at Uttaranchal University."/><div className="aboutgrid"><Reveal className="aboutphoto glass"><img src="/images/vinay-portrait.jpg" alt="Korada Vinay Sai"/></Reveal><Reveal className="aboutcopy"><span className="eyebrow">MY STORY</span><h2>Learning to make technology <em>think more usefully.</em></h2><p>I'm pursuing my undergraduate degree with a focus on AI and ML. I enjoy exploring how data, algorithms and software come together to solve meaningful problems.</p><p>My approach is practical: understand the fundamentals, build something real, learn from what doesn't work and keep improving. I'm especially interested in machine learning, generative AI and intelligent applications.</p><div className="facts"><div><small>DEGREE</small><b>{profile.degree}</b></div><div><small>UNIVERSITY</small><b>{profile.university}</b></div><div><small>SPECIALIZATION</small><b>{profile.specialization}</b></div><div><small>GRADUATION</small><b>{profile.graduation}</b></div></div><div className="facts"><div><small>PROBLEM SOLVING</small><b>Python & Web Development</b></div><div><small>STUDENT ID</small><b>Roll No. 33</b></div></div></Reveal></div><section className="section"><Reveal className="sectionhead"><div><span className="eyebrow">TECHNICAL TOOLKIT</span><h2>Skills in <em>progress.</em></h2></div></Reveal><div className="skillgrid">{skills.map((s,i)=><Reveal className="skill glass" key={s.title}><span>0{i+1} · {s.level}</span><h3>{s.title}</h3><div className="tags">{s.items.map(t=><small key={t}>{t}</small>)}</div></Reveal>)}</div></section></div>}
function Projects(){return <div className="wrap inner"><PageTitle number="02" label="PROJECTS" title={<>Building things<br/><em>that make sense.</em></>} sub="A selection of projects, experiments and practical explorations. Each one is a chance to turn concepts into working software."/><div className="allprojects">{projects.map((p,i)=><Reveal className="projectrow glass" key={p.no}><div className={`art art${i%2}`}><span>{p.no}</span><div className="orb"/><small>{p.type.toUpperCase()}</small></div><div className="projectbody"><label>{p.status} · {p.type}</label><h2>{p.name}</h2><p>{p.desc}</p><div className="tags">{p.stack.map(t=><small key={t}>{t}</small>)}</div><a className="textlink" href={p.repo} target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight size={14}/></a></div></Reveal>)}</div><p className="tiny">Repository links currently open your GitHub profile. Replace each with its exact project repository URL when ready.</p></div>}
function Research(){return <div className="wrap inner"><PageTitle number="03" label="RESEARCH & INTERESTS" title={<>Stay curious.<br/><em>Follow the evidence.</em></>} sub="The topics and questions I'm exploring across artificial intelligence, machine learning and computer science."/><div className="researchgrid">{interests.map((x,i)=><Reveal className="research glass" key={x}><span>INTEREST 0{i+1}</span><h3>{x}</h3><p>Area of ongoing learning and exploration.</p></Reveal>)}</div><section className="journal glass"><BookOpen/><div><span className="eyebrow">READING & NOTES</span><h2>Research journal</h2><p>Paper summaries, reading notes and experiments will be added as they are completed. No unpublished work is presented as a publication.</p></div></section></div>}
function Experience(){return <div className="wrap inner"><PageTitle number="04" label="EXPERIENCE & EDUCATION" title={<>Every experience<br/><em>adds a perspective.</em></>} sub="Learning through coursework, internship experience and hands-on projects."/><div className="timeline">{experience.map((e,i)=><Reveal className="timelineitem" key={e.role}><span className="timelinepin">{i===0?<BriefcaseBusiness/>:<GraduationCap/>}</span><article className="glass"><span>{e.date}</span><h2>{e.role}</h2><h3>{e.org}</h3><p>{e.desc}</p></article></Reveal>)}</div><Reveal className="extracard glass"><span className="eyebrow">PRACTICAL LEARNING</span><h2>Build · Test · Learn · Improve.</h2><p>My project work includes a student-performance ML model, an emergency-safety application concept and full-stack web development practice.</p></Reveal></div>}

function Contact(){
  return (
    <div className="wrap inner">
      <PageTitle
        number="05"
        label="CONTACT"
        title={<>Have a thoughtful<br/><em>problem to solve?</em></>}
        sub="I'm interested in learning, exchanging ideas and connecting with people building useful technology."
      />

      <div className="contact glass">
        <div>
          <span className="eyebrow">START A CONVERSATION</span>

          <h2>
            Let's build<br/>
            <em>what's next.</em>
          </h2>

          <a className="email" href={`mailto:${profile.email}`}>
            <Mail/>
            {profile.email}
            <ArrowUpRight/>
          </a>
        </div>

        <div className="contactlinks">

          <a href={profile.github} target="_blank" rel="noreferrer">
            <b>GitHub</b>
            <span>Code, projects and experiments</span>
            <ArrowUpRight/>
          </a>

          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <b>LinkedIn</b>
            <span>Professional profile</span>
            <ArrowUpRight/>
          </a>

          <a href={profile.leetcode} target="_blank" rel="noreferrer">
            <b>LeetCode</b>
            <span>Problem solving and coding practice</span>
            <ArrowUpRight/>
          </a>

          <a href={`mailto:${profile.email}`}>
            <b>Email</b>
            <span>Direct contact</span>
            <ArrowUpRight/>
          </a>

        </div>
      </div>
    </div>
  );
}

function NotFound(){return <div className="wrap inner"><PageTitle number="404" label="NOT FOUND" title={<>This page took<br/><em>a different route.</em></>} sub="The page you're looking for isn't here."/><Link className="btn light" to="/">Back home</Link></div>}
export default function App(){const loc=useLocation();useEffect(()=>{window.scrollTo({top:0,behavior:'auto'});},[loc.pathname]);return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/projects" element={<Projects/>}/><Route path="/research" element={<Research/>}/><Route path="/experience" element={<Experience/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></Layout>}
