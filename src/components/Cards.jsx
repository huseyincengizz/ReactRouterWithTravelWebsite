

export default function Cards({url, heading, text}){

    return(
        <>
        <img src={url} className="h-52" width={"400px"} height={"300px"} />
        <h2>{heading}</h2>
        <p>{text}</p>
        </>
    )
}