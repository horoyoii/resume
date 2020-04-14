import React, {Component} from "react";

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';

import './Skills.css'
import SkillSingleElement from './SkillSingleElement'

export default class Skills extends Component{
  constructor(props){
    super(props);

    this.state = {
      tmp_list: [],
      back_list:["Django", "go-gin"],
      db_list:["MySQL", "MariaDB", "aws DynamoDB", "SQLite3", "Redis","Firebase RT db"],
      front_list:["React", "QT5"],
      cloud_list:["aws Lamdba", "aws S3", "google app script","aws AppSync"],
      etc_list:["docker-compose", "serverless framework", "GraphQL"],
      mobile_list:["Android"]
    };

  }

  async componentDidMount() {
    //componentDidMount에서는 DOM에 접근할 수 있습니다. 그래서 여기에서는 주로 AJAX 요청을 하거나, setTimeout, setInterval같은 행동
    /*
    const allworks = await API.graphql(graphqlOperation(queries.listLanguages));
    let get_experiences = allworks['data']['listLanguages']['items']
    console.log(allworks['data']);
    console.log(get_experiences);

    get_experiences.map(ex =>{
      this.state.tmp_list.push(ex.title);
    })
    */
    this.setState({lang_list : this.state.tmp_list})
  }



  render(){
    return (
      <div className="experience">
        <div className="subheader-deco"/>
        <span className="section_heading">Skills </span>
        <SkillSingleElement skill_name="Language" lang_list={this.state.tmp_list}/>
        <SkillSingleElement skill_name="Backend" lang_list={this.state.back_list}/>
        <SkillSingleElement skill_name="Database" lang_list={this.state.db_list}/>
        <SkillSingleElement skill_name="Frontend" lang_list={this.state.front_list}/>
        <SkillSingleElement skill_name="Cloud Service" lang_list={this.state.cloud_list}/>
        <SkillSingleElement skill_name="Mobile" lang_list={this.state.mobile_list}/>
        <SkillSingleElement skill_name="ETC" lang_list={this.state.etc_list}/>
      </div>
    )
  };
}
