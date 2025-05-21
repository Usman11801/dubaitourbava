import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import Gallery from "@/components/slider/Gallery";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";

const page = () => {
  const defaultImages = [
    "assets/images/gallery/gallery1.jpg",
    "assets/images/gallery/gallery2.jpg",
    "assets/images/gallery/gallery3.jpg",
    "assets/images/gallery/gallery4.jpg",
    "assets/images/gallery/gallery5.jpg",
    "assets/images/gallery/gallery6.jpg",
    "assets/images/gallery/gallery7.jpg",
    "assets/images/gallery/gallery8.jpg"
  ];

  return (
    <ReveloLayout>
      <Banner pageTitle={"Gallery Slider"} />
      {/* Gallery Area start */}
      <section className="gallery-slider-area py-100 rel z-1">
        <div
          className="section-title text-center counter-text-wrap mb-50"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <SectionTitle title={"Explore Our Photo Gallery"} />
        </div>
        <Gallery images={defaultImages} />
      </section>
      {/* Gallery Area end */}
      {/* Newsletter Area start */}
      <Subscribe />
      {/* Newsletter Area end */}
    </ReveloLayout>
  );
};

export default page;
