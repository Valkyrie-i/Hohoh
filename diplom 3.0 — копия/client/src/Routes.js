import Admin from "./pages/Admin";
import {
    ACHIEVES_ROUTE,
    ADMIN_ROUTE,
    FAQ_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    NEWS_ROUTE,
    REGISTRATION_ROUTE,
    TEACHERS_ROUTE
} from "./utils/consts";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import News from "./pages/News";
import Teachers from "./pages/Teachers";
import Faq from "./pages/Faq";
import Achieves from "./pages/Achieves";


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
    //chat
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: NEWS_ROUTE + '/:id',
        Component: News
    },
    {
        path: TEACHERS_ROUTE,
        Component: Teachers
    },
    {
        path: FAQ_ROUTE,
        Component: Faq
    },
    {
        path: ACHIEVES_ROUTE,
        Component: Achieves
    },
]