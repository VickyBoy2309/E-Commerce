const shopByBudget = {
  beauty: [
    {
      id: 1,
      image: new URL(
        "../assets/images/06-Beauty/shopByBudget/01-99.jpg",
        import.meta.url,
      ).href,
      alt: "Beauty products under ₹99",
      link: "/beauty/under-99",
    },
    {
      id: 2,
      image: new URL(
        "../assets/images/06-Beauty/shopByBudget/02-299.jpg",
        import.meta.url,
      ).href,
      alt: "Beauty products under ₹299",
      link: "/beauty/under-299",
    },
    {
      id: 3,
      image: new URL(
        "../assets/images/06-Beauty/shopByBudget/03-499.jpg",
        import.meta.url,
      ).href,
      alt: "Beauty products under ₹499",
      link: "/beauty/under-499",
    },
    {
      id: 4,
      image: new URL(
        "../assets/images/06-Beauty/shopByBudget/04-30%.jpg",
        import.meta.url,
      ).href,
      alt: "Beauty products with minimum 30% off",
      link: "/beauty/minimum-30-off",
    },
    {
      id: 5,
      image: new URL(
        "../assets/images/06-Beauty/shopByBudget/05-50%.jpg",
        import.meta.url,
      ).href,
      alt: "Beauty products with minimum 50% off",
      link: "/beauty/minimum-50-off",
    },
    {
      id: 6,
      image: new URL(
        "../assets/images/06-Beauty/shopByBudget/06-80%.jpg",
        import.meta.url,
      ).href,
      alt: "Beauty products with minimum 80% off",
      link: "/beauty/minimum-80-off",
    },
  ],
};

export default shopByBudget;
