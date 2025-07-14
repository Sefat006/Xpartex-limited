
import constructionImg from '../assets/Construction/Construction.jpeg'
const Construction = () => {
    return (
        <div
        style={{
            backgroundImage: `url(${constructionImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '70vh',
        }}   className="flex items-center justify-end px-4 md:px-12 py-12"
        >
            
            <div>

                <div  className="w-xl text-white text-left space-y-4">
                <h1 className=' font-bold text-4xl'>Construction and Renovation projects</h1>
                <p className='w-lg'>Lorem ipsum    dolor, sit amet consectetur adipisicing    elit. Id ipsam cumque facere totam cum illum   laudantium rem omnis, ratione iure ducimus,   laboriosam molestias? Rem omnis iste  eligendi sint enim? Ducimus.</p>
                </div>

            </div>
        </div>
    );
};

export default Construction;