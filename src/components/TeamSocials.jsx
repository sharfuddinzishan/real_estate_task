import { SvgFb, SvgIns, SvgX } from "./ui/Svg";

// eslint-disable-next-line react/prop-types
export default function TeamSocials({ social }) {
  const { facebook, twitter, instagram } = social || {};
  return (
    <>
      <a
        href={facebook}
        target="_blank"
        className="text-dark-6 hover:text-primary"
      >
        <SvgFb width="18" height="18"></SvgFb>
      </a>
      <a
        href={twitter}
        target="_blank"
        className="text-dark-6 hover:text-primary"
      >
        <SvgX width="18" height="18"></SvgX>
      </a>
      <a
        href={instagram}
        target="_blank"
        className="text-dark-6 hover:text-primary"
      >
        <SvgIns width="18" height="18"></SvgIns>
      </a>
    </>
  );
}
