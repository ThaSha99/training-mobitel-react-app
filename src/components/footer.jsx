const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold text-black mb-4 text-sm">ABOUT US</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-blue-600 underline"
                >
                  Corporate Responsibility
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-blue-600 underline"
                >
                  Investors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-blue-600 underline"
                >
                  Media Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-blue-600 underline"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Business Section */}
          <div>
            <h3 className="font-semibold text-black mb-4 text-sm">BUSINESS</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-blue-600 underline"
                >
                  Enterprises
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-blue-600 underline"
                >
                  SME
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-blue-600 underline"
                >
                  Wholesale
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-blue-600 underline"
                >
                  International
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-4 text-sm">
              CONTACT US
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                Sri Lanka Telecom PLC,Lotus Road, P.O.Box 503,Colombo 01,Sri
                Lanka.
              </p>
              <p>Telephone: +94 112 021 000</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:pr@slt.lk"
                  className="hover:text-blue-600 underline"
                >
                  pr@slt.lk
                </a>
              </p>
              <p>(Monday to Friday - 9am to 5pm)</p>
            </div>
          </div>

          {/* Customer Support Section */}
          <div>
            <h3 className="font-semibold text-black mb-4 text-sm">
              CUSTOMER SUPPORT
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Telephone: 1212</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:1212@slt.com.lk"
                  className="hover:text-blue-600 underline"
                >
                  1212@slt.com.lk
                </a>
              </p>
              <p>Self Service: +94 112 12 12 12</p>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="flex gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="/facebook.png"
                  alt="Facebook"
                  className="w-8 h-8 rounded"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="/twitter.png"
                  alt="Twitter"
                  className="w-8 h-8  rounded"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="/instagram.png"
                  alt="Instagram"
                  className="w-8 h-8 rounded"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="/youtube.png"
                  alt="YouTube"
                  className="w-8 h-8  rounded"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="/linkedin.png"
                  alt="LinkedIn"
                  className="w-8 h-8  rounded"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="/tiktok.png"
                  alt="TikTok"
                  className="w-8 h-8 rounded"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
