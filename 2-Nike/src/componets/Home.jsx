import React from "react";
import {
  Hero,
  PopularProducts,
  Services,
  CustomerReviews,
  Footer,
  SpecialOffer,
  SuperQuality,
  Subscribe,
} from "../sections-home/index.js";

const Home = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto ms-2 mr-2">
      <section className=" pt-10    ">
        <Hero />
      </section>
      <section className=" py-14  my-2 ">
        <PopularProducts />
      </section>
      <section className=" py-12 my-2 ">
        <SuperQuality />
      </section>
      <section className=" py-12 bg-yellow-200 my-2">
        <Services />
      </section>
      <section className=" py-12 bg-yellow-200 my-2">
        <SpecialOffer />
      </section>
      <section className=" py-12 bg-yellow-200 my-2">
        <CustomerReviews />
      </section>
      <section className=" py-12 bg-yellow-200 my-2">
        <Subscribe />
      </section>
      <section className=" py-12 bg-yellow-200 my-2">
        <Footer />
      </section>
      </div>
    </>
  );
};

export default Home;
