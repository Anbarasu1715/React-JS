function Mobile(obj)
{
    const {Brand="Oneplus",Details,price}=obj;
    return(
        <div>
            <h1>{Brand}</h1>
            <span>{Details}</span>
            <h1>{price}</h1>
        </div>
    );
}

export default Mobile;