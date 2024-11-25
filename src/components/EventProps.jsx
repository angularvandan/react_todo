export const EventProps=()=>{
    function HandleWelcomeUser(name){
        console.log(name);
    }
    function handleHover(){
        alert('Thanks for hovering me');
    }

    return (<>
        <WelcomeUser clickForName={()=>HandleWelcomeUser("vandan")}
            onMouseEnter={handleHover}
            ></WelcomeUser>
    </>);
}
const WelcomeUser=(props)=>{
    function hadleGretting(){
        alert('Welcome to child');
        props.clickForName();
    }
    return(<>
        <button onClick={props.clickForName}>Click</button>
        <button onMouseEnter={props.onMouseEnter}>hover</button>
        <button onClick={hadleGretting}>Greet</button>
        </>);
};