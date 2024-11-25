import { useState } from "react";

// const users=[
//     {name:'Vandan',age:24},
//     {name:'Chandan',age:25},
//     {name:'Nandan',age:20},
//     {name:'Abhinandan',age:28},

// ];


export const DerivedState = () => {

    const [users, setUsers] = useState([
        { name: 'Vandan', age: 24 },
        { name: 'Chandan', age: 25 },
        { name: 'Nandan', age: 20 },
        { name: 'Abhinandan', age: 28 },

    ]);
    const userCount = users.length;
    const averageAge = users.reduce((accum,currentEle,index)=> (currentEle.age+accum),0)/users.length;
    return (<>
        <div className="main-div">
            <h1>User List</h1>
            <ul>{
                users.map((currentEle, index) => {
                    return (
                        <li key={index}>
                            {currentEle.name} - {currentEle.age} year old.
                        </li>
                    
                    );
                })
            }
            <p>Total users: {userCount}</p>
            <p>Average Age: {averageAge}</p>
            </ul>
        </div>
    </>);
}