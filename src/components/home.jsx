const Home = () => {
  const jobCards = [
    {
      title: "Trainee Network Engineers",
      description:
        "We are hiring new training network engineers for SLTMobitel. Only an associate degree, a bachelor's degree in computer science, information technology, computer engineering, or a related field undergraduates (3rd year, 4th year), and fresh graduates are preferred.",
      requirements: [
        "No job experiences are needed.",
        "Networking knowledge.",
        "Operating systems knowledge.",
        "Network devices and security knowledge.",
        "Networking device configuration knowledge.",
      ],
    },
    {
      title: "ACCOUNTANT-FINANCIAL ACCOUNTING",
      description:
        "Sri Lanka Telecom is in search of high caliber consultants and qualified individuals seeking to diversify their career prospects and develop expertise across a wide range of tasks in financial accounting in a highly IT focused work environment and enhanced to collectively build our company.",
      requirements: [
        "Professional qualification in accounting.",
        "Experience will be given to the candidates who are fresh entrants.",
        "Be a resilient leader with excellent interpersonal and communication skills.",
      ],
    },
    {
      title: "ENGINEERS",
      description:
        "As an Engineer of the pioneering ICT solutions provider, you will be a distinguishing member of our team, which will be responsible for designing, implementing, operating and maintaining our state of the art ICT infrastructure.",
      requirements: [
        "The role requires to be Engineering (Electrical or Technology).",
        "First class/Second class upper degree by UGC, Sri Lanka and related to 4 years at 4 levels and earned in 3, 4 or 5th of the Academic Member of the Institute of Engineers, Sri Lanka (AMIE).",
        "Thorough knowledge and experience in the field of Data Centre Network (Security) Design Engineer, Hybrid Cloud Deployment & Management and the use of IT & Digital Platforms and tools.",
      ],
    },
    {
      title: "TECHNICIANS",
      description:
        "Technicians are mainly responsible to install, maintain and repair electronic communications equipment to standards that meet our performance targets and quality systems. Examine telecommunications equipment and systems to find and repair faults.",
      requirements: [
        "Knowledge of electronic main carrying various form and signal Language and Mathematics and be fluent speak and write using GTC.",
        "Should have obtained Sri-Est Competence Certificate NVQ-6 in the relevant field equivalent to HND Level 4.",
        "Telecommunication / Electrical/Electronic SLT/Green / Air Conditioning etc.",
      ],
    },
  ];

  return (
    <section className="relative">
      <div className="w-full flex justify-center pt-14 bg-[#0E1338]">
        <img
          src="/slt logo 2.png"
          alt="SLT Logo"
          className="w-[1000px] h-[470px]"
        />
      </div>
      <div className="relative bg-white w-full rounded-t-[65px] p-8 -mt-16 z-10">
        <div className="flex gap-12 w-full justify-center pt-12 pb-16">
          {jobCards.map((job, index) => (
            <div
              key={index}
              className="w-[404px]  bg-white rounded-[30px] shadow-md flex flex-col"
            >
              <div className="bg-[#0055A2] text-white p-8 rounded-t-[30px] ">
                <h2 className="text-lg font-semibold leading-tight text-center">
                  {job.title}
                </h2>
              </div>

              <div className="flex-1 p-4  flex flex-col">
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {job.description}
                </p>

                <div className="flex-1">
                  <ul className="space-y-2">
                    {job.requirements.map((req, reqIndex) => (
                      <li
                        key={reqIndex}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        <span className="leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col items-center">
                  <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
