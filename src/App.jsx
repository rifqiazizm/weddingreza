import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BottomNav from './BottomNav';
import Gmaps from './Gmaps';
import Opening from './Opening';
import Keluarga from './Keluarga';
import Akad from './Akad';
import Dompet from './Dompet';


function App() {

  // INGETTT!!! KLO DIDALEM NESTED ROUTES JANGAN PERNAH KASIH TADA "/" 
  // BUAT PATH NYA, KARENA KLO DIKASI TANDA "/" BERARTI DIA ADA DI ROUTING PALING ATAS
  // ATAU ROOT NYA URL
  return (
     <div className="app">
        <Router>
       
          <div>
            <Routes>
              <Route exact path='/' element={<Opening />} />
              <Route path="/app" element={<BottomNav />}>
                <Route index element={<Keluarga />} />

                <Route  path='keluarga' element={<Keluarga />} />
                <Route  path='akad' element={<Akad />} />
                <Route  path='gmaps' element={<Gmaps />} />
                <Route  path='dompet' element={<Dompet />} />


              

              </Route>
             


            </Routes>

          </div>
        </Router>
     </div>
  );
}

export default App;
