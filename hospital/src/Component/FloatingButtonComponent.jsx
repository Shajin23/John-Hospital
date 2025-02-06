import React from "react";
import Link from "next/link";


const FloatingButton = () => {
  return (
    <Link href="/book-appointment" legacyBehavior>
      <a className="floatingButton">Book Appointment</a>
    </Link>
  );
};

export default FloatingButton;