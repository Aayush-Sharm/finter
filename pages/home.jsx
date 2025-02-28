import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <section className="service_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center ">
                        <h2 className="">Our Services</h2>
                        <p className="col-lg-8 px-0">
                            If you are going to use a passage of Lorem Ipsum, you need to be sure
                            there isn't anything believable. If you are going to use a passage of
                            Lorem Ipsum, you need to be sure there isn't anything
                        </p>
                    </div>
                    <div className="service_container">
                        <div className="carousel-wrap ">
                            <div className="service_owl-carousel owl-carousel">
                                <div className="item">
                                    <div className="box ">
                                        <div className="img-box">
                                            <img src="images/s1.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h5>Home Welding</h5>
                                            <p>
                                                when looking at its layout. The point of using Lorem Ipsum is
                                                that it has a more-or-less normal
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="box ">
                                        <div className="img-box">
                                            <img src="images/s4.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h5>Machine Welding</h5>
                                            <p>
                                                when looking at its layout. The point of using Lorem Ipsum is
                                                that it has a more-or-less normal
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="box ">
                                        <div className="img-box">
                                            <img src="images/s6.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h5>Car Welding</h5>
                                            <p>
                                                when looking at its layout. The point of using Lorem Ipsum is
                                                that it has a more-or-less normal
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="box ">
                                        <div className="img-box">
                                            <img src="images/s1.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h5>Home Welding</h5>
                                            <p>
                                                when looking at its layout. The point of using Lorem Ipsum is
                                                that it has a more-or-less normal
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="box ">
                                        <div className="img-box">
                                            <img src="images/s4.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h5>Machine Welding</h5>
                                            <p>
                                                when looking at its layout. The point of using Lorem Ipsum is
                                                that it has a more-or-less normal
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="box ">
                                        <div className="img-box">
                                            <img src="images/s6.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h5>Car Welding</h5>
                                            <p>
                                                when looking at its layout. The point of using Lorem Ipsum is
                                                that it has a more-or-less normal
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box">
                        <a href="">Read More</a>
                    </div>
                </div>
            </section>
            <section className="about_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 offset-md-1">
                            <div className="detail-box pr-md-2">
                                <div className="heading_container">
                                    <h2 className="">About Us</h2>
                                </div>
                                <p className="detail_p_mt">
                                    There are many variations of passages of Lorem Ipsum available, but
                                    the majority have suffered alteration in some form, by injected
                                    humour, orThere are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some form,
                                    by injected humour, orThere are many variations of passages of Lorem
                                    Ipsum available, but the majority have suffered alteration in some
                                    form, by injected humour, or
                                </p>
                                <Link href="about.html" className="">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 px-0">
                            <div className="img-box ">
                                <img src="images/about-img.jpg" className="box_img" alt="about img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>Our Team</h2>
                        <p>
                            Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod
                            suspendisse vel, sed quam nulla mauris iaculis. Erat eget vitae
                            malesuada, tortor tincidunt porta lorem lectus.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 mx-auto">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/t1.jpg" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>Martin Anderson</h5>
                                    <h6 className="">supervisor</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mx-auto">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/t2.jpg" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>Denny Butler</h5>
                                    <h6 className="">supervisor</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mx-auto">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/t3.jpg" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>Nathan Mcpherson</h5>
                                    <h6 className="">supervisor</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact_section ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 px-0">
                            <div className="img-box ">
                                <img
                                    src="images/contact-img.jpg"
                                    className="box_img"
                                    alt="about img"
                                />
                            </div>
                        </div>
                        <div className="col-md-5 mx-auto">
                            <div className="form_container">
                                <div className="heading_container heading_center">
                                    <h2>Get In Touch</h2>
                                </div>
                                <form action="">
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-lg-6">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <select name="" id="" className="form-control wide">
                                                <option value="">Select Service</option>
                                                <option value="">Service 1</option>
                                                <option value="">Service 2</option>
                                                <option value="">Service 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <input
                                                type="text"
                                                className="message-box form-control"
                                                placeholder="Message"
                                            />
                                        </div>
                                    </div>
                                    <div className="btn_box">
                                        <button>SEND</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="client_section layout_padding">
                <div className="container ">
                    <div className="heading_container heading_center">
                        <h2>Testimonial</h2>
                        <hr />
                    </div>
                    <div
                        id="carouselExample2Controls"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-lg-7 col-md-9 mx-auto">
                                        <div className="client_container ">
                                            <div className="img-box">
                                                <img src="images/client.jpg" alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h5>Jone Mark</h5>
                                                <p>
                                                    Editors now use Lorem Ipsum as their default model text, and
                                                    a search for 'lorem ipsum' will uncover many web sites still
                                                    in their infancy. Various versions have evolved over the
                                                    years, sometimes by
                                                </p>
                                                <span>
                                                    <i className="fa fa-quote-left" aria-hidden="true" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-lg-7 col-md-9 mx-auto">
                                        <div className="client_container ">
                                            <div className="img-box">
                                                <img src="images/client.jpg" alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h5>Jone Mark</h5>
                                                <p>
                                                    Editors now use Lorem Ipsum as their default model text, and
                                                    a search for 'lorem ipsum' will uncover many web sites still
                                                    in their infancy. Various versions have evolved over the
                                                    years, sometimes by
                                                </p>
                                                <span>
                                                    <i className="fa fa-quote-left" aria-hidden="true" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-lg-7 col-md-9 mx-auto">
                                        <div className="client_container ">
                                            <div className="img-box">
                                                <img src="images/client.jpg" alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h5>Jone Mark</h5>
                                                <p>
                                                    Editors now use Lorem Ipsum as their default model text, and
                                                    a search for 'lorem ipsum' will uncover many web sites still
                                                    in their infancy. Various versions have evolved over the
                                                    years, sometimes by
                                                </p>
                                                <span>
                                                    <i className="fa fa-quote-left" aria-hidden="true" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel_btn-box">
                            <a
                                className="carousel-control-prev"
                                href="#carouselExample2Controls"
                                role="button"
                                data-slide="prev"
                            >
                                <span>
                                    <i className="fa fa-arrow-left" aria-hidden="true" />
                                </span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselExample2Controls"
                                role="button"
                                data-slide="next"
                            >
                                <span>
                                    <i className="fa fa-arrow-right" aria-hidden="true" />
                                </span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            



        </>
    )
};
export default Home;