import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomePages from "./pages/HomePages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePages />,
    },
]);

export default router