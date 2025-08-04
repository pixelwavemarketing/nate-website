import React, { useState } from 'react'

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of services including photography, event coverage, and custom photo sessions. Each service is tailored to meet your specific needs and vision."
    },
    {
      question: "How do I book a session?",
      answer: "Booking a session is easy! Simply visit our contact page or call us directly. We'll discuss your needs, select a date, and secure your booking with a deposit."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We understand that plans can change. We require 48 hours notice for cancellations. Deposits are non-refundable but can be applied to a future session within 3 months."
    },
    {
      question: "What is your payment policy?",
      answer: "We require a 50% deposit to secure your booking. The remaining balance is due 1 week before the session date."
    },
    {
      question: "What is your payment policy?",
      answer: "We require a 50% deposit to secure your booking. The remaining balance is due 1 week before the session date."
    },
    {
      question: "What is your payment policy?",
      answer: "We require a 50% deposit to secure your booking. The remaining balance is due 1 week before the session date."
    }
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <button 
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ 