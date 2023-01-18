import './App.css'
import {FaPlus, FaTrashAlt} from "react-icons/fa";
import {useState} from "react"





function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]= useState('')
 


  return (
    
  
  <div className="mm">
      
<div className="all">
      
        <div className="outbox">
          <h2 className='heading'>Todo App</h2>

          <div className='content'>
            

              <form action="">
              <input  value={toDo} onChange={(e)=>setToDo(e.target.value)} className='textbox' placeholder="✒️text here...." type="text" /> 
          
         
              </form>
              <i className='add'  onClick={()=>setToDos([...toDos,{id: Date.now() ,text:toDo,status:false}])}><FaPlus/></i>
             

              {toDos.map((obj)=>{ 
              return(

             
              <ul className='items'> 
              <div className='left'> 
                
                <li>
                <p className='value'> {obj.text} </p>                         
                </li> 
                </div>

               <div className="right">  
              <input onClick={(e)=>{
                console.log(e.target.checked)
                console.log(obj)
                setToDos(toDos.filter(obj2=>{
                  if(obj2.id===obj.id)
                  {obj2.status=e.target.checked
                  }
                  return obj2
                }))
              }}
              value={obj.status} className="checkbox" type="checkbox" />
              <button 
            onClick={(e)=>{
              let index= toDos.findIndex(obj2=>{return obj2.id===e.target.id})
              if (index !== -1) {
                toDos.splice(index, 1);
                setToDos([...toDos]);
              }
            }}
              className='delet'><FaTrashAlt/></button>

              </div>
        
            
              </ul>)
              
        
        })
        }
           </div>
        </div>
        
      </div>
   <div className="all2">
          <h2>on process</h2>
          <p className="lorem">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus iure fugit nesciunt, libero dolore porro! Nesciunt a dolorem quis minima officia alias, iure voluptatem atque? Similique adipisci in vero culpa!</p>
        </div>
    </div>
  );
}

export default App;