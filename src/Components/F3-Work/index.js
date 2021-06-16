import React , { Component } from 'react';
import { MyWork , WorkTitle , Span , Part , Icon , PartTitle , Line , PartDesc } from './style.js';
import axios from 'axios';

class Work extends Component {

  state = {
    works : [],
  }

  componentDidMount () {
    axios.get('JSON/json.json').then( res => {
      //console.log(res.data.works)
      this.setState({
        works:res.data.works,
      })
    })
  }
  render(){

    const {works} = this.state;
    const AllData = works.map( (Item) => {
      return(

        <Part id={Item.id} key={Item.id}>
            <Icon className={Item.icon_name}></Icon>
            <PartTitle>{Item.title}</PartTitle>
            <Line/>
            <PartDesc>{Item.body}</PartDesc>
        </Part>

      )
    })
    
  return (
    <MyWork>
      <div className="container">
          <WorkTitle><Span>My</Span> Work</WorkTitle>
          {AllData}
      </div>
    </MyWork>
    );
  }
}

export default Work;
