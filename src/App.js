import React, { Fragment } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="images/logo.png" alt="logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#home">Pocetna</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">O nama</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#services">Usluge</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#team">Tim</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Kontakt</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="home">
                <div id="slides" class="carousel slide" data-ride="carousel">
                    <ul class="carousel-indicators">
                        <li data-target="#slides" data-slide-to="0" class="active"></li>
                        <li data-target="#slides" data-slide-to="1"></li>
                        <li data-target="#slides" data-slide-to="2"></li>
                    </ul>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="images/background.png" alt="slider img" />
                            <div class="carousel-caption">
                                <h1 class="display-2">S-MOBILE</h1>
                                <h3>Dobrodošli na naš web sajt!</h3>
                                <button type="button" class="btn btn-outline-light btn-lg">Online prodavnica</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="images/background2.png" alt="slider img2" />
                            <div class="carousel-caption">
                                <h1 class="display-2">S-MOBILE</h1>
                                <h3>Dobrodošli na naš web sajt!</h3>
                                <button type="button" class="btn btn-outline-light btn-lg">Online prodavnica</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="images/background3.png" alt="slider img3" />
                            <div class="carousel-caption">
                                <h1 class="display-2">S-MOBILE</h1>
                                <h3>Dobrodošli na naš web sajt!</h3>
                                <button type="button" class="btn btn-outline-light btn-lg">Online prodavnica</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" class="container-fluid padding">
                <div class="row welcome">
                    <div class="col-lg-6">
                        <h2>Naša kratka priča..</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                        <br />
                        <button class="btn btn-primary">Saznaj više</button>
                    </div>
                    <div class="col-lg-6">
                        <img src="images/desk.png" class="img-fluid" alt="desk" />
                    </div>
                </div>
            </div>
            <hr class="my-4" />
            <div id="services" class="container-fluid padding">
                <div class="row welcome text-center">
                    <div class="col-12">
                        <h1 class="display-4">Naše usluge</h1>
                    </div>
                    <hr />
                    <div class="col-12">
                        <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            <div class="container-fluid padding">
                <div class="row text-center padding">
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <i class="fas fa-mobile-alt"></i>
                        <h3>SAVETOVANJE</h3>
                        <p>Kod nas se možete posavetovati oko Vašeg telefona.</p>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <i class="fas fa-shopping-cart"></i>
                        <h3>PRODAJA</h3>
                        <p>Kod nas možete kupiti Vaš novi telefon.</p>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <i class="fas fa-tools"></i>
                        <h3>SERVIS</h3>
                        <p>Kod nas možete popraviti Vaš telefon.</p>
                    </div>
                </div>
                <hr class="my-4" />
            </div>
            <div id="team" class="container-fluid padding">
                <div class="row welcome text-center">
                    <div class="col-12">
                        <h1 class="display-4">Upoznajte naš tim</h1>
                    </div>
                    <hr />
                </div>
            </div>
            <div class="container-fluid padding">
                <div class="row padding">
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="images/team1.png" alt="team member 1" />
                            <div class="card-body">
                                <h4 class="card-title">Ime Prezime</h4>
                                <p class="card-text">CEO</p>
                                <a href="#" class="btn btn-outline-secondary">Detaljnije</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="images/team2.png" alt="team member 2" />
                            <div class="card-body">
                                <h4 class="card-title">Ime Prezime</h4>
                                <p class="card-text">Savetnik</p>
                                <a href="#" class="btn btn-outline-secondary">Detaljnije</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="images/team3.png" alt="team member 3" />
                            <div class="card-body">
                                <h4 class="card-title">Ime Prezime</h4>
                                <p class="card-text">Serviser</p>
                                <a href="#" class="btn btn-outline-secondary">Detaljnije</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid padding">
                <div class="row padding">
                    <div class="col-lg-6">
                        <h2>Naša filozofija</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                        <br />
                    </div>
                    <div class="col-lg-6">
                        <img src="images/quote.png" class="img-fluid" alt="desk" />
                    </div>
                </div>
                <hr class="my-4" />
            </div>
            <div id="contact" class="container-fluid padding">
                <div class="row text-center padding">
                    <div class="col-12">
                        <h2>Kontaktirajte nas</h2>
                    </div>
                    <div class="col-12 social padding">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <footer>
                <div class="container-fluid padding">
                    <div class="row text-center">
                        <div class="col-md-4">
                            <img src="images/logowhite.png" alt="logo" />
                            <hr class="light" />
                            <p>+381 60 000 000</p>
                            <p>email@gmail.com</p>
                            <p>Ulica i Broj</p>
                            <p>Grad, Drzava, 00000</p>
                        </div>
                        <div class="col-md-4">
                            <hr class="light" />
                            <h5>Radno vreme</h5>
                            <hr class="light" />
                            <p>Pon-Pet: 9-17h</p>
                            <p>Subota: 10-16h</p>
                            <p>Nedelja: Zatvoreno</p>
                        </div>
                        <div class="col-md-4">
                            <hr class="light" />
                            <h5>Prodavnice</h5>
                            <hr class="light" />
                            <p>Grad, Drzava, 00000</p>
                            <p>Grad, Drzava, 00000</p>
                            <p>Grad, Drzava, 00000</p>
                        </div>
                        <div class="col-12">
                            <hr class="light-100" />
                            <h5>&copy; bogdankotarlic</h5>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App;