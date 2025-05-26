const About = () => {
  return (
    <section className="pt-20">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#0055A2] mb-8">About Us</h1>

            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Welcome to SLT Mobitel Training Program, where innovation meets
                passion. Established with a commitment to excellence in
                telecommunications and technology education, we strive to
                develop the next generation of industry professionals.
              </p>

              <p>
                Our dedicated team of experienced instructors and industry
                experts is driven by a shared vision: to bridge the gap between
                academic knowledge and practical industry skills. At SLT
                Mobitel, we believe in empowering individuals through
                comprehensive training programs that prepare them for successful
                careers in the telecommunications sector.
              </p>

              <p>
                Join us on this exciting journey as we shape the future of
                telecommunications in Sri Lanka and beyond.
              </p>
            </div>

            <button className="bg-[#0055A2] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 mt-6">
              Learn more
            </button>
          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/about-section.jpg"
                alt="Team illustration showing diverse group of professionals"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
