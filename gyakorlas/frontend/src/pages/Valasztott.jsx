import "tachyons";
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import'./style.css';

import axios from "axios";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table';

import kep1 from "/img/logo.png"
import kep2 from "/img/e-mail-marketing-2745489__340.jpg";

7
function Valasztott() {
    const { id } = useParams()
    const [nevsor, setnevsor] = useState([]);
    const [nyek, setnyek] = useState([]);
    axios.get("http://localhost:3001/felvetRangsor/" + id)
      .then((response) => {
        setnevsor(response.data);
      })
      .catch((err) => {
        Console.log(err);
      });
      axios.get("http://localhost:3001/felvetNyek/" + id)
      .then((response) => {
        setnyek(response.data);
      })
      .catch((err) => {
        Console.log(err);
    });

    return (
        <>
        <Container>
            <div>
                <Row>
                    <Col>
                        <article id="doboz" class="cf ph3 ph8-ns pv4 bg-pink">
                            <h1 class="f3 f2-m f1-l">Központi felvételi tájékoztatóasss</h1>
                            <p class="measure lh-copy">
                                A középiskolákba történő jelentkezés során az iskolák határozzák meg, hogy a felvételi rangsort mi alapján döntik el. A Jószakma Szakgimnázium a felvételi során az általános iskolából hozott és a központi felvételin szerzett pontok alapján rangsorolja az iskolába jelentkezőket.
                            </p>
                            <p class="measure lh-copy"><a href="https://www.oktatas.hu/kozneveles/kozepfoku_felveteli_eljaras/kozepfoku_felveteli_eljaras_informacioi">Tájákoztató oldal</a></p>
                            <img src={kep1} alt="oktatás logo" />
                        </article>
                    </Col>
                    <Col>
                        <article id="doboz" class="cf ph3 ph8-ns pv4">
                            <h1 class="f3 f2-m f1-l">Tájékoztatás</h1>
                            <h6 class="f3">
                                Jószakma Szakgimnázium
                            </h6>
                            <p class="measure lh-copy">
                            A központi felvételit magyar nyelv és irodalom, illetve matematika tantárgyakból írják a jelentkezők. Mindkét tárgy esetén legfeljebb 50 pont szerezhető. A felvételiző hozott pontjait az általános iskolai év végi eredményei alapján számolják, ez a pontszám legfeljebb 50 pont lehet. A hozott pontokat duplázzák. A központi felvételin szerzett és a hozott pontok összege adja a felvételiző összesített pontszámát.
                            </p>
                            <img src={kep2} alt="Második kép" />
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>A felvettek rangsora, nyelvi előkészítő. A maximálisan felvehető tanulók száma 32fő.</h1>
                        <Table striped bordered hover  className="my-table">
                            <thead>
                                <tr>
                                    <th>Tanuló neve</th>
                                    <th>Ágazat</th>
                                    <th>Összes pontszám</th>
                                </tr>
                            </thead>
                            <tbody>
                            {nevsor.map((nevsoregy) => (
                                <tr>
                                <td>{nevsoregy.nev}</td>
                                <td>{nevsoregy.agazat}</td>
                                <td>{nevsoregy.osszpontszam}</td>
                            </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        </Container>
        </>
    )
}

export default Valasztott