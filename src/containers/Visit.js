import React, {Component} from "react";
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';


import './Visit.css'
export default class Visit extends Component{
  constructor(props){
    super(props)

    this.state = {
      today : 0,
      total : 0
    }
  }

  async componentDidMount() {
    //componentDidMount에서는 DOM에 접근할 수 있습니다. 그래서 여기에서는 주로 AJAX 요청을 하거나, setTimeout, setInterval같은 행동
    const res = await API.graphql(graphqlOperation(queries.updateVisitors,  {
    "var": {
      "id": "723e2b0d-8478-48f7-9802-cf1d38f7f303"
    }
    }));

    console.log("================");
    console.log(res['data']['updateVisitors']['m_today']);
    console.log(res['data']['updateVisitors']['m_total']);

    // get_experiences.map(ex =>{
    //   this.state.tmp_list.push(ex.title);
    // })
    //
    this.setState({
      today : res['data']['updateVisitors']['m_today'],
      total : res['data']['updateVisitors']['m_total']
  })

  }

  render(){
    return (
      <div className="Visit">
        <p>Today : {this.state.today} / Total : {this.state.total}</p>
      </div>
    )
  };
}
