"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ExpandableContentSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="prose prose-neutral max-w-none">
          {/* Always visible content */}
          <p className="text-lg leading-relaxed text-center pb-2">
            Explore the exotic depths of Sri Lanka in all its beauty, grandeur,
            mystery and luxury.
          </p>

          <p className="leading-relaxed">
            We know that a holiday should revive your entire self; body, mind and
            spirit alike. Quench your thirst for discovery, adventure,
            inspiration, indulgence and experiences of a lifetime. Begin your
            journey with us and step away from the beaten territories to uncover
            what’s hidden beneath the clichés.
          </p>

          {/* Expandable content */}
          {expanded && (
            <div className="space-y-5 mt-6">
              <p>
                When you decide you need a break and want to go on a holiday to
                some place charming, entertaining, adventurous and relaxing at
                the same time, we would recommend a visit to Sri Lanka. To plan
                that holiday for you, we at Blue Lanka Tours are awaiting eagerly
                to serve you in the best possible manner. Just drop us an email
                and our team of expert travel consultants will assist you in
                coming up with a suitable itinerary for Sri Lanka tours at the
                best possible rates.
              </p>

              <h3 className="text-xl font-semibold">In a Gist</h3>
              <p>
                The main goal of a travel agent is to come up with a vacation
                that suits a traveler’s requirements. As professional travel
                consultants, Blue Lanka Tours builds relationships with our
                clients to understand their interests, lifestyles and dislikes.
                With this information, we come up with a suitable Sri Lanka tour
                package.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Investigate and supply competitive information</li>
                <li>Information of the most current and timely promotions</li>
                <li>Analyze the current promotions</li>
                <li>Clarify the fine print such as terms and conditions</li>
                <li>Make recommendations for travel options</li>
                <li>Simplify the research and transactions</li>
                <li>Enhance the trip with value added benefits</li>
                <li>Exhibit buying power to obtain best possible deals</li>
                <li>Solve problems and satisfy consumer requirements</li>
              </ul>

              <p>
                Make life easier with Blue Lanka Tours. Eliminate the stress and
                confusion of planning a holiday for you and your loved ones. We
                arrange everything from accommodations and transportation to
                tour packages, early booking discounts, special fares and travel
                advisories.
              </p>

              <p>
                With the customer’s best interest in mind at all times, we have
                a strict code of ethics and extensive knowledge in the tourism
                industry. Our committed travel consultants go the extra mile to
                meet your travel needs.
              </p>

              <h3 className="text-xl font-semibold">What We Provide</h3>
              <p>
                We specialize in Sri Lanka tailor-made holidays including tour
                packages, hotel reservations, local transportation, travel
                guides and timetables.
              </p>

              <h3 className="text-xl font-semibold">Why Choose Us?</h3>
              <p>
                Our team is not just a travel agent but your travel consultant.
                We focus on customer-first solutions, luxury transportation,
                safety, destination management services, and unforgettable
                travel experiences across Sri Lanka.
              </p>
            </div>
          )}

          {/* Toggle button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-blue-600 hover:underline"
            >
              {expanded ? (
                <>
                  SHOW LESS <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  SHOW MORE <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
