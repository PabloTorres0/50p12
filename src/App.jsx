
import React from 'react';
import './App.css';
import AskComponent from './components/AskComponent';

export const dataContext = React.createContext()
function App() {
  const data =[
    ["Why shouldn't we trust atoms?","They make up everything"], 
    ["What do you call someone with no body and no nose?","Inheritance"], 
    ["What's the object-oriented way to become wealthy?","Ten-tickets!"], 
    ["How many tickles does it take to tickle an octopus?","Ten-tickets"], 
    ["What is: 1 + 1?", "Depends on who are you asking." ]  
  ]
  return (
    <div className='container'>
      <h1>Frequently Asqed Questions</h1>
      <dataContext.Provider value={data}>
        {data.map((item,index)=><AskComponent index={index}/>)}
      </dataContext.Provider>
    </div>
  );
}

export default App;
