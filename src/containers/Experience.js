import React, {Component} from "react";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';


import './Experience.css'

export default class Experience extends Component{
  constructor(props){
    super(props);

    this.state = {
      experiences: []
    };

  }

  async componentDidMount() {
    
    const qeury_result = await API.graphql(graphqlOperation(queries.listExperiences));
    let activities = qeury_result['data']['listExperiences']['items']
    console.log(qeury_result['data']);
    
    activities.sort(function (a, b) {
      if (a.period > b.period) {
          return 1;
      }
      if (b.period > a.period) {
          return -1;
      }
      return 0;
    });

    this.setState({experiences : activities})
  }



  render(){
    return (
      <div className="experience">
        <div className="subheader-deco"/>
        <span className="section_heading">Experience </span>
        {this.state.experiences.map(act => {
          return(
            <div className="activity_element">
              <div className="activity-content">
                <h3 className="activity_heading" key={act.id}>{act.title}</h3>
                <div className="activity-subheading">{act.subtitle}</div>
                <p className="activity-content">{act.content}</p>
              </div>
              <div className="activity_date">
                <span className="activity-text">{act.period}</span>
              </div>
            </div>
          )
        })}
      </div>
    )
  };
}
