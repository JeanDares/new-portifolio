import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Projects from '../pages/projects/Projects';
// import Experiences from '../pages/experiences/Experiences';
// import Formation from '../pages/formation/Formation';
// import Contact from '../pages/contact/Contact';

function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                }
            />
            <Route
                path="/about"
                element={
                    <MainLayout>
                        <About />
                    </MainLayout>
                }
            />
            <Route
                path="/projects"
                element={
                    <MainLayout>
                        <Projects />
                    </MainLayout>
                }
            />
            {/* <Route
                path="/experiences"
                element={
                    <MainLayout>
                        <Experiences />
                    </MainLayout>
                }
            />
            <Route
                path="/formation"
                element={
                    <MainLayout>
                        <Formation />
                    </MainLayout>
                }
            />
            <Route
                path="/contact"
                element={
                    <MainLayout>
                        <Contact />
                    </MainLayout>
                }
            /> */}
        </Routes>
    );
}

export default AppRoutes;
