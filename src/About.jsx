export default function AboutUs() {
  return (
    <section className="bg-light">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-screen-lg space-y-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-dark sm:text-5xl">About Megan</h1>
            <div className="mx-auto mb-8 h-1 w-24 bg-primary-500"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">
                Welcome to Your Path Yoga! I'm Megan, a dedicated yoga instructor passionate about helping you discover and deepen your personal yoga journey.
              </p>
              <p>
                With over a decade of teaching experience, I've developed a unique approach that combines traditional yoga practices with modern sequencing techniques. My goal is to make yoga accessible, enjoyable, and transformative for practitioners of all levels.
              </p>
              <p>
                I believe that yoga is more than just physical exercise—it's a path to self-discovery, mindfulness, and personal growth. Through my teaching, I aim to create a space where you can explore movement, breath, and meditation in a way that feels authentic to your body and spirit.
              </p>
              <p>
                My teaching style emphasizes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mindful movement and breath awareness</li>
                <li>Safe alignment and proper form</li>
                <li>Personalized practice development</li>
                <li>Creating a supportive and inclusive environment</li>
                <li>Balancing challenge with accessibility</li>
              </ul>
            </div>

            <div className="relative">
              <img
                src="/images/megan-profile.jpg"
                alt="Megan teaching yoga"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-accent-300 opacity-50"></div>
            </div>
          </div>

          <div className="mt-12 rounded-lg bg-primary-100 p-8">
            <h2 className="mb-4 text-2xl font-semibold text-primary-700">My Teaching Philosophy</h2>
            <p className="text-gray-600">
              I believe that yoga should adapt to the practitioner, not the other way around. Whether you're looking to build strength, increase flexibility, reduce stress, or deepen your spiritual practice, I'm here to guide you on your unique path. My approach combines traditional wisdom with contemporary understanding of movement and mindfulness, creating a practice that's both grounding and transformative.
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg font-medium text-primary-600">
              "Yoga is not about touching your toes, it's about what you learn on the way down."
            </p>
            <p className="mt-2 text-gray-500">- Jigar Gor</p>
          </div>
        </div>
      </div>
    </section>
  );
}
