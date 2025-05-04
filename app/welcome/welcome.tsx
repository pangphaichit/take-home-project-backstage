import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const mockMagazines = [
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
    color: "bg-pink-500",
    hexColor: "#ff2851",
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

export function Welcome() {
  const [currentColor, setCurrentColor] = useState(mockMagazines[0].hexColor);
  const [activeSection, setActiveSection] = useState<number>(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Calculate the relative scroll position (0 to 1)
    const scrollRatio = scrollPosition / (documentHeight - windowHeight);

    // Determine which sections we're between
    const totalSections = mockMagazines.length;
    const sectionIndex = Math.min(
      Math.floor(scrollRatio * totalSections),
      totalSections - 2
    );

    // Calculate the transition progress between the two sections
    const sectionProgress = scrollRatio * totalSections - sectionIndex;

    // Get the colors to interpolate between
    const currentSectionColor = hexToRgb(mockMagazines[sectionIndex].hexColor);
    const nextSectionColor = hexToRgb(mockMagazines[sectionIndex + 1].hexColor);

    // Interpolate between the colors
    const interpolatedColor = interpolateColor(
      currentSectionColor,
      nextSectionColor,
      sectionProgress
    );

    // Set the new color
    setCurrentColor(rgbToHex(interpolatedColor));

    // Update active section based on scroll position
    // Find which section is most visible in the viewport
    let mostVisibleSectionIndex = 0;
    let maxVisibility = 0;

    sectionRefs.current.forEach((section, index) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;
        const visibleHeight =
          Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const visibilityRatio = Math.max(0, visibleHeight / sectionHeight);

        if (visibilityRatio > maxVisibility) {
          maxVisibility = visibilityRatio;
          mostVisibleSectionIndex = index;
        }
      }
    });

    setActiveSection(mostVisibleSectionIndex);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const hash = window.location.hash.replace("#", "") || "";
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (index: number) => {
    setActiveSection(index);
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className="relative overflow-hidden overflow-x-hidden overflow-y-auto"
      style={{
        backgroundColor: currentColor,
        transition: "background-color 0.5s ease",
      }}
    >
      <header className=" p-4 z-10 md:fixed md:top-4 md:left-4 md:p-0">
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
            <li key={index} className="mb-2">
              <button
                onClick={() => scrollToSection(index)}
                className={`text-sm  ${
                  activeSection === index
                    ? "font-bold"
                    : "opacity-70 cursor-pointer"
                }`}
              >
                Issue #{magazine.issue}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content with Dynamic Background Color */}
      <main className="overflow-y-auto h-full">
        {mockMagazines.map((mag, index) => (
          <section
            key={mag.issue}
            ref={(el: HTMLElement | null) => {
              sectionRefs.current[index] = el ?? null;
            }}
            id={`issue${mag.issue}`}
            className="issue-section h-screen flex items-center justify-center"
            data-id={mag.issue}
            data-color={mag.hexColor}
          >
            <div className="flex flex-col items-center text-center space-y-2">
              <img
                src={mag.coverImage}
                alt={`Issue ${mag.issue}`}
                className="max-h-[80vh] max-w-[80vw] md:max-h-[70vh] md:max-w-[70vw] object-contain"
              />

              <h1 className="text-xl font-semibold">
                Issue #{mag.issue}{" "}
                {mag.isAvailable === "True" ? null : <span>is sold out.</span>}
              </h1>

              {mag.isAvailable === "True" ? (
                <>
                  <a
                    href={mag.link}
                    className={`${
                      mag.hexColor === "#ffffff"
                        ? "text-pink-500"
                        : "text-white"
                    }`}
                  >
                    BUY HERE{" "}
                    {mag.linkUKAndOverseas && (
                      <span className="text-black">(Europe)</span>
                    )}
                  </a>
                  {mag.linkUKAndOverseas && (
                    <a href={mag.linkUKAndOverseas} className="text-white">
                      BUY HERE{" "}
                      <span className="text-black">(UK & Overseas)</span>
                    </a>
                  )}
                  <span className="text-black">
                    or in{" "}
                    <Link to="/stocklist" className="text-white">
                      {" "}
                      selected stores.
                    </Link>
                  </span>
                </>
              ) : (
                <span className="text-black">
                  If you are lucky, you may get the last pieces in{" "}
                  <Link to="/stocklist" className="text-white">
                    {" "}
                    selected stores.
                  </Link>
                </span>
              )}
            </div>
          </section>
        ))}
      </main>

      <footer className="text-center text-xs p-4  md:fixed md:bottom-4 md:left-4 md:p-0 md:w-[20%] md:text-start">
        <p className="text-sm md:text-lg mb-1">
          Backstage Talks is a magazine of casual, but in-depth dialogues on
          design and business. Our decisions shape and influence this complex
          world—to have a chance to make the right ones, we need to talk.
        </p>
        <p className="mb-1">
          © 2025 Published by{" "}
          <a href="https://buromilk.com/" className="underline">
            Büro Milk
          </a>
        </p>
        <nav className="mb-1">
          <Link to="/privacy-policy" className="underline mr-2">
            Privacy Policy
          </Link>
          <Link to="/survey" className="underline">
            Survey
          </Link>
        </nav>
        <a href="mailto:info@backstagetalks.com" className="underline">
          info@backstagetalks.com
        </a>
      </footer>
    </div>
  );
}
