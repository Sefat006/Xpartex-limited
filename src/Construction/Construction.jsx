
import { Link } from 'react-router';
import constructionImg from '../assets/Construction/Construction.jpeg'
const Construction = () => {


    return (
        <div
        style={{
            backgroundImage: `url(${constructionImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}  className="flex items-center justify-end px-4 md:px-12  min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh]"
        >
            
            <div  className="relative flex flex-col justify-end h-[60vh]">

                <div  className="w-full max-w-xs sm:max-w-md md:max-w-lg text-white text-left md:space-y-4 mb-28 md:mb-10">
                    <h1 className="font-bold sm:text-2xl md:text-3xl lg:text-5xl leading-tight">
                        Construction and Renovation Projects
                    </h1>
                <p className="text-sm md:text-base leading-relaxed">Lorem ipsum    dolor, sit amet consectetur adipisicing    elit. Id ipsam cumque facere totam cum illum   laudantium rem omnis, ratione iure ducimus,   laboriosam molestias? Rem omnis iste  eligendi sint enim? Ducimus.</p>
                <Link to='/contactUs'>
                    <button className="btn bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300">Contact Us</button>
                </Link>
                </div>
                

            </div>




        </div>
    );
};

export default Construction;