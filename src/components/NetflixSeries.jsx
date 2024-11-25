import netflixData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
import "../index.css";


export const NetFlixSeries = () => {
  const name = "vandan sharma";
  const age = 16;
  let buttonText = "submit";

  if (age < 18) buttonText = 'disabled';

  const buttonFun = () => {
    if (age < 18) return 'disabled';
    return 'Submit'
  }

  const findDist = () => {
    const name = 'Arwal';
    return name;
  }
  // if(age<18){
  //   return (
  //     <div>
  //       <img src="img1.png" alt="" />
  //       <h1 className="read-the-docs">hello {name}.</h1>
  //       <h2>Vill- Bhagwatipur</h2>
  //       <p>Post- Anua</p>
  //       <p>Pin: {804400 + 19}</p>
  //       <p>discrict: {findDist()}</p>
  //       <button>Disabled</button>
  //     </div>
  //   );
  // }
  return (
    <ul className="grid-container ">
      {
        netflixData.map((data) => {
          return  <SeriesCard key={data.id} data={data}/>
        })
      }
    </ul>
  );
}

//   export default NetFlixSeries;

export const Header = () => {
  return (
    <p>Header</p>
  );
}

export const Footer = () => {
  return (
    <p>Copy right @angularvandan</p>
  );
}