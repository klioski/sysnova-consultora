import './App.css'

import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Services from './components/Services.jsx';
import WhyUs from './components/WhyUs.jsx';
import Process from './components/Process.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { Analytics } from "@vercel/analytics/react";

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <Services />
            <WhyUs />
            <Process />
            <About />
            <Contact />
            <Footer />
            <Analytics />
        </div>
    );
}

export default App
