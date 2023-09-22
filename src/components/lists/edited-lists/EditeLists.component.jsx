import React, { Children } from 'react'

const EditeLists=({lists})=> {
    
    return (
        <div className='flex  flex-col w-1/2 gap-y-4 '>
          <h1 className=' text-left text-lg font-bold'>edited lists</h1>
        <ul data-testid="editedlistitems" className='lists'>
        {Children.toArray(
            lists.map((list)=>
            <li key={list.name} className='parentListItem'>{list.name}
                <ul className=' '>
                    <li className='ml-16' >volume:<span data-testid="volumeAmount">{list.params.volume}</span></li>
                    <li className='ml-16'>cylinders:<span data-testid="cylindersAmount">{list.params.cylinders}</span></li>
                </ul>
            </li>
            )
        )} 
        </ul>
        </div>
    )
}

export default EditeLists
