"use client";

import {
  MoneyWavyIcon,
  ShieldCheckIcon,
  GraduationCapIcon,
} from "@phosphor-icons/react";

export default function FeaturesSection() {
  const features = [
    {
      icon: MoneyWavyIcon,
      title: "Local Payments",
      description:
        "Get paid in your local currency, directly to your local bank account.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Vetted Employers",
      description:
        "Work with verified local companies committed to fair remote work practices.",
    },
    {
      icon: GraduationCapIcon,
      title: "Skill Matching",
      description:
        "Our AI matches your academic background and skill set with relevant roles.",
    },
  ];

  return (
    <section
      className="py-20 px-6 mx-5 md:mx-[80px] rounded-[12px] bg-black bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: "url('/features-bg.png')" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 space-y-4 hover:shadow-xl transition-shadow"
              >
                <Icon className="text-black" size={32} weight="fill" />

                <h3 className="text-xl font-bold text-black">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
