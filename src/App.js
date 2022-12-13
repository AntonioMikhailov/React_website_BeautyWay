 
import './App.scss';
import Nav from './components/Nav/Nav';
import {Header,S1,S2About,S3Service,S4Portfolio,S5Team,S6Why,S7Parallax,S8Price,S9Request,S10Contacts,S11Footer,} from './containers'
 
 
 

function App() {
  Nav() // плавный скролл
  return (
  <>
<Header/>
<S1/>
<S2About/>
<S3Service/>
<S4Portfolio/>
<S5Team/>
<S6Why/>
<S7Parallax/>
<S8Price/>
<S9Request/>
<S10Contacts/>
<S11Footer/>
</>
  );
}

export default App;
