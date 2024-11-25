export const EventPropagation=()=>{

    function handleButtonClick(event,name){
        console.log(event);
        console.log(name);
        
        event.stopPropagation();
    }
    

    return (<>
        <section className="main-div w-[400px] h-[300px] flex justify-center items-center bg-black"onClickCapture={(event)=>handleButtonClick(event,'main')}>
            <div className="g-div bg-red w-[80%] h-[80%] bg-white flex justify-center items-center"onClickCapture={(event)=>handleButtonClick(event,'global')}>
                <div className="p-div w-[60%] h-[60%] bg-slate-500 flex justify-center items-center"onClickCapture={(event)=>handleButtonClick(event,'parent')}>
                    <button className="c-div w-[40%] h-[40%]" onClickCapture={(event)=>handleButtonClick(event,'child')}>Click me</button>

                </div>
            </div>
        </section>        
    </>);
}