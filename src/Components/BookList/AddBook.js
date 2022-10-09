import { useEffect, useState } from "react"

function AddBook(props) {
    var [msg, setMsg] = useState("")
    function saveBook(event) {
        event.preventDefault()

        if (event.target.name.value == "" || event.target.author.value == "" || event.target.price.value == "") {
            return;
        }
        var temp = {
            name: event.target.name.value,
            author: event.target.author.value,
            price: event.target.price.value
        }

        event.target.name.value = ""
        event.target.author.value = ""
        event.target.price.value = ""

        props.save(temp)
        setMsg("Book Added Successfully")
        setTimeout(() => {
            setMsg("")
        }, 2500)

    }

    return (
        <div>
            <form onSubmit={saveBook}>
                <div className="mb-3" style={{ textAlign: "center" }}>
                    <span className={`fst fw-bolder text-${localStorage.getItem('theme')}`} style={{ fontSize: "1rem" }}>{msg}</span>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Enter Book Name" aria-label="Enter book name" name="name" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Enter Author Name" aria-label="Enter author name" name="author" />
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" placeholder="Enter Price" aria-label="Enter price" name="price" />
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-primary">Add Book</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddBook