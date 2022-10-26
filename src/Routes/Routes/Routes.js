import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import CategoryCourse from "../../components/CategoryCourse/CategoryCourse";
import CourseComponent from "../../components/CourseComponent/CourseComponent";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Faq from "../../components/Faq/Faq";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../layout/Main";
import CourseLayout from "../../layout/CourseLayout";
import CheckOut from "../../components/CheckOut/CheckOut";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <CourseLayout></CourseLayout>,
                children: [
                    {
                        path: '/courses',
                        element: <CourseComponent></CourseComponent>,
                        loader: () => fetch('http://localhost:5000/courses')

                    },
                    {
                        path: '/courses/category/:id',
                        element: <CategoryCourse></CategoryCourse>,
                        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
                    },
                ]
            },


            {
                path: '/course/:id',
                element: <SingleCourse></SingleCourse>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            }
            ,
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/Register',
                element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>
            }
        ]
    }
]);