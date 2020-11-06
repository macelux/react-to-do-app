 import './App.css';
 import Todos from './components/Todos';
 import React, { Component } from 'react';


 class App extends Component {
     state = {
         todos: [{
                 id: 1,
                 title: "take ot teash ",
                 completed: false
             },
             {
                 id: 2,
                 title: "todo me",
                 completed: false
             },
             {
                 id: 3,
                 title: "take ot there ",
                 completed: false
             }
         ]
     }
     render() {
         return ( <
             div className = "App" > < Todos todos = { this.state.todos }
             markComplete = { this.markComplete }
             / > < /div >
         );
     }
 }

 export default App;