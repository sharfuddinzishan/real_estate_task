import FooterBlogs from "./FooterBlogs";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  return (
    <>
      <footer className="relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-10 w-full">
                <a
                  href="javascript:void(0)"
                  className="mb-6 inline-block max-h-[100px]"
                >
                  <img
                    src="assets/images/logo/logo.svg"
                    alt="logo"
                    className="max-w-full"
                  />
                </a>
                <p className="mb-8 text-base text-gray-7 lg:max-w-[270px]">
                  We create digital experiences for brands and companies by
                  using technology.
                </p>
                <div className="-mx-3 flex items-center">
                  <FooterSocials></FooterSocials>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-white">
                  About Us
                </h4>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-white">
                  Features
                </h4>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      How it works
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Refund policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <FooterBlogs></FooterBlogs>
          </div>
        </div>
      </footer>
    </>
  );
}
