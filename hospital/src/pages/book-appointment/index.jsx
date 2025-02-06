import React from "react";
import HomeBook from "@/Section/HomeSection/HomeBook";
import Head from "next/head";
import { HomeFooter } from "@/Layout/Footer";
import { Header } from "@/Layout/Header";

const BookAppointment = () => {
  return (
    <>
      <Head>
        <title>Book Appointment</title>
        <meta name="description" content="Book an appointment at our hospital" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <HomeBook />
        <HomeFooter />
      </div>
    </>
  );
};

export default BookAppointment;