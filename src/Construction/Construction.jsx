
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

                <div  className="w-full max-w-xs sm:max-w-md md:max-w-lg text-white text-left space-y-4 mb-28 md:mb-50">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                        Construction and Renovation Projects
                    </h1>
                <p className="text-sm md:text-base leading-relaxed">Lorem ipsum    dolor, sit amet consectetur adipisicing    elit. Id ipsam cumque facere totam cum illum   laudantium rem omnis, ratione iure ducimus,   laboriosam molestias? Rem omnis iste  eligendi sint enim? Ducimus.</p>
                </div>

            </div>




        </div>
    );
};

export default Construction;