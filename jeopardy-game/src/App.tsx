import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//* import from pages
import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/Homepage";
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Gamepage from './pages/game/Gamepage';
import Instructions from './pages/Instructions';
import Random from './pages/game/Random';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="" element={<Random />} />
      <Route path="/user" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* //todo <Route path="/user_id" element={<User Account />} /> */}
      <Route path="/instructions" element={<Instructions />} />
      <Route path="/game" element={<Gamepage />}/>
        <Route path="/random" element={<Random />} />
        {/* //todo <Route path="" element={<Select Game />} /> */}
        {/* //todo <Route path="" element={<Search />} /> */}
        {/* //todo <Route path="" element={<Create />} /> */}
            {/* //todo <Route path="" element={<Create template> />} /> */}
        {/* //todo <Route path="" element={<Game Start />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
