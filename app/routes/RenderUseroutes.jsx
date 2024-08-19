import { useRoutes } from 'react-router-dom';
import HomeLayout from './OutletLayouts/HomeLayout';
import HelpLayout from './OutletLayouts/HelpLayout';
import CareersLayout from './OutletLayouts/CareersLayout';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import FaqPage from './pages/help/Faq';
import ContactPage from './pages/help/Contact';
import CareersPage, { CareersLoader } from './pages/careers/Careers';
import NotFoundPage from './pages/NotFound';


// Define the routes array
const routes = [
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true, // HomePage as the index route
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "help",
                element: <HelpLayout />,
                children: [
                    {
                        path: "faq",
                        element: <FaqPage />,
                    },
                    {
                        path: "contact",
                        element: <ContactPage />,
                    },
                ],
            },
            {
                path: "careers",
                element: <CareersLayout />,
                children: [
                    {
                        index: true, // CareersPage as the index route of Careers
                        element: <CareersPage />,
                        loader: CareersLoader,
                    },
                ],
            },
            {
                path: "*", // Catch-all route for 404
                element: <NotFoundPage />,
            },
        ],
    },
];


export default function RenderUseroutes() {
    const element = useRoutes(routes);
    return element;
}
