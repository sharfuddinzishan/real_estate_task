import teamsData from "../teamsData";
import TeamSingleCard from "./TeamSingleCard";

export default function Team() {
  return (
    <>
      {/* <!-- ====== Team Section Start --> */}
      <section
        id="team"
        className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
      >
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Team Members
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Clients
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Our Clients: Heart of Our Success. We cherish the opportunity
                  to serve our clients and are grateful for their trust in us.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center">
            {teamsData.map((team) => (
              <TeamSingleCard key={team.id} team={team}></TeamSingleCard>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ====== Team Section End --> */}
    </>
  );
}
