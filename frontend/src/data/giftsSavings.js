const giftsSavings = {
  topBanner: new URL(
    "../assets/images/06-Beauty/giftsSavings/Top Banner.png",
    import.meta.url,
  ).href,

  bottomBanner: new URL(
    "../assets/images/06-Beauty/giftsSavings/Bottom Banner.webp",
    import.meta.url,
  ).href,

  products: [
    {
      id: 1,
      image: new URL(
        "../assets/images/06-Beauty/giftsSavings/01-Skincare Combos.webp",
        import.meta.url,
      ).href,
      alt: "Skincare combos - Up to 70% Off",
      link: "/beauty/skincare",
    },
    {
      id: 2,
      image: new URL(
        "../assets/images/06-Beauty/giftsSavings/02-Haircare Combos.webp",
        import.meta.url,
      ).href,
      alt: "Hair care combos - Up to 80% Off",
      link: "/beauty/hair-care",
    },
    {
      id: 3,
      image: new URL(
        "../assets/images/06-Beauty/giftsSavings/03-Bath Combos.webp",
        import.meta.url,
      ).href,
      alt: "Bath combos - Up to 60% Off",
      link: "/beauty/bath",
    },
    {
      id: 4,
      image: new URL(
        "../assets/images/06-Beauty/giftsSavings/04-Fragrance Combos.webp",
        import.meta.url,
      ).href,
      alt: "Fragrance combos - Minimum 75% Off",
      link: "/beauty/fragrance",
    },
    {
      id: 5,
      image: new URL(
        "../assets/images/06-Beauty/giftsSavings/05-Grooming Kits.webp",
        import.meta.url,
      ).href,
      alt: "Grooming kits - Up to 60% Off",
      link: "/beauty/grooming",
    },
    {
      id: 6,
      image: new URL(
        "../assets/images/06-Beauty/giftsSavings/06-Makeup Kits.webp",
        import.meta.url,
      ).href,
      alt: "Makeup kits - Up to 65% Off",
      link: "/beauty/makeup",
    },
  ],
};

export default giftsSavings;
