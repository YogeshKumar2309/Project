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
    
      <section className="px-8 pt-10  full-full max-w-[1200px] ">
        <Hero />
      </section>
      <section className="px-8 py-14  my-2 ">
        <PopularProducts />
      </section>
      <section className="px-8 py-12 bg-yellow-200 my-2">
        <SuperQuality />
      </section>
      <section className="px-8 py-12 bg-yellow-200 my-2">
        <Services />
      </section>
      <section className="px-8 py-12 bg-yellow-200 my-2">
        <SpecialOffer />
      </section>
      <section className="px-8 py-12 bg-yellow-200 my-2">
        <CustomerReviews />
      </section>
      <section className="px-8 py-12 bg-yellow-200 my-2">
        <Subscribe />
      </section>
      <section className="px-8 py-12 bg-yellow-200 my-2">
        <Footer />
      </section>
    </>
  );
};

export default Home;
