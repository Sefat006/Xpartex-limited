import { Link } from 'react-router';
import CraftingImg from '../../assets/Crafting/Crafting.jpg'

const Crafting = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${CraftingImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            // Add flex and flex-col to the parent container
            className="flex flex-col grid-cols-1 md:grid-cols-2 grid-rows-2 px-4 md:px-12 min-h-[50vh] sm:max-h-[60vh] md:min-h-[70vh] justify-end pb-15"
        >

            <div className="flex justify-start p-4 md:p-5 bg-white h-[30vh] md:h-50 w-3/5 rounded-sm"> {/* Added w-full */}

                <div className="w-full max-w-xs sm:max-w-md md:max-w-lg text-black text-left md:space-y-4 ">
                    <h1 className="font-bold sm:text-2xl md:text-3xl lg:text-3xl leading-tight">
                        Crafting Digital Experiences
                    </h1>
                <p className="text-sm md:text-base leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolore.</p>
                <Link to='/contactUs'>
                    <button className='btn btn-primary bg-black'>Contact Us</button>
                </Link>
                <p className='text-black'>please <span className='font-bold'>Click</span> on Contact Us button to view <span className='font-bold'>Contact Us</span> page</p>
                </div>

            </div>

        </div>
    );
};

export default Crafting;