import {
  serviceIcon1,
  serviceIcon2,
  serviceIcon3,
  serviceIcon4,
  serviceIcon5,
  serviceIcon6,
  benefitImage1,
  benefitImage2,
  benefitImage3,
  benefitImage4,
  benefitImage5,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "#services",
  },
  {
    id: "1",
    title: "Area of Service",
    url: "#map",
  },
  {
    id: "2",
    title: "About Us",
    url: "#about",
  },
  {
    id: "4",
    title: "Contact Us",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Get A Quote",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const services = [
  {
    id: "0",
    title: "Prelisting Appraisals",
    text: "Get a competitive edge with a professional pre-listing appraisal. Our accurate, reliable valuations ensure your home is priced right from the start, helping you sell faster and for the best price.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: serviceIcon3,
    imageUrl: benefitImage1,
  },
  {
    id: "1",
    title: "Estate Tax or Date of Death Appraisals",
    text: "Receive accurate current or retrospective valuations for assets in the event of an inheritance or death. Our reliable valuations provide the essential documentation needed for tax filings and estate planning.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: serviceIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Financial Planning & Trusts",
    text: "Ensure peace of mind with a accurate appraisal for real estate holdings. Our detailed valuations provide the clarity you need to make informed decisions for your estate and financial future.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: serviceIcon1,
    imageUrl: benefitImage3,
  },
  {
    id: "3",
    title: "Real Estate Assessor Appeal",
    text: "If you believe your property has been overvalued, a professional independent appraisal can help make your case to lower your property taxes.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: serviceIcon5,
    imageUrl: benefitImage4,
    light: true,
  },
  {
    id: "4",
    title: "Divorce Appraisals",
    text: "Navigate the complexities of property division with a certified appraisal through Acorn Appraisal Services. Our impartial and accurate valuations provide the clarity needed for fair and equitable settlements",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: serviceIcon2,
    imageUrl: benefitImage5,
  },
  {
    id: "5",
    title: "Other Services",
    text: "Find out about our other services such as bankruptcy appraisals, PMI removal appraisals, and more.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: serviceIcon6,
    imageUrl: benefitImage5,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
export const states = [
  {
    value: "Michigan",
    label: "Michigan",
  },
];
export const referrals = [
  {
    value: "Google",
    label: "Google",
  },
  {
    value: "Yelp",
    label: "Yelp",
  },
  {
    value: "Facebook",
    label: "Facebook",
  },
  {
    value: "Angi",
    label: "Angi",
  },
  {
    value: "Referral",
    label: "Referral",
  },
  {
    value: "Other",
    label: "Other",
  },
];
export const timeSpans = [
  {
    value: "Within a Week",
    label: "Within a Week",
  },
  {
    value: "1-2 Weeks",
    label: "1-2 Weeks",
  },
  {
    value: "2-3 Weeks",
    label: "2-3 Weeks",
  },
  {
    value: "3-4 Weeks",
    label: "3-4 Weeks",
  },
  {
    value: "4-6 Weeks",
    label: "4-6 Weeks",
  },
  {
    value: "6-8 Weeks",
    label: "6-8 Weeks",
  },
  {
    value: "2+ Months",
    label: "2+ Months",
  },
];

export const propertySize = [
  {
    value: "0-600 sq. ft.",
    label: "0-600 sq. ft.",
  },
  {
    value: "600-1,100 sq. ft.",
    label: "600-1,100 sq. ft.",
  },
  {
    value: "1,100-1,600 sq. ft.",
    label: "1,100-1,600 sq. ft.",
  },
  {
    value: "1,600-2,100 sq. ft.",
    label: "1,600-2,100 sq. ft.",
  },
  {
    value: "2,100-2,600 sq. ft.",
    label: "2,100-2,600 sq. ft.",
  },
  {
    value: "2,600-3,100 sq. ft.",
    label: "2,600-3,100 sq. ft.",
  },
  {
    value: "3,100-3,600 sq. ft.",
    label: "3,100-3,600 sq. ft.",
  },
  {
    value: "3,600-4,100 sq, ft.",
    label: "3,600-4,100 sq, ft.",
  },
  {
    value: "4,100+ sq. ft.",
    label: "4,100+ sq. ft.",
  },
];

export const appraisalTypes = [
  {
    value: "Prelisting",
    label: "Prelisting",
  },
  {
    value: "Estate Tax/Date of Death",
    label: "Estate Tax/Date of Death",
  },
  {
    value: "Real Estate Assessor",
    label: "Real Estate Assessor",
  },
  {
    value: "Divorce",
    label: "Divorce",
  },
  {
    value: "Financial Planning/Trusts",
    label: "Financial Planning/Trusts",
  },
  {
    value: "PMI",
    label: "PMI",
  },
  {
    value: "Bankruptcy",
    label: "Bankruptcy",
  },
  {
    value: "Other",
    label: "Other",
  },
];
