const WHATSAPP_NUMBER = "201010414187";
const frameOptions = {
  None: { label: "Poster only", price: 0, hint: "Poster only, no frame" },
  Black: { label: "Black frame", price: 120 },
  White: { label: "White frame", price: 120 },
  Wood: { label: "Wood frame", price: 140 }
};

const translations = {
  en: {
    brandTitle: "Poster Lab Store",
    brandSubtitle: "Framed posters for modern rooms",
    navShop: "Shop",
    navCart: "Cart",
    langToggle: "عربي",

    heroEyebrow: "Local framed poster store",
    heroTitle: "Poster Lab Store",
    heroText: "Cars, paint studies, and bold wall art printed with black, white, or wood frames for rooms that deserve a focal point.",
    heroActionShop: "Shop posters",
    heroActionCart: "Open cart",
    badgeFramed: "Framed",
    badgePrints: "Local Prints",

    searchLabel: "Search",
    searchPlaceholder: "Search cars, paint, abstract...",
    categoryLabel: "Category",
    catAll: "All posters",
    catCustom: "Custom upload",
    catCars: "Cars",
    catPaint: "Paint art",
    catAbstract: "Abstract",
    sizeLabel: "Size",
    sizeAll: "All sizes",
    frameLabel: "Frame",
    frameAll: "All frames",
    frameNone: "None",
    frameBlack: "Black",
    frameWhite: "White",
    frameWood: "Wood",
    sortLabel: "Sort",
    sortFeatured: "Featured",
    sortPriceLow: "Price low to high",
    sortPriceHigh: "Price high to low",
    sortName: "Name",

    freshDropsEyebrow: "Fresh drops",
    freshDropsTitle: "Framed posters for bold interiors",
    resultCountProduct: "product",
    resultCountProducts: "products",
    noProductsFound: "No framed posters found.",
    tryDifferentSearch: "Try a different search or filter.",
    from: "From",
    sizesAvailable: "20x30 / 30x40 / 40x50 cm",
    customize: "Customize",
    uploadDesignBtn: "Upload design",
    addPosterBtn: "Add poster",

    detailEyebrow: "framed local print",
    detailPosterSize: "Poster size",
    detailFrameColor: "Frame color",
    detailUploadLabel: "Upload photo or design",
    detailUploadHint: "Upload JPG, PNG, or any image design before adding to cart.",
    detailSelectedFile: "Selected: ",
    detailAddBtn: "Add customized framed poster",
    detailAddPosterBtn: "Add poster to cart",
    pleaseUploadAlert: "Please upload your photo or design first.",

    cartEyebrow: "Your order",
    cartTitle: "Cart",
    cartEmpty: "Your cart is empty.",
    cartStartOrderHint: "Add a framed poster to start an order.",
    cartEach: "each",
    cartTotalLabel: "Total:",
    cartNameLabel: "Name",
    cartNamePlaceholder: "Your name",
    cartPhoneLabel: "Phone",
    cartPhonePlaceholder: "Your phone number",
    cartAddressLabel: "Address",
    cartAddressPlaceholder: "Delivery address",
    cartPaymentLabel: "Payment method",
    cartInstapayOption: "Instapay QR - qnbziad49015@instapay",
    cartVodafoneOption: "Vodafone Cash - 01090927525",
    cartWhatsappHint: "WhatsApp will include items, sizes, frames, totals, payment method, product links, and uploaded design filenames.",
    cartCheckoutBtn: "Continue to payment confirmation",
    productLink: "Product page link",
    backToShop: "Back to shop",
    backToShop: "Back to shop",

    confEyebrow: "Final confirmation",
    confTitle: "Complete payment, then send the order",
    confHint: "Your WhatsApp message will include every poster, selected frame, selected size, price total, customer details, product links, and uploaded design filenames.",
    confTotal: "Order total: ",
    confItemsCount: "customized framed poster item",
    confItemsCountPlural: "customized framed poster items",
    confEditBtn: "Edit details",
    confSendBtn: "Send final order to WhatsApp",
    confAddFirstAlert: "Please add at least one framed poster to your cart.",
    addedToCart: "Added to cart",
    confUploadSummaryTitle: "Uploaded designs:",
  },
  ar: {
    brandTitle: "بوستر لاب ستور",
    brandSubtitle: "بوسترات إطارات حديثة لغرف عصرية",
    navShop: "المتجر",
    navCart: "السلة",
    langToggle: "English",

    heroEyebrow: "متجر بوسترات محلي مؤطر",
    heroTitle: "بوستر لاب ستور",
    heroText: "سيارات، دراسات ألوان، وفنون جدارية جريئة مطبوعة بإطارات سوداء أو بيضاء أو خشبية للغرف التي تستحق لمسة جمالية فريدة.",
    heroActionShop: "تسوق البوسترات",
    heroActionCart: "فتح السلة",
    badgeFramed: "مؤطر",
    badgePrints: "طباعة محلية",

    searchLabel: "بحث",
    searchPlaceholder: "ابحث عن سيارات، لوحات، تجريدي...",
    categoryLabel: "الفئة",
    catAll: "كل البوسترات",
    catCustom: "تصميم خاص",
    catCars: "سيارات",
    catPaint: "لوحات فنية",
    catAbstract: "تجريدي",
    sizeLabel: "المقاس",
    sizeAll: "كل المقاسات",
    frameLabel: "الإطار",
    frameAll: "كل الإطارات",
    frameNone: "بدون إطار",
    frameBlack: "أسود",
    frameWhite: "أبيض",
    frameWood: "خشبي",
    sortLabel: "ترتيب",
    sortFeatured: "مميز",
    sortPriceLow: "السعر: من الأقل للأعلى",
    sortPriceHigh: "السعر: من الأعلى للأقل",
    sortName: "الاسم",

    freshDropsEyebrow: "أحدث الإضافات",
    freshDropsTitle: "بوسترات مؤطرة لتصميم داخلي جريء",
    resultCountProduct: "منتج",
    resultCountProducts: "منتجات",
    noProductsFound: "لم يتم العثور على بوسترات.",
    tryDifferentSearch: "جرّب البحث بكلمات أخرى أو تغيير الفلاتر.",
    from: "تبدأ من",
    sizesAvailable: "٢٠×٣٠ / ٣٠×٤٠ / ٤٠×٥٠ سم",
    customize: "تخصيص",
    uploadDesignBtn: "رفع التصميم",
    addPosterBtn: "إضافة البوستر",

    detailEyebrow: "طباعة محلية مؤطرة",
    detailPosterSize: "مقاس البوستر",
    detailFrameColor: "لون الإطار",
    detailUploadLabel: "ارفع صورتك أو تصميمك",
    detailUploadHint: "ارفع ملف JPG أو PNG أو أي تصميم قبل الإضافة للسلة.",
    detailSelectedFile: "الملف المختار: ",
    detailAddBtn: "إضافة البوستر المخصص للسلة",
    detailAddPosterBtn: "إضافة البوستر للسلة",
    pleaseUploadAlert: "يرجى رفع صورتك أو تصميمك أولاً.",

    cartEyebrow: "طلبك",
    cartTitle: "السلة",
    cartEmpty: "سلتك فارغة.",
    cartStartOrderHint: "أضف بوستراً مؤطراً لبدء الطلب.",
    cartEach: "للقطعة",
    cartTotalLabel: "الإجمالي:",
    cartNameLabel: "الاسم",
    cartNamePlaceholder: "اسمك الكريم",
    cartPhoneLabel: "رقم الهاتف",
    cartPhonePlaceholder: "رقم هاتفك للتواصل",
    cartAddressLabel: "العنوان",
    cartAddressPlaceholder: "عنوان التوصيل بالتفصيل",
    cartPaymentLabel: "طريقة الدفع",
    cartInstapayOption: "إنستا باي QR - qnbziad49015@instapay",
    cartVodafoneOption: "فودافون كاش - 01090927525",
    cartWhatsappHint: "سوف تتضمن رسالة الواتساب المنتجات، المقاسات، الإطارات، الإجماليات، طريقة الدفع، تفاصيل العميل، روابط المنتجات، وأسماء ملفات التصاميم المرفوعة.",
    cartCheckoutBtn: "المتابعة لتأكيد الدفع",
    productLink: "رابط صفحة المنتج",
    backToShop: "العودة للتسوق",
    backToShop: "العودة للتسوق",

    confEyebrow: "التأكيد النهائي",
    confTitle: "أكمل الدفع، ثم أرسل الطلب",
    confHint: "سوف تحتوي رسالتك على الواتساب على كل بوستر، الإطار المختار، المقاس المختار، إجمالي السعر، تفاصيل العميل، روابط المنتجات، وأسماء ملفات التصاميم المرفوعة.",
    confTotal: "إجمالي الطلب: ",
    confItemsCount: "بوستر مخصص مضاف",
    confItemsCountPlural: "بوسترات مخصصة مضافة",
    confEditBtn: "تعديل البيانات",
    confSendBtn: "إرسال الطلب النهائي عبر واتساب",
    confAddFirstAlert: "يرجى إضافة بوستر واحد على الأقل إلى السلة.",
    addedToCart: "تمت الإضافة إلى السلة",
    confUploadSummaryTitle: "التصاميم المرفوعة:",
  }
};

