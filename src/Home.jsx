import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-500/30 to-accent-500/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-4 text-center">
          <img
            src="/images/logo.png"
            alt="Your Path Yoga Logo" 
            className="mx-auto mb-4 mt-2 h-96 drop-shadow-lg md:h-64"
          />
          <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Find Your Path
          </h1>
          <p className="mx-auto mb-4 text-xl text-white/90 md:text-2xl">
            Dynamic yoga sequencing to support and advance your home practice.
          </p>
          <div className="mb-6 flex flex-wrap justify-center gap-6">
            <Link to="/practice">
              <Button color="primary" size="lg" className="shadow-lg transition-shadow hover:shadow-xl">
                Practice Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Practice Options Section */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-16 text-center text-3xl font-bold text-dark">Choose Your Practice</h2>
        
        {/* Just Go Flows Section */}
        <div className="mb-24">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">Just Go Flows</h3>
              <p className="text-lg text-gray-600">
                Minimal instruction flows designed for repetition and deepening your practice. Perfect for when you want to move without overthinking.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="mr-2 size-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Short, focused sequences
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 size-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Minimal verbal guidance
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 size-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Perfect for daily practice
                </li>
              </ul>
              <Link to="/just-go-flows">
                <Button color="primary" size="lg" className="mt-4">
                  Explore Just Go Flows
                </Button>
              </Link>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg md:h-80">
              <img
                src="/images/just-go-flows.jpg"
                alt="Just Go Flows"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Your Path Flows Section */}
        <div className="mb-24">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="relative order-2 h-64 overflow-hidden rounded-lg shadow-lg md:order-1 md:h-80">
              <img
                src="/images/your-path-flows.jpg"
                alt="Your Path Flows"
                className="size-full object-cover"
              />
            </div>
            <div className="order-1 space-y-6 md:order-2">
              <h3 className="text-3xl font-bold text-secondary">Your Path Flows</h3>
              <p className="text-lg text-gray-600">
                Personalized sequences that adapt to your practice level and goals. Build your practice step by step with guided progression.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="mr-2 size-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Progressive sequences
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 size-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Detailed instruction
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 size-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Track your progress
                </li>
              </ul>
              <Link to="/your-path-flows">
                <Button color="secondary" size="lg" className="mt-4">
                  Begin Your Journey
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Dancing with Dragons Section */}
        <div>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-accent">Dancing with Dragons</h3>
              <p className="text-lg text-gray-600">
                A unique fusion of movement and mindfulness, combining traditional yoga with creative expression. Explore your practice in a new way.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="mr-2 size-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Creative movement
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 size-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Guided sessions
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 size-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Personal exploration
                </li>
              </ul>
              <a href="https://app.acuityscheduling.com/schedule.php?owner=33019989" target="_blank" rel="noopener noreferrer">
                <Button color="accent" size="lg" className="mt-4">
                  Book Now
                </Button>
              </a>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg md:h-80">
              <img
                src="/images/dancing-dragons.jpg"
                alt="Dancing with Dragons"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;