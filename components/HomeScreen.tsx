// app/page.tsx
'use client';

import { useState, FormEvent } from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Spec {
  value: string;
  label: string;
  unit: string;
}

interface Product {
  name: string;
  model: string;
  capacity: string;
  power: string;
  image: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function LoaderLandingPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const features: Feature[] = [
    {
      icon: '⚙️',
      title: 'Teknologi Terdepan',
      description: 'Sistem hidrolik canggih dengan kontrol presisi tinggi untuk efisiensi operasional maksimal.'
    },
    {
      icon: '🔒',
      title: 'Standar Keselamatan Internasional',
      description: 'Tersertifikasi ISO dengan fitur keselamatan lengkap termasuk ROPS, FOPS, dan sistem monitoring.'
    },
    {
      icon: '⚡',
      title: 'Efisiensi Bahan Bakar',
      description: 'Engine Tier 4 Final dengan konsumsi bahan bakar optimal, menurunkan biaya operasional hingga 30%.'
    },
    {
      icon: '🛠️',
      title: 'Dukungan Purna Jual',
      description: 'Jaringan service center nasional dengan ketersediaan spare parts original dan teknisi bersertifikat.'
    }
  ];

  const specs: Spec[] = [
    { value: '250', label: 'Tenaga Mesin', unit: 'HP' },
    { value: '5.0', label: 'Kapasitas Bucket', unit: 'm³' },
    { value: '18.5', label: 'Berat Operasional', unit: 'Ton' },
    { value: '3.2', label: 'Tinggi Dumping', unit: 'meter' }
  ];

  const products: Product[] = [
    {
      name: 'Wheel Loader',
      model: 'Series 2025',
      capacity: '5 m³',
      power: '250 HP',
      image: '/images/Wheel.jpg'
    },
    {
      name: 'Self Loading Concrete Mixer',
      model: 'Series 2024',
      capacity: '3 m³',
      power: '180 HP',
      image: '/images/loading.jpg'
    },
    {
      name: 'Excavator',
      model: 'Series 2024',
      capacity: '3 m³',
      power: '180 HP',
      image: '/images/excavator.png'
    },
    {
      name: 'Concrete Pump',
      model: 'Series 2024',
      capacity: '3 m³',
      power: '180 HP',
      image: '/images/Conn.png'
    },
    {
      name: 'Traktor Roda',
      model: 'Series 2024',
      capacity: '3 m³',
      power: '180 HP',
      image: '/images/traktorRoda.png'
    },
    {
      name: 'Mini Dumper Crawler',
      model: 'Series 2024',
      capacity: '3 m³',
      power: '180 HP',
      image: '/images/miniDumper.png'
    },
    {
      name: 'Backhoe Loader',
      model: 'Series 2024',
      capacity: '3 m³',
      power: '180 HP',
      image: '/images/backho.png'
    },
    {
      name: 'Rough Terrain Forklift',
      model: 'Series 2024',
      capacity: '7 m³',
      power: '350 HP',
      image: '/images/Rough.png'
    }
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Terima kasih atas minat Anda. Tim kami akan menghubungi Anda dalam 1x24 jam.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const scrollToContact = () => {
    const phoneNumber = '6289519486934'; // tanpa +
    const message = 'Halo, saya mau tanya produk';

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Solusi Alat Berat Terpercaya
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Loader Berkualitas untuk Proyek Anda
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Tingkatkan produktivitas konstruksi dan pertambangan dengan teknologi loader terkini yang efisien, handal, dan didukung layanan purna jual terbaik.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Konsultasi Gratis
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:border-orange-600 hover:text-orange-600 transition-all font-semibold text-lg">
                Lihat Katalog
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/Wheel.jpg"
                alt="Loader Heavy Equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-orange-600">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '15+', label: 'Tahun Pengalaman' },
            { value: '500+', label: 'Unit Terjual' },
            { value: '98%', label: 'Kepuasan Pelanggan' },
            { value: '24/7', label: 'Dukungan Teknis' }
          ].map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-orange-100 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Produk Unggulan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilihan loader dengan berbagai kapasitas untuk memenuhi kebutuhan proyek Anda
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-orange-600 font-semibold mb-2">{product.model}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{product.name}</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Kapasitas:</span>
                      <span className="font-semibold text-slate-900">{product.capacity}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tenaga:</span>
                      <span className="font-semibold text-slate-900">{product.power}</span>
                    </div>
                  </div>
                  <button onClick={scrollToContact} className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Mengapa Memilih Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Komitmen kami adalah memberikan solusi terbaik dengan standar kualitas internasional
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      {/* <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Spesifikasi Teknis
            </h2>
            <p className="text-xl text-gray-600">Model WL-250 Series 2024</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="bg-slate-900 text-white p-8 rounded-xl text-center hover:bg-orange-600 transition-colors duration-300"
              >
                <div className="text-5xl font-bold mb-2">
                  {spec.value}
                </div>
                <div className="text-orange-300 text-lg font-semibold mb-2">{spec.unit}</div>
                <div className="text-gray-300">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-300">
              Dapatkan konsultasi gratis dan penawaran terbaik untuk kebutuhan bisnis Anda
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nama Lengkap *"
                required
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                required
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Nomor Telepon *"
                required
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nama Perusahaan"
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ceritakan kebutuhan proyek Anda *"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors resize-none mb-6"
            />
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg shadow-lg"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-12 px-6">
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
    </main>
  );
}