const currency = new Intl.NumberFormat("en-EG", {
  style: "currency",
  currency: "EGP",
  maximumFractionDigits: 0
});

const products = [
  {
    id: "custom-upload",
    name: "Upload Your Customized Design",
    nameAr: "رفع تصميمك الخاص",
    category: "custom",
    tag: "Custom upload",
    tagAr: "تصميم خاص",
    image: "assets/custom-upload.jpg",
    gallery: ["assets/custom-upload.jpg"],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    isCustom: true,
    description: "Upload your own photo, artwork, logo, or poster design. Choose poster size and optional frame before sending the final order.",
    descriptionAr: "ارفع صورتك الخاصة، عملك الفني، شعارك أو تصميم البوستر الخاص بك. اختر مقاس البوستر والإطار الاختياري قبل إرسال الطلب النهائي."
  },
  {
    id: "porsche-gt3-rs",
    name: "Porsche GT3 RS",
    nameAr: "Porsche GT3 RS",
    category: "cars",
    tag: "Car poster",
    tagAr: "بوستر سيارة",
    image: "assets/Porsche GT3 RS.png",
    gallery: ["assets/Porsche GT3 RS.png"],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A premium Porsche poster with bold racing style and crisp detail for modern interiors.",
    descriptionAr: "بوستر بورشه فاخر بتصميم سباق جريء وتفاصيل واضحة للمساحات العصرية."
  },
  {
    id: "red-ferrari",
    name: "Red Ferrari",
    nameAr: "Red Ferrari",
    category: "cars",
    tag: "Car poster",
    tagAr: "بوستر سيارة",
    image: "assets/Red Ferrari.png",
    gallery: ["assets/Red Ferrari.png"],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A dynamic Ferrari poster with striking contrast and a performance-inspired look.",
    descriptionAr: "بوستر فيراري ديناميكي بتباين قوي ومظهر مستوحى من الأداء."
  },
  {
    id: "red-bull-racing",
    name: "RedBull Racing",
    nameAr: "RedBull Racing",
    category: "cars",
    tag: "Car poster",
    tagAr: "بوستر سيارة",
    image: "assets/Dark Blue RedBull.png",
    gallery: ["assets/Dark Blue RedBull.png"],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A striking Red Bull racing poster with vivid colors and sharp energy.",
    descriptionAr: "بوستر ريد بول السباقي بألوان زاهية وطاقة حادة."
  },
  {
    id: "space-astronauts",
    name: "Space Astronauts",
    nameAr: "Space Astronauts",
    category: "abstract",
    tag: "Space art",
    tagAr: "فن الفضاء",
    image: "assets/Space Astronauts.png",
    gallery: ["assets/Space Astronauts.png"],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A futuristic astronaut poster with vibrant planets and cosmic energy.",
    descriptionAr: "بوستر رواد فضاء مستقبلي بألوان كوكبية زاهية وطاقة كونية."
  },
  {
    id: "minecraft-avengers",
    name: "Minecraft Avengers",
    nameAr: "Minecraft Avengers",
    category: "abstract",
    tag: "Gaming art",
    tagAr: "فن ألعاب",
    image: "assets/Minecraft Avengers.png",
    gallery: ["assets/Minecraft Avengers.png"],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A bold Minecraft Avengers poster that mixes gaming and pop culture for colorful spaces.",
    descriptionAr: "بوستر Minecraft Avengers جريء يمزج بين الألعاب والثقافة الشعبية لمساحات ملونة."
  },
  {
    id: "monaliza",
    name: "Monaliza",
    nameAr: "Monaliza",
    category: "abstract",
    tag: "Art poster",
    tagAr: "بوستر فني",
    image: "assets/Monaliza.png",
    gallery: ["assets/Monaliza.png"],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A stylish Monaliza poster with classic art inspiration and modern edge.",
    descriptionAr: "بوستر Monaliza أنيق مستوحى من الفن الكلاسيكي مع لمسة عصرية."
  },
  {
    id: "spiderman",
    name: "Spiderman",
    nameAr: "Spiderman",
    category: "abstract",
    tag: "Superhero art",
    tagAr: "فن خارق",
    image: "assets/Spiderman.png",
    gallery: ["assets/Spiderman.png"],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A dynamic Spiderman poster with crisp comic-style visuals for fan spaces.",
    descriptionAr: "بوستر سبايدرمان ديناميكي بصور أسلوب الكوميك الواضحة لمساحات المعجبين."
  },
  {
    id: "blue-porsche-3",
    name: "Blue Porsche Series",
    nameAr: "سلسلة بورشه الزرقاء",
    category: "cars",
    tag: "Car poster set",
    tagAr: "مجموعة بوسترات سيارات",
    image: "assets/Blue Porsche 3/upscalemedia-transformed blue porsche 3_01.png",
    gallery: [
      "assets/Blue Porsche 3/upscalemedia-transformed blue porsche 3_01.png",
      "assets/Blue Porsche 3/upscalemedia-transformed blue porsche 3_02.png",
      "assets/Blue Porsche 3/upscalemedia-transformed blue porsche 3_03.png"
    ],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A three-image Blue Porsche poster set that shows the car in three bold compositions.",
    descriptionAr: "مجموعة بثلاث صور لبورشه زرقاء تعرض السيارة في ثلاث تركيبات جريئة."
  },
  {
    id: "red-ferrari-3",
    name: "Red Ferrari Series",
    nameAr: "سلسلة فيراري الحمراء",
    category: "cars",
    tag: "Car poster set",
    tagAr: "مجموعة بوسترات سيارات",
    image: "assets/Red Ferrari 3/upscalemedia-transformed ferrari 3 (1).png",
    gallery: [
      "assets/Red Ferrari 3/upscalemedia-transformed ferrari 3 (1).png",
      "assets/Red Ferrari 3/upscalemedia-transformed ferrari 3 (2).png",
      "assets/Red Ferrari 3/upscalemedia-transformed ferrari 3 (3).png"
    ],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A three-image Ferrari poster set with dramatic red speed styling.",
    descriptionAr: "مجموعة بثلاث صور لبوستر فيراري بتصميم أحمر درامي وسرعة مميزة."
  },
  {
    id: "yellow-porsche-3",
    name: "Yellow Porsche Series",
    nameAr: "سلسلة بورشه الصفراء",
    category: "cars",
    tag: "Car poster set",
    tagAr: "مجموعة بوسترات سيارات",
    image: "assets/Yellow Porsche 3/upscalemedia-transformed yellow 3_01.png",
    gallery: [
      "assets/Yellow Porsche 3/upscalemedia-transformed yellow 3_01.png",
      "assets/Yellow Porsche 3/upscalemedia-transformed yellow 3_02.png",
      "assets/Yellow Porsche 3/upscalemedia-transformed yellow 3_03.png"
    ],
    basePrice: 50,
    sizes: { "20x30": 50, "30x40": 60, "40x50": 70 },
    frames: ["None", "Black", "White", "Wood"],
    description: "A three-image Yellow Porsche poster set with bright racing energy.",
    descriptionAr: "مجموعة بثلاث صور لبوستر بورشه صفراء بطاقة سباقية مشرقة."
  }
];

