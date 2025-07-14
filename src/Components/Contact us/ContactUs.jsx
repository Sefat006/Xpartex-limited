import img from '../../assets/Contact/ContactUs.jpg'

const ContactUs = () => {
    return (
<div className="bg-[#D4CCC4] flex flex-col md:flex-row-reverse items-start justify-start py-8 md:py-10 px-0 h-250 ">

      <div className="w-full md:w-1/2 p-0 flex justify-center">
        <img
          src={img}
          alt="Desk setup with laptop"
          className="w-full h-auto object-cover rounded-none md:rounded-l-lg shadow-xl"
        />
      </div>

      <div className="w-full md:w-1/2 p-6 md:p-12 bg-white rounded-lg shadow-xl text-center md:text-left mt-8 md:mt-0 md:rounded-r-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          CONTACT US
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          We are here to meet any business need and to promote your company online!
        </p>

        <div className="text-gray-700 text-base md:text-lg space-y-4"> {/* Added space-y-4 for vertical spacing between paragraphs */}
          <p className="font-semibold">
            Phone: <a href="tel:12322525522" className="hover:underline text-blue-600">232 252 55 22</a>
          </p>
          <p className="font-semibold">
            Location: 75 Street Sample, WI 63025
          </p>
          <p className="font-semibold">
            Mail: <a href="mailto:template@sample.com" className="hover:underline text-blue-600">template@sample.com</a>
          </p>
        </div>
      </div>
    </div>
 
    );
};

export default ContactUs;