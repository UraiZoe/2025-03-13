import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Agazatok = (props) => {
  const [data, setData] = useState([]); // A data változó nagy 'D' betűvel
  const [agazatok, setAgazatok] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/SelectAgazat")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setData(response.data); // Csak akkor állítjuk be, ha tömböt kapunk
        } else {
          console.error("A válasz nem egy tömb:", response.data);
        }
      })
      .catch((err) => {
        console.error("Hiba történt az adatok lekérésekor:", err);
      });
  }, []); // Az üres tömb biztosítja, hogy csak egyszer fusson le

  const oldalAtiranyit = (event) => {
    event.preventDefault();
    navigate('/Valasztottagazat/' + agazatok); // Fontos: az 'Agazatok' változót 'agazatok'-ra módosítottuk
  };

  return (
    <>
      <div>
        <form onSubmit={oldalAtiranyit}>
          <select value={agazatok} onChange={e => setAgazatok(e.target.value)}>
            {/* Ellenőrizzük, hogy 'data' létezik és tömb-e */}
            {Array.isArray(data) && data.length > 0 ? (
              data.map((diak, index) => (
                <option key={index} value={diak.agazat}>{diak.agazat}</option>
              ))
            ) : (
              <option disabled>Nincs elérhető ágazat</option>
            )}
          </select>
          <button type="submit">Küldés</button>
        </form>
      </div>
    </>
  );
};

export default Agazatok;
