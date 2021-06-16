import axios from 'axios';
import React , {useState, useEffect} from 'react';
import {MyPortfolio,PortfolioTitle,Span,PortfolioList,PortfolioItem,Imagehover,Img,Overlay,OverlaySpan} from './style.js' 
const Portfolio = () => {

  const [data , setData ]= useState([]);

  useEffect( ()=>{
    axios.get('JSON/json.json').then( res=>{
      setData(res.data.portfolio);
    })
  },[]);

  const AllData = data.map( (index)=>{
    return (
      <Imagehover key={index.id}>
          <Img src={index.image} alt="" />
          <Overlay>
              <OverlaySpan>
                  Show Image
              </OverlaySpan>
          </Overlay>
      </Imagehover>
    );
  })

  return (
        <MyPortfolio>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            <div className="box">
                {AllData}   
            </div>
        </MyPortfolio>
  );
}

export default Portfolio;
