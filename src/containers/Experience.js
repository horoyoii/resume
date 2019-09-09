import React, {Component} from "react";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';



export default class Experience extends Component{
  constructor(props){
    super(props);

    this.state = {
    };

  }

  // async componentDidMount() {
  //   //componentDidMount에서는 DOM에 접근할 수 있습니다. 그래서 여기에서는 주로 AJAX 요청을 하거나, setTimeout, setInterval같은 행동
  //   const allworks = await API.graphql(graphqlOperation(queries.listMadens));
  //   let get_experiences = allworks['data']['listMadens']['items']
  //   console.log(allworks['data']);
  //
  //   this.setState({experiences : get_experiences})
  // }



  render(){
    return (
      <div className="experience">
        <div className="subheader-deco"/>
        <span className="section_heading">Experience </span>
      </div>
    )
  };
}
