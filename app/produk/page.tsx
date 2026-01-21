import Backhoe from '@/components/BackHoe'
import ConcratePump from '@/components/ConcratePump'
import ConcratePumpMix from '@/components/conmix'
import Excavator from '@/components/Excavator'
import Forklift from '@/components/Forklift'
import LGMA from '@/components/LGMA'
import Lugong from '@/components/Lugong'
import MiniDumper from '@/components/MiniDumper'
import WheelLoaderTable from '@/components/modal'
import SelfLoadingConcrete from '@/components/SelfLoadingConcrete'
import Sugarcane from '@/components/Sugarcane'
import WheelDump from '@/components/WheelDum'
import WheelExa from '@/components/WheelExavator'
import WheelTracktor from '@/components/WheelTraktor'
import React from 'react'
const scrollToContact = () => {
  const phoneNumber = '6289519486934'; // tanpa +
  const message = 'Halo, saya mau tanya produk';

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
export default function produk() {
  return (
    <div className='bg-white ' >
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-900">
            <span className="text-orange-600">Big Dipper </span> Machinery Makassar
          </div>
          <button
            onClick={scrollToContact}
            className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium"
          >
            Hubungi Kami
          </button>
        </div>
      </nav>
      <div className='p-5'>
        <div className='mt-10 mb-10 '>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide mb-4">
            Wheel Loader <span className="text-yellow-500">SYZG</span>
          </h1>
          <WheelLoaderTable />
        </div>
        <div className='mt-10 mb-10'>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide mb-4">
            Wheel Loader <span className="text-yellow-500">LUGONG</span>
          </h1>
          <Lugong />
        </div>
        <div className='mt-10 mb-10'>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide mb-4">
            Wheel Loader <span className="text-yellow-500">LGMA</span>
          </h1>
          <LGMA />
        </div>

        <div className='mt-10 mb-10'>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide mb-4">
            Wheel Loader <span className="text-yellow-500">BACKHOE</span>
          </h1>
          <Backhoe />
        </div>

        <div className='mt-10 mb-10'>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide mb-4">
            Rough Terrain<span className="text-yellow-500"> Forklift</span>
          </h1>
          <Forklift />
        </div>

        <div className='mt-10 mb-10'>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide mb-4">
            Rough Terrain<span className="text-yellow-500"> Forklift</span>
          </h1>
          <Excavator />
        </div>

        <div className='mt-10 mb-10'>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide mb-4">
            Wheel Excacator<span className="text-yellow-500"> BD-9075W</span>
          </h1>
          <WheelExa />
        </div>

        <div className='mt-10 mb-10'>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide mb-4">
            Self Loading<span className="text-yellow-500"> Concrete Mixer</span>
          </h1>
          <SelfLoadingConcrete />
        </div>

        <div className='mt-10 mb-10'>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide mb-4">
            Concrete<span className="text-yellow-500"> Pump</span>
          </h1>
          <ConcratePump />
        </div>

        <div className='mt-10 mb-10'>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide mb-4">
            Concrete Mixer <span className="text-yellow-500"> Pump JBT40 - 450R</span>
          </h1>
          <ConcratePumpMix />
        </div>

        <div className='mt-10 mb-10'>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide mb-4">
            Wheel <span className="text-yellow-500"> Tracktor</span>
          </h1>
          <WheelTracktor />
        </div>

        <div className='mt-10 mb-10'>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide mb-4">
            Mini Dumper <span className="text-yellow-500"> Crawler</span>
          </h1>
          <MiniDumper />
        </div>

        <div className='mt-10 mb-10'>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide mb-4">
            Sugarcane <span className="text-yellow-500"> Loader QZ7600</span>
          </h1>
          <Sugarcane />
        </div>

        <div className='mt-10 mb-10'>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide mb-4">
            Wheel Dumper <span className="text-yellow-500"> BD15</span>
          </h1>
          <WheelDump />
        </div>

      </div>

      {/* footer */}
      <div className=' top-890  left-0 right-0 bottom-0'>
        <footer className="bg-slate-950 text-gray-400 py-12 px-6 ">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="text-2xl font-bold text-white mb-4">
                  <span className="text-orange-600">Big Dipper </span> Machinery Makassar
                </div>
                <p className="text-sm">
                  Solusi alat berat terpercaya untuk konstruksi dan pertambangan.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Produk</h4>
                <ul className="space-y-2 text-sm">
                  <li>Wheel Loader</li>
                  <li>Compact Loader</li>
                  <li>Heavy Duty Loader</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Perusahaan</h4>
                <ul className="space-y-2 text-sm">
                  <li>Tentang Kami</li>
                  <li>Karir</li>
                  <li>Kontak</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Kontak</h4>
                <ul className="space-y-2 text-sm">
                  <li>Email: laodermakassar@gmail.com</li>
                  <li>Phone: +6289519486934</li>
                  <li>Makassar, Makassar</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm">
              <p>&copy; 2025 Big Dipper Machinery Makassar. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>

    </div>
  )
}
