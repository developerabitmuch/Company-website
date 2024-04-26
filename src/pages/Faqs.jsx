import React from "react";

// importing faqs logo-images
import certificate from "../assets/faqs_logo/certificate.png";
import client from "../assets/faqs_logo/client.png";
import data from "../assets/faqs_logo/data.png";
import equipment from "../assets/faqs_logo/equipment.png";
import practices from "../assets/faqs_logo/practices.png";
import resources from "../assets/faqs_logo/resources.png";
import secure from "../assets/faqs_logo/secure.png";
import common from "../assets/faqs_logo/common.png";

const FAQs = () => {
  return (
    <div className=" max-container mx-auto pb-8">
      <h1 className="font-semibold sm:leading-snug font-poppins text-4xl  mb-6 bg-gradient-to-b from-[#c38888] via-[#955197] to-[#061333] bg-clip-text text-transparent">
        Frequently Asked Questions-FAQS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* FAQ items */}
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-md p-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <img src={faq.image} alt={faq.question} className="w-[100px]" />
              <h2 className="text-xl font-semibold">{faq.question}</h2>
            </div>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample FAQs data
const faqs = [
  {
    question: "Answers to Common Questions",
    answer:
      "We provide answers to common questions about our Remote Hands Support services.",
    image: common,
  },
  {
    question: "Security Measures: Data Center Security",
    answer:
      "We implement stringent security measures to ensure the safety and confidentiality of your data center during remote support.",
    image: data,
  },
  {
    question: "Equipment and Tools: Specialized Tools",
    answer:
      "We use specialized equipment and tools to perform remote hands tasks efficiently.",
    image: equipment,
  },
  {
    question: "Procedures and Best Practices: Best Practices",
    answer:
      "We follow industry-leading procedures and best practices when delivering remote hands support.",
    image: practices,
  },
  {
    question: "Data Center Access Control: Secure Access",
    answer:
      "We maintain strict access control to ensure the security of data center facilities during our service.",
    image: secure,
  },
  {
    question: "Certifications and Training: Qualified Technicians",
    answer:
      "Our technicians are highly qualified and regularly undergo training to maintain excellence in service.",
    image: certificate,
  },
  {
    question: "Client Portal: Easy Access",
    answer:
      "Our secure client portal allows you to request and track remote hands support services, view service history, and access documentation.",
    image: client,
  },
  {
    question: "Resource Library: Valuable Resources",
    answer:
      "We offer a library of downloadable resources, including guides and checklists related to remote hands support.",
    image: resources,
  },
];

export default FAQs;
