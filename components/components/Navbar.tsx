// "use client";

// import { useState, useEffect } from "react";
// import { usePathname, useRouter, useSearchParams } from "next/navigation"; // App Router
// import { Menu, X, Palmtree } from "lucide-react";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Scroll to section if query param exists
//   useEffect(() => {
//     const section = searchParams.get("scrollTo");
//     if (section) {
//       const element = document.getElementById(section);
//       if (element) {
//         setTimeout(() => {
//           element.scrollIntoView({ behavior: "smooth" });
//         }, 100); // small delay to ensure page loaded
//       }
//     }
//   }, [searchParams]);

//   // Scroll to section directly
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsMenuOpen(false);
//   };

//   // Handle click based on item
//   const handleClick = (item: string) => {
//     switch (item) {
//       case "Home":
//         router.push("/"); // Go to home page
//         break;

//       case "About Cyclone Retreart":
//         if (pathname === "/") {
//           scrollToSection("about");
//         } else {
//           router.push("/?scrollTo=about");
//         }
//         break;

//       case "Planned Itineraries":
//         router.push("/itineraries/enchanting-sri-lanka");
//         break;

//       case "House By the Sea":
//         router.push("/propertydetails");
//         break;

//       case "Contact":
//         if (pathname === "/") {
//           scrollToSection("contact");
//         } else {
//           router.push("/?scrollTo=contact");
//         }
//         break;

//       default:
//         break;
//     }
//     setIsMenuOpen(false);
//   };

//   const desktopItems = [
//     "Home",
//     "About Cyclone Retreart",
//     "Planned Itineraries",
//     "House By the Sea",
//     "Contact",
//   ];

//   const mobileItems = desktopItems;

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-500 ${
//         scrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
//       }`}
//     >
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2 animate-fade-in">
//             <Palmtree
//               className={`w-8 h-8 transition-all duration-300 ${
//                 scrolled ? "text-emerald-600" : "text-white"
//               }`}
//             />
//             <span
//               className={`text-2xl font-light tracking-wide ${
//                 scrolled ? "text-gray-900" : "text-white"
//               }`}
//             >
//               Ceylone Retreat
//             </span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden space-x-8 md:flex">
//             {desktopItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => handleClick(item)}
//                 className={`text-sm font-light tracking-wider hover:text-emerald-500 transition-all duration-300 hover:scale-110 ${
//                   scrolled ? "text-gray-700" : "text-white"
//                 }`}
//               >
//                 {item.toUpperCase()}
//               </button>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="transition-transform duration-300 md:hidden hover:scale-110"
//           >
//             {isMenuOpen ? (
//               <X className={`transition-all duration-300 ${scrolled ? "text-gray-900" : "text-white"}`} />
//             ) : (
//               <Menu className={`transition-all duration-300 ${scrolled ? "text-gray-900" : "text-white"}`} />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-500 ${
//           isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="px-4 pt-2 pb-4 space-y-2">
//           {mobileItems.map((item) => (
//             <button
//               key={item}
//               onClick={() => handleClick(item)}
//               className="block w-full py-2 text-left text-gray-700 transition-all duration-300 hover:text-emerald-600 hover:translate-x-2"
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation"; // App Router
import { Menu, X, Palmtree } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section if query param exists
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const section = params.get("scrollTo");
      if (section) {
        const element = document.getElementById(section);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100); // small delay to ensure page loaded
        }
      }
    }
  }, [pathname]); // run again when path changes

  // Scroll to section directly
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Handle click based on item
  const handleClick = (item: string) => {
    switch (item) {
      case "Home":
        router.push("/");
        break;

      case "About Cyclone Retreart":
        if (pathname === "/") {
          scrollToSection("about");
        } else {
          router.push("/?scrollTo=about");
        }
        break;

      case "Planned Itineraries":
        router.push("/itineraries/enchanting-sri-lanka");
        break;

      case "House By the Sea":
        router.push("/propertydetails");
        break;

      case "Contact":
        if (pathname === "/") {
          scrollToSection("contact");
        } else {
          router.push("/?scrollTo=contact");
        }
        break;

      default:
        break;
    }
    setIsMenuOpen(false);
  };

  const desktopItems = [
    "Home",
    "About Cyclone Retreart",
    "Planned Itineraries",
    "House By the Sea",
    "Contact",
  ];

  const mobileItems = desktopItems;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-fade-in">
            <Palmtree
              className={`w-8 h-8 transition-all duration-300 ${
                scrolled ? "text-emerald-600" : "text-white"
              }`}
            />
            <span
              className={`text-2xl font-light tracking-wide ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Ceylone Retreat
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden space-x-8 md:flex">
            {desktopItems.map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className={`text-sm font-light tracking-wider hover:text-emerald-500 transition-all duration-300 hover:scale-110 ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="transition-transform duration-300 md:hidden hover:scale-110"
          >
            {isMenuOpen ? (
              <X className={`transition-all duration-300 ${scrolled ? "text-gray-900" : "text-white"}`} />
            ) : (
              <Menu className={`transition-all duration-300 ${scrolled ? "text-gray-900" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-500 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {mobileItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="block w-full py-2 text-left text-gray-700 transition-all duration-300 hover:text-emerald-600 hover:translate-x-2"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
