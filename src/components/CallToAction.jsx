import { CallToSvg1, CallToSvg2 } from "./ui/Svg";

export default function CallToAction() {
  return (
    <>
      {/* <!-- ====== CTA Section Start --> */}
      <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
        <div className="container mx-auto">
          <div className="relative overflow-hidden">
            <div className="-mx-4 flex flex-wrap items-stretch">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[570px] text-center">
                  <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                    <span>What Are You Looking For?</span>
                    <br />
                    <span className="text-3xl font-normal md:text-[40px]">
                      Get Started Now
                    </span>
                  </h2>
                  <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
                    Don&apos;t miss out on the opportunity to elevate your
                    experience and transform your journey!
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
                  >
                    Let&apos;s have a meeting
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* SVG For Background */}
          <span className="absolute left-0 top-0">
            <CallToSvg1></CallToSvg1>
          </span>
          <span className="absolute bottom-0 right-0">
            <CallToSvg2></CallToSvg2>
          </span>
        </div>
      </section>
      {/* <!-- ====== CTA Section End --> */}
    </>
  );
}
