import { Link } from "react-router-dom";
const About = () => {
    return (
        <>
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

        </>
    )
};
export default About;