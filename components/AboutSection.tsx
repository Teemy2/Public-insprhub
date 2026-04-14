import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 lg:py-24 px-5 md:px-[80px] mt-16 md:mt-24 bg-[#121212]"
    >
      <div className="w-full mx-auto flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10">
        <div className="hidden lg:flex w-full lg:w-[40%] flex-col lg:h-auto">
          <div className="relative flex-1 w-[56%] self-start z-10 rounded-[24px] overflow-hidden bg-[#2a2a2a]">
            <Image
              src="/abt-1.jpg"
              alt="Join INSPR"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative flex-1 w-[56%] self-end mr-[15%] z-20 -mt-[12%] rounded-[24px] overflow-hidden bg-[#2a2a2a]">
            <Image
              src="/abt-2.jpg"
              alt="Join INSPR"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative flex-1 w-[56%] self-start z-30 -mt-[12%] rounded-[24px] overflow-hidden bg-[#2a2a2a]">
            <Image
              src="/abt-3.jpg"
              alt="Join INSPR"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative flex-1 w-[56%] self-end mr-[15%] z-40 -mt-[12%] rounded-[24px] overflow-hidden bg-[#2a2a2a]">
            <Image
              src="/abt-4.jpg"
              alt="Join INSPR"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-[60%] flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-light-green border border-white shadow-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-dark-green" />
            <span className="text-dark-green text-sm font-medium tracking-wide uppercase">
              About Us
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            A new pathway to access meaningful opportunities
          </h2>

          <div className="space-y-6 text-white leading-relaxed">
            <p>
              INSPR is building a new pathway for young Africans to gain
              real-world experience, develop practical skills, and access
              meaningful opportunities before and after graduation.
            </p>
            <p>
              We connect students and early career talent to structured work,
              internships, and projects that help them grow, earn locally, and
              build credible professional profiles. Beyond access, we focus
              strongly on ensuring a culture of excellence through structured
              development, assessment, and performance standards, equipping
              every talent with a strong work ethic, communication,
              accountability, and delivery. We are creating a trusted ecosystem
              where talent is not only visible, but reliable, work-ready, and
              globally competitive.
            </p>
            <p>
              Our mission is to strengthen Africa&apos;s workforce from the
              ground up and restore confidence in African professionals by
              prioritizing credibility, quality, real experience, and culture.
            </p>
            <p>INSPR is for a generation ready to learn, build, and lead.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
