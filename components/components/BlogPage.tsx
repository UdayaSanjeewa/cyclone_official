"use client";

import {
  Calendar,
  MapPin,
  Bird,
  Camera,
  Binoculars,
  Trees,
  Mountain,
  Waves,
} from "lucide-react";
import { Card, CardContent } from "@/components/components/card";
import { Badge } from "@/components/components/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

/* Image */
import birdImg1 from "@/public/images/bird image 01.jpg";
import birdImg2 from "@/public/images/bird image 02.jpg";

export default function BirdwatchingPage() {
  const locations = [
    {
      name: "Sinharaja Forest Reserve",
      subtitle: "A UNESCO World Heritage Rainforest",
      description:
        "It is the island's last major stretch of primary tropical rainforest and is home to 95% of Sri Lanka's endemic bird species. Over 150 bird species have been recorded in the forest. Considered the crown jewel of birdwatching in Sri Lanka, no birding trip to the country is complete without venturing into Sinharaja.",
      image:
        birdImg1.src,
      reasons: [
        "A living cathedral of biodiversity and a unique ecosystem with its own microclimate",
        "Home to almost all of Sri Lanka's endemics",
        "Frequent sightings of mixed-species bird flocks – one of the world's best documented",
        "Evergreen canopy offering habitat for rare and iconic birds",
      ],
      species: [
        "Sri Lanka Blue Magpie",
        "Green-billed Coucal",
        "Red-faced Malkoha",
        "Sri Lanka Spurfowl",
        "Ashy-headed Laughingthrush",
        "Sri Lanka Wood Pigeon",
      ],
      icon: Trees,
    },
    {
      name: "Kumana National Park",
      subtitle: "Yala East",
      description:
        "Located on the eastern edge of Yala, Kumana is a dreamscape for avid birders. Its expansive wetlands and mangrove swamps attract massive numbers of migratory waterfowl and wading birds. Bordering the Indian Ocean and Kumbukkan Oya, it has some 20 lagoons and tanks, creating idyllic wetland areas.",
      image:
        birdImg2.src,
      reasons: [
        "Known for its nesting colonies",
        "Remote, serene, and less trafficked than neighbouring Yala",
        "Excellent sightings during the annual breeding season (April–July)",
      ],
      species: [
        "Yellow-billed Stork",
        "Black-capped Kingfisher",
        "Eastern Black-tailed Godwit",
        "Pacific Golden Plover",
        "Rosy Starling",
        "Sri Lanka Junglefowl",
      ],
      icon: Waves,
    },
    {
      name: "Bundala National Park",
      subtitle: "A Ramsar Wetland Wonderland",
      description:
        "It is Sri Lanka's first Ramsar wetland site and a designated UNESCO Man and Biosphere Reserve. It is also an outstanding Important Bird Area in the South Indian and Sri Lankan wetlands. This coastal sanctuary is renowned for its large flocks of winter migrants.",
      image:
        birdImg1.src,
      reasons: [
        "Best spot in Sri Lanka to see Greater Flamingos (seasonal)",
        "Ideal for photographing water birds",
        "Quiet, less crowded, and intimate",
      ],
      species: [
        "Greater Flamingo",
        "Spot-billed Pelican",
        "Black-tailed Godwit",
        "Caspian Tern",
        "Indian Cormorant",
        "Pheasant-tailed Jacana",
      ],
      icon: Waves,
    },
    {
      name: "Horton Plains National Park",
      subtitle: "Misty Highlands",
      description:
        "From the tropical lowlands, journey upward into Sri Lanka's Central Highlands, where cloud forests reign. Horton Plains, situated at an elevation of over 2,000 metres, adds a whole new dimension to birdwatching in Sri Lanka.",
      image:
        birdImg2.src,
      reasons: [
        "Cooler climates attract unique montane species",
        "Open grasslands are ideal for spotting elusive birds",
        "Cloud forest habitats are unlike anywhere else on the island",
      ],
      species: [
        "Sri Lanka Whistling Thrush",
        "Sri Lanka Bush Warbler",
        "Yellow-eared Bulbul",
        "Dull-blue Flycatcher",
        "Pied Bush Chat",
        "Kashmir Flycatcher (seasonal migrant)",
      ],
      icon: Mountain,
    },
    {
      name: "Wilpattu National Park",
      subtitle: "Land of the Willus",
      description:
        "Wilpattu, the island's largest national park, combines a vast jungle cover with over 150 natural lakes called willus, attracting a rich mix of bird species.",
      image:
        birdImg1.src,
      reasons: [
        "Great place for forest raptors",
        "Excellent mix of water birds and arboreal species",
        "Stunning landscapes make birding drives scenic and relaxing",
      ],
      species: [
        "Changeable Hawk-Eagle",
        "Crested Goshawk",
        "Brown Fish Owl",
        "Common Kingfisher",
        "Painted Stork",
        "Indian Peafowl",
      ],
      icon: Trees,
    },
    {
      name: "Anawilundawa Wetlands",
      subtitle: "A Hidden Birding Gem",
      description:
        "Less frequented but incredibly rich in biodiversity, the Anawilundawa Wetland Sanctuary on the northwest coast is Sri Lanka's second Ramsar wetland. It is an internationally important wintering ground for migratory water birds.",
      image:
        birdImg2.src,
      reasons: [
        "Habitats made up of freshwater, saltwater, and terrestrial ecosystems",
        "Easily accessible for short birding excursions",
        "Thrives with both resident and migrant birds",
      ],
      species: [
        "Black Bittern",
        "Purple Swamphen",
        "Whiskered Tern",
        "Indian Darter",
        "White-breasted Waterhen",
        "Spot-billed Duck",
      ],
      icon: Waves,
    },
    {
      name: "Mannar Bird Sanctuary",
      subtitle: "aka Vankalai",
      description:
        "Its mangroves, salt marshes, lagoons, waterholes, and grasslands create a frontier birding destination that has surged in popularity over the past decade.",
      image:
        birdImg1.src,
      reasons: [
        "One of the best waterbird hotspots on the island",
        "Large seasonal flocks of ducks, gulls, and terns",
        "Perfect for spotting rare migrant species",
      ],
      species: [
        "Greater Flamingo",
        "Peregrine falcon",
        "Eurasian Wigeon",
        "Northern Pintail",
        "Comb Duck",
        "Black-tailed godwit",
        "Indian spot-billed duck",
      ],
      icon: Waves,
    },
    {
      name: "Kitulgala Forest Reserve",
      subtitle: "Whitewater Rafting Hotspot",
      description:
        "A lush lowland rainforest renowned for adventure sports, Kitulgala is also one of the top locations for birdwatching in Sri Lanka.",
      image:
        birdImg2.src,
      reasons: [
        "Prime site for the rare Serendib Scops Owl",
        "Ideal for viewing lowland forest birds",
        "Easy access from Colombo",
      ],
      species: [
        "Serendib Scops Owl",
        "Layard's Parakeet",
        "Chestnut-backed Owlet",
        "Sri Lanka Grey Hornbill",
        "Red-Faced Malkoha",
        "Sri Lanka Crested Drongo",
      ],
      icon: Trees,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1600)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700 text-white border-none px-6 py-2">
              <Bird className="w-4 h-4 mr-2" />
              Wildlife & Nature
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              The Best Places for Birdwatching in Sri Lanka
            </h1>
            <div className="flex items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Blue Lanka Tours</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Nov 26, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-slate-700 leading-relaxed mb-8">
            As one of Asia's most rewarding destinations for birdwatching, Sri
            Lanka is home to some extraordinary avian life, which it packs into
            its compact area. <strong>34 endemic species</strong>, over{" "}
            <strong>200 resident species</strong>, nearly{" "}
            <strong>500 recorded species</strong>, and habitats ranging from
            coastal wetlands and lush jungles to misty highlands and expansive
            national parks, twitchers are in for a treat. Whether you are an
            experienced birder chasing lifers or a nature lover eager for
            immersive wildlife encounters, the island offers unforgettable
            feathered-friend experiences at every turn.
          </p>
        </div>

        <Card className="my-16 border-none shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Binoculars className="w-8 h-8 text-emerald-700" />
              <h2 className="text-3xl font-bold text-slate-900">
                What makes Sri Lanka a birder's paradise?
              </h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Sri Lanka's strategic location along major migratory flyways,
              combined with its remarkable variety of ecosystems, makes it a
              paradise for birdwatchers throughout the year. From elusive
              endemics tucked away in dense rainforests to impressive flocks of
              winter migrants gliding over serene lagoons, the island offers a
              constant spectacle of colour, movement, and birdsong.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-xl mb-3 text-emerald-800">
                  Central Asian Flyway
                </h3>
                <p className="text-slate-700 mb-4">
                  Sri Lanka sits along the Central Asian Flyway, attracting tens
                  of thousands of winter migrants each year from Siberia,
                  northern Europe, and Central Asia. From October to March,
                  wetlands and lagoons teem with migrants.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <Bird className="w-4 h-4 mt-1 text-emerald-600 flex-shrink-0" />
                    <span>Waders and shorebirds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Bird className="w-4 h-4 mt-1 text-emerald-600 flex-shrink-0" />
                    <span>Ducks and waterfowl</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Bird className="w-4 h-4 mt-1 text-emerald-600 flex-shrink-0" />
                    <span>Terns and gulls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Bird className="w-4 h-4 mt-1 text-emerald-600 flex-shrink-0" />
                    <span>Raptors escaping harsh winters</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-xl mb-3 text-emerald-800">
                  Year-Round Opportunities
                </h3>
                <p className="text-slate-700 mb-4">
                  While the peak season coincides with the northern winter
                  migration, Sri Lanka offers superb birdwatching opportunities
                  throughout the year.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <Bird className="w-4 h-4 mt-1 text-emerald-600 flex-shrink-0" />
                    <span>
                      Endemics and resident species observable year-round
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Bird className="w-4 h-4 mt-1 text-emerald-600 flex-shrink-0" />
                    <span>
                      Two monsoon patterns ensure ideal birding conditions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Bird className="w-4 h-4 mt-1 text-emerald-600 flex-shrink-0" />
                    <span>High species density in compact areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Camera className="w-4 h-4 mt-1 text-emerald-600 flex-shrink-0" />
                    <span>Excellent conditions for bird photography</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Bird Paradises Within the Paradise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="space-y-16">
          {locations.map((location, index) => {
            const IconComponent = location.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div
                    className={`relative h-80 md:h-auto ${
                      index % 2 === 0 ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent
                    className={`p-8 md:p-10 flex flex-col justify-center ${
                      index % 2 === 0 ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <IconComponent className="w-6 h-6 text-emerald-600" />
                      <Badge
                        variant="secondary"
                        className="text-emerald-700 border-emerald-300"
                      >
                        Location {index + 1}
                      </Badge>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">
                      {location.name}
                    </h3>
                    <p className="text-lg text-emerald-700 font-medium mb-4">
                      {location.subtitle}
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-6">
                      {location.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-lg text-slate-900 mb-3">
                        Reasons to Love {location.name.split(" ")[0]}
                      </h4>
                      <ul className="space-y-2">
                        {location.reasons.map((reason, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-slate-700"
                          >
                            <span className="text-emerald-600 mt-1">✓</span>
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg text-slate-900 mb-3">
                        Species Highlights
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {location.species.map((species, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                          >
                            {species}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="mt-20 border-none shadow-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white overflow-hidden">
          <CardContent className="p-12 md:p-16 relative">
            <div className="absolute top-0 right-0 opacity-10">
              <Bird className="w-64 h-64" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl font-bold mb-6">
                Sri Lanka Birding Tours with Blue Lanka Tours
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-emerald-50">
                With its compact size and incredible range of ecosystems, Sri
                Lanka is an unrivalled destination for bird lovers. From the
                shadowy depths of Sinharaja to the pink-dusted lagoons of
                Mannar, each site tells a different story of the island's avian
                wonders.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-emerald-50">
                Whether you are an avid birder or a nature lover, Blue Lanka
                Tours offers extraordinary opportunities for birdwatching, be it
                on safari or nature tours. As a responsible tour company, our
                eco-conscious approach to natural environments ensures our
                birding tours are low-impact and do not disrupt wildlife. We
                choose the less-visited, unique, and biodiversity-rich
                ecosystems that ease pressure off busy parks and offer
                travellers more immersive and intimate experiences.
              </p>
              <Button
                size="lg"
                className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold text-lg px-8 py-6"
              >
                Design Your Birdwatching Tour Today
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-16 text-center text-slate-600">
          <p className="text-sm">
            © 2025 Cyclone Retreat. Crafted for authenticity and meaningful
            encounters.
          </p>
        </div>
      </div>
    </div>
  );
}
