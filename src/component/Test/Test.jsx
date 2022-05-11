import React, { useEffect, useState } from "react";
import './Test.css';


import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import axios from "axios";

const Test = () => {

    const [id, setid] = useState([])
    const [postid, setpostid] = useState([])
    const [email, setemail] = useState([])
    const [name, setname] = useState([])
    const [body, setbody] = useState([])

    const [rowData, setrowData] = useState([])
    const [columnDefs, setcolumnDefs] = useState([])

    useEffect(
        () => {

            axios.get('https://jsonplaceholder.typicode.com/comments').then(
                res => {
                    console.log(res.data)
                    let id = res.data[0].id
                    let email = res.data[0].email
                    let name = res.data[0].name
                    let body = res.data[0].body
                    let postId = res.data[0].postId
                    setid(id)
                    setemail(email)
                    setname(name)
                    setbody(body)
                    setpostid(postId)
                }
            ).catch(
                err => {
                    console.log(err)
                }
            )

            setrowData(
                [
                    { id: id, name: name, email: email, body: body, postId: postid },
                    
                ]
            )

            setcolumnDefs(
                [
                    { field: 'id' },
                    { field: 'name' },
                    { field: 'email' },
                    { field: 'body' },
                    { field: 'postId' }
                ]
            )

        }, [id, email, name, body, postid]
    )

    return (

        <>
            <div className="Test">

                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}>
                </AgGridReact>

            </div>

        </>

    )

}

export default Test;