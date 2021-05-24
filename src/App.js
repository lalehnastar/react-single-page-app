
// import libraries, files, styles as needed
import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Confetti from 'react-confetti';
import Slideout from './components/SlideOut.js'
import './components/SlideOut.css'
import Modal from './components/Modal.js'
import './components/Modal.css'



// Delay
const delay = 2;
function App(){
  const [show,setShow]= useState(false)
  const[loading,setLoading] = useState(false);
  const[users,setUsers] = useState([]);
  const[searchName,setsearchName] = useState('');
  useEffect(( ) => {
    // acess to the API http://jsonplaceholder.typicode.com/users using get request with axios package
   const loadUsers = async () =>{
     setLoading(true)
     const url = 'http://jsonplaceholder.typicode.com/users'
     const response = await axios.get(url);
     setUsers(response.data);
     setLoading(false);
   }
   loadUsers();
  },[]);
// configurable delay creates a network slowdown on site for 2s
  useEffect(
    ()=>{
    let timer = setTimeout(()=>setShow(true), delay*1000);
    return ()=>{
      clearTimeout(timer);
    };
    },
    []
  );
 
  
  
  return(
    


    <div className="App">


      {
        show?<div><h2 id="h2_one">{delay} seconds passed, congradulations, now filter based on your favorite name </h2>
        <Confetti 
        width={2000}
        height={50}/>
     
        <input type="text" placeholder="Search names..." onChange={(e)=>setsearchName(e.target.value)}/></div>:
        <div><h2 id="h2_two">Please wait {delay} seconds</h2></div>
      }
      {loading ? (<h4>Loading...</h4>):(
        //select the desirable names using filter method
      users.filter((value)=>{
        if(searchName === ""){
          return value
        }else if(value.name.toLowerCase().includes(searchName.toLocaleLowerCase())){
          return value
        }

      })
      
       //map through the list, pop up as List View
   .map((item) => <ul><li key={item.id} > {item.name}<br></br>{item.email}
      </li><Modal/>
     </ul>)
     
  
      )
     
      }
     
           <div>
         
      </div>
      <br></br>
        <br></br>
         <Slideout/>
      </div>

    
  );
}

export default App;
