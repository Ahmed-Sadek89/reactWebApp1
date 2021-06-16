import React from 'react';
import { MyHome , HomeInformation , HomeTitle , HomeInfo , HomeDesc , Span , HomeBtn } from './style.js';


const Home = () => {
  return (
        <MyHome>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Ahmed Sadek</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </MyHome>
  );
}

export default Home;
