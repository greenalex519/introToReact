import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	items: [
      	{ name: "Learn JavaScript", done: false },
        { name: "Learn React", done: false },
        { name: "Play around in JSFiddle", done: true },
        { name: "Build something awesome", done: true }
      ]
    }
  }

  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <ol>
        {this.state.items.map(item => (
          <li key={item.id}>
            <label>
              // <input type="checkbox" disabled readOnly checked={item.done} />
              <span className={item.done ? "done" : ""}>{item.name}</span>
            </label>
          </li>
        ))}
        </ol>
      </div>
    )
  }
}








// class App extends Component {
//   render() {
//     let myProject = [{name: "n1", summary: "d1"}, {name: "n2", summary: "s2"}, {name: "n3", summary: "s3"}];
//     let projectName = "";
//     let projectDesc = "";
//
//     for (let i=0; i < myProject.length; i++){
//        projectName = myProject[i].name
//        projectDesc = myProject[i].summary
//
//
//        console.log(projectName);
//        console.log(projectDesc);
//
//     }
//
//     return (
//       <div>
//         <h1>My Projects</h1>
//         <h3>{projectName}</h3>
//         <p>{projectDesc}</p>
//       </div>
//     );
//   }
// }



export default App;
