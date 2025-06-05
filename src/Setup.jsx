import { Card } from 'flowbite-react';

const Setup = () => {
  return (
    <section className="bg-light min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="mb-4 text-4xl font-bold text-dark sm:text-5xl">Practice Setup Guide</h1>
          <div className="mx-auto mb-8 h-1 w-24 bg-primary-500"></div>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Setting up your practice space correctly is essential for a safe and effective yoga session. 
            Follow these guidelines to create an optimal environment for your practice.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-white">
            <h2 className="mb-4 text-2xl font-semibold text-primary">Mat Placement</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Position your mat perpendicular to the camera, allowing for a clear view of your full body alignment.
                Ensure there's enough space around your mat for movement.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Place your mat on a non-slip surface</li>
                <li>Ensure adequate lighting from the front</li>
                <li>Keep the camera at eye level when standing</li>
                <li>Allow 2-3 feet of space around your mat</li>
              </ul>
            </div>
          </Card>

          <Card className="bg-white">
            <h2 className="mb-4 text-2xl font-semibold text-primary">Essential Props</h2>
            <div className="space-y-4 text-gray-600">
              <p>Having the right props can enhance your practice and support proper alignment:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Yoga mat (non-slip, appropriate thickness)</li>
                <li>Blocks (2 recommended, cork or foam)</li>
                <li>Yoga strap (cotton or nylon, 6-8 feet)</li>
                <li>Bolster or cushion (for support and comfort)</li>
                <li>Blanket (for padding and warmth)</li>
                <li>Optional: Yoga wheel or foam roller</li>
              </ul>
            </div>
          </Card>
        </div>

        <div className="mt-12">
          <Card className="bg-primary-50">
            <h2 className="mb-4 text-2xl font-semibold text-primary-700">Practice Guidelines</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-primary-600">Before Practice</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Wear comfortable, stretchy clothing</li>
                  <li>Practice on an empty stomach</li>
                  <li>Stay hydrated</li>
                  <li>Warm up properly</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-primary-600">During Practice</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Listen to your body</li>
                  <li>Maintain steady breathing</li>
                  <li>Focus on alignment</li>
                  <li>Take breaks when needed</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-primary-600">After Practice</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Cool down properly</li>
                  <li>Stay hydrated</li>
                  <li>Rest in savasana</li>
                  <li>Clean your props</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-primary-600">
            "The quality of your practice space directly influences the quality of your practice."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Setup; 