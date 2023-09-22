import React, { Children,useState } from 'react'
import Modal from '../../modal'
import Input from '../../input'
import Button from '../../button'

const OriginalLists=({lists,setEditeLists})=> {
  
    const [editItem,setEditItem]=useState()
    const [openModal,setOpenModal] = useState(false)
    const handleUpdate=(event)=>{
        event.preventDefault();
        const newState = [...lists]
        newState[editItem.index]=editItem
        setEditeLists(newState)
        setOpenModal(false)
  
    }
   const handleChange=(event)=>{
    const {name,value}=event.target
     if(name==="name"){
        setEditItem({...editItem, [name]:value})
     }  
     else{
        setEditItem({...editItem, params:{
            ...editItem.params,
            ...editItem[name],
            [name]:value
        }})
     }

   }

   const handleClose=()=>{
      setOpenModal(false)
   }
    return (
        <div className='flex  flex-col w-1/2 gap-y-4 cursor-pointer'>
        <h1 className='text-left text-lg font-bold'>original lists</h1>
        <ul data-testid="listitems" className='lists'>
            
            {
             Children.toArray( lists.map((list,index)=>
             <li className=' parentListItem' onClick={()=>{
                 setOpenModal(true) 
                 setEditItem({...list,index})}}>{list.name}
             <ul className=''>
                 <li className='ml-16' >volume:<span>{list.params.volume}</span></li>
                 <li className='ml-16'>cylinders:<span>{list.params.cylinders}</span></li>
             </ul>
             </li>

             
         ))
           } 
        </ul>
         <Modal visible={openModal}
               setVisible={setOpenModal}>
            <form>
                <Input   label="Name" name={'name'} value={editItem?.name} onChange={(event)=>handleChange(event)}/>
                <Input type={"number"} label={"volume:"} name={'volume'} value={editItem?.params?.volume} onChange={(event)=>handleChange(event)}/>
                <Input type={"number"} label={"cylinders:"} name={'cylinders'} value={editItem?.params?.cylinders} onChange={(event)=>handleChange(event)}/>
                <div className='flex justify-end gap-4 '>
                    <Button onClick={handleClose}  className={'secondaryButton'} name={"cancel"} />
                    <Button onClick={handleUpdate} className={'mainButton'} name={"edit"} />
                </div>

            </form>
         </Modal>
        </div>
        
    )
}

export default OriginalLists
