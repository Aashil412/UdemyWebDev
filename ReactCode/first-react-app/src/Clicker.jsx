// function handleClick() {
// console.log("clicked the button")
// }
// function handleHover() {
//     console.log("hovered");
// }
// export default function Clicker() {
//     return (
//         <div>
//             <p onMouseOver={handleHover}>Hover Over Me</p>
//             <button onClick={ handleClick}>Click</button>
//         </div>
//     )
// }

export default function Clicker({message, buttonText}) {

    return (
        <button onClick={()=>alert(message) }>{ buttonText}</button>
    )
}