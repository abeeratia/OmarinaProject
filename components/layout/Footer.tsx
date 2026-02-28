import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="relative bg-dark text-white pt-24 pb-8 z-50 mt-20">
      {/* Wave Dividers */}
      <div className="absolute top-0 left-0 w-full pointer-events-none transform -translate-y-full">
        {/* Solid Black Wave (WaveOfFooter) */}
        <div className="absolute bottom-0 left-0 w-full transform translate-y-px z-10">
          <Image
            src="/WaveOfFooter.svg"
            alt="Solid Wave"
            width={1920}
            height={105}
            className="w-full h-auto block scale-y-125 origin-bottom"
          />
        </div>
        {/* Dashed Top Wave (topWave) */}
        <div className="absolute bottom-0 left-0 w-full mb-px z-20">
          <Image
            src="/topWave.svg"
            alt="Dashed Wave"
            width={1920}
            height={171}
            className="w-full h-auto block scale-y-125 origin-bottom"
          />
        </div>
      </div>

      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <Image
            src="/Logo.svg"
            alt="Omarina Logo"
            width={150}
            height={50}
            className="w-36"
          />
          <p className="text-white text-sm leading-relaxed max-w-xs">
            Omarina is your all-in-one platform for boat rentals, sea trips, and
            marina services across the Red Sea.
          </p>
          <div className="flex gap-4">
            {/* Facebook */}
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.1625 1.20752H2.84C1.9384 1.20752 1.2075 1.93841 1.2075 2.84002V29.1625C1.2075 30.0641 1.9384 30.795 2.84 30.795H29.1625C30.0641 30.795 30.795 30.0641 30.795 29.1625V2.84002C30.795 1.93841 30.0641 1.20752 29.1625 1.20752Z"
                  fill="#3D5A98"
                />
                <path
                  d="M21.62 30.7927V19.3352H25.465L26.04 14.8702H21.62V12.0202C21.62 10.7277 21.98 9.84522 23.8325 9.84522H26.1975V5.84522C25.0523 5.72608 23.9014 5.66933 22.75 5.67522C19.345 5.67522 17 7.75022 17 11.5777V14.8702H13.155V19.3352H17V30.7927H21.62Z"
                  fill="white"
                />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.5 0H7.5C3.35786 0 0 3.35786 0 7.5V24.5C0 28.6421 3.35786 32 7.5 32H24.5C28.6421 32 32 28.6421 32 24.5V7.5C32 3.35786 28.6421 0 24.5 0Z"
                  fill="url(#paint0_radial_152_675)"
                />
                <path
                  d="M24.5 0H7.5C3.35786 0 0 3.35786 0 7.5V24.5C0 28.6421 3.35786 32 7.5 32H24.5C28.6421 32 32 28.6421 32 24.5V7.5C32 3.35786 28.6421 0 24.5 0Z"
                  fill="url(#paint1_radial_152_675)"
                />
                <path
                  d="M16.0011 3.5C12.6064 3.5 12.1803 3.51488 10.847 3.5755C9.51625 3.6365 8.60787 3.84712 7.81313 4.15625C6.99088 4.4755 6.2935 4.90262 5.59875 5.59762C4.90338 6.2925 4.47625 6.98987 4.156 7.81175C3.846 8.60675 3.63512 9.5155 3.57525 10.8456C3.51562 12.179 3.5 12.6053 3.5 16.0001C3.5 19.395 3.515 19.8197 3.5755 21.153C3.63675 22.4837 3.84738 23.3921 4.15625 24.1869C4.47575 25.0091 4.90288 25.7065 5.59788 26.4013C6.2925 27.0966 6.98988 27.5247 7.8115 27.844C8.60687 28.1531 9.51537 28.3637 10.8459 28.4247C12.1792 28.4854 12.605 28.5002 15.9996 28.5002C19.3948 28.5002 19.8195 28.4854 21.1528 28.4247C22.4835 28.3637 23.3929 28.1531 24.1882 27.844C25.0101 27.5247 25.7065 27.0966 26.401 26.4013C27.0964 25.7065 27.5234 25.0091 27.8438 24.1873C28.151 23.3921 28.362 22.4835 28.4245 21.1532C28.4844 19.82 28.5 19.395 28.5 16.0001C28.5 12.6053 28.4844 12.1792 28.4245 10.8459C28.362 9.51512 28.151 8.60688 27.8438 7.81213C27.5234 6.98988 27.0964 6.2925 26.401 5.59762C25.7057 4.90237 25.0104 4.47525 24.1875 4.15637C23.3906 3.84712 22.4817 3.63638 21.151 3.5755C19.8176 3.51488 19.3931 3.5 15.9972 3.5H16.0011ZM14.8798 5.75262C15.2126 5.75213 15.584 5.75262 16.0011 5.75262C19.3388 5.75262 19.7342 5.76463 21.0522 5.8245C22.271 5.88025 22.9325 6.08388 23.3731 6.255C23.9565 6.4815 24.3724 6.75238 24.8096 7.19C25.2471 7.6275 25.5179 8.04412 25.745 8.6275C25.9161 9.0675 26.12 9.729 26.1755 10.9478C26.2354 12.2655 26.2484 12.6612 26.2484 15.9972C26.2484 19.3333 26.2354 19.7291 26.1755 21.0467C26.1198 22.2655 25.9161 22.927 25.745 23.3671C25.5185 23.9505 25.2471 24.3659 24.8096 24.8031C24.3721 25.2406 23.9568 25.5114 23.3731 25.738C22.933 25.9099 22.271 26.113 21.0522 26.1688C19.7345 26.2286 19.3388 26.2416 16.0011 26.2416C12.6634 26.2416 12.2677 26.2286 10.9501 26.1688C9.73137 26.1125 9.06987 25.9089 8.62887 25.7377C8.04562 25.5111 7.62887 25.2404 7.19137 24.8029C6.75387 24.3654 6.48312 23.9498 6.256 23.3661C6.08488 22.926 5.881 22.2645 5.8255 21.0457C5.76562 19.728 5.75362 19.3323 5.75362 15.9941C5.75362 12.656 5.76562 12.2624 5.8255 10.9446C5.88125 9.72587 6.08488 9.06437 6.256 8.62375C6.48263 8.04037 6.75388 7.62375 7.1915 7.18625C7.62913 6.74875 8.04562 6.47787 8.629 6.25087C9.06962 6.079 9.73137 5.87587 10.9501 5.81987C12.1032 5.76775 12.5501 5.75212 14.8798 5.7495V5.75262ZM22.6736 7.82812C21.8455 7.82812 21.1736 8.49938 21.1736 9.32763C21.1736 10.1558 21.8455 10.8276 22.6736 10.8276C23.5018 10.8276 24.1736 10.1558 24.1736 9.32763C24.1736 8.4995 23.5018 7.82762 22.6736 7.82762V7.82812ZM16.0011 9.58075C12.4561 9.58075 9.58187 12.455 9.58187 16.0001C9.58187 19.5452 12.4561 22.4181 16.0011 22.4181C19.5462 22.4181 22.4195 19.5452 22.4195 16.0001C22.4195 12.4551 19.546 9.58075 16.0009 9.58075H16.0011ZM16.0011 11.8334C18.3022 11.8334 20.1679 13.6988 20.1679 16.0001C20.1679 18.3013 18.3022 20.1669 16.0011 20.1669C13.7 20.1669 11.8345 18.3013 11.8345 16.0001C11.8345 13.6988 13.6999 11.8334 16.0011 11.8334Z"
                  fill="white"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_152_675"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(8.5 34.4646) rotate(-90) scale(31.7144 29.4969)"
                  >
                    <stop stop-color="#FFDD55" />
                    <stop offset="0.1" stop-color="#FFDD55" />
                    <stop offset="0.5" stop-color="#FF543E" />
                    <stop offset="1" stop-color="#C837AB" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_152_675"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(-5.36012 2.30512) rotate(78.681) scale(14.1765 58.436)"
                  >
                    <stop stop-color="#3771C8" />
                    <stop offset="0.128" stop-color="#3771C8" />
                    <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.686762 15.8086C0.686012 18.4972 1.39383 21.1224 2.73974 23.4363L0.558044 31.3423L8.70998 29.2209C10.9647 30.4391 13.4909 31.0775 16.0581 31.0776H16.0649C24.5396 31.0776 31.4382 24.2332 31.4418 15.8206C31.4435 11.7441 29.8454 7.91076 26.9418 5.02679C24.0388 2.14307 20.1779 0.554107 16.0642 0.552246C7.58851 0.552246 0.690386 7.39628 0.686887 15.8086"
                  fill="url(#paint0_linear_1_411)"
                />
                <path
                  d="M0.137744 15.8035C0.13687 18.5889 0.870058 21.308 2.26395 23.7048L0.00402832 31.8942L8.44826 29.6967C10.7749 30.9558 13.3945 31.6196 16.0601 31.6206H16.0669C24.8457 31.6206 31.9922 24.53 31.9959 15.8162C31.9974 11.5932 30.3418 7.62208 27.3346 4.63479C24.327 1.64788 20.328 0.00173643 16.0669 0C7.28668 0 0.141243 7.08961 0.137744 15.8035ZM5.16659 23.292L4.8513 22.7953C3.52588 20.7036 2.82631 18.2865 2.82731 15.8045C2.83006 8.56174 8.76905 2.66915 16.0719 2.66915C19.6086 2.67064 22.9322 4.03895 25.4321 6.52155C27.9318 9.0044 29.3073 12.3049 29.3065 15.8152C29.3032 23.058 23.3641 28.9513 16.0669 28.9513H16.0617C13.6857 28.9501 11.3554 28.3168 9.32316 27.12L8.83954 26.8353L3.82856 28.1393L5.16659 23.292Z"
                  fill="url(#paint1_linear_1_411)"
                />
                <path
                  d="M12.0858 9.19662C11.7876 8.53888 11.4738 8.52561 11.1902 8.51407C10.958 8.50415 10.6926 8.5049 10.4274 8.5049C10.162 8.5049 9.73073 8.604 9.3662 8.99904C9.00129 9.39445 7.97305 10.35 7.97305 12.2934C7.97305 14.2369 9.39932 16.1152 9.59814 16.379C9.79721 16.6423 12.3516 20.7582 16.397 22.3415C19.7592 23.6574 20.4434 23.3957 21.1731 23.3297C21.9029 23.264 23.528 22.3744 23.8595 21.452C24.1913 20.5297 24.1913 19.7391 24.0918 19.5739C23.9924 19.4093 23.7269 19.3105 23.3289 19.113C22.9309 18.9156 20.974 17.9598 20.6092 17.8279C20.2443 17.6962 19.979 17.6305 19.7136 18.026C19.4481 18.4209 18.686 19.3105 18.4536 19.5739C18.2216 19.838 17.9893 19.8708 17.5914 19.6733C17.1931 19.4751 15.9113 19.0584 14.3905 17.7128C13.2073 16.6658 12.4086 15.3727 12.1764 14.9772C11.9442 14.5823 12.1515 14.3682 12.3511 14.1714C12.5299 13.9944 12.7492 13.7101 12.9484 13.4795C13.1469 13.2488 13.2131 13.0842 13.3458 12.8208C13.4787 12.5571 13.4122 12.3264 13.3128 12.1288C13.2131 11.9313 12.4397 9.97764 12.0858 9.19662Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_411"
                    x1="1544.75"
                    y1="3079.56"
                    x2="1544.75"
                    y2="0.552246"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1FAF38" />
                    <stop offset="1" stop-color="#60D669" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_411"
                    x1="1599.6"
                    y1="3189.42"
                    x2="1599.6"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F9F9F9" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
            {/* X (formerly Twitter) */}
            <a
              href="#"
              className="w-10 h-10 border-white/20 flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.635 13.55L30.2915 0H27.529L17.408 11.765L9.324 0H0L12.2245 17.791L0 32H2.7625L13.451 19.5758L21.988 32H31.312L18.6343 13.55H18.635ZM14.8515 17.9475L13.6128 16.176L3.75775 2.0795H8.00075L15.9535 13.456L17.192 15.2275L27.5303 30.015H23.2878L14.8515 17.9482V17.9475Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-sm text-white">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/book-trip"
                className="hover:text-primary transition-colors"
              >
                Book Trip
              </Link>
            </li>
            <li>
              <Link
                href="/rent-boat"
                className="hover:text-primary transition-colors"
              >
                Rent Boat
              </Link>
            </li>
            <li>
              <Link
                href="/own-vessel"
                className="hover:text-primary transition-colors"
              >
                Own a Vessel
              </Link>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Useful Links</h4>
          <ul className="flex flex-col gap-4 text-sm text-white">
            <li>
              <Link
                href="/about"
                className="hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/faqs"
                className="hover:text-primary transition-colors"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-white text-dark px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button className="bg-[#1e1e1e] border border-white/20 text-white py-3 rounded-xl font-semibold hover:bg-primary transition-all">
              Subscribe Now
            </button>

            <div className="mt-4">
              <p className="text-sm font-medium mb-3">Our Mobile App</p>
              <div className="flex gap-3">
                <Image
                  src="/AppleStore.svg"
                  alt="App Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto cursor-pointer"
                />
                <Image
                  src="/GooglePlay.svg"
                  alt="Google Play"
                  width={120}
                  height={40}
                  className="h-10 w-auto cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Copyright */}
      <Container className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white">
        <p>© 2024 OMARINA. All Rights Reserved</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms of Use
          </Link>
          <Link href="/cookies" className="hover:text-white">
            Cookie Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
