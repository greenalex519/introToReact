import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	items: [
      	{ name: "name1", description: "description 1" },
        { name: "name2", description: "description 2" },
        { name: "name3", description: "description 3" },
        { name: "name4", description: "description 4" }
      ]
    }
  }

  render() {
    return (
      <div>
        <h2>Projects:</h2>
        <ol>
        {this.state.items.map(item => (
          <ul key={item.id}>

            <label>
              <li>{item.name} </li>
              <li>{item.description}</li>
              <hr></hr>
            </label>
          </ul>
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
