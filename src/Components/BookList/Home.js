import { useState } from "react"
import AddBook from "./AddBook"
import BookTable from "./BookTable"
function Home(props) {

    var [Books, addBooks] = useState([])

    var addBook = function (data) {
        console.log(data)
        addBooks([...Books, data])
    }

    var removeBook = function (index) {
        console.log("Home: ", index)
        // addBooks((items) => items.filter((_, i) => i !== index))
        addBooks((products) => products.filter((_, i) => i !== index));
    }

    return (
        <div>
            {/* <p className="h1">My Book List</p> */}
            <div className="container">
                <div className="container-fluid">
                    <div className="row p-5" style={{ height: "25vh" }}>
                        <AddBook save={addBook}/>
                    </div>
                    <div className="row" style={{ height: "60vh" }}>
                        <BookTable allBooks={Books} remove={removeBook}/>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default Home