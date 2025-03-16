import { useState, useEffect } from 'react'
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

function Select() {
    const [tagozat, settagozat] = useState([]);
    const [selectedTagozat, setselectedTagozat] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3001/selectMenu")
        .then((response) => {
          settagozat(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    const oldalAtiranyit = (event) => {
        event.preventDefault();
        navigate('/Valasztott/' + selectedTagozat);
      }
      return (
    <>
        <h4>A felvételt nyert tanulók névsora a nyelvi előkészítőre:</h4>
        <form onSubmit={oldalAtiranyit}>
            <select id='select' value={selectedTagozat} onChange={e => setselectedTagozat(e.target.value)}>
                {tagozat.map(szak =>
                        <option value={szak.akod}>{szak.agazat}</option>
                    )}
            </select>
            <button type="submit">Adatok</button>
        </form>
    </>
  )
}

export default Select