import { Route, Routes } from "react-router-dom"
import CreateBlog from "./Pages/createBlog"

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<CreateBlog/>}/>
    </Routes>
  )
}

export default App
