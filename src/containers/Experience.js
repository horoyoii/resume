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
    //componentDidMount에서는 DOM에 접근할 수 있습니다. 그래서 여기에서는 주로 AJAX 요청을 하거나, setTimeout, setInterval같은 행동
    const allworks = await API.graphql(graphqlOperation(queries.listActivities));
    let get_experiences = allworks['data']['listActivities']['items']
    console.log(allworks['data']);

    this.setState({experiences : get_experiences})
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