const LOCAL_STORAGE_LANG_KEY = "poster-lab-lang";
const LOCAL_STORAGE_UPLOAD_KEY = "poster-lab-custom-upload";
const LOCAL_STORAGE_CART_KEY = "poster-lab-cart";

function loadCustomUpload() {
  const saved = localStorage.getItem(LOCAL_STORAGE_UPLOAD_KEY);
  if (!saved) return null;
  try {
    const parsed = JSON.parse(saved);
    if (!parsed || !parsed.name || !parsed.dataUrl) return null;
    return {
      name: parsed.name,
      size: parsed.size,
      type: parsed.type,
      url: parsed.dataUrl,
      dataUrl: parsed.dataUrl,
      isObjectUrl: false
    };
  } catch {
    return null;
  }
}

function saveCustomUpload(upload) {
  if (!upload) {
    localStorage.removeItem(LOCAL_STORAGE_UPLOAD_KEY);
    return;
  }
  const payload = {
    name: upload.name,
    size: upload.size,
    type: upload.type,
    dataUrl: upload.dataUrl
  };
  localStorage.setItem(LOCAL_STORAGE_UPLOAD_KEY, JSON.stringify(payload));
}

function loadCart() {
  const saved = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
  if (!saved) return [];
  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((item) => ({
      ...item,
      upload: item.upload ? { ...item.upload, url: item.upload.dataUrl || item.upload.url } : null
    }));
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(state.cart));
}

