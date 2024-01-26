import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const QuickLinks = () => {
  return (
    <div className="text-white space-y-6">
      <div>
        <h4 className=" font-bold">Address</h4>
        <address className="flex flex-col space-y-2">
          <p className="md:text-xl">KK St 555</p>
          <p className="md:text-xl mr-4">Gikondo,Kigali</p>
          <p className="md:text-xl">
            Email:{" "}
            <a
              href="mailto:etuzeplatform@gmail.com"
              className="color-1 hover:opacity-60"
            >
etuzeplatform@gmail.com
            </a>{" "}
          </p>
          <p className="md:text-xl">Phone: 250-784-274-110</p>
        </address>
      </div>

      <div className="space-y-3">
        <h3 className=" text-3xl font-bold">Get in touch</h3>

        <div className="flex md:justify-center gap-2 mb-3 text-5xl">
          <a href="#">
            <FaFacebookSquare className=" text-color hover:opacity-60" />
          </a>
          <a href="#">
            <FaTwitterSquare className=" text-color hover:opacity-60" />
          </a>
          <a href="#">
            <FaInstagramSquare className=" text-color hover:opacity-60" />
          </a>
          <a href="#">
            <FaLinkedin className=" text-color hover:opacity-60" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
