import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const SocialMediaBar = () => {
  return (
    <div
      className="fixed top-1/3 left-0 z-50 flex flex-col items-center space-y-6 p-4 rounded-r-2xl shadow-lg"
      style={{
        background: "linear-gradient(180deg, #982b04ff 0%, #e03a07ff 100%)", 
        backdropFilter: "blur(4px)",
      }}
    >
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-300 transition duration-300"
      >
        <FaFacebookF size={22} />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-300 transition duration-300"
      >
        <FaTwitter size={22} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-300 transition duration-300"
      >
        <FaLinkedinIn size={22} />
      </a>
    </div>
  );
};

export default SocialMediaBar;
