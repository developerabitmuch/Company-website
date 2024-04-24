import React from "react";
import { FaQuestionCircle } from "react-icons/fa"; // Import the question circle icon from react-icons/fa

const FAQs = () => {
  return (
    <div className=" max-container mx-auto py-8">
      <h1 className="font-semibold sm:leading-snug font-poppins text-4xl  mb-6 bg-gradient-to-b from-[#c38888] via-[#955197] to-[#061333] bg-clip-text text-transparent">
        Frequently Asked Questions-FAQS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* FAQ items */}
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <FaQuestionCircle className="text-blue-500 mr-2 w-6 h-6" />
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
  },
  {
    question: "Security Measures: Data Center Security",
    answer:
      "We implement stringent security measures to ensure the safety and confidentiality of your data center during remote support.",
  },
  {
    question: "Equipment and Tools: Specialized Tools",
    answer:
      "We use specialized equipment and tools to perform remote hands tasks efficiently.",
  },
  {
    question: "Procedures and Best Practices: Best Practices",
    answer:
      "We follow industry-leading procedures and best practices when delivering remote hands support.",
  },
  {
    question: "Data Center Access Control: Secure Access",
    answer:
      "We maintain strict access control to ensure the security of data center facilities during our service.",
  },
  {
    question: "Certifications and Training: Qualified Technicians",
    answer:
      "Our technicians are highly qualified and regularly undergo training to maintain excellence in service.",
  },
  {
    question: "Client Portal: Easy Access",
    answer:
      "Our secure client portal allows you to request and track remote hands support services, view service history, and access documentation.",
  },
  {
    question: "Resource Library: Valuable Resources",
    answer:
      "We offer a library of downloadable resources, including guides and checklists related to remote hands support.",
  },
];

export default FAQs;
