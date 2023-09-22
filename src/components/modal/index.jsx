import React from 'react'

const Modal=({children,setVisible,visible})=> {
    

    return (
        <>
        {visible && (
            <div
              onClick={() => setVisible(!visible)}
    
              className="fixed inset-0 flex  overflow-auto z-[999] bg-[#0000004d]"
            >
              <div className="lg:flex lg:justify-center lg:items-center sm:inline	 w-full h-full m-4">
                <div
                  className={`bg-white rounded-xl p-5 my-10` }
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="flex-between-center mb-7">
                    <span className="text-dark text-base">{"ویرایش محصول"}</span>
                    {/* {!notClose && (
                      <BiXCircle size={25} className="text-darkGray cursor-pointer" onClick={onClose} />
                    )} */}
                  </div>
                  {children}
                </div>
              </div>
            </div>
          )}
          </>
    )
}

export default Modal