import About from "./components/About"
import Commitment from "./components/Commitment"
import Features from "./components/Features"
import Footer from "./components/Footer"
import FutureGrowth from "./components/FutureGrowth"
import Hero from "./components/Hero"
import ToolsRequired from "./components/ToolsRequired"

function App() {
  return (
    <div className="md:px-8">
      <Hero />
      <Features />
      <FutureGrowth />
      <Commitment />
      <ToolsRequired />
      <About />
      <Footer />
    </div>
  )
}

export default App
