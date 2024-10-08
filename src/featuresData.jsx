import {
  FeatureSvg1,
  FeatureSvg2,
  FeatureSvg3,
  FeatureSvg4,
} from "./components/ui/Svg";

const featuresData = [
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
];

export default featuresData;
