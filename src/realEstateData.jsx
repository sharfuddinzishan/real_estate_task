// Data For Features Section
import {
  FeatureSvg1,
  FeatureSvg2,
  FeatureSvg3,
  FeatureSvg4,
} from "./components/ui/Svg";

const realEstateData = {
  featuresData: [
    {
      id: "feature-1",
      title: "Premium Property Listings",
      description:
        "Discover an array of hand-picked properties that meet the highest standards of luxury and comfort.",
      svg: <FeatureSvg1 />,
    },
    {
      id: "feature-2",
      title: "Personalized Property Matching",
      description:
        "Our advanced matching system pairs you with properties that align with your specific needs and desires.",
      svg: <FeatureSvg2 />,
    },
    {
      id: "feature-3",
      title: "Expert Guidance and Support",
      description:
        "Benefit from the expertise of our dedicated team of real estate professionals.",
      svg: <FeatureSvg3 />,
    },
    {
      id: "feature-4",
      title: "Virtual Tours",
      description:
        "Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home.",
      svg: <FeatureSvg4 />,
    },
  ],
  propertiesData: [
    {
      id: "flat-1",
      title: "Modern 3-Bedroom Apartment",
      monthlyPrice: 50000,
      image:
        "https://i.bikroy-st.com/full-furnished-apartment-rent-for-rent-dhaka-42/84d1072c-15a3-42ba-85ac-8d26329dc2f4/620/466/fitted.jpg",
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: "flat-2",
      title: "Luxurious 4-Bedroom Flat in Gulshan",
      monthlyPrice: 100000,
      image:
        "https://i.bikroy-st.com/3bed-semi-furnished-luxury-apartment-for-rent-in-banani-for-rent-dhaka/95fbb9f0-8f78-4b77-a12c-9f960e02c9a8/620/466/fitted.jpg",
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      id: "flat-3",
      title: "Cozy 2-Bedroom Apartment",
      monthlyPrice: 35000,
      image:
        "https://i.bikroy-st.com/brand-new-apartment-in-banani-for-rent-dhaka-3/f022622d-f1ff-4914-b12a-a911fe11199b/620/466/fitted.jpg",
      bedrooms: 2,
      bathrooms: 1,
    },
    {
      id: "flat-4",
      title: "Spacious 3-Bedroom Flat in Banani",
      monthlyPrice: 65000,
      image:
        "https://i.bikroy-st.com/nice-looking-luxury-2200-sft-3-bedroom-apt-at-gulshan-2-north-side-for-rent-dhaka/7566bfbe-9552-43e8-9c63-c6099c71c41d/620/466/fitted.jpg",
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: "flat-5",
      title: "Charming 1-Bedroom Studio in Demra",
      monthlyPrice: 20000,
      image:
        "https://i.bikroy-st.com/full-furnish-3-bed-room-apt-rent-in-gulshan-2-north-side-for-rent-dhaka/6f960942-dfac-400f-8d8e-974577b6d9ca/620/466/fitted.jpg",
      bedrooms: 1,
      bathrooms: 1,
    },
    {
      id: "flat-6",
      title: "Elegant 2-Bedroom Apartment in Uttara",
      monthlyPrice: 30000,
      image:
        "https://i.bikroy-st.com/beautiful-3-bed-full-furnished-apartment-for-rent-in-north-gulshan-for-rent-dhaka/b843d4e8-0d50-4c92-8258-29e6b1e78ef1/620/466/fitted.jpg",
      bedrooms: 2,
      bathrooms: 2,
    },
  ],
  teamsData: [
    {
      id: "client-1",
      name: "Nusrat Ahmed",
      jobTitle: "CEO, Rahim Group",
      image: "./assets/images/team/team-01.png",
      social: {
        facebook: "https://facebook.com/nusrat.ahmed",
        twitter: "https://x.com/nusratahmed",
        instagram: "https://instagram.com/nusrat.ahmed",
      },
    },
    {
      id: "client-2",
      name: "Fatema Nasrin",
      jobTitle: "Marketing Director",
      image: "./assets/images/team/team-02.png",
      social: {
        facebook: "https://facebook.com/fatema.nasrin",
        twitter: "https://x.com/fatemanasrin",
        instagram: "https://instagram.com/fatema.nasrin",
      },
    },
    {
      id: "client-4",
      name: "Tania Akter",
      jobTitle: "Product Managers",
      image: "./assets/images/team/team-03.png",

      social: {
        facebook: "https://facebook.com/tania.akter",
        twitter: "https://x.com/taniaakter",
        instagram: "https://instagram.com/tania.akter",
      },
    },
    {
      id: "client-4",
      name: "Nusrat Jahan",
      jobTitle: "Creative Director",
      image: "./assets/images/team/team-04.png",
      social: {
        facebook: "https://facebook.com/nusrat.jahan",
        twitter: "https://x.com/nusratjahan",
        instagram: "https://instagram.com/nusrat.jahan",
      },
    },
  ],
  faqData: [
    {
      id: "faq-1",
      question: "What are the requirements to rent?",
      answer:
        "To rent a property, you'll typically need to provide proof of income, a valid ID, and complete a rental application. A security deposit and first month's rent are also usually required.",
    },
    {
      id: "faq-2",
      question: "How do I schedule a property viewing?",
      answer:
        "You can schedule a property viewing by contacting the property manager or real estate agent. Most listings provide contact details, or you can request a viewing through the property listing platform.",
    },
    {
      id: "faq-3",
      question: "Are utilities included in the rent?",
      answer:
        "In most cases, utilities like water, electricity, and gas are not included in the rent. However, some properties may cover certain utilities, so it's important to clarify with the landlord or agent before signing a lease.",
    },
    {
      id: "faq-4",
      question: "Can I have pets in a rental property?",
      answer:
        "Pet policies vary by property. Some rentals allow pets with an additional pet deposit or fee, while others may have restrictions on the type or size of pets. Be sure to confirm the pet policy with the landlord before renting.",
    },
  ],
  blogData: [
    {
      id: "blog-1",
      image: "./assets/images/blog/blog-01.jpg",
      text: "Exploring the Vibrant Flat Market in Dhaka: A Guide for New Homebuyers. Discover the various neighborhoods of Dhaka and understand what each area has to offer, from luxurious apartments in Gulshan to affordable flats in Mirpur.",
    },
    {
      id: "blog-2",
      image: "./assets/images/blog/blog-02.jpg",
      text: "Top 5 Tips for Renting a Flat in Dhaka. Understand the renting process, know your rights as a tenant, and discover the best practices for finding your ideal flat in one of the busiest cities in South Asia.",
    },
    {
      id: "blog-3",
      image: "./assets/images/blog/blog-03.jpg",
      text: "The Future of Real Estate in Dhaka: Trends and Predictions. Explore how the real estate market in Dhaka is evolving, focusing on sustainable living, smart homes, and the impact of urbanization on housing.",
    },
  ],
};

export default realEstateData;