const state = {
  lang: localStorage.getItem(LOCAL_STORAGE_LANG_KEY) || "en",
  search: "",
  category: "all",
  size: "all",
  frame: "all",
  sort: "featured",
  cart: loadCart(),
  selectedProduct: null,
  detailSize: "30x40",
  detailFrame: "Black",
  customUpload: loadCustomUpload(),
  confirmedForm: null
};

const productGrid = document.querySelector("#productGrid");
const resultCount = document.querySelector("#resultCount");
const productDetail = document.querySelector("#productDetail");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartItems = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");
const cartCount = document.querySelector("[data-cart-count]");
const cartButton = document.querySelector(".cart-button");
const checkoutForm = document.querySelector("#checkoutForm");
const paymentConfirmation = document.querySelector("#paymentConfirmation");
const confirmationSummary = document.querySelector("#confirmationSummary");
const toastContainer = document.querySelector(".toast-notification");

function getProductName(product) {
  const currentLang = state.lang || "en";
  return currentLang === "ar" && product.nameAr ? product.nameAr : product.name;
}

function flashCartBubble() {
  if (!cartCount) return;
  cartCount.classList.add("bump");
  window.setTimeout(() => cartCount.classList.remove("bump"), 320);
}

function showToast(message) {
  if (!toastContainer) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toastContainer.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  window.setTimeout(() => {
    toast.classList.remove("show");
    toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  }, 2400);
}

function money(amount) {
  return currency.format(amount).replace("EGP", "EGP ");
}

function getProduct(id) {
  return products.find((product) => product.id === id);
}

function productImageUrl(path) {
  return new URL(path, window.location.href).href;
}

function displayImageForItem(product, item = null) {
  return item?.upload?.url || product.image;
}

function itemUnitPrice(product, size, frame) {
  return product.sizes[size] + frameOptions[frame].price;
}

function getPageProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function t(key) {
  const currentLang = state.lang || "en";
  return translations[currentLang]?.[key] || translations["en"]?.[key] || key;
}

function galleryBadge(product) {
  if (!product.gallery || product.gallery.length <= 1) return "";
  const currentLang = state.lang || "en";
  const count = product.gallery.length;
  if (currentLang === "ar") {
    return `${count} ${count === 1 ? "صورة" : "صور"}`;
  }
  return `${count} images`;
}

function getFrameOptionLabel(frameKey) {
  const currentLang = state.lang || "en";
  if (currentLang === "ar") {
    if (frameKey === "None") return "بوستر فقط";
    if (frameKey === "Black") return "إطار أسود";
    if (frameKey === "White") return "إطار أبيض";
    if (frameKey === "Wood") return "إطار خشبي";
  }
  return frameOptions[frameKey]?.label || frameKey;
}

