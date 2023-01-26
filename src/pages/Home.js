import { Img__Barril } from "../Img/Barril";

const Home = () => {
    return (
        <div className="slider__size">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="8" aria-label="Slide 9"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="9" aria-label="Slide 10"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="10" aria-label="Slide 11"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="11" aria-label="Slide 12"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={Img__Barril.Enero2022} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={Img__Barril.Febrero2022} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p>.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Img__Barril.Marzo2022} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p>.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Img__Barril.Abril2022} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p>.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Img__Barril.Mayo2022} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p>.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Img__Barril.Junio2022} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p>.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Img__Barril.Julio2022} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p>.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Img__Barril.Agosto2022} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p>.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Img__Barril.Septiembre2022} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p>.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Img__Barril.Octubre2022} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p>.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Img__Barril.Noviembre2022} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p>.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Img__Barril.Diciembre2022} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p>.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Home