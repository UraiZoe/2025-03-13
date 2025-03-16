import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import oktatasiHivatal from "/img/logo.png"; 
import email from "/img/e-mail-marketing-2745489__340.jpg"; 

function Agazatoktablazata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/Agatzatok")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setData(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Az üres tömb biztosítja, hogy csak egyszer fusson le

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Tanuló neve</th>
          <th>Ágazat</th>
          <th>Összes pontszám</th>
        </tr>
      </thead>
      <tbody>
        {data.map((diak, index) => (
          <tr key={index}>
            <td>{diak.neve}</td>
            <td>{diak.agazat}</td>
            <td>{diak.pontszam} pont</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

function Valasztottagazat() {
  const { id } = useParams();
  const [agazat, setAgazat] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/Agazatok/${id}`)
      .then(function (response) {
        if (Array.isArray(response.data)) {
          setAgazat(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <article className="cf ph3 ph8-ns pv4 bg-green">
              <header className="fn fl-ns w-90-ns pr4-ns">
                <h3 className="mb4 mt0 lh-title">Központi felvételi tájékoztató</h3>
              </header>
              <div className="w-80-ns">
                <p className="lh-copy measure mt4 mt0-ns">
                  A középiskolákba történő jelentkezés során az iskolák határozzák meg, hogy a felvételi rangsort mi alapján döntik el.
                  A Jószakma Szakgimnázium a felvételi során az általános iskolából hozott és a központi felvételin szerzett pontok alapján
                  rangsorolja az iskolába jelentkezőket.
                </p>
                <a href="https://www.oktatas.hu/kozneveles/kozepfoku_felveteli_eljaras/kozepfoku_felveteli_eljaras_informacioi">Tájékoztató oldal</a>
                <img src={oktatasiHivatal} alt="Oktatási Hivatal" />
              </div>
            </article>
          </Col>
          <Col>
            <article className="cf ph3 ph8-ns pv4">
              <header className="fn fl-ns w-90-ns pr4-ns">
                <h3 className="mb3 mt0 lh-title">Tájékoztatás</h3>
              </header>
              <div className="w-80-ns">
                <p className="lh-copy measure mt4 mt0-ns">A központi felvételit magyar nyelv és irodalom, illetve matematika
                  tantárgyakból írják a jelentkezők. Mindkét tárgy esetén legfeljebb 50 pont szerezhető. A felvételiző hozott
                  pontjait az általános iskolai év végi eredményei alapján számolják, ez a pontszám legfeljebb 50 pont lehet.
                  A hozott pontokat duplázzák. A központi felvételin szerzett és a hozott pontok összege adja a felvételiző összesített pontszámát.
                </p>
                <img src={email} alt="E-mail marketing" />
              </div>
            </article>
          </Col>
        </Row>
      </Container>

      <Col>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Tanuló neve</th>
              <th>Ágazat</th>
              <th>Összes pontszám</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(agazat) && azon.map((diak, index) => (
              <tr key={index}>
                <td>{diak.neve}</td>
                <td>{diak.agazat}</td>
                <td>{diak.pontszam}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </>
  );
}

export { Agazatoktablazata, Valasztottagazat };