function getFrameOptionHint(frameKey) {
  const currentLang = state.lang || "en";
  if (currentLang === "ar") {
    if (frameKey === "None") return "بوستر فقط بدون إطار";
  }
  return frameOptions[frameKey]?.hint || "";
}

function updateLanguageUI() {
  const currentLang = state.lang || "en";
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  // Update static elements with data-t
  document.querySelectorAll("[data-t]").forEach((elem) => {
    const key = elem.dataset.t;
    elem.textContent = t(key);
  });

  // Update static elements with data-t-placeholder
  document.querySelectorAll("[data-t-placeholder]").forEach((elem) => {
    const key = elem.dataset.tPlaceholder;
    elem.placeholder = t(key);
  });

  // Specifically handle search input placeholder
  const searchInput = document.querySelector("#searchInput");
  if (searchInput) {
    searchInput.placeholder = t("searchPlaceholder");
  }
}

function toggleLanguage() {
  state.lang = state.lang === "en" ? "ar" : "en";
  localStorage.setItem("poster-lab-lang", state.lang);
  updateLanguageUI();
  renderProducts();
  renderCart();
  if (state.selectedProduct) {
    renderDetail(state.selectedProduct);
  }
}

function filteredProducts() {
  const search = state.search.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const haystack = [
      product.name, product.nameAr,
      product.category,
      product.tag, product.tagAr,
      product.description, product.descriptionAr
    ].filter(Boolean).join(" ").toLowerCase();
    const matchesSearch = !search || haystack.includes(search);
    const matchesCategory = state.category === "all" || product.category === state.category;
    const matchesSize = state.size === "all" || Object.keys(product.sizes).includes(state.size);
    const matchesFrame = state.frame === "all" || product.frames.includes(state.frame);
    return matchesSearch && matchesCategory && matchesSize && matchesFrame;
  });

  return filtered.sort((a, b) => {
    if (state.sort === "price-low") return a.basePrice - b.basePrice;
    if (state.sort === "price-high") return b.basePrice - a.basePrice;
    if (state.sort === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });
}

