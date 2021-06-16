import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import {MySocialMedia,Social,Icon,P,Info1,Info2} from './style.js';

const SocialMedia = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get('JSON/json.json').then((res)=>{
      setData(res.data.social);
    })
  },[]);
  const AllData = data.map((index)=>{
    return(
      <Social key={index.id} iconNumber={index.id}>
          <Icon className={index.icon}></Icon>
          <P>
              <Info1>{index.title}</Info1>
              <Info2>{index.body}</Info2>
          </P>
      </Social>
    );
  })
  
  return (
    <MySocialMedia> 
         {AllData}   
    </MySocialMedia>
  );
}

export default SocialMedia;
