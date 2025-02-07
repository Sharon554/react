

//function App() {
  //return (
    //<div className="App">
      //<h1>hello</h1>
      
    //</div>
  //);
//}

//export deafult App



//! component composition
//import React from 'react'
//import Navbar from './components/Navbar'
//import Main from './components/Main'
//import Sidebar1 from './components/Sidebar1'
//import Sidebar2 from './components/Sidebar2'
//import Footer from './components/Footer'
//const App = () => {
  //return (
    //<div className='app'>
      //<Navbar/>
      //<Main/>
      //<div className='sidebar'>
        //<Sidebar1/>
        //<Sidebar2/>
      //</div>
      //<Footer/>
    //</div>
  //)
//}

//export default App;

//import React, { Component } from 'react'

//export default class CBCPropEx extends Component {
  //render() {
    //console.log(this);
    //return (
      //<div>CBCPropEx</div>
    //)
 // }
//}

// !props
//import React, { Component } from 'react'
//import FBCPropEx from './propsex/FBCPropEx'

//export default class App extends Component {
  //render() {
    //return (
    //<div>
     // {/*<CBCPropEx
      //username="sharon"
      //age={20}
      //hobbies={["Playing" , "reading books" , "stock"]}
      //address={{city:"sircilla", area:"Gandhinagar"}}
      //sendFun={function(){alert("hi i am sharon")}}
      ///>*/}
      //<FBCPropEx
      //username="sharon"
      //ispretty={true}
      //hobbies={["singing","playing music","reading","sleeping"]}
      //>
      //</div>
    //)
  //}
//}

// !props children
//import React from 'react'
//import PropChildEx from './propsex/PropChildEx'
//import SubChild from './propsex/SubChild'

//const App = () => {
  //return (
    //<div>
      //{/*<PropChildEx num={1000}>
        //<h1>this is data coming from props children</h1>

      //</PropChildEx>*/}
      //</div>
  //)
//}

//export default App
//import React from 'react'
//import FBCStateEx from './stateexample/FBCStateEx'
//const App = () => {
  //return (
    //<div>
      //<FBCStateEx/>
      
    //</div>
 // )
//}
//export default App

//import React, { Component } from 'react';
//import CBCStateEx from './stateexample/CBCStateEx'
//const App = () => {
  //return (
    //<div>
      //<CBCStateEx/>
      
    //</div>
  //)
//}

//export default App
//import React from 'react'
//import  FunctionalComponent from './components/FunctionalComponent';

//function App (){
  //return (
    //<div className="App">
      //<FunctionalComponent/>

    //</div>
  //);
//}

//export default App;


import React, { Component } from 'react';
import ClassComponent from './components/ClassComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ClassComponent clgName="XYZ College" city="New York" apply={true}>
                    Extra Text
                </ClassComponent>
            </div>
        );
    }
}

export default App;

