import kairaLogo from '../assets/images/kaira-logo-light.webp';

export default function Logo() {
  return (
    <div className="flex justify-center items-center bg-[#104D39] px-6 sm:px-10 md:px-20 py-12 sm:py-16 md:py-20">
      <img
        src={kairaLogo}
        alt="Kaira Logo"
        className="h-28 sm:h-40 md:h-56 lg:h-80 w-auto object-contain"
      />
    </div>
  );
}
