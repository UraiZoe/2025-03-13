import "tachyons";
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import'./style.css';

import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import kep1 from "/img/logo.png"
import kep2 from "/img/e-mail-marketing-2745489__340.jpg";

import Tablazat from "../components/Tablazat.jsx"
import Select from "../components/Select.jsx"

function Home () {

    return (
        <>
        <Container>
            <div>
                <Row>
                    <Col>
                        <article id="doboz" class="cf ph3 ph8-ns pv4 bg-pink">
                            <h1 class="f3 f2-m f1-l">Központi felvételi tájékoztató</h1>
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
                    <Col>
                        <article id="doboz" class="cf ph3 ph8-ns pv4 bg-pink">
                            <h1 class="f3 f2-m f1-l">Ön az oldal használatával a következő információkhoz juthat hozzá</h1>
                            <ul>
                                <li>Előzetes rangsor: </li>
                                <ol>
                                    <li>Nevek</li>
                                    <li>Ágazat</li>
                                    <li>Összes pontszám</li>
                                </ol>
                                <li>Előzetes rangsor nyelvi előkészítő</li>
                                <li>A felvettek névsora</li>
                            </ul>
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>A felvételt nyert tanulók névsora a nyelvi előkészítőre</h3>
                        <p class="lh-copy measure mt4 mt0-ns">Válassza ki melyik ágazat adatait szeretné látni</p>
                        <Select/>
                    </Col>
                    <Col>
                        <h3>Előzetes névsor:</h3>
                        <Tablazat/>
                    </Col>
                </Row>
            </div>
        </Container>
        </>
    )
}

export default Home