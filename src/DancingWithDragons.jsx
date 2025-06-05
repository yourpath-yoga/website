import { Button, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function DancingWithDragons() {
  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <div className="relative flex h-[60vh] items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/dancing-dragons-hero.jpg"
            alt="Dancing with Dragons"
            className="size-full object-cover opacity-80"
          />
        </div>
        <div className="relative z-10 px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold text-dark md:text-6xl">
            Dancing with Dragons
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-dark md:text-2xl">
            A unique fusion of movement and mindfulness, combining traditional yoga with creative expression.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary-600">About the Practice</h2>
            <p className="text-gray-600">
              Dancing with Dragons is a transformative practice that combines the fluidity of dance with the mindfulness of yoga. 
              This unique approach helps you explore movement in new ways, building strength, flexibility, and body awareness.
            </p>
            <p className="text-gray-600">
              Each session is carefully crafted to guide you through a journey of self-discovery, 
              where movement becomes a form of meditation and expression.
            </p>
            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="mb-4 text-xl font-semibold text-primary-700">What to Expect</h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-600">
                <li>Fluid, dance-inspired movements</li>
                <li>Mindful breathing techniques</li>
                <li>Creative expression through movement</li>
                <li>Strength and flexibility building</li>
                <li>Meditative flow sequences</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary-600">Join a Session</h2>
            <p className="text-gray-600">
              Experience the magic of Dancing with Dragons in a guided session. 
              Whether you're new to movement or an experienced practitioner, 
              these sessions are designed to meet you where you are.
            </p>
            <Card className="bg-white">
              <h3 className="mb-4 text-xl font-semibold text-primary-700">Session Details</h3>
              <ul className="space-y-4 text-gray-600">
                <li>• 60-minute guided sessions</li>
                <li>• Small group classes</li>
                <li>• Personalized attention</li>
                <li>• All levels welcome</li>
              </ul>
              <div className="mt-6">
                <a 
                  href="https://yourpathyoga.setmore.com/services/8b0b6436-cd2a-40ad-bf91-5808f14c27a9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button color="primary" className="w-full">
                    Schedule a Session
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 