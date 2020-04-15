import React, {Component} from "react";
import "./Intro.css"

export default class Intro extends Component{
  constructor(props){
    super(props)

    this.state = {
      name : "Lee Yeong-Min",
      job: "Developer",
      email : "demonic3540@naver.com",
      position: "Student",
      blog: "https://blog.naver.com/demonic3540",
      github : "https://github.com/horoyoii",
      content: "I have very few knowledge of CS, which means there are so many things left to be DISCOVERED by me. This is great.",
      subtitle: "I always think : What will I develop tomorrow?"
    }
  }


  render(){
    return (
      <div className="Intro">
        <div className="lander">
          <div className="header-deco"/>

          <h1>{this.state.name}</h1>
          <p className="sub_heading">{this.state.job}</p>

          <span className="sub_info">github : <a href={this.state.github} target="_blank">{this.state.github}</a></span>
          <span className="sub_info">blog : <a href={this.state.blog} target="_blank" >{this.state.blog}</a></span>
          <span className="sub_info">email : <a href={this.state.email} target="_blank">{this.state.email}</a></span>

          <p className="intro_content">{this.state.content}</p>
          <p className="intro_content">{this.state.subtitle}</p>
        </div>
      </div>
    )
  };
}
