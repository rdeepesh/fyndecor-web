import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string[];
}

const FAQSection: React.FC = () => {
  const [openTab, setOpenTab] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenTab(openTab === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "Why do I need an interior designer?",
      answer: [
        "You can think of an interior designer as a film director. Their job is to monitor every minute detail from start to the final cut. From pre-production to the final edit, their perspective is responsible for shaping the final product. Similarly, interior designers are professionals who are able to gauge your needs and tastes to deliver your dream home. They assist you in getting custom-designed pieces that fit perfectly into your beautiful vision. From raw materials to finished products, they take care of everything!",
        "To chat with the top interior designers in India, you can either visit a Livspace Experience Centre in your city or fill out the lead form. You can also browse through the bedroom, living room and kitchen interior design images on our website for inspiration."
      ]
    },
    {
      question: "How much does it cost?",
      answer: [
        "The cost of hiring an interior designer can vary depending on several factors including the scope of the project, the designer's experience, and your location. It is best to consult with designers to get accurate estimates based on your specific needs and preferences."
      ]
    },
    {
      question: "How long does it take?",
      answer: [
        "The timeline for an interior design project can vary widely depending on the size and complexity of the project. On average, smaller projects can take a few weeks, while larger projects may take several months. It is important to discuss the timeline with your interior designer to set realistic expectations."
      ]
    },
    {
      question: "Can I customize the design?",
      answer: [
        "Absolutely! Interior designers work closely with their clients to ensure that the design reflects their tastes and preferences. You can customize various aspects of the design including color schemes, furniture, and decor to create a space that is uniquely yours."
      ]
    },
    {
      question: "Do you offer after-service?",
      answer: [
        "Many interior designers offer after-service support to address any issues that may arise after the project is completed. This can include touch-ups, repairs, and maintenance to ensure that your space remains beautiful and functional for years to come."
      ]
    }
  ];

  return (
    <section className="faq__section">
      <h2>FAQs About Home Interior Design</h2>
      <p className="mobile_hide">
        Be it end-to-end interiors, renovation or modular solutions, we have it
        all for your home or office. With a wide range of furniture & decor, we
        have your back from start to finish.
      </p>
      <div className="faqs">
        <div className="accordion accordion--radio">
          {faqs.map((faq, index) => (
            <div className="tab" key={index}>
              <div
                className="tab__label"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
                <span><svg
                width="19"
                height="11"
                viewBox="0 0 19 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0644 1.45407L16.6711 0.060791L9.46262 7.26435L2.25412 0.060791L0.86084 1.45407L9.46262 10.0608L18.0644 1.45407Z"
                  fill="black"
                />
              </svg></span>
              </div>
              <div className={`tab__content ${openTab === index ? 'open' : ''}`}>
                {faq.answer.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
