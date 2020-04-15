import React, {Component} from "react";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';

import './Works.css'

import TechList from './TechList'
import DetailList from './DetailList'

export default class Works extends Component{
  constructor(props){
    super(props);

    this.state = {
      works: [],
    };
  }

  async componentDidMount() {

    const allworks = await API.graphql(graphqlOperation(queries.listArts));
    this.setState({works : allworks['data']['listArts']['items']})    
  }
  

  render(){
    return (
      <div className="works">
        <div className="subheader-deco"/>
        <span className="section_heading">Works </span>

          {this.state.works.map(work => {
            return(
              <div className="experience_element">
                <p className="element_decoration">{work.deco}</p>
                <h3 className="element_heading" key={work.id}>{work.title}</h3>
                <p className="element_period">({work.period})</p>
                <TechList tech_list={work.tech}/>
                <p>{work.introduction}</p>
                <DetailList subtitle={work.subtitle} content={work.content}/>
                <a href ={work.git_url} className="experience_element_git_url" target="_blank">{work.git_url}</a><br/>
                <a href ={work.detail_url} className="experience_element_git_url" target="_blank">{work.detail_url}</a>
              </div>
            )
          })}

      </div>
    )
  };
}
