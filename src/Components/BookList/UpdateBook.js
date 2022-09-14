
function UpdateBook(props) {

    var updateMyBook = (e) => {
        e.preventDefault()
        console.log("Update ",props.book)
        var temp = {
			book_name : e.target.name.value,
			author : e.target.author.value,
			price : e.target.price.value
		}
        props.update(temp)
    }
    
    return (
        
                <div>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Update
                    </button>
                    

                    <div class="modal fade text-dark" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Book Update</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form onSubmit={updateMyBook}>
                                        <div class="mb-3">
                                            <label for="formGroupExampleInput" class="form-label">Book Name</label>
                                            <input type="text" class="form-control" id="formGroupExampleInput" defaultValue={props.book.name} name="name"/>
                                        </div>
                                        <div class="mb-3">
                                            <label for="formGroupExampleInput2" class="form-label">Author</label>
                                            <input type="text" class="form-control" id="formGroupExampleInput2" defaultValue={props.book.author} name="author"/>
                                        </div>
                                        <div class="mb-3">
                                            <label for="formGroupExampleInput2" class="form-label">Price</label>
                                            <input type="number" class="form-control" id="formGroupExampleInput2" defaultValue={props.book.price} name="price"/>
                                        </div>
                                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Update Book</button>
                                        </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div></div>
            
    )
}

export default UpdateBook