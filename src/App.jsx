import { useState } from 'react'
import Heading from './components/ui/Heading'
import SaveForm from './components/SaveFrom'


function App() {
  return (
    <div className='h-[100vh]  bg-[#e0f7fa] p-2 '>
     <Heading/>
     <div className='editor mt-8 '>
      <SaveForm/>
     </div>
    
    </div>
  )
}

export default App
