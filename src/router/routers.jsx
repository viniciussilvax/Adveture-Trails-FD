import { createBrowserRouter } from "react-router-dom"
import App from "../App"

import HomePage from "../pages/home-page/HomePage"
import ExplorerPage from "../pages/explorer-page/ExplorerPage"
import RegisterPage from "../pages/register-page/RegisterPage"

const routers = createBrowserRouter([
    {
        path:"/",
        element:<App/>,

         children:[
             {
                 path:"/",
                 element:<HomePage/>
             },
            {
                path:"/explorar-trilhas",
                element:<ExplorerPage/>
            },
            {
                path:"/cadastrar-nova-trilha",
                element:<RegisterPage/>
            },
        ]
    }
])

export default routers