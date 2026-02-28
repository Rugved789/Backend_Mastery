import { Route, Routes } from "react-router-dom"
import CreateBlog from "./Pages/createBlog"
import GetBlog from "./Pages/GetBlog"

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<CreateBlog/>}/>
      <Route path='/get-blog' element={<GetBlog/>}/>
    </Routes>
  )
}

export default App
