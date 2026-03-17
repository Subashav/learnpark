import { motion } from 'framer-motion';
import lnpk4 from '../assets/LNPK (4).jpg.jpeg';
import group1 from '../assets/group 1.JPG.jpeg';
import group2 from '../assets/group 2.JPG.jpeg';
import group3 from '../assets/group 3.jpg.jpeg';
import group4 from '../assets/Group 4.jpeg';
import eventImage from '../assets/IMG_20211029_161450.jpg.jpeg';
import lnpk1 from '../assets/LNPK (1).jpg.jpeg';
import lnpk2 from '../assets/LNPK (2).jpg.jpeg';
import lnpk3 from '../assets/LNPK (3).jpg.jpeg';

const galleryImages = [
  { src: lnpk4, alt: 'LearnPark institute banner and team' },
  { src: group1, alt: 'LearnPark students group 1' },
  { src: group2, alt: 'LearnPark students group 2' },
  { src: group3, alt: 'LearnPark students group 3' },
  { src: group4, alt: 'LearnPark students group 4' },
  { src: eventImage, alt: 'LearnPark institute event' },
  { src: lnpk1, alt: 'LearnPark campus memory 1' },
  { src: lnpk2, alt: 'LearnPark campus memory 2' },
  { src: lnpk3, alt: 'LearnPark campus memory 3' },
];

export default function KnowUsPage() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4F46E5]">Know Us</p>
          <h1 className="font-heading mt-3 text-3xl font-bold text-[#111827] sm:text-4xl">Life at LearnPark NEET Academy.</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#6B7280]">
            Real photos from our campus, classroom culture, faculty sessions, and student journey.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.7 }}
        className="pb-16"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, idx) => (
              <article key={image.alt} className={`overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm ${idx === 0 ? 'sm:col-span-2 lg:col-span-3' : ''}`}>
                <img src={image.src} alt={image.alt} className={`w-full ${idx === 0 ? 'max-h-[560px] object-contain bg-[#F8FAFC]' : 'h-72 object-cover'}`} loading="lazy" />
              </article>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
