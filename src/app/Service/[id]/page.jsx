import { dbConnnection } from '@/app/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';
// import { motion } from "framer-motion"

const ServiceDetails = async ({ params }) => {

    const { id } = await params

    const collection = await dbConnnection('products')
    const singleData = await collection.findOne({ _id: new ObjectId(id) })

    return (
        <div className=" py-12  grid md:grid-cols-2 gap-10 items-center">

            <div className="relative flex flex-col items-center">
                <div className="relative group w-[350px] h-[350px] rounded-full overflow-hidden shadow-2xl border-4 border-[#234C6A]">
                    <Image
                        src={singleData.img}
                        alt="details image"
                        fill
                        className="object-cover rounded-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-[#234C6A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                </div>

                <button className="mt-8 bg-[#234C6A] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#1c3b53] active:scale-95 transition-all duration-300">
                    🛒 Add to Cart
                </button>
            </div>

    
            <div className="space-y-6">
                <h2 className="text-4xl font-extrabold text-[#234C6A] tracking-tight">{singleData.title}</h2>

                <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-gray-800 bg-gray-100 px-4 py-1 rounded-md border-l-4 border-[#234C6A]">
                        ${singleData.price}
                    </span>
                    <span className="text-sm text-gray-500 italic">+ service charge may apply</span>
                </div>

                <p className="text-gray-600 leading-relaxed text-justify">
                    {singleData.description}
                </p>

                <div>
                    <h3 className="text-2xl font-semibold text-[#234C6A] mb-3 border-b-2 border-[#234C6A] inline-block pb-1">
                        Facilities
                    </h3>

                    <div className="grid gap-4">
                        {singleData.facility?.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#f9fafb] hover:bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg shadow-sm p-4 transition-all duration-300 hover:shadow-md"
                            >
                                <p className="font-semibold text-[#234C6A] text-lg">{item.name}</p>
                                <p className="text-sm text-gray-600 mt-1">{item.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceDetails;