import React, { useState, useRef, useEffect } from 'react';
import Section from './Section';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl md:text-5xl font-anton-sc text-center uppercase tracking-widest text-shadow-red mb-12">
    {children}
  </h2>
);

type GalleryImageItem = {
  id: string;
  src: string;
  alt: string;
};

const initialGalleryImagesData = [
  {
    src: 'https://storage.googleapis.com/generative-ai-pro-is-hackathon/user-file-4v362b1b/marcha_de_odio_1.png',
    alt: 'Member of the band Marcha de Odio',
  },
  {
    src: 'https://images.unsplash.com/photo-1546410420-99a8f27a0f7a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Guitarist performing on stage at a concert',
  },
  {
    src: 'https://images.unsplash.com/photo-1621281423854-e65893f41a4a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Close-up of a guitar player on stage',
  },
  {
    src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Crowd at a music festival with hands in the air',
  },
  {
    src: 'https://images.unsplash.com/photo-1516273836232-7c98031a54b4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Drummer playing a drum kit on stage',
  },
  {
    src: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Singer performing on stage with a microphone',
  },
];

const GalleryImage: React.FC<{ src: string; alt: string; onDelete: () => void; }> = ({ src, alt, onDelete }) => (
    <div className="group relative overflow-hidden border-2 border-[#B30000]/50">
      <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" loading="lazy" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
      <button
        onClick={onDelete}
        aria-label="Delete photo"
        className="absolute top-2 right-2 z-10 p-2 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#B30000] focus:outline-none focus:ring-2 focus:ring-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
);

const UploadBox: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button
      onClick={onClick}
      className="group relative w-full h-full min-h-[250px] flex items-center justify-center cursor-pointer border-2 border-dashed border-[#B30000]/50 hover:border-[#B30000] hover:bg-[#1a1a1a] transition-all duration-300"
      aria-label="Upload a photo to the gallery"
    >
      <div className="text-center text-gray-400 group-hover:text-white transition-colors duration-300 p-4">
        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4"></path>
        </svg>
        <span className="font-anton-sc text-lg uppercase tracking-wider">Add Photo</span>
      </div>
    </button>
  );

const Gallery: React.FC = () => {
  const [images, setImages] = useState<GalleryImageItem[]>(() => {
    try {
      const storedImages = localStorage.getItem('galleryImages');
      if (storedImages) {
        return JSON.parse(storedImages);
      }
    } catch (error) {
      console.error("Failed to parse images from localStorage", error);
    }
    return initialGalleryImagesData.map((img) => ({
      ...img,
      id: img.src,
    }));
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      localStorage.setItem('galleryImages', JSON.stringify(images));
    } catch (error) {
      console.error("Failed to save images to localStorage", error);
    }
  }, [images]);

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage: GalleryImageItem = {
          id: `user-${Date.now()}`,
          src: reader.result as string,
          alt: 'User uploaded photo',
        };
        setImages((prevImages) => [newImage, ...prevImages]);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleDelete = (idToDelete: string) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== idToDelete));
  };


  return (
    <Section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Brutal Pics</SectionTitle>
        
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <UploadBox onClick={handleFileUploadClick} />
          {images.map((image) => (
            <GalleryImage 
              key={image.id} 
              src={image.src} 
              alt={image.alt} 
              onDelete={() => handleDelete(image.id)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Gallery;
