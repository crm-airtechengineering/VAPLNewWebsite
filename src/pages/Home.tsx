import { Button } from "../components/ui/button"

export function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to Your Company
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transforming industries through innovation and excellence. 
          We deliver cutting-edge solutions that drive your business forward.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <Button size="lg">Get Started</Button> */}
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </div>
    </section>
  );
}