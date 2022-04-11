//import logo from './logo.svg';
import './App.css';
//import Cricket from './component/Cricket';
import { useState } from 'react';

function App() {

  const [count,setCount] = useState(0);
  const handler1 = () =>{
    console.log("hello")
setCount(count+1);
  }
  const handler4 = () =>{
     setCount(count+4);
 }
 const handler6 = () =>{
     setCount(count+6);
 }
 const [wicket,wicketCount] = useState(0);
 const wicketHan = () =>{
  wicketCount(wicket+1);
}



const [ball,ballCount] = useState(0.0);
const ballHan = () =>{
 ballCount(ball+0.1);
}


  return (
   
       <div className="App">
         <h3>India:</h3>
         <div className="banner">
           <div>
            
             <h1 className="scoreCount">
              
                 Score: {count}
               
             </h1>
           </div>
           <div>
            
             <h1 className="wicketCount">
             Wicket:{wicket}
             </h1>
           </div>
   
           <div>
             
             <h1 className="overCount">
              
                 Over: {ball}
               
               
             </h1>
           </div>
         </div>
   
         <div className="addScore">
           Add Score
           {/* these buttons should add the respective amount in the score */}
           <button className="addScore1"
           onClick={handler1}
           >Add 1</button>
           <button className="addScore4"
           onClick={handler4}
           >Add 4</button>
           <button className="addScore6"
            onClick={handler6}
           >Add 6</button>
         </div>
   
         <div className="addWicket">
           Add Wicket
           {/* Increase the count of wicket */}
           <button onClick={wicketHan}>Add 1 wicket</button>
         </div>
   
         <div className="addBall">
           Add ball
           {/* Increase the total number of balls thrown here. */}
           <button onClick={ballHan}>Add 1</button>
         </div>
        <h1 className='{count<100 ? "India win" : ""}'>India win</h1>
        
       </div>
     );
  
}

export default App;
