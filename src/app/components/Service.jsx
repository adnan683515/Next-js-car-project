"use server"
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { dbConnnection } from '../lib/dbConnect';
import Link from 'next/link';
const Service = async () => {


    const productCollection = await dbConnnection('products');
    const data = await productCollection.find({}).toArray();

    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                {
                    data?.map((item, index) => {
                        return <div key={index + 1} className='border relative border-gray-300 max-w-[300px] h-[250px] p-2'>
                            <div className='flex justify-center'>

                                <Image
                                    alt="imagees"
                                    className="w-full h-[150px] rounded-lg"
                                    width={300}
                                    height={300}
                                    src={item?.img || ""}
                                />
                            </div>
                            <div className='flex justify-between absolute bottom-2'>
                                <div className='px-2 space-y-2'>
                                    <h1 className='text-[16px] font-semibold'> Title :  {item?.title} </h1>

                                    <div className='flex gap-2'>
                                        <p>Price: {item?.price} tk </p>

                                        <div className='flex justify-center items-center'>
                                            <FaStar className='text-yellow-300'></FaStar>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-end justify-end p-1'>
                                    <Link href={`/Service/${item?._id}`}>
                                    <button className='bg-[#234C6A] text-white px-3 hover:cursor-pointer py-1 rounded-sm hover:scale-95 duration-700'>View</button></Link>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    );
};

export default Service;