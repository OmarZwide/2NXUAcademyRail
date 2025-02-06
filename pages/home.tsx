import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Timeline } from "@/components/sections/timeline";
import { WaitlistForm } from "@/components/sections/waitlist-form";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Timeline />

      {/* Large Feature Image Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585"
          alt="NXU Academy Main Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="container px-4">
            <div className="max-w-2xl text-white">
              <h2 className="text-4xl font-bold mb-4">World-Class Facilities</h2>
              <p className="text-xl">
                Our state-of-the-art campus combines modern technology with collaborative spaces to create an optimal learning environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Grid Section */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold mb-6">Experience Excellence</h2>
            <p className="text-xl text-gray-600">
              Step into a world of innovation and learning at our Johannesburg campus. Our facilities are designed to inspire collaboration and foster technological advancement.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Main Lab Image - Spans 8 columns */}
            <Card className="col-span-12 lg:col-span-8 overflow-hidden">
              <div className="aspect-[16/9]">
                <img
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66"
                  alt="Advanced Technology Laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Advanced Technology Laboratory</h3>
                <p className="text-gray-600">State-of-the-art facilities equipped with the latest AWS cloud infrastructure and AI/ML technologies.</p>
              </div>
            </Card>

            {/* Smaller Images - Span 4 columns each */}
            <Card className="col-span-12 lg:col-span-4 overflow-hidden">
              <div className="aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3"
                  alt="Collaborative Study Spaces"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">Collaborative Spaces</h3>
                <p className="text-gray-600">Modern areas designed for group projects and peer learning.</p>
              </div>
            </Card>

            <Card className="col-span-12 lg:col-span-4 overflow-hidden">
              <div className="aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1558008258-3256797b43f3"
                  alt="Interactive Lecture Theatre"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">Interactive Theatres</h3>
                <p className="text-gray-600">Engaging learning environments with cutting-edge presentation technology.</p>
              </div>
            </Card>

            <Card className="col-span-12 lg:col-span-4 overflow-hidden">
              <div className="aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1577412647305-991150c7d163"
                  alt="Student Commons"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">Student Commons</h3>
                <p className="text-gray-600">Vibrant spaces for community building and networking.</p>
              </div>
            </Card>

            {/* Full-width Innovation Hub */}
            <Card className="col-span-12 overflow-hidden">
              <div className="aspect-[21/9]">
                <img
                  src="https://images.unsplash.com/photo-1497493292307-31c376b6e479"
                  alt="Innovation Hub"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Innovation Hub</h3>
                <p className="text-gray-600">A dedicated space for AI/ML research and development, fostering innovation and technological advancement.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Begin Your AWS Career Journey in the Rainbow Nation</h2>
              <p className="text-xl text-gray-600">
                Located in the heart of Johannesburg, NXU Academy celebrates South Africa's rich diversity. Our inclusive learning environment brings together students from all backgrounds, creating a vibrant community that reflects our Rainbow Nation's spirit while providing world-class AWS certification courses and AI/ML training.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                    alt="Diverse group of South African students collaborating"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                    alt="Multicultural tech workshop in Johannesburg"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <WaitlistForm />
          </div>
        </div>
      </section>
    </main>
  );
}