import { Button, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <div className="relative flex h-[80vh] items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/yoga-hero.jpg"
            alt="Yoga Practice"
            className="size-full object-cover opacity-80"
          />
        </div>
        <div className="relative z-10 px-4 text-center">
          <img
            src="/images/logo.png"
            alt="Your Path Yoga Logo" 
            className="mx-auto mb-6 h-96 md:h-64"
          />
          <p className="mx-auto mb-8 max-w-2xl text-xl text-dark md:text-2xl">
            Dynamic yoga sequencing to support and advance your home practice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/your-path-structure">
              <Button color="secondary" size="lg">Your Path Structure</Button>
            </Link>
            <Link to="/practice">
              <Button color="primary" size="lg">Practice Here</Button>
            </Link>
            <Link to="/about-megan">
              <Button color="secondary" size="lg">About Megan</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Practice Options Section */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-dark">Choose Your Practice</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-white">
            <h3 className="mb-4 text-2xl font-semibold text-primary">Just Go Flows</h3>
            <p className="mb-4 text-gray-600">
              Minimal instruction flows designed for repetition and deepening your practice.
            </p>
            <Link to="/just-go-flows">
              <Button color="primary" className="w-full">Start Flowing</Button>
            </Link>
          </Card>

          <Card className="bg-white">
            <h3 className="mb-4 text-2xl font-semibold text-secondary">Your Path Flows</h3>
            <p className="mb-4 text-gray-600">
              Personalized sequences that adapt to your practice level and goals.
            </p>
            <Link to="/your-path-flows">
              <Button color="secondary" className="w-full">Begin Your Journey</Button>
            </Link>
          </Card>

          <Card className="bg-white">
            <h3 className="mb-4 text-2xl font-semibold text-accent">Dancing with Dragons</h3>
            <p className="mb-4 text-gray-600">
              A guided session with Megan to help you explore your path.
            </p>
            <Link to="/dancing-with-dragons">
              <Button color="accent" className="w-full">Learn More</Button>
            </Link>
          </Card>
        </div>
      </div>

      {/* Scheduling Section */}

    </div>
  );
}

export default Home;