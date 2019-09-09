import React, {Component} from "react";


import './TechList.css'


export default class TechList extends Component{
  constructor(props){
    super(props)

    this.state = {
    }
  }


  render(){
    return (
      <div className="tech_container">
        {this.props.tech_list.map(tech =>{
          return(
              <a className="tech_element">{tech}</a>
          )
        })}
      </div>
    )
  };
}
