import { Route, Routes } from "react-router"
import Home from "./Home/Home"
import ContactUs from "./Components/Contact us/ContactUs"
import Layout from "./Layout/Layout"

function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route path="/" element={<Home></Home>}></Route>
      <Route path="contactUs" element={<ContactUs></ContactUs>}></Route>
      </Route>
    </Routes>
      
  )
}

export default App
