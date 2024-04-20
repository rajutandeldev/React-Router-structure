import { createBrowserRouter } from "react-router-dom";
import Home from "./Component/Home";
import Main from "./Component/Main";
import Root from "./Component/Root";

const Router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Root/>,
            children:[
                {
                    path:'/',
                    element:<Home/>,
                    index:true
                },
                {
                    path:'/main',
                    element:<Main/>

                },
            ]
        }
    ]
)

export default Router;

