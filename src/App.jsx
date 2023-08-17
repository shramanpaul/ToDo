import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'
import Main from './components/Main'

function App() {
  

  return (
    <div className="bg-[#ff6c6c] flex justify-center"> {/* Add a basic Tailwind CSS class */}
      {/* <h1 className=' text-blue-600'>Hello, Tailwind CSS!</h1> */}
      <Main/>
    </div>
  )
}

export default App
