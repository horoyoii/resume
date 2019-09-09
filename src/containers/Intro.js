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
      content: "끊임없이 머리 속에 떠오르는 프로젝트들을 구현해내기 위하여 끊임없는 배움을 추구합니다. 비록 화려한 커리어는 없지만 높은 러닝 커브을 가지며... 나중에 써야겠다"
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
        </div>
      </div>
    )
  };
}
