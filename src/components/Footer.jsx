import fbImage from "../assets/fb.png";
import waImage from "../assets/wa.png";
import tiktokImage from "../assets/tiktok.png";
import igImage from "../assets/ig.png";
import telImage from "../assets/tel.png";
import emailImage from "../assets/email-white.png";

const Footer = () => {
  return (
    <footer className="bg-green-400 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Section Mengajar */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Mengajar</h2>
          <p className="mb-4">
            Belajar dan eksplorasi bersama mengajar kapanpun dan dimanapun
          </p>
          <div className="flex space-x-4 w-40">
            <a href="https://www.whatsapp.com/" rel="noopener noreferrer" target="_blank">
              <img src={waImage} alt="logo whatsapp" className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">
              <img src={igImage} alt="logo instagram" className="w-8 h-8" />
            </a>
            <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
              <img src={fbImage} alt="logo facebook" className="w-8 h-8" />
            </a>
            <a href="https://www.tiktok.com/" rel="noopener noreferrer" target="_blank">
              <img src={tiktokImage} alt="logo tiktok" className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Section Location (Ditempatkan di sebelah kanan) */}
        <div className="md:col-span-1 md:ml-auto">
          <h3 className="text-xl font-semibold mb-4">Location</h3>
          <p>Jl. Riau</p>
          <p>Kota Pekanbaru</p>
          <p>Indonesia</p>
        </div>

        {/* Section Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center space-x-2 p-2">
            <img src={emailImage} alt="" className="w-5 h-5"/>
            <span>mengajar@gmail.com</span>
          </p>
          <p className="flex items-center space-x-2 p-2">
            <img src={telImage} alt="" className="w-5 h-5" />
            <span>+628123456789</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
