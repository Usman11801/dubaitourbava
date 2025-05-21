"use client";
import RaveloAccordion from "@/components/RaveloAccordion";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import toursData from "../tour-list/toursData.json";
import Booking from "@/components/Booking";
import Gallery from "@/components/slider/Gallery";

const page = () => {
  const [id, setId] = useState(null);
  const [tour, setTour] = useState(null);
  
  const scrollToBooking = () => {
    const bookingSection = document.querySelector('.widget-booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryString = window.location.search;
      const params = new URLSearchParams(queryString);
      const id = params.get("id");
      if (id) {
        const numericId = parseInt(id, 10);
        setId(numericId);

        const foundTour = toursData.tours.find((tour) => tour.id === numericId);
        setTour(foundTour);
        console.log("Tour:", foundTour);
      }
    }
  }, []);

  const [active, setActive] = useState("collapse0");

  const faqItem = [
    {
      id: 1,
      title: "1. Do I get picked from hotel when I book a Desert Safari Tour?",
      answer: "Yes we shall pick you from your hotel / residence for Dubai Desert Safari. And there is no additional charges for Pick it's included in the Price ."
    },
    {
      id: 2,
      title: "2. How long is the Desert Safari?",
      answer: "Dubai Desert Safari is 6 hours tour in Evening. 4 Hours tour is you go for Morning Desert Safari. And if you go for Over Night Desert Safari it will be around 16 Hours Tour."
    },
    {
      id: 3,
      title: "3. How long is Quad Biking?",
      answer: "Quad biking will be for 20 to 30 minutes."
    },
    {
      id: 4,
      title: "4. Can Kids Drive Quad Bikes?",
      answer: "Yes we have special quad bikes which are designed for the young kids."
    },
    // {
    //   id: 5,
    //   title: "5. Is there Veg Food Also?",
    //   answer: "Yes, vegetarian food options are available as part of the safari."
    // },
    {
      id: 6,
      title: "6. What is the maximum number of people who can go to Desert Safari?",
      answer: "There is no limit to that as we have many cars and can arrange many more if needed. Also no matter how many people are there in the safari only 6 to 7 people get in to a 4x4 ( including the driver ) so the size of the group does not effect the quality of the tour."
    },
  ];
  const [active2, setActive2] = useState("collapse0");
  return (
    <ReveloLayout>
      <section className="page-banner-two rel z-1">
        <div className="container-fluid">
          <hr className="mt-0" />
          <div className="container">
            <div className="banner-inner pt-15 pb-25">
              <h2
                className="page-title mb-10"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                {tour?.title}
              </h2>
              <nav aria-label="breadcrumb">
                <ol
                  className="breadcrumb justify-content-center mb-20"
                  data-aos="fade-right"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Tour Details</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner End */}
      {/* Tour Gallery start */}
      <div className="tour-gallery">
        <div className="container-fluid">
          {tour && (
            <Gallery images={[
              tour.image1,
              tour.image2,
              tour.image3,
              tour.image4,
              tour.image5,
            ].filter(image => image)} />
          )}
        </div>
      </div>
      {/* Tour Gallery End */}
      {/* Tour Header Area start */}
      <section className="tour-header-area pt-70 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-7">
              <div
                className="tour-header-content mb-15"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="d-flex justify-content-between align-items-center mb-10">
                  <span className="location d-inline-block">
                    <i className="fal fa-map-marker-alt" /> {tour?.location}
                  </span>
                  <button 
                    onClick={scrollToBooking}
                    className="theme-btn style-two bgc-secondary"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    <span data-hover="Book Now">Book Now</span>
                    <i className="fal fa-arrow-right" />
                  </button>
                </div>
                <div className="section-title pb-5">
                  <h2>{tour?.title2}</h2>
                </div>
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-5 text-lg-end"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              {/* <div className="tour-header-social mb-10">
                <a href="#">
                  <i className="far fa-share-alt" />
                  Share tours
                </a>
                <a href="#">
                  <i className="fas fa-heart bgc-secondary" />
                  Wish list
                </a>
              </div> */}
            </div>
          </div>
          <hr className="mt-50 mb-70" />
        </div>
      </section>
      {/* Tour Header Area end */}
      {/* Tour Details Area start */}
      <section className="tour-details-page pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tour-details-content">
                <h3>Explore Tours</h3>
                <p>
                  {tour?.description2}
                </p>
                <div className="row pb-55">
                  <div className="">
                    <div className="tour-include-exclude mt-30">
                      <h5>Package Inclusions</h5>
                      <ul className="list-style-one check mt-25">
                        {tour?.inclusions && Object.entries(tour.inclusions).map(([key, value], index) => (
                          <li key={index}>
                            <i className="far fa-check" />
                            {value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row pb-55">
                  <div className="">
                    <div className="tour-include-exclude mt-30">
                      <h5>Additional Information</h5>
                      <ul className="list-style-one check mt-25">
                        {tour?.additional_info && Object.entries(tour.additional_info).map(([key, value], index) => {
                          if (Array.isArray(value)) {
                            return value.map((item, i) => (
                              <li key={`${index}-${i}`}>
                                <i className="far fa-check" />
                                {item}
                              </li>
                            ));
                          }
                          return (
                            <li key={index}>
                              <i className="far fa-check" />
                              {value}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h3>Activities</h3>
              <div className="tour-activities mt-30 mb-45">
                <div className="tour-activity-item">
                  <i className="flaticon-hiking" />
                  <b>Hiking</b>
                </div>
                <div className="tour-activity-item">
                  <i className="flaticon-fishing" />
                  <b>Fishing</b>
                </div>
                <div className="tour-activity-item">
                  <i className="flaticon-man" />
                  <b>Kayak shooting</b>
                </div>
                <div className="tour-activity-item">
                  <i className="flaticon-kayak-1" />
                  <b>Kayak</b>
                </div>
                <div className="tour-activity-item">
                  <i className="flaticon-bonfire" />
                  <b>Campfire</b>
                </div>
                <div className="tour-activity-item">
                  <i className="flaticon-flashlight" />
                  <b>Night Exploring</b>
                </div>
                <div className="tour-activity-item">
                  <i className="flaticon-cycling" />
                  <b>Biking</b>
                </div>
                <div className="tour-activity-item">
                  <i className="flaticon-meditation" />
                  <b>Yoga</b>
                </div>
              </div> */}
              <h3>Itinerary</h3>
              <Accordion
                className="accordion-two mt-25 mb-60"
                defaultActiveKey={active}
              >
                {faqItem.map((data, i) => (
                  <RaveloAccordion
                    title={data.title}
                    answer={data.answer}
                    key={data.id}
                    event={`collapse${i}`}
                    onClick={() =>
                      setActive(active == `collapse${i}` ? "" : `collapse${i}`)
                    }
                    active={active}
                  />
                ))}
              </Accordion>
              {/* <h3>Frequently Asked Questions</h3>
              <Accordion className="accordion-one" defaultActiveKey={active}>
  {faqItem.map((data, i) => (
    <RaveloAccordion
      title={data.title}
      key={data.id}
      event={`collapse${i}`}
      onClick={() =>
        setActive(active == `collapse${i}` ? "" : `collapse${i}`)
      }
      active={active}
      answer={data.answer}
    />
  ))}
</Accordion> */}
              <h3>Maps</h3>
              <div className="tour-map mt-30 mb-50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d28917.758162586367!2d55.270783!3d25.204849!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706508986625!5m2!1sen!2sbd"
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <h3>Clients Reviews</h3>
              <div className="clients-reviews bgc-black mt-30 mb-60">
                <div className="left">
                  <b>4.8</b>
                  <span>(586 reviews)</span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <div className="right">
                  <div className="ratting-item">
                    <span className="title">Services</span>
                    <span className="line">
                      <span style={{ width: "80%" }} />
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="ratting-item">
                    <span className="title">Guides</span>
                    <span className="line">
                      <span style={{ width: "70%" }} />
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="ratting-item">
                    <span className="title">Price</span>
                    <span className="line">
                      <span style={{ width: "80%" }} />
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="ratting-item">
                    <span className="title">Safety</span>
                    <span className="line">
                      <span style={{ width: "80%" }} />
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="ratting-item">
                    <span className="title">Foods</span>
                    <span className="line">
                      <span style={{ width: "80%" }} />
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="ratting-item">
                    <span className="title">Hotels</span>
                    <span className="line">
                      <span style={{ width: "80%" }} />
                    </span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </div>
              </div>
              <h3>Clients Comments</h3>
              <div className="comments mt-30 mb-60">
                <div
                  className="comment-body"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/comment-author1.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h6>Lonnie B. Horwitz</h6>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <span className="time">
                      Venice, Rome and Milan – 9 Days 8 Nights
                    </span>
                    <p>
                      Tours and travels play a crucial role in enriching lives
                      by offering unique experiences, cultural exchanges, and
                      the joy of exploration.
                    </p>
                    <a className="read-more" href="#">
                      Reply <i className="far fa-angle-right" />
                    </a>
                  </div>
                </div>
                <div
                  className="comment-body comment-child"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/comment-author2.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h6>William G. Edwards</h6>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <span className="time">
                      Venice, Rome and Milan – 9 Days 8 Nights
                    </span>
                    <p>
                      Tours and travels play a crucial role in enriching lives
                      by offering unique experiences, cultural exchanges, and
                      the joy of exploration.
                    </p>
                    <a className="read-more" href="#">
                      Reply <i className="far fa-angle-right" />
                    </a>
                  </div>
                </div>
                <div
                  className="comment-body"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/comment-author3.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h6>Jaime B. Wilson</h6>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                    <span className="time">
                      Venice, Rome and Milan – 9 Days 8 Nights
                    </span>
                    <p>
                      Tours and travels play a crucial role in enriching lives
                      by offering unique experiences, cultural exchanges, and
                      the joy of exploration.
                    </p>
                    <a className="read-more" href="#">
                      Reply <i className="far fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
              <h3>Add Reviews</h3>
              <form
                id="comment-form"
                className="comment-form bgc-lighter z-1 rel mt-30"
                name="review-form"
                action="#"
                method="post"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="comment-review-wrap">
                  <div className="comment-ratting-item">
                    <span className="title">Services</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="comment-ratting-item">
                    <span className="title">Guides</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="comment-ratting-item">
                    <span className="title">Price</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="comment-ratting-item">
                    <span className="title">Safety</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="comment-ratting-item">
                    <span className="title">Foods</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                  <div className="comment-ratting-item">
                    <span className="title">Hotels</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </div>
                <hr className="mt-30 mb-40" />
                <h5>Leave Feedback</h5>
                <div className="row gap-20 mt-20">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="full-name">Name</label>
                      <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        className="form-control"
                        defaultValue=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        defaultValue=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="email-address">Email</label>
                      <input
                        type="email"
                        id="email-address"
                        name="email"
                        className="form-control"
                        defaultValue=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">Comments</label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={5}
                        required=""
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button
                        type="submit"
                        className="theme-btn bgc-secondary style-two"
                      >
                        <span data-hover="Submit reviews">Submit reviews</span>
                        <i className="fal fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

<Booking tour={tour}/>
           
          </div>
          
        </div>
      </section>
      {/* Tour Details Area end */}
      {/* Newsletter Area start */}
      {/* <Subscribe /> */}
      {/* Newsletter Area end */}
    </ReveloLayout>
  );
};
export default page;
