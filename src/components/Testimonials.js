import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialData = [
  {
    comment:
      "TaxPal is so easy to use I can’t help but wonder if it’s really doingthe things the government expects me to do.",
    name: "Sheryl Berge",
    position: "CEO at Lynch LLC",
  },
  {
    comment:
      "The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
    name: "Leland Kiehn",
    position: "Founder of Kiehn and Sons",
  },
  {
    comment:
      "I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.",
    name: "Peter Renolds",
    position: "Founder of West Inc",
  },
  {
    comment:
      "I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
    name: "Amy Hahn",
    position: "Director at Velocity Industries",
  },
  {
    comment:
      "There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.",
    name: "Erin Powlowski",
    position: "COO at Armstrong Inc",
  },
  {
    comment:
      "This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
    name: "Amy Hahn",
    position: "Director at Velocity Industries",
  },
];

const Testimonials = () => {
  return (
    <div className="h-full flex flex-col items-center py-40">
      <h1 className="text-5xl font-bold">Loved by Writers All Over World</h1>
      <div className="flex flex-wrap mt-20 gap-5 justify-center">
        {TestimonialData.map((item) => (
          <TestimonialCard
            comment={item.comment}
            name={item.name}
            position={item.position}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
