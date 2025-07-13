import { Link } from 'react-router';

const BrandValues = () => {
    return (
        <div className="bg-[#d6c8c1] min-h-screen flex items-center justify-center p-6 relative">
            <div className="relative max-w-6xl w-full grid grid-cols-3 grid-rows-2 gap-4">

                {/* Top Left Image */}
                <img
                src="/path/to/image1.jpg"
                alt="Woman writing"
                className="col-span-1 row-span-2 object-cover rounded-lg shadow-lg"
                />

                {/* Top Right Image */}
                <img
                src="/path/to/image2.jpg"
                alt="Laptop design"
                className="col-span-2 row-span-1 object-cover rounded-lg shadow-lg"
                />

                {/* Bottom Left Image */}
                <img
                src="/path/to/image3.jpg"
                alt="Laptop and coffee"
                className="col-span-2 row-span-1 object-cover rounded-lg shadow-lg"
                />

                {/* Centered Overlay Box */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-black bg-opacity-90 text-white p-8 rounded-lg max-w-md text-center pointer-events-auto shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Brand Values</h2>
                    <p className="mb-6">
                    Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                    </p>
                    <a to="" className="btn btn-primary">
                    Learn More
                    </a>
                </div>
                </div>

            </div>
        </div>
    );
};

export default BrandValues;