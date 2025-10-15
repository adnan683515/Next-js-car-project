import Image from "next/image";
import Service from "./components/Service";
import Hero from "./components/Hero";
import { hash } from './../../node_modules/goober/src/core/hash';



export default function Home() {
  return (
    <div>


      <Hero></Hero>
      <div className="my-4">
        <section className="py-5 bg-gray-50">
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
              Our All Cars
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover our latest collection of premium cars — stylish, powerful, and built for every road.
              Whether you’re looking for speed, comfort, or luxury, we’ve got the perfect ride waiting for you.
            </p>
          </div>
        </section>

        <Service></Service>
      </div>
    </div>
  );
}
