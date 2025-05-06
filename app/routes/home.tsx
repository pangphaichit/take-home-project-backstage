import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

interface Magazine {
  issue: string;
  color: string;
  hexColor: string;
  link: string;
  linkUKAndOverseas?: string;
  isAvailable: string;
  coverImage: string;
}

const mockMagazines: Magazine[] = [
  {
    issue: "8",
    color: "bg-amber-100",
    hexColor: "#fef3c7",
    link: "https://brot.sk/products/backstage-talks-8",
    isAvailable: "True",
    coverImage:
      "https://boeraqxraijbxhlrtdnn.supabase.co/storage/v1/object/public/image//backstagetalks_cover_issue_8.png",
  },
  {
    issue: "7",
    color: "bg-red-400",
    hexColor: "#f87171",
    link: "https://brot.sk/products/backstage-talks-7",
    linkUKAndOverseas:
      "https://www.newsstand.co.uk/196-business-and-finance-magazines/33211-subscribe-to-backstage-talks-magazine-subscription.aspx",
    isAvailable: "True",
    coverImage:
      "https://boeraqxraijbxhlrtdnn.supabase.co/storage/v1/object/public/image//backstagetalks_cover_issue_7.png",
  },
  {
    issue: "6",
    color: "bg-white",
    hexColor: "#ffffff",
    link: "https://brot.sk/products/backstage-talks-6",
    isAvailable: "True",
    coverImage:
      "https://boeraqxraijbxhlrtdnn.supabase.co/storage/v1/object/public/image//backstagetalks_cover_issue_6.png",
  },
  {
    issue: "5",
    color: "bg-teal-400",
    hexColor: "#2dd4bf",
    link: "https://brot.sk/products/backstage-talks-5",
    isAvailable: "True",
    coverImage:
      "https://boeraqxraijbxhlrtdnn.supabase.co/storage/v1/object/public/image//backstagetalks_cover_issue_5.png",
  },
  {
    issue: "4",
    color: "bg-orange-500",
    hexColor: "#f97316",
    link: "https://brot.sk/products/backstage-talks-4",
    isAvailable: "False",
    coverImage:
      "https://boeraqxraijbxhlrtdnn.supabase.co/storage/v1/object/public/image//backstagetalks_cover_issue_4.png",
  },
  {
    issue: "3",
    color: "bg-yellow-400",
    hexColor: "#facc15",
    link: "https://brot.sk/products/backstage-talks-3",
    isAvailable: "False",
    coverImage:
      "https://boeraqxraijbxhlrtdnn.supabase.co/storage/v1/object/public/image//backstagetalks_cover_issue_3.png",
  },
  {
    issue: "2",
    color: "bg-blue-800",
    hexColor: "#1e40af",
    link: "https://brot.sk/products/backstage-talks-2",
    isAvailable: "False",
    coverImage:
      "https://boeraqxraijbxhlrtdnn.supabase.co/storage/v1/object/public/image//backstagetalks_cover2017.png",
  },
  {
    issue: "1",
    color: "bg-red-600",
    hexColor: "#dc2626",
    link: "https://brot.sk/products/backstage-talks-1",
    isAvailable: "False",
    coverImage:
      "https://boeraqxraijbxhlrtdnn.supabase.co/storage/v1/object/public/image//backstagetalks_cover2016_n.png",
  },
];

// Helper function to interpolate between two colors
function interpolateColor(
  color1: number[],
  color2: number[],
  factor: number
): number[] {
  if (factor > 1) factor = 1;
  if (factor < 0) factor = 0;

  const result = color1.slice();
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - result[i]));
  }
  return result;
}

// Convert hex to RGB array
function hexToRgb(hex: string): number[] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

