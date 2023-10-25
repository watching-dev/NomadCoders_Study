// version 5(router.ts)
// <Router>
//     <Route path="/">
//         <Home/>
//     </Route>
//     <Route path="/movies/:id">
//         <MoviewDetail />
//     </Route>
// </Router>

import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Users from "./routes/Users";
import Home from "./routes/Home";

// version 6.4(router.tsx)

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "users",
                element: <Users />,
            },
        ]
    },
]);

export default router;