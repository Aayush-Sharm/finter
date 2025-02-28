import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <div className="hero_area">
                <div className="hero_bg_box">
                    <img src="images/hero-bg.jpg" alt="" />
                </div>
                {/* header section strats */}
                <header className="header_section">
                    <div className="header_top">
                        <div className="container-fluid header_top_container">
                            <div className="contact_nav">
                                <Link to="">
                                    <i className="fa fa-map-marker" aria-hidden="true" />
                                    <span>Location</span>
                                </Link>
                                <Link to="">
                                    <i className="fa fa-phone" aria-hidden="true" />
                                    <span>Call : +01 123455678990</span>
                                </Link>
                                <Link to="">
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    <span>demo@gmail.com</span>
                                </Link>
                            </div>
                            <div className="social_box">
                                <Link to="">
                                    <i className="fa fa-facebook" aria-hidden="true" />
                                </Link>
                                <Link to="">
                                    <i className="fa fa-twitter" aria-hidden="true" />
                                </Link>
                                <Link to="">
                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                </Link>
                                <Link to="">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="header_bottom">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-lg custom_nav-container ">
                                <Link className="navbar-brand " to="index.html">
                                    {" "}
                                    Finter{" "}
                                </Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className=""> </span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav  ">
                                        <li className="nav-item ">
                                            <Link className="nav-link" to="/">
                                                Home{" "}
                                            </Link>
                                        </li>
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/about">
                                                {" "}
                                                About <span className="sr-only">(current)</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/service">
                                                Services
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/team">
                                                {" "}
                                                Team{" "}
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact">
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">
                                                <i className="fa fa-user" aria-hidden="true" />
                                                <span>Login</span>
                                            </Link>
                                        </li>
                                        <form className="form-inline justify-content-center">
                                            <button
                                                className="btn  my-2 my-sm-0 nav_search-btn"
                                                type="submit"
                                            >
                                                <i className="fa fa-search" aria-hidden="true" />
                                            </button>
                                        </form>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
                {/* end header section */}
                <section className="slider_section ">
                    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-lg-10 col-md-11 mx-auto">
                                            <div className="detail-box">
                                                <h1>
                                                    We Provide <br />
                                                    Welding Services
                                                </h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                                                    omnis fugit, sed tempora praesentium commodi error, hic
                                                    recusandae repudiandae neque ad molestias, atque veritatis
                                                    labore quae eveniet autem in
                                                </p>
                                                <div className="btn-box">
                                                    <Link href="" className="btn1">
                                                        Contact Us
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-lg-10 col-md-11 mx-auto">
                                            <div className="detail-box">
                                                <h1>
                                                    We Provide <br />
                                                    Welding Services
                                                </h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                                                    omnis fugit, sed tempora praesentium commodi error, hic
                                                    recusandae repudiandae neque ad molestias, atque veritatis
                                                    labore quae eveniet autem in
                                                </p>
                                                <div className="btn-box">
                                                    <Link href="" className="btn1">
                                                        Contact Us
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-lg-10 col-md-11 mx-auto">
                                            <div className="detail-box">
                                                <h1>
                                                    We Provide <br />
                                                    Welding Services
                                                </h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                                                    omnis fugit, sed tempora praesentium commodi error, hic
                                                    recusandae repudiandae neque ad molestias, atque veritatis
                                                    labore quae eveniet autem in
                                                </p>
                                                <div className="btn-box">
                                                    <Link href="" className="btn1">
                                                        Contact Us
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel_btn-box"> <Link className="carousel-control-prev" to="#customCarousel1" role="button" data-slide="prev" > <i className="fa fa-arrow-left" aria-hidden="true"></i> <span className="sr-only">Previous</span> </Link> <Link className="carousel-control-next" to="#customCarousel1" role="button" data-slide="next" > <i className="fa fa-arrow-right" aria-hidden="true"></i> <span className="sr-only">Next</span> </Link> </div>
                    </div>
                </section>

            </div>

        </>
    )
};
export default Header;