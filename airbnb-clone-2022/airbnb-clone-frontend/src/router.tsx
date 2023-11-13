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
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import RoomDetail from "./routes/RoomDetail";

// version 6.4(router.tsx)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "rooms/:roomPk",
        element: <RoomDetail />,
      },
    ],
  },
]);

export default router;
