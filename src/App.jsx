
import { Route,Routes } from "react-router-dom"

import Signadi from "./pages/SignIn"
import 'bootstrap/dist/css/bootstrap.min.css';




import Amtransaction from "./pages/Amtransaction"
import Amorder from "./pages/Amorder"
import Amblog from "./pages/Amblog";
import Amsettingmd from "./pages/Amsettingmd";
import Changepass from "./pages/Achangepass";
import Amfeedback from "./pages/Amfeedback";
import Ambooks from "./pages/Ambooks";
import Amdashboard from "./pages/Amdashboard";





const App = () => {
  return (
    <div>
   

<Routes>
  
  <Route path="/" element={<Signadi/>}/>
 
  <Route path="/atransaction" element={<Amtransaction/>}/>
  <Route path="/aorder" element={<Amorder/>}/>
  <Route path="/asettingmd" element={<Amsettingmd/>}/>
  <Route path="/ablog" element={<Amblog/>}/>
  <Route path="/achangepass" element={<Changepass/>}/>
  <Route path="/afeedback" element={<Amfeedback/>}/>
  <Route path="/abooks" element={<Ambooks/>}/>
  <Route path="/adash" element={<Amdashboard/>}/>

  

  
</Routes>



    </div>
  )
}
export default App