import React, { useState } from 'react'
import ParentContainer from './component/ParentContainer'
import Display from './component/Display'
import Button from './component/Button'
export default function App() {
  const[data,setData]=useState('');
  function handleclick(val){
    if(val==='='){
      setData(eval(data));

    }else if(val==='C'){
    setData("");

    }else if(val==='<x'){
      let res=data+'';
      setData(res.slice(0,-1));

    }else{
      setData(data+val);
    }
  }
  return (
    <ParentContainer>
      {/* here btnclick is the props and data and in the {} are the function  */}
   <Display data={data}/>
   <Button  btnclick={handleclick}/>
    </ParentContainer>
  )
}
