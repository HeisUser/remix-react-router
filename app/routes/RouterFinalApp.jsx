
import {
    Routes,
    Route,
  } from 'react-router-dom';
  
  // Outlet & Layout Components
  /* Layout always contain 'Outlet' component */
  import HomeLayout from './OutletLayouts/HomeLayout';
  import HelpLayout from './OutletLayouts/HelpLayout';
  import CareersLayout from './OutletLayouts/CareersLayout';
  
  // Pages Component
  import HomePage from './pages/Home';
  import AboutPage from './pages/About';

  import FaqPage from './pages/help/Faq';
  import ContactPage from './pages/help/Contact';
  import CareersPage, { CareersLoader } from './pages/careers/Careers';
  import NotFoundPage from './pages/NotFound';
  
  
  export default function RouterFinalApp(){
    return (
      <>
        <Routes>
            <Route path='/' element={<HomeLayout />}> {/* First Layer */}
            <Route index element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
    
            <Route path='help' element={<HelpLayout />} >  {/* Second Layer of Help - Nested */}
                <Route path='faq' element={<FaqPage />} />
                <Route path='contact' element={<ContactPage />} />
            </Route>
    
            <Route path='careers' element={<CareersLayout />}>  {/* Second Layer of Careers - Nested */}
                <Route 
                index
                element={<CareersPage />}
                loader={CareersLoader}
                />
            </Route>
    
            <Route path="*" element={<NotFoundPage />} /> {/* Second Layer of 404 Not Found - Nested */}
            
            </Route>
        </Routes>
      </>
    );
  }