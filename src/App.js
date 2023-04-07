import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/search';
import AxiosData from './components/axiosdata'
import NoteState from './context/notes/NoteState';
import Product from './components/product';
import { useSelector,useDispatch } from 'react-redux';
import { ADD } from './store/action';

function App() {
  const [data,setData]=useState('')
 useEffect(()=>{
  axios.get("https://randomuser.me/api/")
  .then((data)=>{
    setData(data)
    console.log(data)
  })
 })
 const incriment = ()=>{
counter+1
 }
 const decrement = ()=>{
  counter-1
 }
  return (
    <div >
    {/* <NoteState>
    <Navbar title="hospital"  search={true}/>
      <Search/>
      <Product/>
      
    
    </NoteState> */}
     
      <button onClick={incriment}>incriment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
