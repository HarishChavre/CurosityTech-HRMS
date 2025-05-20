  import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
 <>
   
      <Routes>
        <Route path="/" element={<Dashboard />}>
        
        </Route>
      </Routes>
   </>
  )
}

export default App
