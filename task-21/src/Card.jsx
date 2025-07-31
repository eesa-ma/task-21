
function Card(props) {
    return(
        <>
            <div className="cards">
                <h1>{props.head}</h1>
                <p>{props.description}</p>
            </div>
        </>
    );
}

export default Card