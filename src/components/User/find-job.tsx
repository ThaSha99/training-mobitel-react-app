const JobCards = () => {

    const jobCategories = [
        {
            title: "Trainee Network Engineers",
            requirements: [
                "No job experience needed.",
                "Networking knowledge.",
                "Operating Systems knowledge.",
                "Network devices and security knowledge.",
                "Networking Device configuration knowledge."
            ],
            description: "We are hiring new training network engineers for SLT Mobitel. Only an associate degree, a bachelor's degree in computer science, information technology, computer engineering or a related field. undergraduates are also encouraged to apply for this position."
        },
        {
            title: "ACCOUNTANT-FINANCIAL ACCOUNTING",
            requirements: [
                "Associate Membership of ICASL/MA/ACCA.",
                "Preference will be given to the candidates who are prize winners.",
                "Be a resilient leader with excellent interpersonal and communication skills."
            ],
            description: "Sri Lanka Telecom is in search of high caliber, result-oriented and qualified individuals capable of playing a key role in the finance team. You will be engaged in a range of tasks in financial accounting in a highly IT-centric environment. You will be working closely with our subsidiary companies and cross - functional departments to implement key business drivers and strategic initiatives."
        },
        {
            title: "ENGINEERS",
            requirements: [
                "Four year Degree in Electronic/Engineering Bachelor of Technology",
                "Have a University/Graduate completed by UGC - Sri Lanka and Institute of Engineers Sri Lanka, equivalent to G.C.E. (O/L) AND",
                "Associate Member of the Institute of Engineers Sri Lanka AND",
                "Thorough knowledge and experience in the field of Data Centre Network Security/UC Storage Systems/ Hybrid Cloud Deployment & Management and the area of IT & Digital."
            ],
            description: "As an Engineer of the pioneering ICT solutions provider, you will be a distinguished member of our team, which is mainly responsible for planning, designing, operating and maintaining our state of the art ICT infrastructure. Patterns would be related to the following areas;"
        },
        {
            title: "TECHNICIANS",
            requirements: [
                "NVQ passes at the G.C.E. (O/L) exam including Sinhala Tamil and English Language and Mathematics and OR credit passes in one sitting AND",
                "Should have obtained Skilled Competence Certificate -NAITA in the relevant field equivalent to NVQ Level 4",
                "(Telecommunication / Electrical/Technology/ICT/Other / Air Conditioning etc)."
            ],
            description: "Technicians are mainly responsible to install, maintain and repair electronic communication equipment in telecommunication networks and internet supply systems. Examine telecommunications equipment and determine malfunctions or the need for adjustments or repairs."
        }
    ];

    return (
        <div
            className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url(/background-image-user.png)'
            }}
        >
            <div className="w-full max-w-7xl mx-auto px-4 py-8  backdrop-blur-sm">

                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Find Your Job that is prefer for you
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {jobCategories.map((job, index) => (
                        <div key={index} className="bg-white rounded-[30px] shadow-lg overflow-hidden">

                            <div className="bg-[#0055A2] text-white p-8 rounded-t-[30px] h-21">
                                <h2 className="font-bold text-lg leading-tight text-center">{job.title}</h2>
                            </div>

                            <div className="p-4">
                                <div className="text-sm text-gray-700 mb-4">
                                    <p className="mb-3 leading-relaxed">{job.description}</p>

                                    <ul className="space-y-1">
                                        {job.requirements.map((req, reqIndex) => (
                                            <li key={reqIndex} className="flex items-start">
                                                <span className="text-[#0055A2] mr-2 mt-1">•</span>
                                                <span className="text-xs leading-relaxed">{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="text-center">
                                    <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-full font-semibold transition-colors duration-200">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button className="bg-[#0055A2] hover:bg-[#004080] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                        Check the Applied Job Status
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobCards;