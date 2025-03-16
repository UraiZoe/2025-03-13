import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import {use} from "react";

function Tablazat() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/rangSor")
        .then((response) => {
          setdata(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    return(
        <>
            <Table striped bordered hover  className="my-table">
                <thead>
                    <tr>
                        <th>Tanuló neve</th>
                        <th>Ágazat</th>
                        <th>Összes pontszám</th>
                    </tr>
                </thead>
                <tbody>
                {data.map(diak => (
                    <tr>
                        <td>{diak.nev}</td>
                        <td>{diak.hozott}</td>
                        <td>{diak.agazatNyek}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    ) 
}
export default Tablazat