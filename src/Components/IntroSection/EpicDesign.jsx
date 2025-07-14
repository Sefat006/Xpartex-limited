import { AiOutlineSound } from "react-icons/ai";
import { FcIdea } from "react-icons/fc";
import { MdDeveloperMode } from "react-icons/md";
import { SiCanvas } from "react-icons/si";

const EpicDesign = () => {
    return (
        <div>
            <div  className='text-black justify-center text-center space-y-4 flex flex-col'>
                <h1 className=' font-bold text-4xl'>Epic Design and Engineering</h1>
                <p className='max-w-2xl mx-auto'>Lorem ipsum    dolor, sit amet consectetur adipisicing    elit. Id ipsam cumque facere totam cum illum   laudantium rem omnis, ratione iure ducimus,   laboriosam molestias? Rem omnis iste  eligendi sint enim? Ducimus.</p>
            </div>
            

            <div className="py-12 px-4">
            
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
                    <div className="bg-transparent text-center px-6 py-15 flex-1">
                        <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4">
                            <span className="text-2xl"><FcIdea /></span>
                        </div>
                        <h3 className="font-bold text-black text-lgmb-2">STRATEGY</ h3>
                        <p className="text-sm text-gray-700">
                        Lorem ipsum dolor sit amet, consecteturadipiscing elit nullam nunc justo sagittis suscipit ultrices.
                        </p>
                    </div>
                
                    
                    <div className="bg-white text-center px-6 py-15 flex-1">
                        <div className="w-16 h-16 mx-auto bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                        
                        <span className="text-2xl"><AiOutlineSound /></span>
                        </div>
                        <h3 className="font-bold text-black text-lg mb-2">BRANDING</ h3>
                        <p className="text-sm text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis  suscipit ultrices.
                        </p>
                    </div>
                
                    <div className="bg-transparent text-center px-6 py-15 flex-1">
                        <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center  mb-4">
                        <span className="text-2xl"><MdDeveloperMode /></span>
                        </div>
                        <h3 className="font-bold text-lg text-black  mb-2">DEVELOPMENT</h3>
                        <p className="text-sm text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis  suscipit ultrices.
                        </p>
                    </div>
                
                    <div className="bg-yellow-500 text-center px-6 py-15 flex-1 text-white">
                        <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center  mb-4">
                        {/* Replace with your icon */}
                        <span className="text-2xl text-yellow-500"><SiCanvas /></ span>
                        </div>
                        <h3 className="font-bold text-lg mb-2">WEB DESIGN</   h3>
                        <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis  suscipit ultrices.
                        </p>
                    </div>

            
                </div>
            
            </div>


        </div>
    );
};

export default EpicDesign;