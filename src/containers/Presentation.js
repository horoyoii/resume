import React, {Component} from "react";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';


import './Experience.css'

export default class Presentation extends Component{
  constructor(props){
    super(props);

    this.state = {
      presentations: []
    };

  }

  async componentDidMount() {    
    const qeury_result = await API.graphql(graphqlOperation(queries.listFresentations));
    
    this.setState({presentations : qeury_result['data']['listFresentations']['items']})
  }



  render(){
    return (
      <div className="experience">
        <div className="subheader-deco"/>
        <span className="section_heading">Presentation </span>
        {this.state.presentations.map(act => {
          return(
            <div className="activity_element">
              <div className="activity-content">
                <h3 className="activity_heading" key={act.id}>{act.title}</h3>
                <div className="activity-subheading"></div>
                <p className="activity-content">{act.content}</p>
              </div>
              <div className="activity_date">
                <span className="activity-text">{act.peroid}</span>
              </div>
            </div>
          )
        })}
      </div>
    )
  };
}
