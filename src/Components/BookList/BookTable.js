import UpdateBook from "./UpdateBook"
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const divStyle = {
    display: 'flex',
    justifyContent: 'center',
};

function BookTable(props) {
    const [color, setColor] = useState()
    const [myTable, setTable] = useState()
    function deleteMe(id) {
        console.log("BookTable:", id)
        props.remove(id - 1)
    }

    var updateData = function (data) {
        console.log("BookTable ", data)
    }

    const notify = () => {
        toast.info('🦄 Under Development', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    useEffect(() => {
        console.log(localStorage.getItem('theme'));
        setColor(localStorage.getItem('theme'))
        if (localStorage.getItem('theme') == 'white') {
            // we want dark table
            setTable(true)
        } else {
            setTable(false)
        }
    }, [localStorage.getItem('theme')]);

    return (
        <div>
            <table className={`table ${myTable ? "table-dark table-striped" : "table-striped"}`} style={{ color: color }}>
                <thead>
                    <tr>
                        <th scope="col" className="text-center">#</th>
                        <th scope="col" className="text-center">Name</th>
                        <th scope="col" className="text-center">Author</th>
                        <th scope="col" className="text-center">Price</th>
                        <th scope="col" className="text-center">Task</th>
                    </tr>
                </thead>
                <tbody>
                    {props.allBooks.map((item) =>
                        <tr>
                            <th className="text-center align-middle">{(props.allBooks.indexOf(item) + 1)}</th>
                            <td className="text-center align-middle">{item.name}</td>
                            <td className="text-center align-middle">{item.author}</td>
                            <td className="text-center align-middle">{item.price}</td>
                            <td className="text-center align-middle">
                                <div style={divStyle}>
                                    <button type="button" class="btn btn-primary" onClick={notify}>
                                        Update
                                    </button>
                                    <ToastContainer />
                                    {/* Update Component starts from here
It is work in progress */}
                                    {/* <UpdateBook book={item} update={updateData} /> */}
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button type="button" className="btn btn-primary" onClick={() => deleteMe(props.allBooks.indexOf(item) + 1)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default BookTable