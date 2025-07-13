import webDesign from '../../assets/Portfolio/Web-application.jpg'
import MobileApplication from '../../assets/Portfolio/Mobile-application.jpg'
import CorporateDesign from '../../assets/Portfolio/Corporate-design.jpg'
import ResponsiveDesign from '../../assets/Portfolio/responsive-design.jpg'
import DigitalProduct from '../../assets/Portfolio/Digital-product.jpg'

const Portfolio = () => {

    const images = [
        {img: webDesign,title: "Web Application"},  
        {img: MobileApplication,title: "Mobile Application"},
        {img: CorporateDesign,title: "Corporate Design"},  
        {img: MobileApplication,title: "Mobile Application"},
        {img: ResponsiveDesign,title: "Responsive Design"},  
        {img: DigitalProduct,title: "Digital Product"}
        ]
        


    return (
        <div className='bg-gray-800 p-20 space-y-10'>
            <div  className='text-White justify-center text-center space-y-4 flex flex-col'>
                <h1 className=' font-bold text-4xl'>Epic Design and Engineering</h1>
                <p className='max-w-2xl mx-auto'>Lorem ipsum    dolor, sit amet consectetur adipisicing    elit. Id ipsam cumque facere totam cum illum   laudantium rem omnis, ratione iure ducimus,   laboriosam molestias? Rem omnis iste  eligendi sint enim? Ducimus.</p>
            </div>

            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    images.map((image, id) => (
                        <div key={id} className='flex flex-col items-center bg-white rounded shadow overflow-hidden'>
                            <img 
                            src={image.img} 
                            alt="" 
                            className='w-full object-cover h-40 sm:h-48 md:h-36 lg:h-44'
                            />
                            <h1 className='text-center p-4 text-black text-xl font-semibold'>{image.title}</h1>
                        </div>
                        ))
                }
            </section>


        </div>
    );
};

export default Portfolio;