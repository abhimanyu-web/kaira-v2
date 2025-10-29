import logo from "../assets/images/kaira-logo-light.webp";
import { useState } from "react";
import Form from "./Form";

export default function Footer() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleForm() {
    setIsFormOpen(true);
  }

  return (
    <footer className="bg-[#104D39] text-light font-primary">
      {/* Main Footer Section */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 p-8 sm:p-10 lg:p-12 border-b-2 lg:border-b-0 lg:border-r border-light flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="font-secondary font-normal text-2xl sm:text-3xl lg:text-3xl max-w-[90%] pb-5 leading-snug">
            From coffee plantations to ROI numbers, our brochure’s got
            everything. Don’t worry, it’s more cozy than corporate.
          </h1>
          <button
            className="font-secondary text-lg sm:text-xl lg:text-2xl font-normal text-light border border-light rounded-[55px] tracking-tighter px-5 sm:px-6 py-3 sm:py-4 mt-3 hover:bg-light hover:text-[#104D39] transition duration-300 cursor-pointer"
            onClick={handleForm}
          >
            Download Our Brochure Now!
          </button>
        </div>

        {/* Middle Section (Logo) */}
        <div className="w-full lg:w-1/3 flex items-center justify-center border-b-2 lg:border-b-0 lg:border-r border-light py-10 lg:py-0">
          <img
            src={logo}
            alt="Kaira logo"
            className="h-[180px] sm:h-[250px] md:h-[280px] lg:h-[320px] w-auto"
          />
        </div>

        {/* Right Section (Contact Info) */}
        <div className="w-full lg:w-1/3 p-8 sm:p-10 lg:p-12">
          <h1 className="font-secondary font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter pb-6 text-center lg:text-left">
            Contact Us!
          </h1>

          <table className="w-full text-left text-base sm:text-xl md:text-xl border-collapse">
            <tbody>
              <tr>
                <td className="border-t border-r border-light p-3 font-normal">
                  E-mail
                </td>
                <td className="border-t border-light p-3">
                  <a
                    href="mailto:info@vibezestates.com"
                    className="hover:underline"
                  >
                    info@vibezestates.com
                  </a>
                </td>
              </tr>

              <tr>
                
              </tr>

              <tr>
                <td className="border-t border-r border-light p-3 font-normal">
                  Phone
                </td>
                <td className="border-t border-light p-3">
                  <a href="tel:+918970019817" className="hover:underline">
                    +91 8970019817
                  </a>
                </td>
              </tr>

              <tr>
                <td className="border-t border-r border-light p-3 font-normal align-top">
                  Address
                </td>
                <td className="border-t border-light p-3">
                  #200, 4th floor, 10th cross, CBI Main Road, Ganganagar,
                  Bangalore 560032.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-light text-center py-4 text-sm sm:text-base flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
        <p>© {new Date().getFullYear()} Vibez Estates. All rights reserved.</p>
        <a
          href="/privacy-policy"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        <a
          href="/disclaimer"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Disclaimer
        </a>
      </div>

      {/* Form Modal */}
      {isFormOpen && (
        <Form isFormOpen={isFormOpen} isFormClose={() => setIsFormOpen(false)} />
      )}
    </footer>
  );
}
