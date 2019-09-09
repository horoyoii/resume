import React, {Component} from "react";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';


import './SkillSingleElement.css'

export default class SkillSingleElement extends Component{
  constructor(props){
    super(props);

    this.state = {
    };

  }

//   async componentDidMount() {
//     //componentDidMount에서는 DOM에 접근할 수 있습니다. 그래서 여기에서는 주로 AJAX 요청을 하거나, setTimeout, setInterval같은 행동
//     const allworks = await API.graphql(graphqlOperation(queries.listLanguages));
//     let get_experiences = allworks['data']['listLanguages']['items']
// //    console.log(allworks['data']);
//
//   }


  render(){
    return (
      <div className="skill_element">
        <span className="skill_subheading">{this.props.skill_name}</span>

        {this.props.lang_list.map(tech =>{
          return(
              <a className="tech_element">{tech}</a>
          )
        })}

      </div>
    )
  };
}
