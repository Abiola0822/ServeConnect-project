import { heroimage } from '../assets.jsx/hero-image.png';

export default function HeroSection() {
  return (
    <section className="relative">
      <img 
            src={heroimage}
            alt="Hero" 
            className="rounded-lg shadow-xl"
          />
      {/* Overlay content */}
    </section>
  )
}