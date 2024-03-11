function Mobile(props)
{
    return(
        <div>
            <h1>{props.Brand}</h1>
            <span>{props.Details}</span>
            <h1>{props.price}</h1>
        </div>
    );
}

export default Mobile;