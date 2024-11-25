import {Fragment} from "react";
// import vandanSerries from "./components/NetflixSeries"; for default i can write any name
// import NetFlixSeries from "./components/NetflixSeries";
import {NetFlixSeries,Footer,Header} from "./components/NetflixSeries";//it is for name import
import { Profile } from "./components/profile";
import { EventHandling } from "./components/EventHandling";
import { EventProps } from "./components/EventProps";
import { EventPropagation } from "./components/EventPropagation";
import { State } from "./components/hooks/state";
import { DerivedState } from "./components/DerivedState";
import { LiftingStateUp } from "./components/LiftStateUp";
import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch";
import { Todo } from "./projects/Todo/Todo";
// import "./components/Netflix.css"
export const App = () => {
  // return (

  //   <div>
  //     <NetFlixSeries/>
  //     <NetFlixSeries/>
  //     {/* <div>
  //       <img src="img1.png" alt="" />
  //       <h1 className="read-the-docs">hello vandan sharma.</h1>
  //       <h2>Vill- Bhagwatipur</h2>
  //       <p>Post- Anua</p>
  //     </div> */}

  //   </div>
  // )

  // return (
  //   [<NetFlixSeries key="1"/>,<NetFlixSeries key="2"/>]
  // )

  return (
    // <Fragment>
    //   <NetFlixSeries />
    //   <NetFlixSeries />
    //   <NetFlixSeries />
    //   <NetFlixSeries />
    //   <Footer/>
    // </Fragment>
    // <>
    //   {/* <Header/> */}
    //   {/* <Profile/> */}

    //   <NetFlixSeries />
      
    //   {/* <Footer/> */}
    // </>
    <section>
      {/* <h1 className="card-heading">List of best netflix series</h1>
      <NetFlixSeries/> */}
      {/* <EventHandling/> */}
      {/* <EventProps/> */}
      {/* <EventPropagation/> */}
      {/* <State/> */}
      {/* <DerivedState/> */}
      {/* <LiftingStateUp/> */}
      {/* <ToggleSwitch/> */}
      <Todo/>

    </section>
  )
}
