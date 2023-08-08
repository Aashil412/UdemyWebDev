function handleFormSubmit(evt) {
    evt.preventDefault(); //prevent default behavior like refreshing
 console.log("Submitted the form")   
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit }>
            <button>Submit</button>
        </form>
    )
}