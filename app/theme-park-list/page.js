"use client";

import React, { useState, useEffect } from "react";
import Banner from "@/components/Banner";
import Subscribe from "@/components/Subscribe";
import TourSidebar from "@/components/TourSidebar";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
import toursData from "../../app/theme-park-list/toursData.json";

const ITEMS_PER_PAGE = 6;

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const totalPages = Math.ceil(toursData.tours.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTours = toursData.tours.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <ReveloLayout>
      <Banner pageTitle={"Theme Park"} pageName={"Theme Park"} search />
      <section className="tour-list-page py-100 rel z-1">
        <div className="container">
          <div className="row">
            {!isMobile && (
              <div className="col-lg-3">
                <TourSidebar />
              </div>
            )}
            <div className={`${isMobile ? 'col-12' : 'col-lg-9'}`}>
              {currentTours.map((tour) => (
                <div
                  key={tour.id}
                  className="destination-item style-three bgc-lighter"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    {tour.badge && <span className="badge">{tour.badge}</span>}
                    <a href="#" className="heart">
                      <i className="fas fa-heart" />
                    </a>
                    <img src={tour.image} alt={tour.title} />
                  </div>
                  <div className="content">
                    <div className="destination-header">
                      <span className="location">
                        <i className="fal fa-map-marker-alt" /> {tour.location}
                      </span>
                      <div className="ratting">
                        {Array.from({ length: tour.rating }, (_, i) => (
                          <i key={i} className="fas fa-star" />
                        ))}
                      </div>
                    </div>
                    <h5>
                      <Link href={{
                        pathname: '/theme-park-details',
                        query: { id: tour?.id },
                      }}>
                        {tour.title}</Link>
                    </h5>
                    <p>{tour.description}</p>
                    <ul className="blog-meta">
                      {/* <li>
                        <i className="far fa-clock" /> {tour.duration}
                      </li> */}
                      {/* <li>
                        <i className="far fa-user" /> {tour.guests} guest
                      </li> */}
                    </ul>
                    <div className="destination-footer">
                      <span className="price">
                        <span>AED {tour.price}</span>/person
                      </span>
                      <Link
                        href={{
                          pathname: '/theme-park-details',
                          query: { id: tour.id },
                        }}
                        className="theme-btn style-two style-three"
                      >
                        <span data-hover="Book Now">Book Now</span>
                        <i className="fal fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              <ul
                className="pagination pt-15 flex-wrap "
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                  <span
                    className="page-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    <i className="far fa-chevron-left" />
                  </span>
                </li>
                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i}
                    className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                  >
                    <span className="page-link" onClick={() => handlePageChange(i + 1)}>
                      {i + 1}
                    </span>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                  <span
                    className="page-link"
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    <i className="far fa-chevron-right" />
                  </span>
                </li>
              </ul>
            </div>
            {isMobile && (
              <div className="col-12 mt-4">
                <TourSidebar />
              </div>
            )}
          </div>
        </div>
      </section>
      <style jsx>{`
        @media (max-width: 768px) {
          .destination-item {
            margin-bottom: 20px;
          }
          .destination-item .image {
            height: 200px;
            overflow: hidden;
          }
          .destination-item .image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .destination-item .content {
            padding: 15px;
          }
          .destination-item .content h5 {
            font-size: 18px;
            margin-bottom: 10px;
          }
          .destination-item .content p {
            font-size: 14px;
            margin-bottom: 10px;
          }
          .destination-footer {
            flex-direction: column;
            align-items: flex-start;
          }
          .destination-footer .price {
            margin-bottom: 10px;
          }
          .destination-footer .theme-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </ReveloLayout>
  );
};

export default Page;
