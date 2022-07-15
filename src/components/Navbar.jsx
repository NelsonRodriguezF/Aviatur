import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const Navbar = () => {

    const [ ciudades, setCiudaddes ] = useState([]);
    const [ startDate, setStartDate ] = useState(new Date());

    useEffect(() => {
        async function traerCiudades(){
            const url ="https://agenciasenlinea.aviatur.com/aviatur/cities.json";
            const respond = await fetch(url);
            const data = await respond.json();
            setCiudaddes(data);
        }

        traerCiudades();
    },[]);

    console.log({ciudades});

    return (
        <>
            <nav>
                <div className="nav">
                    <div className="nav1">
                        <i className="fa-solid fa-plane-departure"></i>
                        <h4>Vuelos</h4>
                    </div>
                    <div  className="nav2">
                        <i className="fa-solid fa-hotel"></i>
                        <h4>Hotel</h4>
                    </div>
                    <div className="nav2">
                        <i className="fa-solid fa-car"></i>
                        <h4>Autos</h4>
                    </div>
                </div>

                <div className="container">
                    <div className="radio">
                        <div>
                            <input type="radio"/>
                            <label>Ida y vuelta</label>
                        </div>
                        <div>
                            <input type="radio"/>
                            <label>Solo ida</label>
                        </div>
                        <div>
                            <input type="radio"/>
                            <label>Multidestino</label>
                        </div>
                    </div>
                    
                    <div className="select">
                        <select className="city">
                            {ciudades.map( (ciudad, id) => {
                                return <option key={id}>{ciudad.name_city}</option>
                            })}
                        </select>
                        <DatePicker className="date" selected={startDate} onChange={(date) => setStartDate(date)} />
                        <button>Buscar</button>
                    </div>
                </div> 
        
            </nav>
        </>
    )
}