function renderProducts() {
  const list = filteredProducts();
  const currentLang = state.lang || "en";
  const productCountText = currentLang === "ar"
    ? `${list.length} ${list.length === 1 ? t("resultCountProduct") : t("resultCountProducts")}`
    : `${list.length} ${list.length === 1 ? "product" : "products"}`;
  resultCount.textContent = productCountText;

  if (!list.length) {
    productGrid.innerHTML = `<div class="empty-state"><strong>${t("noProductsFound")}</strong><p>${t("tryDifferentSearch")}</p></div>`;
    return;
  }

  if (!productGrid) return;
  productGrid.innerHTML = list.map((product, index) => {
    const name = product.name;
    const tag = currentLang === "ar" && product.tagAr ? product.tagAr : product.tag;

    return `
      <article class="product-card" style="--delay: ${index * 65}ms">
        <a class="product-media" href="product.html?id=${product.id}" aria-label="View ${name}">
          <span class="frame-preview frame-preview-black"></span>
          <img src="${product.image}" alt="${name} ${currentLang === "ar" ? "بوستر مؤطر" : "framed poster"}">
          <span class="product-tag">${tag}</span>
          ${galleryBadge(product) ? `<span class="product-gallery-badge">${galleryBadge(product)}</span>` : ""}
        </a>
        <div class="product-info">
          <h3>${name}</h3>
          <div class="product-meta">
            <span>${t("from")} ${money(product.basePrice)}</span>
            <span>${t("sizesAvailable")}</span>
          </div>
          <div class="swatch-row" aria-label="Available frames">
            ${product.frames.map((frame) => `<span class="frame-swatch ${frame.toLowerCase()}">${getFrameOptionLabel(frame)}</span>`).join("")}
          </div>
          <div class="card-actions">
            <a href="product.html?id=${product.id}">${t("customize")}</a>
            <button type="button" data-quick-add="${product.id}">${product.isCustom ? t("uploadDesignBtn") : t("addPosterBtn")}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderDetail(productId) {
  const product = getProduct(productId);
  if (!product) {
    productDetail.hidden = true;
    return;
  }

  const currentLang = state.lang || "en";
  const name = product.name;
  const tag = currentLang === "ar" && product.tagAr ? product.tagAr : product.tag;
  const desc = currentLang === "ar" && product.descriptionAr ? product.descriptionAr : product.description;

  state.selectedProduct = product.id;
  if (!product.sizes[state.detailSize]) state.detailSize = Object.keys(product.sizes)[0];
  if (!product.frames.includes(state.detailFrame)) state.detailFrame = product.frames[0];

  if (productDetail) {
    document.title = `${name} — ${t("brandTitle")}`;
    productDetail.hidden = false;
    const previewImage = product.isCustom && state.customUpload ? state.customUpload.url : product.image;
    productDetail.innerHTML = `
      <article class="detail">
      <div class="detail-gallery">
        <div class="detail-main-image frame-${state.detailFrame.toLowerCase()}">
          <img id="detailMainImage" src="${previewImage}" alt="${name} ${currentLang === "ar" ? "معرض البوستر" : "framed poster gallery image"}">
        </div>
        <div class="thumb-row">
          ${product.gallery.map((image) => `
            <button type="button" class="${image === previewImage ? "is-active" : ""}" data-gallery-image="${image}" aria-label="Show gallery image">
              <img src="${image}" alt="${name} thumbnail">
            </button>
          `).join("")}
        </div>
      </div>
      <div class="detail-copy">
        <a class="back-link" href="index.html">${t("backToShop")}</a>
        <p class="eyebrow">${tag} / ${t("detailEyebrow")}</p>
        <h2>${name}</h2>
        <p>${desc}</p>
        <div class="price-line">
          <span>${money(itemUnitPrice(product, state.detailSize, state.detailFrame))}</span>
          <small>${state.detailSize} ${currentLang === "ar" ? "سم مع" : "cm with"} ${getFrameOptionLabel(state.detailFrame)}</small>
        </div>
        <div class="variant-row">
          <span class="eyebrow">${t("detailPosterSize")}</span>
          <div class="variant-options">
            ${Object.entries(product.sizes).map(([size, price]) => `
              <button type="button" class="${size === state.detailSize ? "is-selected" : ""}" data-size="${size}">
                ${size} ${currentLang === "ar" ? "سم" : "cm"} - ${money(price)}
              </button>
            `).join("")}
          </div>
        </div>
        <div class="variant-row">
          <span class="eyebrow">${t("detailFrameColor")}</span>
          <div class="variant-options frame-options">
            ${product.frames.map((frame) => `
              <button type="button" class="${frame === state.detailFrame ? "is-selected" : ""}" data-frame="${frame}">
                <span class="dot ${frame.toLowerCase()}"></span>
                <span>${getFrameOptionLabel(frame)} + ${money(frameOptions[frame].price)}${frameOptions[frame].hint ? `<small class="choice-hint">${getFrameOptionHint(frame)}</small>` : ""}</span>
              </button>
            `).join("")}
          </div>
        </div>
        ${product.isCustom ? `
          <label class="upload-box">
            <div class="upload-box-content">
              <span>${t("detailUploadLabel")}</span>
              <small>${state.customUpload ? `${t("detailSelectedFile")}${state.customUpload.name}` : t("detailUploadHint")}</small>
            </div>
            <input type="file" accept="image/*" data-upload-design>
          </label>
        ` : ""}
        <button class="detail-add" type="button" data-detail-add>${product.isCustom ? t("detailAddBtn") : t("detailAddPosterBtn")}</button>
      </div>
    </article>
  `;

    if (productGrid) {
      productDetail.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

function addToCart(productId, size = "30x40", frame = "Black") {
  const product = getProduct(productId);
  if (!product) return;
  if (product.isCustom && !state.customUpload) {
    renderDetail(product.id);
    showToast(t("pleaseUploadAlert"));
    return;
  }
  const resolvedSize = product.sizes[size] ? size : Object.keys(product.sizes)[0];
  const resolvedFrame = product.frames.includes(frame) ? frame : product.frames[0];
  const upload = product.isCustom && state.customUpload ? {
    name: state.customUpload.name,
    size: state.customUpload.size,
    type: state.customUpload.type,
    url: state.customUpload.url,
    dataUrl: state.customUpload.dataUrl
  } : null;
  const key = product.isCustom
    ? `${product.id}-${resolvedSize}-${resolvedFrame}-${Date.now()}`
    : `${product.id}-${resolvedSize}-${resolvedFrame}`;
  const existing = state.cart.find((item) => item.key === key);

  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      key,
      productId: product.id,
      size: resolvedSize,
      frame: resolvedFrame,
      upload,
      quantity: 1
    });
  }

  hideConfirmation();
  saveCart();
  renderCart();
  openCart();
  flashCartBubble();
  showToast(`${t("addedToCart")} — ${getProductName(product)}`);
}

function cartLineTotal(item) {
  const product = getProduct(item.productId);
  return itemUnitPrice(product, item.size, item.frame) * item.quantity;
}

function cartGrandTotal() {
  return state.cart.reduce((sum, item) => sum + cartLineTotal(item), 0);
}

function renderCart() {
  const totalQuantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCount) cartCount.textContent = totalQuantity;
  if (cartTotal) cartTotal.textContent = money(cartGrandTotal());
  if (!cartItems) return;
  const currentLang = state.lang || "en";

  if (!state.cart.length) {
    cartItems.innerHTML = `<div class="empty-state"><strong>${t("cartEmpty")}</strong><p>${t("cartStartOrderHint")}</p></div>`;
    return;
  }

  cartItems.innerHTML = state.cart.map((item) => {
    const product = getProduct(item.productId);
    const name = product.name;
    return `
      <article class="cart-item">
        <img src="${displayImageForItem(product, item)}" alt="${name}">
        <div>
          <h3>${name}</h3>
          <p>${item.size} ${currentLang === "ar" ? "سم" : "cm"} / ${getFrameOptionLabel(item.frame)}</p>
          ${item.upload ? `<p>${currentLang === "ar" ? "الملف المرفوع:" : "Uploaded:"} ${item.upload.name}</p>` : ""}
          <p>${money(itemUnitPrice(product, item.size, item.frame))} ${t("cartEach")}</p>
        </div>
        <div class="quantity-controls" aria-label="Quantity controls">
          <button type="button" data-qty-minus="${item.key}">-</button>
          <strong>${item.quantity}</strong>
          <button type="button" data-qty-plus="${item.key}">+</button>
        </div>
      </article>
    `;
  }).join("");
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function updateQuantity(key, delta) {
  const item = state.cart.find((cartItem) => cartItem.key === key);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter((cartItem) => cartItem.key !== key);
  }
  hideConfirmation();
  saveCart();
  renderCart();
}

function readCheckoutForm() {
  const fields = checkoutForm.elements;
  return {
    customerName: fields.customerName.value.trim(),
    customerPhone: fields.customerPhone.value.trim(),
    customerAddress: fields.customerAddress.value.trim(),
    paymentMethod: fields.paymentMethod.value
  };
}

function renderConfirmation() {
  const details = readCheckoutForm();
  state.confirmedForm = details;
  const uploadedItems = state.cart.filter((item) => item.upload);
  const currentLang = state.lang || "en";
  const orderTotalLabel = t("confTotal");
  const itemsCountText = currentLang === "ar"
    ? `${state.cart.length} ${state.cart.length === 1 ? t("confItemsCount") : t("confItemsCountPlural")}`
    : `${state.cart.length} customized framed poster ${state.cart.length === 1 ? "item" : "items"}`;

  confirmationSummary.innerHTML = `
    <strong>${orderTotalLabel} ${money(cartGrandTotal())}</strong>
    <span>${details.customerName} / ${details.customerPhone}</span>
    <span>${details.paymentMethod}</span>
    <span>${itemsCountText}</span>
    ${uploadedItems.length ? `
      <div class="uploaded-summary">
        <p class="uploaded-summary-title" style="font-weight: 800; font-size: 0.85rem; margin: 4px 0;">${t("confUploadSummaryTitle")}</p>
        ${uploadedItems.map((item) => {
    const product = getProduct(item.productId);
    const name = product.name;
    return `
            <article>
              <img src="${item.upload.url}" alt="${name} ${currentLang === "ar" ? "معاينة التصميم" : "uploaded design preview"}">
              <span>${item.upload.name}</span>
            </article>
          `;
  }).join("")}
      </div>
    ` : ""}
  `;
  checkoutForm.hidden = true;
  paymentConfirmation.hidden = false;
}

function hideConfirmation() {
  state.confirmedForm = null;
  checkoutForm.hidden = false;
  paymentConfirmation.hidden = true;
}

function buildWhatsAppMessage() {
  const details = state.confirmedForm || readCheckoutForm();
  const currentLang = state.lang || "en";
  const isAr = currentLang === "ar";

  const tMsg = {
    title: isAr ? "طلب جديد من متجر بوستر لاب" : "New Poster Lab Store framed poster order",
    customer: isAr ? "العميل" : "Customer",
    phone: isAr ? "الهاتف" : "Phone",
    address: isAr ? "العنوان" : "Address",
    payment: isAr ? "طريقة الدفع المختارة" : "Payment method selected",
    itemsHeader: isAr ? "المنتجات المطلوبة:" : "Customized framed poster items:",
    category: isAr ? "الفئة" : "Category",
    size: isAr ? "مقاس البوستر" : "Poster size",
    frame: isAr ? "الإطار" : "Frame",
    uploadFile: isAr ? "ملف التصميم المرفوع" : "Uploaded design file",
    productImg: isAr ? "صورة المنتج" : "Product image",
    productLink: isAr ? "رابط صفحة المنتج" : "Product page link",
    qty: isAr ? "الكمية" : "Quantity",
    unitPrice: isAr ? "سعر الوحدة" : "Unit price",
    lineTotal: isAr ? "إجمالي البند" : "Line total",
    uploadNote: isAr
      ? "ملاحظة التصميم المرفوع: قام العميل باختيار هذه الصورة في الموقع؛ يرجى إرفاق نفس الصورة في دردشة الواتساب بعد إرسال هذه الرسالة."
      : "Uploaded image note: customer selected this image in the website; attach the same image in WhatsApp chat after sending this message.",
    description: isAr ? "التفاصيل" : "Details",
    total: isAr ? "إجمالي الطلب" : "Order total",
    paymentPrompt: isAr ? "تفاصيل الدفع المعروضة للعميل:" : "Payment details shown to customer:",
    instapayQR: isAr ? "رابط رمز الاستجابة السريع لإنستاباي" : "Instapay QR image"
  };

  const lines = [
    tMsg.title,
    "",
    `${tMsg.customer}: ${details.customerName}`,
    `${tMsg.phone}: ${details.customerPhone}`,
    `${tMsg.address}: ${details.customerAddress}`,
    `${tMsg.payment}: ${details.paymentMethod}`,
    "",
    tMsg.itemsHeader
  ];

  state.cart.forEach((item, index) => {
    const product = getProduct(item.productId);
    const name = product.name;
    const tag = isAr && product.tagAr ? product.tagAr : product.tag;
    const productLink = `${window.location.origin}/product.html?id=${product.id}`;

    lines.push(
      `${index + 1}. ${name}`,
      `   ${tMsg.category}: ${tag}`,
      `   ${tMsg.size}: ${item.size} cm`,
      `   ${tMsg.frame}: ${getFrameOptionLabel(item.frame)}`,
      `   ${tMsg.productImg}: ${productImageUrl(product.image)}`,
      `   ${tMsg.productLink}: ${productLink}`,
      item.upload ? `   ${tMsg.uploadFile}: ${item.upload.name}` : "",
    );
  });

  return lines.join("\n");
}

function handleCheckout(event) {
  event.preventDefault();
  if (!state.cart.length) {
    showToast(t("confAddFirstAlert"));
    return;
  }
  renderConfirmation();
}

function sendWhatsAppOrder() {
  if (!state.cart.length) {
    showToast(t("confAddFirstAlert"));
    return;
  }
  const message = buildWhatsAppMessage();
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

const searchInput = document.querySelector("#searchInput");
if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderProducts();
  });
}

const categoryFilter = document.querySelector("#categoryFilter");
if (categoryFilter) {
  categoryFilter.addEventListener("change", (event) => {
    state.category = event.target.value;
    renderProducts();
  });
}

const sizeFilter = document.querySelector("#sizeFilter");
if (sizeFilter) {
  sizeFilter.addEventListener("change", (event) => {
    state.size = event.target.value;
    renderProducts();
  });
}

const frameFilter = document.querySelector("#frameFilter");
if (frameFilter) {
  frameFilter.addEventListener("change", (event) => {
    state.frame = event.target.value;
    renderProducts();
  });
}

const sortFilter = document.querySelector("#sortFilter");
if (sortFilter) {
  sortFilter.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProducts();
  });
}

document.addEventListener("click", (event) => {
  const langToggle = event.target.closest("[data-lang-toggle]");
  if (langToggle) {
    toggleLanguage();
    return;
  }

  const quickAdd = event.target.closest("[data-quick-add]");
  if (quickAdd) {
    const product = getProduct(quickAdd.dataset.quickAdd);
    if (product?.isCustom) {
      window.location.href = `product.html?id=${product.id}`;
    } else {
      addToCart(quickAdd.dataset.quickAdd);
    }
  }

  const openButton = event.target.closest("[data-open-cart]");
  if (openButton) openCart();

  const closeButton = event.target.closest("[data-close-cart]");
  if (closeButton) closeCart();

  if (event.target === cartDrawer) closeCart();

  const galleryButton = event.target.closest("[data-gallery-image]");
  if (galleryButton) {
    const selectedImage = galleryButton.dataset.galleryImage;
    const detailImage = document.querySelector("#detailMainImage");
    if (detailImage) detailImage.src = selectedImage;

    document.querySelectorAll("[data-gallery-image]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.galleryImage === selectedImage);
    });
  }

  const sizeButton = event.target.closest("[data-size]");
  if (sizeButton) {
    state.detailSize = sizeButton.dataset.size;
    renderDetail(state.selectedProduct);
  }

  const frameButton = event.target.closest("[data-frame]");
  if (frameButton) {
    state.detailFrame = frameButton.dataset.frame;
    renderDetail(state.selectedProduct);
  }

  const detailAdd = event.target.closest("[data-detail-add]");
  if (detailAdd) addToCart(state.selectedProduct, state.detailSize, state.detailFrame);

  const minusButton = event.target.closest("[data-qty-minus]");
  if (minusButton) updateQuantity(minusButton.dataset.qtyMinus, -1);

  const plusButton = event.target.closest("[data-qty-plus]");
  if (plusButton) updateQuantity(plusButton.dataset.qtyPlus, 1);

  const editCheckout = event.target.closest("[data-edit-checkout]");
  if (editCheckout) hideConfirmation();

  const sendWhatsApp = event.target.closest("[data-send-whatsapp]");
  if (sendWhatsApp) sendWhatsAppOrder();
});

document.addEventListener("change", (event) => {
  const uploadInput = event.target.closest("[data-upload-design]");
  if (!uploadInput) return;
  const file = uploadInput.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const dataUrl = reader.result;
    if (state.customUpload?.url && state.customUpload.isObjectUrl) URL.revokeObjectURL(state.customUpload.url);
    state.customUpload = {
      name: file.name,
      size: file.size,
      type: file.type || "image",
      url: dataUrl,
      dataUrl,
      isObjectUrl: false
    };
    saveCustomUpload(state.customUpload);
    renderDetail(state.selectedProduct);
  };
  reader.readAsDataURL(file);
});

checkoutForm.addEventListener("submit", handleCheckout);

// Run initial configurations
updateLanguageUI();
if (productGrid) renderProducts();
renderCart();

const pageProductId = getPageProductId();
if (pageProductId) {
  renderDetail(pageProductId);
} else if (!productGrid && productDetail) {
  productDetail.hidden = false;
  productDetail.innerHTML = `<div class="empty-state"><strong>${t("noProductsFound")}</strong><p><a href="index.html">${t("heroActionShop")}</a></p></div>`;
}
