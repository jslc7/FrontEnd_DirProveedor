import { Carousel } from "react-bootstrap";

var heroData = [
    {
        id: 1,
        imagen: 'src/assets/image/baner1.jpg',
        titulo: 'El diseño perfecto de tu sitio web 1',
        descripcion: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem.'
    },
    {
        id: 2,
        imagen: 'src/assets/image/baner2.jpg',
        titulo: 'El diseño perfecto de tu sitio web 2',
        descripcion: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem.'
    }
]

export default function Carousels(){
    return (
        <section id='home'>
            <Carousel data-bs-theme="dark">
                {
                    heroData.map(item => {
                        return(
                            <Carousel.Item key={item.id}>
                                <img
                                    className="d-block w-100"
                                    src={item.imagen}
                                    alt={"Imagen " + item.id}
                                />
                                {/* <Carousel.Caption>
                                    <h5>{item.titulo}</h5>
                                    <p>{item.descripcion}</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </section>
    )
}