// Convert RGB array to hex
function rgbToHex(rgb: number[]): string {
  return (
    "#" +
    rgb
      .map((x: number) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

export default function Home() {
  const [currentColor, setCurrentColor] = useState(mockMagazines[0].hexColor);
  const [activeSection, setActiveSection] = useState<number>(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef<boolean>(false);
  const lastScrollTime = useRef<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Detect if on mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Check on resize
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleScroll = () => {
    // Update last scroll time to track when scrolling occurs
    lastScrollTime.current = Date.now();

    // Don't process during active scrolling
    if (isScrolling.current) return;

    // Find which section is most visible in the viewport
    let closestSectionIndex = 0;
    let minDistance = Infinity;

    sectionRefs.current.forEach((section, index) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        // Calculate distance from the section's top to the viewport top
        const distance = Math.abs(sectionTop);

        if (distance < minDistance) {
          minDistance = distance;
          closestSectionIndex = index;
        }
      }
    });

    // Update current color and active section
    setCurrentColor(mockMagazines[closestSectionIndex].hexColor);
    setActiveSection(closestSectionIndex);

    // Skip auto-snapping on mobile devices
    if (isMobile) return;

    // On desktop, wait before snapping to prevent continuous snapping during scroll
    if (!isScrolling.current) {
      isScrolling.current = true;
      setTimeout(() => {
        // Check if user is still scrolling before triggering snap
        if (Date.now() - lastScrollTime.current > 150) {
          scrollToSection(closestSectionIndex, true);
        }
        isScrolling.current = false;
      }, 250);
    }
  };

  useEffect(() => {
    // Set up intersection observer to detect which section is most visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActiveSection(index);
              setCurrentColor(mockMagazines[index].hexColor);
            }
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "0px",
      }
    );

    // Observe all sections
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const scrollToSection = (index: number, useAnimation: boolean = true) => {
    setActiveSection(index);
    if (sectionRefs.current[index]) {
      // Scroll to section with or without smooth behavior based on parameter
      sectionRefs.current[index]?.scrollIntoView({
        behavior: useAnimation ? "smooth" : "auto",
        block: "start",
      });
      setCurrentColor(mockMagazines[index].hexColor);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden overflow-x-hidden overflow-y-auto font-sans  md:snap-y md:snap-mandatory md:h-screen"
      style={{
        backgroundColor: currentColor,
        transition: "background-color 0.5s ease",
        scrollSnapType: isMobile ? "none" : "y mandatory",
        scrollBehavior: isMobile ? "auto" : "smooth",
      }}
    >
      <header className=" pt-6 pl-4 z-10 md:fixed md:top-4 md:left-4 md:p-0">
        <img
          src="/logo.png"
          alt="Backstage Talk Logo"
          className="w-[160px] h-[17.88px] md:w-[260px] md:h-[29.5px] bg-transparent"
        />
      </header>

      {/* Fixed Navigation on Right Side */}
      <nav className="hidden md:block fixed right-8 bottom-4 z-10">
        <ul className="text-right">
          {mockMagazines.map((magazine, index) => (
            <li key={index} className="mb-1">
              <button
                onClick={() => scrollToSection(index)}
                className={` ${
                  activeSection === index
                    ? "font-bold"
                    : "opacity-70 cursor-pointer hover:underline"
                }`}
              >
                Issue #{magazine.issue}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content with Dynamic Background Color */}
      <main className=" h-full">
        {mockMagazines.map((mag, index) => (
          <section
            key={mag.issue}
            ref={(el: HTMLElement | null) => {
              sectionRefs.current[index] = el ?? null;
            }}
            id={`issue${mag.issue}`}
            className="md:snap-start issue-section h-screen flex mt-9 md:mt-0 md:items-center justify-center"
            style={{
              scrollSnapAlign: isMobile ? "none" : "start",
              scrollSnapStop: isMobile ? "normal" : "always",
            }}
            data-id={mag.issue}
            data-color={mag.hexColor}
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={mag.coverImage}
                alt={`Issue ${mag.issue}`}
                className="max-h-[80vh] max-w-[80vw] md:max-h-[70vh] md:max-w-[70vw]  object-contain"
              />

              <h1 className="text-lg font-bold">
                Issue #{mag.issue}{" "}
                {mag.isAvailable === "True" ? null : <span>is sold out.</span>}
              </h1>

              {mag.isAvailable === "True" ? (
                <>
                  <div className="mt-4">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={mag.link}
                      className={` mt-4 font-bold hover:underline ${
                        mag.hexColor === "#ffffff"
                          ? "text-pink-500"
                          : "text-white"
                      }`}
                    >
                      BUY HERE
                    </a>
                    {mag.linkUKAndOverseas && (
                      <span className="text-black font-bold"> (Europe)</span>
                    )}
                  </div>
                  {mag.linkUKAndOverseas && (
                    <div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={mag.linkUKAndOverseas}
                        className="text-white font-bold hover:underline"
                      >
                        BUY HERE
                      </a>
                      <span className="text-black font-bold">
                        {" "}
                        (UK & Overseas)
                      </span>
                    </div>
                  )}
                  <span className="text-black font-semibold text-[0.95rem] mt-4">
                    or in{" "}
                    <Link
                      to="/stocklist"
                      className={`font-bold hover:underline ${
                        mag.hexColor === "#ffffff"
                          ? "text-pink-500"
                          : "text-white"
                      }`}
                    >
                      selected stores<span className="text-black">.</span>
                    </Link>
                  </span>
                </>
              ) : (
                <span className="text-black text-[0.95rem] mt-4 font-semibold p-4">
                  If you are lucky, you may get the last pieces in{" "}
                  <Link to="/stocklist" className="text-white hover:underline">
                    selected stores
                  </Link>
                  <span className="text-black">.</span>
                </span>
              )}
            </div>
          </section>
        ))}
      </main>
      <a
        href="mailto:info@backstagetalks.com"
        className="hover:underline mb-10 text-lg font-semibold md:fixed md:right-8 md:top-4 hidden md:block"
      >
        info@backstagetalks.com
      </a>

      <footer className="flex flex-col gap-10 text-center text-xs p-4  md:fixed md:bottom-0 md:left-4 md:p-0 md:w-[20%] md:text-start">
        <div>
          <p className="text-lg font-semibold md:text-lg mb-1">
            Backstage Talks is a magazine of casual, but in-depth dialogues on
            design and business. Our decisions shape and influence this complex
            world—to have a chance to make the right ones, we need to talk.
          </p>
          <p className="mb-1">
            © 2025{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://buromilk.com/"
              className="underline hover:no-underline"
            >
              Published by Büro Milk
            </a>
          </p>
        </div>
        <nav className="flex flex-col text-lg font-semibold">
          <Link
            to="/privacy-policy"
            className="underline mr-2 hover:no-underline"
          >
            Privacy Policy
          </Link>
          <Link to="/survey" className="underline md:mb-4 hover:no-underline">
            Survey
          </Link>
        </nav>
        <a
          href="mailto:info@backstagetalks.com"
          className="hover:underline mb-10 text-lg font-semibold block md:hidden"
        >
          info@backstagetalks.com
        </a>
      </footer>
    </div>
  );
}
