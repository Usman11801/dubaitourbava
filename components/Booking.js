"use client";
import { useState } from "react";
import Link from "next/link";




const Booking = ({ tour }) => {
    const [selectedValue, setSelectedValue] = useState("1");


    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    console.log('value is here', selectedValue)
    
    return (
        <>
            <div className="col-lg-4 col-md-8 col-sm-10 rmt-75">
                <div className="blog-sidebar tour-sidebar">
                    <div
                        className="widget widget-booking"
                        data-aos="fade-up"
                        data-aos-duration={1500}
                        data-aos-offset={50}
                    >
                        <h5 className="widget-title">Tour Booking</h5>
                        <form action="#">
                            <div className="date mb-25">
                                <b>From Date</b>
                                <input type="date" />
                            </div>
                            <hr />
                            <div className="time py-5">
                                <b>Time :</b>
                                <ul className="radio-filter">
                                    <li>
                                        <input
                                            className="form-check-input"
                                            defaultChecked=""
                                            type="radio"
                                            name="time"
                                            id="time1"
                                        />
                                        <label htmlFor="time1">12:00</label>
                                    </li>
                                    <li>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="time"
                                            id="time2"
                                        />
                                        <label htmlFor="time2">08:00</label>
                                    </li>
                                </ul>
                            </div>
                            <hr className="mb-25" />
                            <h6>Tickets:</h6>
                            <ul className="tickets clearfix">
                                <li>
                                    Adult (18- years) <span className="price">{tour?.price / 2}</span>
                                    <select id="adult-tickets" value={selectedValue} onChange={handleChange}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </li>
                                {/* <li>
                                    Adult (18+ years) <span className="price">{tour?.price}</span>
                                    <select
                                        name="18+"
                                        id="18+"
                                    >
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                    </select>
                                </li> */}
                            </ul>
                            {/* <hr className="mb-25" /> */}
                            {/* <h6>Add Extra:</h6>
                    <ul className="radio-filter pt-5">
                      <li>
                        <input
                          className="form-check-input"
                          defaultChecked=""
                          type="radio"
                          name="AddExtra"
                          id="add-extra1"
                        />
                        <label htmlFor="add-extra1">
                          Add service per booking <span>$50</span>
                        </label>
                      </li>
                      <li>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="AddExtra"
                          id="add-extra2"
                        />
                        <label htmlFor="add-extra2">
                          Add service per personal <span>$24</span>
                        </label>
                      </li>
                    </ul> */}
                            <hr />
                            <h6>
                                Total: <span className="price">{tour?.price}</span>
                            </h6>
                            <button
                                type="submit"
                                className="theme-btn style-two w-100 mt-15 mb-5"
                            >
                                <span data-hover="Book Now">Book Now</span>
                                <i className="fal fa-arrow-right" />
                            </button>
                            <div className="text-center">
                                <Link href="contact">Need some help?</Link>
                            </div>
                        </form>
                    </div>
                    <div
                        className="widget widget-contact"
                        data-aos="fade-up"
                        data-aos-duration={1500}
                        data-aos-offset={50}
                    >
                        <h5 className="widget-title">Need Help?</h5>
                        <ul className="list-style-one">
                            <li>
                                <i className="far fa-envelope" />{" "}
                                <a href="emilto:helpxample@gmail.com">
                                    helpxample@gmail.com
                                </a>
                            </li>
                            <li>
                                <i className="far fa-phone-volume" />{" "}
                                <a href="callto:+000(123)45688">+000 (123) 456 88</a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="widget widget-cta"
                        data-aos="fade-up"
                        data-aos-duration={1500}
                        data-aos-offset={50}
                    >
                        <div className="content text-white">
                            <span className="h6">Explore The World</span>
                            <h3>Best Tourist Place</h3>
                            <Link
                                href="tour-grid"
                                className="theme-btn style-two bgc-secondary"
                            >
                                <span data-hover="Explore Now">Explore Now</span>
                                <i className="fal fa-arrow-right" />
                            </Link>
                        </div>
                        <div className="image">
                            <img src="assets/images/widgets/cta-widget.png" alt="CTA" />
                        </div>
                        <div className="cta-shape">
                            <img
                                src="assets/images/widgets/cta-shape3.png"
                                alt="Shape"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Booking;