import React, {Component} from "react";


import './DetailList.css'


export default class DetailList extends Component{

  render(){
    const element = []
    if (Array.isArray(this.props.subtitle) && this.props.subtitle.length){
      for(let i =0; i <this.props.subtitle.length; i++){
        element.push({subtitle:this.props.subtitle[i], content:this.props.content[i]})
      }
  
  }
    return (
      <div className="tech_container">

        { element.map(ele =>{
          return(
              <div>
              <div className="detail_subtitle">{ele.subtitle}</div>
              <div className="detail_content">{ele.content}</div>
              </div>
            )
        })}

        <p>{this.props.name}</p>
      </div>
    )
  };
}
