import{Link,NavLink}from'react-router-dom';import{useState,useEffect}from'react';import{motion,useReducedMotion,useMotionValue,useSpring}from'framer-motion';import{ArrowUpRight,Menu,X,Github,Linkedin,Mail,ArrowRight}from'lucide-react';import{profile}from'./data';
const links=[['Home','/'],['About','/about'],['Projects','/projects'],['Research','/research'],['Experience','/experience'],['Contact','/contact']];
export function Navbar(){const[open,setOpen]=useState(false);return <header className="header"><nav className="nav glass"><Link to="/" className="brand" onClick={()=>setOpen(false)}><b>KV.</b><span>{profile.name}</span></Link><div className="navlinks">{links.map(([n,p])=><NavLink end={p==='/'} key={p} to={p} className={({isActive})=>isActive?'active':''}>{n}</NavLink>)}</div><Link className="navtalk" to="/contact">Let's talk <ArrowUpRight size={14}/></Link><button className="menubtn" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></nav>{open&&<div className="mobile glass">{links.map(([n,p])=><NavLink end={p==='/'} key={p} to={p} onClick={()=>setOpen(false)}>{n}</NavLink>)}</div>}</header>}
export function Footer(){return <footer className="footer"><div><span className="eyebrow">HAVE AN IDEA?</span><h2>Let's build something<br/><i>meaningful.</i></h2><Link className="round" to="/contact"><ArrowUpRight/></Link></div><section><span>© {new Date().getFullYear()} {profile.name}</span><span>Designed with curiosity. Built with intent.</span><div className="social"><a href={profile.github} target="_blank" rel="noreferrer"><Github/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/></a><a href={`mailto:${profile.email}`}><Mail/></a></div></section></footer>}
export function Reveal({children,className=''}){const reduce=useReducedMotion();return <motion.div className={className} initial={{opacity:0,y:reduce?0:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:reduce?.01:.7,ease:[.22,1,.36,1]}}>{children}</motion.div>}
export function Layout({children}){return <><div className="ambient a"/><div className="ambient b"/><Navbar/><main>{children}</main><div className="wrap"><Footer/></div><MischiefGhost/></>}
export function PageTitle({number,label,title,sub}){return <Reveal className="pagetitle"><span className="eyebrow">{number} / {label}</span><h1>{title}</h1><p>{sub}</p></Reveal>}


function MischiefGhost(){
 const [mood,setMood]=useState(0);
 const [message,setMessage]=useState(false);
 const x=useMotionValue(typeof window!=='undefined'?window.innerWidth-105:900);
 const y=useMotionValue(typeof window!=='undefined'?window.innerHeight-135:650);
 const sx=useSpring(x,{stiffness:65,damping:18,mass:.8});
 const sy=useSpring(y,{stiffness:65,damping:18,mass:.8});
 useEffect(()=>{
  const move=(e)=>{
   if(e.target?.closest?.('.mischief-ghost')) return;
   const w=window.innerWidth,h=window.innerHeight;
   const size=w<600?58:76;
   x.set(Math.max(8,Math.min(w-size-8,e.clientX+22)));
   y.set(Math.max(76,Math.min(h-size-12,e.clientY+20)));
  };
  const reset=()=>{x.set(Math.max(8,window.innerWidth-105));y.set(Math.max(90,window.innerHeight-130));};
  window.addEventListener('pointermove',move,{passive:true});
  window.addEventListener('resize',reset);
  return ()=>{window.removeEventListener('pointermove',move);window.removeEventListener('resize',reset)};
 },[x,y]);
 const lines=['Boo! 👻','Hey, human!','Keep building ✨','I saw that cursor…','Tiny but mighty.'];
 return <motion.div className="mischief-ghost-wrap" style={{x:sx,y:sy}}>
  {message&&<motion.div className="ghost-speech" initial={{opacity:0,y:8,scale:.8}} animate={{opacity:1,y:0,scale:1}}>{lines[mood%lines.length]}</motion.div>}
  <motion.button type="button" className="mischief-ghost" aria-label="Play with the tiny ghost" title="Click me!" onClick={()=>{setMood(v=>v+1);setMessage(true);window.setTimeout(()=>setMessage(false),2100)}} animate={{y:[0,-8,0],rotate:[-5,5,-5]}} transition={{duration:3.4,repeat:Infinity,ease:'easeInOut'}}>
   <motion.svg key={mood} viewBox="0 0 100 112" role="img" aria-label="A playful little ghost" animate={mood?{rotate:[0,-18,18,360],scale:[1,.82,1.12,1]}:{}} transition={{duration:.8,ease:'easeOut'}} >
    <defs><linearGradient id="ghostBody" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#fff"/><stop offset=".62" stopColor="#d8d8d8"/><stop offset="1" stopColor="#929292"/></linearGradient><filter id="ghostShadow" x="-30%" y="-30%" width="160%" height="170%"><feGaussianBlur stdDeviation="3"/></filter></defs>
    <ellipse cx="51" cy="103" rx="27" ry="5" fill="#000" opacity=".35" filter="url(#ghostShadow)"/>
    <path d="M18 83 C12 68 14 42 22 25 C29 10 42 5 54 7 C74 9 86 27 86 48 L86 84 C78 77 73 77 66 87 C58 96 53 89 47 84 C39 77 33 79 27 88 C23 92 19 89 18 83Z" fill="url(#ghostBody)" stroke="#fff" strokeWidth="2.2"/>
    <path d="M25 30 C32 14 45 12 55 14" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".8"/>
    <ellipse cx="39" cy="48" rx="4.7" ry="7" fill="#171717"/><ellipse cx="66" cy="47" rx="4.7" ry="7" fill="#171717"/>
    <circle cx="37.5" cy="45.5" r="1.5" fill="#fff"/><circle cx="64.5" cy="44.5" r="1.5" fill="#fff"/>
    <ellipse cx="28" cy="60" rx="5" ry="3" fill="#b5a0a0" opacity=".7"/><ellipse cx="76" cy="59" rx="5" ry="3" fill="#b5a0a0" opacity=".7"/>
    <path d="M46 62 Q53 70 61 61" fill="none" stroke="#222" strokeWidth="2.8" strokeLinecap="round"/>
    <path d="M17 57 Q5 52 8 42" fill="none" stroke="#ddd" strokeWidth="5" strokeLinecap="round"/><path d="M84 56 Q96 49 91 39" fill="none" stroke="#ddd" strokeWidth="5" strokeLinecap="round"/>
    <path d="M76 17 L82 7 L85 20" fill="#eee" stroke="#fff" strokeWidth="1"/>
   </motion.svg>
   <span className="ghost-sparkle sparkle-a">✦</span><span className="ghost-sparkle sparkle-b">·</span>
  </motion.button>
 </motion.div>
}

