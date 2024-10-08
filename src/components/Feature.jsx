import featuresData from "../featuresData";
import FeatureSingleCard from "./FeatureSingleCard";

export default function Feature() {
  return (
    <>
      {/* <!-- ====== Features Section Start --> */}
      <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Features
                </span>
                <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  Main Features Of Play
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            {/* Load Features Data From JS object */}
            {featuresData.map((feature) => (
              <FeatureSingleCard
                key={feature.id}
                feature={feature}
              ></FeatureSingleCard>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ====== Features Section End --> */}
    </>
  );
}
