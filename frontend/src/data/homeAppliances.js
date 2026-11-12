/* ========================================
   NAMMACART - HOME APPLIANCES
======================================== */

const homeAppliances = {
  /* ========================================
     CATEGORY TITLE ICONS
  ======================================== */

  categoryIcons: {
    bestPicks: new URL(
      "../assets/images/08-Appliances/dealsOnHomeAppliances/title icons/Best Picks Icon.webp",
      import.meta.url,
    ).href,

    television: new URL(
      "../assets/images/08-Appliances/dealsOnHomeAppliances/title icons/TV Icon.webp",
      import.meta.url,
    ).href,

    washingMachine: new URL(
      "../assets/images/08-Appliances/dealsOnHomeAppliances/title icons/Washing Machine Icon.webp",
      import.meta.url,
    ).href,

    waterPurifier: new URL(
      "../assets/images/08-Appliances/dealsOnHomeAppliances/title icons/Water Purifier & More Icon.webp",
      import.meta.url,
    ).href,

    airConditioner: new URL(
      "../assets/images/08-Appliances/dealsOnHomeAppliances/title icons/AC Icon.webp",
      import.meta.url,
    ).href,

    fansGeyser: new URL(
      "../assets/images/08-Appliances/dealsOnHomeAppliances/title icons/Fans & Geyser Icon.webp",
      import.meta.url,
    ).href,
  },

  /* ========================================
     CATEGORY NAVIGATION
  ======================================== */

  categories: [
    {
      id: "bestPicks",
      title: "Best picks",
      icon: "bestPicks",
    },
    {
      id: "television",
      title: "Television",
      icon: "television",
    },
    {
      id: "washingMachine",
      title: "Washing machine",
      icon: "washingMachine",
    },
    {
      id: "waterPurifier",
      title: "Water purifier & more",
      icon: "waterPurifier",
    },
    {
      id: "airConditioner",
      title: "Air conditioner",
      icon: "airConditioner",
    },
    {
      id: "fansGeyser",
      title: "Fans & geyser",
      icon: "fansGeyser",
    },
  ],

  /* ========================================
   BEST PICKS PRODUCTS
======================================== */

  bestPicks: [
    {
      id: 1,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/best picks/01-LED TV.webp",
        import.meta.url,
      ).href,
      alt: "LED TV",
      link: "/category/television",
    },
    {
      id: 2,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/best picks/02-Washing Machines.webp",
        import.meta.url,
      ).href,
      alt: "Washing Machines",
      link: "/category/washing-machines",
    },
    {
      id: 3,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/best picks/03-Water Heaters.webp",
        import.meta.url,
      ).href,
      alt: "Water Heaters",
      link: "/category/water-heaters",
    },
    {
      id: 4,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/best picks/04-Air Conditioners.webp",
        import.meta.url,
      ).href,
      alt: "Air Conditioners",
      link: "/category/air-conditioners",
    },
    {
      id: 5,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/best picks/05-Inverter Batteries.webp",
        import.meta.url,
      ).href,
      alt: "Inverter Batteries",
      link: "/category/inverter-batteries",
    },
    {
      id: 6,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/best picks/06-Water Purifiers.webp",
        import.meta.url,
      ).href,
      alt: "Water Purifiers",
      link: "/category/water-purifiers",
    },
  ],

  /* ========================================
   TELEVISION PRODUCTS
======================================== */

  television: [
    {
      id: 1,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/television/01-Samsung TV.webp",
        import.meta.url,
      ).href,
      alt: "Samsung TV",
      link: "/category/television",
    },
    {
      id: 2,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/television/02-LG Smart TV.webp",
        import.meta.url,
      ).href,
      alt: "LG Smart TV",
      link: "/category/television",
    },
    {
      id: 3,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/television/03-Xiaomi Smart TV.webp",
        import.meta.url,
      ).href,
      alt: "Xiaomi Smart TV",
      link: "/category/television",
    },
    {
      id: 4,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/television/04-65-Inch Smart TV.webp",
        import.meta.url,
      ).href,
      alt: "65 Inch Smart TV",
      link: "/category/television",
    },
    {
      id: 5,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/television/05-TCL QLED TV.webp",
        import.meta.url,
      ).href,
      alt: "TCL QLED TV",
      link: "/category/television",
    },
    {
      id: 6,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/television/06-Motorola QLED TV.webp",
        import.meta.url,
      ).href,
      alt: "Motorola QLED TV",
      link: "/category/television",
    },
    {
      id: 7,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/television/07-Acer Gaming TV.webp",
        import.meta.url,
      ).href,
      alt: "Acer Gaming TV",
      link: "/category/television",
    },
  ],

  /* ========================================
   WASHING MACHINE PRODUCTS
======================================== */

  washingMachine: [
    {
      id: 1,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/washing machine/01-LG Washing Machine.webp",
        import.meta.url,
      ).href,
      alt: "LG Washing Machine",
      link: "/category/washing-machines",
    },
    {
      id: 2,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/washing machine/02-IFB Washing Machine.webp",
        import.meta.url,
      ).href,
      alt: "IFB Washing Machine",
      link: "/category/washing-machines",
    },
    {
      id: 3,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/washing machine/03-Semi-Automatic Washing Machine.webp",
        import.meta.url,
      ).href,
      alt: "Semi-Automatic Washing Machine",
      link: "/category/washing-machines",
    },
    {
      id: 4,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/washing machine/04-Top Load Washing Machine.webp",
        import.meta.url,
      ).href,
      alt: "Top Load Washing Machine",
      link: "/category/washing-machines",
    },
    {
      id: 5,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/washing machine/05-Samsung AI Washing Machine.webp",
        import.meta.url,
      ).href,
      alt: "Samsung AI Washing Machine",
      link: "/category/washing-machines",
    },
    {
      id: 6,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/washing machine/06-Hard Water Wash Washing Machine.webp",
        import.meta.url,
      ).href,
      alt: "Hard Water Wash Washing Machine",
      link: "/category/washing-machines",
    },
    {
      id: 7,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/washing machine/07-Wind Jet Dry Washing Machine.webp",
        import.meta.url,
      ).href,
      alt: "Wind Jet Dry Washing Machine",
      link: "/category/washing-machines",
    },
  ],

  /* ========================================
   WATER PURIFIER & MORE PRODUCTS
======================================== */

  waterPurifier: [
    {
      id: 1,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/water purifier & more/01-Water Purifiers.webp",
        import.meta.url,
      ).href,
      alt: "Water Purifiers",
      link: "/category/water-purifiers",
    },
    {
      id: 2,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/water purifier & more/02-Robot Vacuum Cleaners.webp",
        import.meta.url,
      ).href,
      alt: "Robot Vacuum Cleaners",
      link: "/category/robot-vacuum-cleaners",
    },
    {
      id: 3,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/water purifier & more/03-RO Water Purifiers.webp",
        import.meta.url,
      ).href,
      alt: "RO Water Purifiers",
      link: "/category/ro-water-purifiers",
    },
    {
      id: 4,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/water purifier & more/04-Inverter Batteries.webp",
        import.meta.url,
      ).href,
      alt: "Inverter Batteries",
      link: "/category/inverter-batteries",
    },
    {
      id: 5,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/water purifier & more/05-Dry Irons.webp",
        import.meta.url,
      ).href,
      alt: "Dry Irons",
      link: "/category/dry-irons",
    },
    {
      id: 6,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/water purifier & more/06-Air Purifiers.webp",
        import.meta.url,
      ).href,
      alt: "Air Purifiers",
      link: "/category/air-purifiers",
    },
    {
      id: 7,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/water purifier & more/07-Robot Vacuum & Mop Cleaners.webp",
        import.meta.url,
      ).href,
      alt: "Robot Vacuum & Mop Cleaners",
      link: "/category/robot-vacuum-mop-cleaners",
    },
    {
      id: 8,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/water purifier & more/08-Automatic Coffee Machines.webp",
        import.meta.url,
      ).href,
      alt: "Automatic Coffee Machines",
      link: "/category/automatic-coffee-machines",
    },
  ],

  /* ========================================
   AIR CONDITIONER PRODUCTS
======================================== */

  airConditioner: [
    {
      id: 1,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/air conditioner/01-Split AC.webp",
        import.meta.url,
      ).href,
      alt: "Split AC",
      link: "/category/air-conditioners",
    },
    {
      id: 2,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/air conditioner/02-Daikin AC.webp",
        import.meta.url,
      ).href,
      alt: "Daikin AC",
      link: "/category/air-conditioners",
    },
    {
      id: 3,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/air conditioner/03-Blue Star AC.webp",
        import.meta.url,
      ).href,
      alt: "Blue Star AC",
      link: "/category/air-conditioners",
    },
    {
      id: 4,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/air conditioner/04-TCL AC.webp",
        import.meta.url,
      ).href,
      alt: "TCL AC",
      link: "/category/air-conditioners",
    },
    {
      id: 5,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/air conditioner/05-Lloyd AC.webp",
        import.meta.url,
      ).href,
      alt: "Lloyd AC",
      link: "/category/air-conditioners",
    },
    {
      id: 6,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/air conditioner/06-Godrej AC.webp",
        import.meta.url,
      ).href,
      alt: "Godrej AC",
      link: "/category/air-conditioners",
    },
  ],

  /* ========================================
   FANS & GEYSER PRODUCTS
======================================== */

  fansGeyser: [
    {
      id: 1,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/fans & geyser/01-Ceiling Fan.webp",
        import.meta.url,
      ).href,
      alt: "Ceiling Fan",
      link: "/category/fans",
    },
    {
      id: 2,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/fans & geyser/02-Instant Water Heater.webp",
        import.meta.url,
      ).href,
      alt: "Instant Water Heater",
      link: "/category/water-heaters",
    },
    {
      id: 3,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/fans & geyser/03-Remote Control Fan.webp",
        import.meta.url,
      ).href,
      alt: "Remote Control Fan",
      link: "/category/fans",
    },
    {
      id: 4,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/fans & geyser/04-Storage Water Heater.webp",
        import.meta.url,
      ).href,
      alt: "Storage Water Heater",
      link: "/category/water-heaters",
    },
    {
      id: 5,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/fans & geyser/05-Crompton Geyser.webp",
        import.meta.url,
      ).href,
      alt: "Crompton Geyser",
      link: "/category/geysers",
    },
    {
      id: 6,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/fans & geyser/06-Havells Ceiling Fan.webp",
        import.meta.url,
      ).href,
      alt: "Havells Ceiling Fan",
      link: "/category/fans",
    },
    {
      id: 7,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnHomeAppliances/fans & geyser/07-Smart Ceiling Fan.webp",
        import.meta.url,
      ).href,
      alt: "Smart Ceiling Fan",
      link: "/category/fans",
    },
  ],

  // ========================================
  // KITCHEN APPLIANCES - CATEGORY TITLE ICONS
  // ========================================

  categoryIcons2: {
    airFryerMore: new URL(
      "../assets/images/08-Appliances/dealsOnKitchenAppliances/title icons/Air Fryer & More Icon.webp",
      import.meta.url,
    ).href,

    bestPicks: new URL(
      "../assets/images/08-Appliances/dealsOnKitchenAppliances/title icons/Best Picks Icon.webp",
      import.meta.url,
    ).href,

    chimney: new URL(
      "../assets/images/08-Appliances/dealsOnKitchenAppliances/title icons/Chimney Icon.webp",
      import.meta.url,
    ).href,

    mixerMore: new URL(
      "../assets/images/08-Appliances/dealsOnKitchenAppliances/title icons/Mixer & More Icon.webp",
      import.meta.url,
    ).href,

    refrigerator: new URL(
      "../assets/images/08-Appliances/dealsOnKitchenAppliances/title icons/Refrigerator Icon.webp",
      import.meta.url,
    ).href,
  },

  // ========================================
  // KITCHEN APPLIANCES - CATEGORY NAVIGATION
  // ========================================

  categories2: [
    {
      id: "bestPicks",
      title: "Best picks",
      icon: "bestPicks",
    },
    {
      id: "refrigerator",
      title: "Refrigerator",
      icon: "refrigerator",
    },
    {
      id: "mixerMore",
      title: "Mixer & more",
      icon: "mixerMore",
    },
    {
      id: "chimney",
      title: "Chimney",
      icon: "chimney",
    },
    {
      id: "airFryerMore",
      title: "Air fryer & more",
      icon: "airFryerMore",
    },
  ],

  // ========================================
  // KITCHEN APPLIANCES - BEST PICKS PRODUCTS
  // ========================================

  bestPicks2: [
    {
      id: 1,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/best picks/01-Refrigerators.webp",
        import.meta.url,
      ).href,
      alt: "Refrigerators",
      link: "/category/refrigerators",
    },
    {
      id: 2,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/best picks/02-Mixer Grinders.webp",
        import.meta.url,
      ).href,
      alt: "Mixer Grinders",
      link: "/category/mixer-grinders",
    },
    {
      id: 3,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/best picks/03-Air Fryers.webp",
        import.meta.url,
      ).href,
      alt: "Air Fryers",
      link: "/category/air-fryers",
    },
    {
      id: 4,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/best picks/04-Microwave Ovens.webp",
        import.meta.url,
      ).href,
      alt: "Microwave Ovens",
      link: "/category/microwave-ovens",
    },
    {
      id: 5,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/best picks/05-Dishwashers.webp",
        import.meta.url,
      ).href,
      alt: "Dishwashers",
      link: "/category/dishwashers",
    },
    {
      id: 6,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/best picks/06-Kitchen Chimneys.webp",
        import.meta.url,
      ).href,
      alt: "Kitchen Chimneys",
      link: "/category/kitchen-chimneys",
    },
  ],

  // ========================================
  // REFRIGERATOR PRODUCTS
  // ========================================

  refrigerator: [
    {
      id: 1,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/refrigerator/01-Refrigerators.webp",
        import.meta.url,
      ).href,
      alt: "Refrigerators",
      link: "/category/refrigerators",
    },
    {
      id: 2,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/refrigerator/02-Mini Fridges.webp",
        import.meta.url,
      ).href,
      alt: "Mini Fridges",
      link: "/category/mini-fridges",
    },
    {
      id: 3,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/refrigerator/03-Double Door Refrigerators.webp",
        import.meta.url,
      ).href,
      alt: "Double Door Refrigerators",
      link: "/category/double-door-refrigerators",
    },
    {
      id: 4,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/refrigerator/04-Side-by-Side Refrigerators.webp",
        import.meta.url,
      ).href,
      alt: "Side-by-Side Refrigerators",
      link: "/category/side-by-side-refrigerators",
    },
    {
      id: 5,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/refrigerator/05-Single Door Fridges.webp",
        import.meta.url,
      ).href,
      alt: "Single Door Fridges",
      link: "/category/single-door-fridges",
    },
  ],

  // ========================================
  // MIXER & MORE PRODUCTS
  // ========================================

  mixerMore: [
    {
      id: 1,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/mixer & more/01-Electric Kettles.webp",
        import.meta.url,
      ).href,
      alt: "Electric Kettles",
      link: "/category/electric-kettles",
    },
    {
      id: 2,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/mixer & more/02-Air Fryers.webp",
        import.meta.url,
      ).href,
      alt: "Air Fryers",
      link: "/category/air-fryers",
    },
    {
      id: 3,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/mixer & more/03-Mixer Grinders.webp",
        import.meta.url,
      ).href,
      alt: "Mixer Grinders",
      link: "/category/mixer-grinders",
    },
    {
      id: 4,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/mixer & more/04-Induction Cooktops.webp",
        import.meta.url,
      ).href,
      alt: "Induction Cooktops",
      link: "/category/induction-cooktops",
    },
    {
      id: 5,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/mixer & more/05-Rice Cookers.webp",
        import.meta.url,
      ).href,
      alt: "Rice Cookers",
      link: "/category/rice-cookers",
    },
  ],

  // ========================================
  // CHIMNEY PRODUCTS
  // ========================================

  chimney: [
    {
      id: 1,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/chimney/01-Kitchen Chimneys.webp",
        import.meta.url,
      ).href,
      alt: "Kitchen Chimneys",
      link: "/category/kitchen-chimneys",
    },
    {
      id: 2,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/chimney/02-Wall-Mounted Chimneys.webp",
        import.meta.url,
      ).href,
      alt: "Wall-Mounted Chimneys",
      link: "/category/wall-mounted-chimneys",
    },
    {
      id: 3,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/chimney/03-OTG Ovens.webp",
        import.meta.url,
      ).href,
      alt: "OTG Ovens",
      link: "/category/otg-ovens",
    },
    {
      id: 4,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/chimney/04-Electric Ovens.webp",
        import.meta.url,
      ).href,
      alt: "Electric Ovens",
      link: "/category/electric-ovens",
    },
    {
      id: 5,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/chimney/05-Curved Glass Chimneys.webp",
        import.meta.url,
      ).href,
      alt: "Curved Glass Chimneys",
      link: "/category/curved-glass-chimneys",
    },
    {
      id: 6,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/chimney/06-Portable Chimneys.webp",
        import.meta.url,
      ).href,
      alt: "Portable Chimneys",
      link: "/category/portable-chimneys",
    },
  ],

  // ========================================
  // AIR FRYER & MORE PRODUCTS
  // ========================================

  airFryerMore: [
    {
      id: 1,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/airFryer & more/01-Induction Cooktops.webp",
        import.meta.url,
      ).href,
      alt: "Induction Cooktops",
      link: "/category/induction-cooktops",
    },
    {
      id: 2,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/airFryer & more/02-Vegetable Choppers.webp",
        import.meta.url,
      ).href,
      alt: "Vegetable Choppers",
      link: "/category/vegetable-choppers",
    },
    {
      id: 3,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/airFryer & more/03-Sandwich Makers.webp",
        import.meta.url,
      ).href,
      alt: "Sandwich Makers",
      link: "/category/sandwich-makers",
    },
    {
      id: 4,
      image: new URL(
        "../assets/images/08-Appliances/dealsOnKitchenAppliances/airFryer & more/04-Air Fryers.webp",
        import.meta.url,
      ).href,
      alt: "Air Fryers",
      link: "/category/air-fryers",
    },
  ],
};

export default homeAppliances;
