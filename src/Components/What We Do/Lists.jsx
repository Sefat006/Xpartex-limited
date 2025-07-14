
import { Link } from 'react-router';

const Lists = ( {service} ) => {

        const allItems = [
            ...service.items,
            { ...service.linkItem, isLink: true }
        ];

    return (
        <div className="mx-auto p-19 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-left text-[#FFD700]">  {service.title}</h3>
            <ul className="list list-inside space-y-2 text-left">
            {allItems.map((item, idx) => (
                <li key={idx}>
                {typeof item === 'string' ? (
                    item
                ) : item.isLink ? (
                    <Link
                    to={item.to}
                    className="text-white underline underline-offset-2  hover:text-[#FFD700] transition"
                    >
                    {item.text}
                    </Link>
                ) : (
                    item.text
                )}
                </li>
            ))}
            </ul>
            </div>
        );
    };


export default Lists;