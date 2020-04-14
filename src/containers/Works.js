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
      works: []
    };

    this.handleChange =this.handleChange.bind(this);
  }

  async componentDidMount() {

    
    const allworks = await API.graphql(graphqlOperation(queries.listWorks));

    this.setState({works : allworks['data']['listWorks']['items']})
    

  }

  async updateName(event){

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

          {this.state.works.map(exp => {
            return(
              <div className="experience_element">
                <h3 className="element_heading" key={exp.id}>{exp.title}</h3>
                <TechList tech_list={exp.tech}/>
                <p>{exp.period}</p>
                <p className="element_content">{exp.content}</p>
                <p>git repository</p><a href ={exp.git_url} className="experience_element_git_url" target="_blank">{exp.git_url}</a>
              </div>
            )
          })}

      </div>
    )
  };
}
