import React, {Component} from "react";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';

import './Works.css'

import TechList from './TechList'

export default class Works extends Component{
  constructor(props){
    super(props);

    this.state = {
      name : "dafuault name",
      email : "demonI@anaewf.com",
      value : '',
      experiences: []
    };

    this.handleChange =this.handleChange.bind(this);
  }

  async componentDidMount() {
    //componentDidMount에서는 DOM에 접근할 수 있습니다. 그래서 여기에서는 주로 AJAX 요청을 하거나, setTimeout, setInterval같은 행동
    const allworks = await API.graphql(graphqlOperation(queries.listMadens));
    let get_experiences = allworks['data']['listMadens']['items']
    console.log(allworks['data']);

    this.setState({experiences : get_experiences})

    //##################################################
    // Mutation in React with graphql api
    //##################################################
    /*
    GraphQl Client로는 Apollo 가 있으나, 나의 경우 aws appsync 서비스를 이용하였고,
    aws에서 만든 aws amplify GraphQl을 Graphql Client로서 사용하였다.

    */

    // https://hackernoon.com/introducing-the-aws-amplify-graphql-client-8a1a1e514fde
    // let title = "Fitfh";
    // let content = "Helllllll5l5l5l5l5l";
    //
    // const cr = await API.graphql(graphqlOperation(queries.createWork,  {
    // "var": {
    // "title": title,
    // "content": content
    // }
    // }));

  }

  async updateName(event){

    const allTodos = await API.graphql(graphqlOperation(queries.listMadens));
    console.log(allTodos);

    event.preventDefault();
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
        <span className="section_heading">Works </span>

          {this.state.experiences.map(exp => {
            return(
              <div className="experience_element">
                <h3 className="element_heading" key={exp.id}>{exp.title}</h3>
                <TechList tech_list={exp.tech}/>
                <p className="element_content">{exp.content}</p>
                <a href ={exp.git_url} className="experience_element_git_url" target="_blank">{exp.git_url}</a>
              </div>
            )
          })}

      </div>
    )
  };
}
