import { Link } from "react-router-dom";

// Slideshow Banner Imports
import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

// Category Navigation Imports
import CategoryNav from "../components/layout/CategoryNav.jsx";
import categoryNav from "../data/categoryNav.js";

import electronicsTopBanner from "../assets/images/05-Electronics/banners/Top Banner.png";
import "../styles/Electronics.css";

import topBanner from "../assets/images/05-Electronics/trendIntelLaptop/Top Banner.webp";
import LaptopDeals from "../components/layout/MobilesDeals.jsx";
import laptopDeals from "../data/mobilesDeals.js";

import TopDeals from "../components/layout/TopDeals.jsx";
import topDeals from "../data/topDeals.js";

import lowPriceBackground from "../assets/images/05-Electronics/lowPrice/Background Banner.png";

import MainElectro from "../components/layout/MainElectro.jsx";
import mainElectro from "../data/mainElectro.js";

import {
  blockbusterDealsBanner,
  blockbusterDeals,
} from "../data/blockbusterDeals";

export default function Electronics() {
  return (
    <main className="electronics-page">
      {/* Electronics Promotional Banner */}
      <div className="electronics-banner">
        <img src={electronicsTopBanner} alt="Electronics promotional offers" />
      </div>

      {/* Electronics Slideshow */}
      <PromoSlider banners={promoBanners.electronics} />
      {/* Category Navigation */}
      <CategoryNav categories={categoryNav.electronics} />

      <img
        src={topBanner}
        alt="Trending Inter Laptop"
        className="intel-lap-banner"
      />
      <LaptopDeals
        products={laptopDeals.trendingIntelLaptops}
        className="intel-lap-img"
      />

      {/* Blockbuster Deals Section */}
      <section className="blockbuster-deals">
        <img
          src={blockbusterDealsBanner}
          alt="Blockbuster Deals"
          className="blockbuster-deals-banner"
        />

        <div className="blockbuster-deals-grid">
          {blockbusterDeals.map((deal) => (
            <Link
              key={deal.id}
              to={deal.link}
              className="blockbuster-deal-card"
              aria-label={`Shop ${deal.alt}`}
            >
              <img src={deal.image} alt={deal.alt} loading="lazy" />
            </Link>
          ))}
        </div>
      </section>
      {/* Low Prices Everyday */}
      <TopDeals
        title="Low Price Everyday"
        products={topDeals.lowPrices}
        backgroundImage={lowPriceBackground}
        className="top-deals-tech"
      />

      <section className="price-drop">
        <h2>Flat Rate Bazaar</h2>
        <div className="price-drop-images">
          <Link to="/fashion/products?maxPrice=199" className="price-drop-card">
            <img
              src={
                new URL(
                  "../assets/images/05-Electronics/flatRateBazaar/01-199.webp",
                  import.meta.url,
                ).href
              }
              alt="Shop fashion under ₹199"
            />
          </Link>
          <Link to="/fashion/products?maxPrice=299" className="price-drop-card">
            <img
              src={
                new URL(
                  "../assets/images/05-Electronics/flatRateBazaar/02-499.webp",
                  import.meta.url,
                ).href
              }
              alt="Shop fashion under ₹299"
            />
          </Link>
          <Link to="/fashion/products?maxPrice=399" className="price-drop-card">
            <img
              src={
                new URL(
                  "../assets/images/05-Electronics/flatRateBazaar/03-999.webp",
                  import.meta.url,
                ).href
              }
              alt="Shop fashion under ₹399"
            />
          </Link>
        </div>
      </section>

      <MainElectro
        title="Laptops & more"
        products={mainElectro.laptopMore}
        cardWidth="195px"
        cardGap="15px"
        showArrows={true}
        scrollAmount={6}
      />
      <MainElectro
        title="Smart Earbuds"
        products={mainElectro.smartEarbuds}
        cardWidth="195px"
        cardGap="15px"
        showArrows={true}
        scrollAmount={6}
      />
      <MainElectro
        title="Smartwatches"
        products={mainElectro.smartWearables}
        cardWidth="195px"
        cardGap="15px"
        showArrows={true}
        scrollAmount={6}
      />
      <MainElectro
        title="Budget Tablets"
        products={mainElectro.budgetTablets}
        cardWidth="195px"
        cardGap="15px"
        showArrows={true}
        scrollAmount={6}
      />
      <MainElectro
        title="Monitors, Printers & More"
        products={mainElectro.monitorsPrinters}
        cardWidth="195px"
        cardGap="15px"
        showArrows={true}
        scrollAmount={6}
      />
      <MainElectro
        title="Storage Devices & More"
        products={mainElectro.storageDevices}
        cardWidth="195px"
        cardGap="15px"
        showArrows={true}
        scrollAmount={6}
      />
      <MainElectro
        title="Soundbars & Speakers"
        products={mainElectro.soundbarSpeakers}
        cardWidth="195px"
        cardGap="15px"
        showArrows={true}
        scrollAmount={6}
      />
      <MainElectro
        title="Computer Accessories"
        products={mainElectro.computerAccessories}
        cardWidth="195px"
        cardGap="15px"
        showArrows={true}
        scrollAmount={6}
      />
      <MainElectro
        title="Camera Accessories"
        products={mainElectro.camAccessories}
        cardWidth="195px"
        cardGap="15px"
        showArrows={true}
        scrollAmount={6}
      />
      <MainElectro
        title="Phone & Tablet Covers"
        products={mainElectro.phoneTabletCovers}
        cardWidth="195px"
        cardGap="15px"
        showArrows={true}
        scrollAmount={6}
      />
      <MainElectro
        title="Mobile Accessories"
        products={mainElectro.mobileAccessories}
        cardWidth="195px"
        cardGap="15px"
        showArrows={true}
        scrollAmount={6}
      />
      <MainElectro
        title="Fast Charging Powerbanks"
        products={mainElectro.fastChargingPowerbanks}
        cardWidth="195px"
        cardGap="15px"
        showArrows={true}
        scrollAmount={6}
      />
      <MainElectro
        title="Smart Home"
        products={mainElectro.smartHome}
        cardWidth="195px"
        cardGap="15px"
        showArrows={true}
        scrollAmount={6}
      />
    </main>
  );
}
