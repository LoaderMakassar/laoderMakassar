import React from "react";

interface GalleryItem {
  id: number;
  image: string;
  title?: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    image: "/Team/gal1.jpeg",
  },
  {
    id: 2,
 image: "/Team/gal2.jpeg",
  },
  {
    id: 3,
   image: "/Team/gal3.jpeg",
  },
  {
    id: 4,
   image: "/Team/gal4.jpeg",
  },
  {
    id: 5,
  image: "/Team/gal5.jpeg",
  },
  {
    id: 6,
  image: "/Team/gal6.jpeg",
  },
  {
    id: 7,
  image: "/Team/andis.jpeg",
  },

];

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 bg-white ">
      {/* Header */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Gallery
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Dokumentasi unit & aktivitas
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryData.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:shadow-lg"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
    
          </div>
        ))}
      </div>
    </div>
  );
}
