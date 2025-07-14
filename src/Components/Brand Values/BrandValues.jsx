import Laptop from '../../assets/Brand Values/Corporate-design.jpg'
import laptopANDmobile from '../../assets/Brand Values/responsive-design.jpg'
import girl from '../../assets/Brand Values/girl.jpg'
import './BrandValue.css'
import { Link } from 'react-router';

const BrandValues = () => {
    return (
        <div className="bg-[#d6c8c1] min-h-screen flex items-center justify-center p-6 relative overflow-hidden">

            <img
            src={girl}
            alt="Floating Girl"
            className="w-1/2 max-w-md h-auto object-cover rounded-lg shadow-lg floating-up absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
            />

            <img
            src={Laptop}
            alt="Floating Laptop"
            className="w-1/2 max-w-md h-auto object-cover rounded-lg shadow-lg floating-down absolute right-1/4 top-[30%] translate-x-1/2 -translate-y-1/2 z-0"
            />

            <img
            src={laptopANDmobile}
            alt="Floating Laptop + Mobile"
            className="w-1/2 max-w-md h-auto object-cover rounded-lg shadow-lg floating-slow absolute right-1/4 top-[70%] translate-x-1/2 -translate-y-1/2 z-0"
            />

            <div className="relative z-10 bg-black bg-opacity-90 text-white p-8 rounded-lg max-w-md text-center shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Brand Values</h2>
                    <p className="mb-6">
                    Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                    </p>
                    <Link className="btn btn-primary">Learn More</Link>
            </div>
        </div>

    );
};

export default BrandValues;