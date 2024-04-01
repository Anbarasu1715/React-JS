function Mobile(obj)
{
    return(
        <div>
            <h1>{obj.Brand}</h1>
            <span>{obj.Details}</span>
            <h1>{obj.price}</h1>
            <img src={obj.address} alt="https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg" />
        </div>
    );
}

export default Mobile;