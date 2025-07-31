
function Card(props) {
    return(
        <>
        <div className="p-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="p-10 bg-black shadow-md h-full max-w-fit flex flex-col gap-2">
                <img src={props.imageSrc} alt={props.altText} />
                <h1 className="font-bold text-lg text-center text-white">{props.head}</h1>
                <p className="text-white text-center">{props.description}</p>
            </div>
        </div>
        
        </>
    );
}

export default Card