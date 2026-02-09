"use client";

export default function TieredSystemSection() {
  const tiers = [
    {
      title: "Internship",
      description:
        "Begin your journey with paid mentorship programs designed for students",
      color: "bg-pink-500",
    },
    {
      title: "Junior Associate",
      description:
        "Apply your skills in real-world projects with guidance from seniors",
      color: "bg-purple-500",
    },
    {
      title: "Senior Lead",
      description:
        "Manage teams and take ownership of critical business deliverables",
      color: "bg-blue-500",
    },
    {
      title: "Executive",
      description:
        "Direct global operations and shape strategy from anywhere in Africa",
      color: "bg-dark-green",
    },
  ];

  return (
    <div className="flex flex-col">
      <section
        className="py-20 px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-tier.jpg')" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-light-green border border-white shadow-sm">
              <div className="w-2 h-2 rounded-full bg-dark-green" />
              <span className="text-dark-green text-sm font-medium tracking-wide">
                TIERED SYSTEM
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-black tracking-tight">
              Grow With Us
            </h2>

            <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
              A clear path from campus to the corner office
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto px-4 lg:px-0">
            <div className="relative">
              <div className="absolute left-[calc(0.5rem-1px)] lg:left-[calc(0.625rem-1px)] top-2 bottom-4 w-0.5 bg-black" />

              <div className="space-y-10">
                {tiers.map((tier, index) => (
                  <div
                    key={tier.title}
                    className="relative flex items-start gap-6 lg:gap-8"
                  >
                    <div className="relative z-10 flex-shrink-0 mt-1">
                      <div
                        className={`w-4 h-4 lg:w-5 lg:h-5 rounded-full ${tier.color} shadow-sm`}
                      />
                    </div>

                    <div className="flex-1 pt-0">
                      <h3 className="text-xl font-bold mb-1 text-black">
                        {tier.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base max-w-2xl">
                        {tier.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
