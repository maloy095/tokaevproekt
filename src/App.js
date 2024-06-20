import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom"
import Header from "./components/Header"
import Homepage from "./pages/Homepage"
import Magazin from "./pages/Magazin"
import SinglePost from "./pages/SinglePost"
import Error from "./pages/Error"

function Layout() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout />}>
          <Route index element ={<Homepage />} />
          <Route path="/Magazin"   element={<Magazin />} />
          <Route path="/Magazin/:slug"  element={<SinglePost />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App