
import './App.css';
import EditedLists from './components/lists/edited-lists/EditeLists.component';
import OriginalLists from './components/lists/original-lists/OriginalLists.component';
import { useState } from 'react';



function App() {

  const data = [
    { "name": "Peugeot 206 v2", "params": { "volume": 1300, "cylinders": 4 } },
    { "name": "Peugeot 206 v5", "params": { "volume": 1600, "cylinders": 4 } },
    { "name": "Pride", "params": { "volume": 1300, "cylinders": 4 } },
    { "name": "Samand", "params": { "volume": 1800, "cylinders": 4 } },
    { "name": "Vitara", "params": { "volume": 2400, "cylinders": 4 } },
  ]
   const [editelists,setEditedLists]=useState(data)
  return (
    <div className="App">
         <div data-testid="listitems" className='flex justify-center  items-stretch p-10 mt-10 gap-x-10'>
           <OriginalLists lists={data} setEditeLists={setEditedLists}/>
           <EditedLists lists={editelists}/>
     
          </div>
    </div>
  );
}

export default App;
