import { SvgFb, SvgIn, SvgIns, SvgX } from "./ui/Svg";

export default function FooterSocials() {
  return (
    <>
      <a href="#" className="px-3 text-gray-7 hover:text-white">
        <SvgFb width="22" height="22"></SvgFb>
      </a>
      <a href="#" className="px-3 text-gray-7 hover:text-white">
        <SvgX width="22" height="22"></SvgX>
      </a>
      <a href="#" className="px-3 text-gray-7 hover:text-white">
        <SvgIn width="22" height="22"></SvgIn>
      </a>
      <a href="#" className="px-3 text-gray-7 hover:text-white">
        <SvgIns width="22" height="22"></SvgIns>
      </a>
    </>
  );
}
