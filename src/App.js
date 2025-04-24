import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
import { useState } from 'react';


function App() {


  const [showModal, setshowModal] = useState(false)
 
 function viewModal() {
  return setshowModal(true); 
 }

 function closeModal() {
  return setshowModal(false); 
 }


  return (
    <div className="App flex">
      <div className= "h-screen w-1/6 bg-slate-900 flex-col "> 
      <img className=" w-3/4 m-4" src={require('./images/logo.webp')} ></img>
   <button className="bg-slate-500 px-16 rounded-lg py-2 mx-4 m-1">Dashboard</button>
   <button className="bg-slate-500 px-16 rounded-lg py-2 mx-4 m-1">Dashboard</button>
   <button className="bg-slate-500 px-16 rounded-lg py-2 mx-4 m-1">Dashboard</button>
   <button className="bg-slate-500 px-16 rounded-lg py-2 mx-4 m-1">Dashboard</button>
  
  
   
       </div>
      <div className= "h-screen w-5/6 bg-slate-700 text-center "> 
      <h1 className="text-white text-2xl "> Click here to view details</h1>
      <button className="bg-green-500 px-3 py-2 rounded-lg" onClick={viewModal}>View Details</button>
      {showModal && <Modal closeModal={closeModal} />}
      </div>
    </div>
  );
}

export default App;
