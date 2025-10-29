import React from "react";
import { Quote } from "lucide-react";
import bgimg from "../assets/images/experience-background.webp";


const reviews = [
  {
    name: "Akila Sharma",
    text: `I had a wonderful experience with Vibez Estates! The entire team is highly professional, transparent, and supportive throughout the process. From site visits to finalising the property, everything was well-organised and smooth. Special thanks to Prema and Krishna for their patience in answering all my questions and making the entire journey stress-free. The quality of the properties and the scenic locations are truly impressive. Highly recommend Vibez Estates to anyone looking for a beautiful property and a hassle-free buying experience!`,
  },
  {
    name: "Jagadeesh Nadar",
    text: `I and my wife visited Dharmasthala for Bilvadhara, and I loved the land! The main reason that made me buy the property was the Netravathi river just at the backdrop of the project — I instantly knew it was the right choice. Thanks to the Vibez Legal Team and Director Miss Shubha for the proper guidance throughout the project till registration.`,
  },
];

export default function ClientReviews() {
  return (
    <section className="py-16" id="reviews" style={{
                backgroundImage: `url(${bgimg})`,backgroundSize: "cover",
            backgroundPosition: "center"}} >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl tracking-tighter text-brown font-primary pb-4 border-b-2 border-brown-light inline-block">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className=" shadow-md rounded-2xl p-8 text-left relative overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-6 text-green-400 opacity-20 w-12 h-12" />
              <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                {review.text}
              </p>
              <h4 className="text-lg font-semibold text-green-700">
                {review.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
