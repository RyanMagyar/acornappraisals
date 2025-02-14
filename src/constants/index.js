import {
  serviceIcon1,
  serviceIcon2,
  serviceIcon3,
  serviceIcon4,
  serviceIcon5,
  serviceIcon6,
  benefitCard1,
  benefitCard2,
  benefitCard3,
  benefitCard4,
  benefitCard5,
  benefitCard6,
  benefitImage1,
  benefitImage2,
  benefitImage3,
  benefitImage4,
  benefitImage5,
  benefitImage6,
} from "../app/public";

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
    url: "contact",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Get A Quote",
    url: "",
    onlyMobile: true,
  },
];

export const services = [
  {
    id: "0",
    title: "Prelisting Appraisals",
    text: "Get a competitive edge with a professional pre-listing appraisal. Our accurate, reliable valuations ensure your home is priced right from the start, helping you sell faster and for the best price.",
    backgroundUrl: benefitCard1,
    iconUrl: serviceIcon3,
    imageUrl: benefitImage1,
    QuoteType: "Prelisting",
  },
  {
    id: "1",
    title: "Appraisal Management Company Services",
    text: "Our state-licensed, experienced team provides comprehensive valuations with precision and professionalism—partner with us for top-quality appraisal services.",
    backgroundUrl: benefitCard3,
    iconUrl: serviceIcon1,
    imageUrl: benefitImage3,
    light: true,
    QuoteType: "Financial",
  },
  {
    id: "2",
    title: "Estate Tax or Date of Death Appraisals",
    text: "Receive accurate current or retrospective valuations for assets in the event of an inheritance or death. Our reliable valuations provide the essential documentation needed for tax filings and estate planning.",
    backgroundUrl: benefitCard2,
    iconUrl: serviceIcon4,
    imageUrl: benefitImage2,
    QuoteType: "Estate",
  },
  {
    id: "3",
    title: "Real Estate Assessor Appeal",
    text: "If you believe your property has been overvalued, a professional independent appraisal can help make your case to lower your property taxes.",
    backgroundUrl: benefitCard4,
    iconUrl: serviceIcon5,
    imageUrl: benefitImage4,
    light: true,
    QuoteType: "Assessor",
  },
  {
    id: "4",
    title: "Divorce Appraisals",
    text: "Navigate the complexities of property division with a certified appraisal through Acorn Appraisal Services. Our impartial and accurate valuations provide the clarity needed for fair and equitable settlements",
    backgroundUrl: benefitCard5,
    iconUrl: serviceIcon2,
    imageUrl: benefitImage5,
    QuoteType: "Divorce",
  },
  {
    id: "5",
    title: "Other Services",
    text: "We also offer other services such as financial planning and trusts appraisals, bankruptcy appraisals, PMI removal appraisals, and more.",
    backgroundUrl: benefitCard6,
    iconUrl: serviceIcon6,
    imageUrl: benefitImage6,
    QuoteType: "",
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
    value: "Estate",
    label: "Estate Tax/Date of Death",
  },
  {
    value: "Assessor",
    label: "Real Estate Assessor",
  },
  {
    value: "Divorce",
    label: "Divorce",
  },
  {
    value: "Financial",
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
