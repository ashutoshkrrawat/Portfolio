import { useState } from 'react'
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Particles from './components/Particles.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Particles
        className="fixed inset-0 -z-10"
        particleCount={200}
        particleSpread={15}
        speed={0.1}
        particleColors={["#008080", "#ffffff", "#ffffff"]}
        moveParticlesOnHover={true}
        particleHoverFactor={1}
        alphaParticles={true}
        particleBaseSize={250}
        sizeRandomness={1}
        cameraDistance={40} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  )
}

export default App