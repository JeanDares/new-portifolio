import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Projects from '../pages/projects/Projects';
import Professional from '../pages/professional/professional';
import Certificates from '../pages/certificates/certificates';
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
                path="/professional"
                element={
                    <MainLayout>
                        <Professional />
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
            <Route
                path="/experiences"
                element={
                    <MainLayout>
                        <Certificates />
                    </MainLayout>
                }
            />
            {/* <Route
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
