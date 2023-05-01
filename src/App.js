import React , {Component} from "react";
import logo from './logo.svg'
import './App.css'
import Mycomponent from './components/greet'
import Mycomponent2 from "./components/welcome";
import Mycomponent3 from "./components/hello";
import Mycomponent4 from "./components/message";
import Mycomponent5 from "./components/counter";
import Mycomponent6 from "./components/functionalclick";
import Mycomponent7 from "./components/classclick";
import Mycomponent8 from "./components/eventbind";
import Mycomponent10 from "./components/parentcomponent"
import Mycomponent12 from "./components/user";
import Mycomponent13 from "./components/namelist";
import Mycomponent14 from "./components/key";
import Mycomponent15 from "./components/stylesheet";
import Mycomponent16 from "./components/inline";
import './appstyle.css'
import styles from './appstyle.module.css'
import Mycomponent17 from "./components/form";
import Mycomponent18 from "./components/lifecycleA";
import Mycomponent19 from "./components/lifecycleB";
import Mycomponent20 from "./components/fragments";
import Mycomponent21 from "./components/table";
import Mycomponent22 from "./components/parentcomp"
import Mycomponent23 from "./components/refsdemo";
import Mycomponent24 from "./components/focusinput";
import Mycomponent25 from "./components/frparentinput";
import Mycomponent26 from "./components/portaldemo";
import Mycomponent27 from "./components/hero";
import Mycomponent28 from "./components/errorboundary";
import Mycomponent29 from "./components/clickcounter";
import Mycomponent30 from "./components/hovercounter";



class App extends Component{
  render(){
    return(
      <div className="App">
        {/* <Mycomponent4 /> */}
        {/* <Mycomponent5/> */}
        {/* <Mycomponent6 /> */}
        {/* <Mycomponent7 /> */}
        {/* <Mycomponent8 /> */}
        {/* <Mycomponent10 /> */}
        {/* <Mycomponent12 /> */}
        {/* <Mycomponent13 /> */}
        {/* <Mycomponent14 /> */}
        {/* // here i am using class attrivbute css */}
        {/* <Mycomponent15 primary={true} /> */}
         {/* <Mycomponent16 /> */}

        {/* //css module */}
        {/* <h1 className='error'>Error</h1> */}
        {/* <h1 className={styles.success}>Success</h1> */}
         {/* <Mycomponent16 /> */}
         {/* <Mycomponent17 /> */}
         {/* <Mycomponent18 /> */}
         {/* <Mycomponent19 /> */}
         {/* <Mycomponent20 /> */}
         {/* <Mycomponent21 /> */}
         {/* <Mycomponent22 /> */}
         {/* <Mycomponent23 /> */}
         {/* <Mycomponent24 /> */}
         {/* <Mycomponent25/> */}
         {/* <Mycomponent25/> */}
         {/* <Mycomponent26/> */}
         {/* <Mycomponent28>
         <Mycomponent27 heroName="batman" />
         <Mycomponent27 heroName="superman" />
         <Mycomponent27 heroName="joker" />
         </Mycomponent28> */}
         <Mycomponent29 />
         <Mycomponent30 />
        


   
         
        
      
        
       
      </div>
    )
  }
}
export default App;