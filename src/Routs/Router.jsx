import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Components/LoginRegester/Login";
import Register from "../Components/LoginRegester/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Pages/DashboardPage/DashboardHome";
import Task from "../Pages/DashboardPage/Task";
import ToDoList from "../Pages/DashboardPage/ToDoList";
import OngoingList from "../Pages/DashboardPage/OngoingList";
import CompletedList from "./CompletedList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
    {
        path: '/dashboard',
        element: (
            <PrivateRoute>
                <DashboardLayout></DashboardLayout>
            </PrivateRoute>
        ),
        children: [
            {
                index: 'dashboard',
                element: <DashboardHome />
            },
            {
                path: 'dashboardHome',
                element: <DashboardHome />
            },
            {
                path: 'task',
                element: <Task />
            },
            {
                path: 'to-do',
                element: <ToDoList />
            },
            {
                path: 'OngoingList',
                element: <OngoingList />
            },
            {
                path: 'CompletedList',
                element: <CompletedList />
            }
        ]
    }
]);

export default router;