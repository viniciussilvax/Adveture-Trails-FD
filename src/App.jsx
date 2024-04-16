import { Outlet } from "react-router-dom"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import GlobalState from "./context/GlobalState"

function App() {

  return (
    <GlobalState>
      <Header />
        <Outlet />
      <Footer />
    </GlobalState>
  )
}

export default App
