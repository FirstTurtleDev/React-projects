//import { useState } from 'react'
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import TasksPage from "./components/TasksPage";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <Header />
        <Routes>
          <Route path="/tasks" element={<TasksPage />} />
          {/*<Route path='/about'/ element={<about />}>*/}
        </Routes>
      </div>
    </>
  );
}

export default App;
