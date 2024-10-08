import TeamSocials from "./TeamSocials";
import { TeamSvg1 } from "./ui/Svg";

// eslint-disable-next-line react/prop-types
export default function TeamSingleCard({ team }) {
  const { id, name, jobTitle, image, social } = team || {};
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
        <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
          <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
            <img
              src={image}
              alt="team image"
              className="h-[120px] w-[120px] rounded-full"
            />
            <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
            <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
              <TeamSvg1></TeamSvg1>
            </span>
          </div>
          <div className="text-center">
            <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
              {name}
            </h4>
            <p className="mb-5 text-sm text-body-color dark:text-dark-6">
              {jobTitle}
            </p>
            <div className="flex items-center justify-center gap-5">
              {/* Load Members Social link */}
              <TeamSocials key={id} social={social}></TeamSocials>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
