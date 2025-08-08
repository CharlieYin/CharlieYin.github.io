import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";

const Home = lazy(() => import("../pages/Home"))
const Projects = lazy(() => import("../pages/Projects"))
const TwistTopia = lazy(() => import("../pages/Projects/TwistTopia"))
const TwistTopiaGame = lazy(() => import("../pages/Projects/TwistTopia/game"))
const EventFinder = lazy(() => import("../pages/Projects/EventFinder"))
const Balabala = lazy(() => import("../pages/Projects/Balabala"))
const Life = lazy(() => import("../pages/Life"))
const Resume = lazy(() => import("../pages/Resume"))
const Travel = lazy(() => import("../pages/Life/Travel"))

const Loading = (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center'
        }}
    >
        <CircularProgress sx={{color: 'white'}} />
    </Box>
)

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Suspense fallback={Loading}><Home /></Suspense>
            },
            {
                path: 'projects',
                element: <Suspense fallback={Loading}><Projects /></Suspense>
            },
            {
                path: 'projects/twist-topia',
                element: <Suspense fallback={Loading}><TwistTopia /></Suspense>
            },
            {
                path: 'projects/twist-topia/game',
                element: <Suspense fallback={Loading}><TwistTopiaGame /></Suspense>
            },
            {
                path: 'projects/event-finder',
                element: <Suspense fallback={Loading}><EventFinder /></Suspense>
            },
            {
                path: 'projects/balabala',
                element: <Suspense fallback={Loading}><Balabala /></Suspense>
            },
            // {
            //     path: 'life',
            //     element: <Suspense fallback={Loading}><Life /></Suspense>
            // },
            // {
            //     path: 'life/travel',
            //     element: <Suspense fallback={Loading}><Travel /></Suspense>
            // },
            // {
            //     path: 'resume',
            //     element: <Suspense fallback={Loading}><Resume /></Suspense>
            // },
        ]
    }
])

export default router