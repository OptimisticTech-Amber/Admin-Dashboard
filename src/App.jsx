
import './App.css'
import Maindash from './components/Maindash/Maindash'
import RightSide from './components/RightSide/RightSide'
import Sidebar from './components/Sidebar'

function App() {
  
  return (
   <div className='App'>
    <div className='AppGlass'>
      <Sidebar/>
      <Maindash/>
      <RightSide/>
    </div>
   </div>
  )
}

export default App
