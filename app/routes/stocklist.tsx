import { Link } from "react-router-dom";

export default function Stocklist() {
  return (
    <div>
      <header className="p-4 z-10">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Backstage Talk Logo"
            className="w-[160px] h-[17.88px] md:w-[260px] md:h-[29.5px] bg-transparent"
          />
        </Link>
      </header>
      <div className="px-7 pb-6 pt-4 md:pl-[180px]">
        <h1 className="font-bold text-[1.35rem] md:ml-4"> Stocklist</h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-[300px] md:p-4">
            <ul>
              <li className="mt-9">
                <span className="font-semibold text-base ">Austria</span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold mt-4">Vienna</span>
                  <a
                    href="https://softcover.at/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    Softcover
                  </a>
                  <span className="text-sm">Praterstraße 70</span>
                </div>
              </li>
              <li className="mt-12">
                <span className="font-semibold text-base mt-4">
                  Czech Republic
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold mt-4">Prague</span>
                  <a
                    href="https://booktherapy.cz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    Book Therapy
                  </a>
                  <span className="text-sm">Římská 35</span>
                  <a
                    href="https://www.pagefive.com/53-e-shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900 mt-4"
                  >
                    Page Five
                  </a>
                  <span className="text-sm">Veverkova 5</span>
                </div>
              </li>
              <li className="mt-12">
                <span className="font-semibold text-base mt-4">Germany</span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold mt-4">Berlin</span>
                  <a
                    href="https://doyoureadme.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    do you read me?
                  </a>
                  <span className="text-sm">Auguststraße 28</span>
                  <span className="text-sm font-semibold mt-4">Hamburg</span>
                  <a
                    href="https://coffeetablemags.myshopify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    Coffee Table Mags @ Public Coffee Roasters
                  </a>
                  <span className="text-sm">Wexstraße 28</span>
                  <span className="text-sm font-semibold mt-4">Leipzig</span>
                  <a
                    href="http://www.mzin.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    Mzin
                  </a>
                  <span className="text-sm">Kolonnadenstraße 20</span>
                  <span className="text-sm font-semibold mt-4">Cologne</span>
                  <a
                    href="https://funk-magazine.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    funk magazine
                  </a>
                  <span className="text-sm">Krefelder Straße 7</span>
                </div>
              </li>
              <li className="mt-12">
                <span className="font-semibold text-base mt-4">Hong Kong</span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold mt-4">Hong Kong</span>
                  <a
                    href="https://kubrick.com.hk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    kubrick
                  </a>
                  <span className="text-sm">
                    shop h2, 3 public square street
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-[300px] md:p-4">
            <ul>
              <li className="mt-12">
                <span className="font-semibold text-base mt-4">Italy</span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold mt-4">Milan</span>
                  <a
                    href="https://belli.gallery/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    Belli
                  </a>
                  <span className="text-sm">Viale Cassala 9</span>
                  <span className="text-sm">(back issues only)</span>
                </div>
              </li>
              <li className="mt-12">
                <span className="font-semibold text-base mt-4">Japan</span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold mt-4">Tokyo</span>
                  <a
                    href="http://magazineisntdead.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    Magazine isn't dead
                  </a>
                  <span className="text-sm">5-18-4 Komazawa Setagaya-ku</span>
                </div>
              </li>
              <li className="mt-12">
                <span className="font-semibold text-base mt-4">
                  The Netherlands
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold mt-4">Amsterdam</span>
                  <a
                    href="https://athenaeumscheltema.nl/athenaeum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    Athenaeum Boekhandel
                  </a>
                  <span className="text-sm">Spui 14-16 1012 XA</span>
                </div>
              </li>
              <li className="mt-12">
                <span className="font-semibold text-base mt-4">Portugal</span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold mt-4">Lisbon</span>
                  <a
                    href="https://www.underthecover.pt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    Under The Cover
                  </a>
                  <span className="text-sm">
                    Rua Marquês Sá da Bandeira 88b
                  </span>
                  <span className="text-sm font-semibold mt-4">
                    Porto - Matosinhos
                  </span>
                  <a
                    href="https://www.omanifesto.pt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    Manifesto
                  </a>
                  <span className="text-sm">Rua França Junior nº 1</span>
                </div>
              </li>
              <li className="mt-12">
                <span className="font-semibold text-base mt-4">Singapore</span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold mt-4">Singapore</span>
                  <a
                    href="https://www.basheergraphic.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    Basheer Graphic Books
                  </a>
                  <span className="text-sm">231 Bain Street</span>
                  <span className="text-sm">(back issues only)</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-[300px] md:p-4">
            <ul>
              <li className="mt-12">
                <span className="font-semibold text-base mt-4">Slovakia</span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold mt-4">Bratislava</span>
                  <a
                    href="https://brot.sk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    Brot Books Deli
                  </a>
                  <span className="text-sm">Panenská 32</span>
                  <span className="text-sm font-semibold mt-4">Košice</span>
                  <a
                    href="https://www.facebook.com/ArtforumKosice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    Artforum
                  </a>
                  <span className="text-sm">Hlavná 87</span>
                </div>
              </li>
              <li className="mt-12">
                <span className="font-semibold text-base mt-4">
                  Switzerland
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold mt-4">Zurich</span>
                  <a
                    href="https://loremnotipsum.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    LOREM (not Ipsum)
                  </a>
                  <span className="text-sm">Regensbergstrasse 89</span>
                  <a
                    href="http://www.printmatters.ch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900 mt-4"
                  >
                    Print Matters!
                  </a>
                  <span className="text-sm">Hohlstrasse 9</span>
                </div>
              </li>
              <li className="mt-12">
                <span className="font-semibold text-base mt-4">Taiwan</span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold mt-4">
                    Taipei City
                  </span>
                  <a
                    href="https://pon-ding.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    朋丁 Pon Ding
                  </a>
                  <span className="text-sm">
                    No. 6, Lane 53, Section 1, Zhongshan North Road
                  </span>
                </div>
              </li>
              <li className="mt-12">
                <span className="font-semibold text-base mt-4">USA</span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold mt-4">New York</span>
                  <a
                    href="https://www.artbook.com/artbookps1.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    Artbook @MoMA PS1
                  </a>
                  <span className="text-sm">22-25 Jackson Ave</span>
                  <span className="text-sm">(back issues only)</span>
                  <span className="text-sm font-semibold mt-4">
                    Redding, CA
                  </span>
                  <a
                    href="https://sketchandpress.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    Sketch & Press
                  </a>
                  <span className="text-sm">1244 California Street</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-[300px] md:p-4">
            <ul>
              <li className="mt-12">
                <span className="font-semibold text-base mt-4">
                  United Kingdom
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold mt-4">Bath</span>
                  <a
                    href="https://store.magalleria.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    Magalleria
                  </a>
                  <span className="text-sm">22A Broad St</span>
                  <span className="text-sm font-semibold mt-4">Bristol</span>
                  <a
                    href="https://www.papersmiths.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    Papersmiths
                  </a>
                  <span className="text-sm">6A Boyce's Ave</span>
                  <span className="text-sm">(back issues only)</span>
                  <span className="text-sm font-semibold mt-4">Manchester</span>
                  <a
                    href="https://unitom.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    Unitom
                  </a>
                  <span className="text-sm">Stevenson Square</span>
                  <span className="text-sm font-semibold mt-4">Glasgow</span>
                  <a
                    href="https://goodpressgallery.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    GOOD PRESS
                  </a>
                  <span className="text-sm">5 St. Margaret's Place</span>
                  <span className="text-sm font-semibold mt-4">London</span>
                  <a
                    href="https://antennebooks.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900"
                  >
                    Antenne Books
                  </a>
                  <span className="text-sm">Wholesale, Distribution</span>
                  <a
                    href="https://magculture.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900 mt-4"
                  >
                    MagCulture
                  </a>
                  <span className="text-sm">270 St. John Street</span>
                  <a
                    href="https://magma-shop.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900 mt-4"
                  >
                    Magma
                  </a>
                  <span className="text-sm">29 Shorts Gardens</span>
                  <a
                    href="https://www.shreejinewsagents.com/pages/shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900 mt-4"
                  >
                    Shreeji Newsagents
                  </a>
                  <span className="text-sm">6 Chiltern Street</span>
                  <a
                    href="http://www.tipitin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900 mt-4"
                  >
                    Ti Pi Tin Libreria
                  </a>
                  <span className="text-sm">
                    47 Stoke Newington High Street
                  </span>
                  <a
                    href="http://www.charlottestreetnews.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm hover:no-underline hover:text-blue-900 mt-4"
                  >
                    Charlotte Street News
                  </a>
                  <span className="text-sm">66 Charlotte Street</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
