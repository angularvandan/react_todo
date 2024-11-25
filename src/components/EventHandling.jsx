export const EventHandling=()=>{

    function handleButtonClick(event){
        alert('I am on click event!');
        console.log(event);
    }
    function showUserName(name){
        console.log('hi ',name)
    }

    return (<>
        <button onClick={handleButtonClick}>Click me</button><br/>
        <button onClick={(event)=>handleButtonClick(event)}>Click me</button><br/>
        <button onClick={()=>showUserName('vandan')}>Click me</button><br/>
        
    </>);
}