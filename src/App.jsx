import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './project/components/navbar/Navbar';
import Layout from './project/routes/Layouts';
import './app.css'

const App = () => {
  return ( 
    <>
     <Router>
    <Navbar/>
   <Layout/>
   </Router>
    </>
   );
}
 
export default App;