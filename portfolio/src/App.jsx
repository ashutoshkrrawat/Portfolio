import { useState } from 'react'
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import { Meteors } from "@/components/ui/meteors"
import { Particles } from "@/components/ui/particles"
import { MouseTrail } from './components/MouseTrail.jsx';
import { DotBackground } from './components/DottedBackground.jsx';
import TechStack from './sections/TechStack.jsx';
import Socials from './sections/Social.jsx';
import { SparklesCore } from './components/ui/sparkles.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MouseTrail/>
      
      {/* Fixed Meteor Background - covers entire viewport */}
      {/* <div className="fixed inset-0 bg-black -z-10 overflow-hidden">
        <Meteors
  number={30}
  minDelay={0.2}
  maxDelay={1.5}
  minDuration={2}
  maxDuration={8}
  angle={215}
  className="bg-white"  // Add this to make meteors white/visible
/>
      </div> */}
  <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
  <Particles 
  quantity={100}
  color="#ffffff"
  connectionDistance={100}      // How far particles connect
  showConnections={true}         // Toggle connections
  connectionColor="#ffffff"      // Line color
  connectionOpacity={0.2}        // Max line opacity
  className="fixed inset-0 -z-10 bg-black"/>
</div>
      {/* Your actual content - with relative positioning */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills className="bg-rgb(14, 16, 15)"/>
        <Projects />
        <DotBackground>
        </DotBackground>
        <TechStack />
        <Socials/>
      </div>
    </>
  )
}

export default App