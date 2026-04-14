import Navbar from "./components/Navbar"
import { useState } from "react";


const App = () => {

      const [title, setTitle] = useState('')
      const [details, setDetails] = useState('')
      const [task, allTask] = useState([])

      const submitHandler = (e) =>{
        e.preventDefault();
        allTask([...task, {title, details}]);
        setTitle('')
        setDetails('')
      }

      const deleteHandler = (index) => {
        let data = [...task]
        data.splice(index, 1)
        allTask(data)
      }

        return (
        <>
        <Navbar />

        <div className="flex gap-5 p-5 w-full">

          <div className="bg-[#333] rounded-2xl p-5 w-1/3 h-[85vh]">

            <form 
            onSubmit={(e)=>{submitHandler(e);}}
            className="flex flex-col gap-5">

              <p className="text-2xl text-white font-bold">Task Title</p>

                <input 
                type="text" 
                placeholder="Enter Title" 
                value={title} 
                onChange={(e)=> setTitle(e.target.value)}
                required
                className="outline-2 outline-white rounded-2xl p-4 text-white"
                />

              <p className="text-2xl text-white font-bold">Task Details</p>

                <textarea 
                name="" id="" 
                placeholder="Enter Details" 
                rows={10} 
                value={details} 
                onChange={(e)=> setDetails(e.target.value)}
                required
                className="outline-2 outline-white rounded-2xl p-4 text-white"></textarea>

                <button className="bg-green-600 p-5 rounded-2xl text-2xl font-bold text-white active:scale-95">Add Task</button>

            </form>

          </div>

          <div className="bg-[#333] rounded-2xl w-2/3 p-5">

          <h1 className="text-center text-3xl font-bold text-white">All Task</h1>

          <div className="p-4 flex flex-col gap-5">

          {task.map(function(elem, index){
          return  <details key={index}>
                  <summary className="text-white text-2xl">{elem.title}</summary>
                  <p className="text-white text-xl">{elem.details}</p>
                  <button 
                  onClick={() => {deleteHandler(index)}}
                  className="bg-red-600 text-white p-2 font-bold rounded mt-2">
                    Task Completed
                  </button>
                  </details>
          })}

          
          </div>

          </div>

        </div>
        </>
        )
      }

export default App
