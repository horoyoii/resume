import React, {Component} from "react";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';

import './Works.css'

import TechList from './TechList'

export default class Test extends Component{
  constructor(props){
    super(props);

    this.state = {
      experiences: []
    };

    this.handleChange =this.handleChange.bind(this);
  }

  async componentDidMount() {
    //componentDidMount에서는 DOM에 접근할 수 있습니다. 그래서 여기에서는 주로 AJAX 요청을 하거나, setTimeout, setInterval같은 행동
    
    const allworks = await API.graphql(graphqlOperation(queries.listTodos));
    let get_experiences = allworks['data']['listTodos']['items']
    console.log(allworks['data']);

    this.setState({experiences : get_experiences})
    
  }

  async updateName(event){

    /*
    const allTodos = await API.graphql(graphqlOperation(queries.listMadens));
    console.log(allTodos);

    event.preventDefault();
    */
  }

  handleChange(event){
    this.setState({
      value : event.target.value
    })
  }


  render(){
    return (
      <div className="works">
        <div className="subheader-deco"/>
        <span className="section_heading">Test </span>

          {this.state.experiences.map(exp => {
            return(
              <div className="experience_element">
                <h3 className="element_heading" key={exp.id}>{exp.name}</h3>
                <p className="element_content">{exp.description}</p>
              </div>
            )
          })}

      </div>
    )
  };
}
