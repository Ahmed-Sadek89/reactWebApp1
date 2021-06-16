import React ,{useState,useEffect } from 'react';
import axios from 'axios';
import {ProfileSkills,MyProfile,ProfileList,ProfileItem,Span,Skills,SkillsDesc,Bar,Title,Perc,Parent,Sp1,Sp2,Sp3,ProfileTitle,ProfileTitleSpan,SkillsTitle,SkillsTitleSpan} from './style.js';

const Profile = () => {

  const [dataProfile,setDataProfile] = useState([]);

  useEffect(()=>{
    axios.get('JSON/json.json').then((res)=>setDataProfile(res.data.MyProfile));
  },[]);

  const AllDataProfile = dataProfile.map((index)=>{
    return(

      <ProfileItem key={index.id}>
          <Span>{index.key}</Span>
          {index.value}
      </ProfileItem>

    )
  })

  return (
        <ProfileSkills>
            <div className="container">
                <MyProfile>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        {AllDataProfile}
                    </ProfileList>
                </MyProfile>
                
                <Skills>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    <Bar>
                        <Title>Bootstrap</Title>
                        <Perc>100%</Perc>
                        <Parent>
                            <Sp1></Sp1>
                        </Parent>
                    </Bar>
                    
                    <Bar>
                        <Title>CSS3</Title>
                        <Perc>90%</Perc>
                        <Parent>
                            <Sp2></Sp2>
                        </Parent>
                    </Bar>
                    
                    <Bar>
                        <Title>Photoshop</Title>
                        <Perc>80%</Perc>
                        <Parent>
                            <Sp3></Sp3>
                        </Parent>
                    </Bar>
                </Skills>
                
            </div>
        </ProfileSkills>
  );
}

export default Profile;
