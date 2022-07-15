import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'

import '../../public/img/Rectangle10.png';
import '../../public/img/Rectangle11.png';
import '../../public/img/Rectangle12.png';
import '../../public/img/Rectangle16.png';
import '../../public/img/Rectangle17.png';
import '../../public/img/Rectangle18.png';
import '../../public/img/Rectangle19.png';

export const Main = () => {

    const [ images, setImages ] = useState([]);

    useEffect(() => {
        async function traerCiudades(){
            const url ="https://agenciasenlinea.aviatur.com/aviatur/content.json";
            const respond = await fetch(url);
            const data = await respond.json();
            setImages(data);
        }

        traerCiudades();
    },[]);

    console.log({images});

    return (
        <>
            <main>
                <div className="main">
                    {/* <!--Vuelos Recomendados--> */}
                    <h3 className="recommended">Vuelos Recomendados</h3>

                    <motion.div className="slide" drag="x" dragConstraints={{right: 0, left: -1000}}>
                        {images.map( (image, id) => {
                            return (
                                <motion.div className="img-inf">
                                    <img src={image.image} alt={image.city}/>
                                    <p className="country">{image.city}</p>
                                    <p className="price">${image.price}cop</p>
                                </motion.div>
                            )
                        })}

                        {/* <div className="img-inf">
                            <img src="/public/img/Rectangle10.png" alt=""/>
                            <p className="country">Medellin, Colombia</p>
                            <p className="price">$356.032 cop</p>
                        </div>
                        <div className="img-inf">
                            <img src="/public/img/Rectangle11.png" alt=""/>
                            <p className="country">Santorini, Grecia</p>
                            <p className="price">$4.057.654 cop</p>
                        </div>
                        <div className="img-inf">
                            <img src="/public/img/Rectangle12.png" alt=""/>
                            <p className="country">Ciudad de Panamá, Panamá</p>
                            <p className="price">$886.032 cop</p>
                        </div> */}
                    </motion.div>

                    {/* <!--Paquetes imperdibles--> */}
                    <h3 className="recommended">Paquetes imperdibles</h3>
                    <div className="package">
                        <div className="img1">
                            <img src="/public/img/Rectangle16.png" alt=""/>
                        </div>
                        <div className="img3">
                            <img src="/public/img/Rectangle17.png" alt=""/>
                            <img src="/public/img/Rectangle18.png" alt=""/>
                            <img src="/public/img/Rectangle19.png" alt=""/>
                        </div>
                    </div>

                    {/* <!--Redes sociales - iconos--> */}
                    <div className="social-media">
                        <div className="frame1">
                            <p>Únase a nuestra comunidad</p>
                        </div>          
                        <div className="frame2">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram-square"></i>
                            <i className="fa-brands fa-twitter-square"></i>
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </div> 
            </main>
        </>
    )
}