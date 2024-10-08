import { SvgFb, SvgIn, SvgIns, SvgX } from "./ui/Svg";

export default function FooterSocials() {
  return (
    <>
      <a
        href="javascript:void(0)"
        className="px-3 text-gray-7 hover:text-white"
      >
        <SvgFb width="22" height="22"></SvgFb>
      </a>
      <a
        href="javascript:void(0)"
        className="px-3 text-gray-7 hover:text-white"
      >
        <SvgX width="22" height="22"></SvgX>
      </a>
      <a
        href="javascript:void(0)"
        className="px-3 text-gray-7 hover:text-white"
      >
        <SvgIn width="22" height="22"></SvgIn>
      </a>
      <a
        href="javascript:void(0)"
        className="px-3 text-gray-7 hover:text-white"
      >
        <SvgIns width="22" height="22"></SvgIns>
      </a>
    </>
  );
}
