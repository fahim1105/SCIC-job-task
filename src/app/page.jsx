import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-10 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Upgrade Your Tech Life</h1>
        <p className="text-xl mb-8">Get the best gadgets and accessories at unbeatable prices.</p>
        <Link href="/items" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition">
          Browse All Items
        </Link>
      </section>

      {/* 2. Featured Category Section */}
      <section className="py-16 px-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Laptops', 'Mice', 'Keyboards'].map((cat) => (
            <div key={cat} className="border p-6 rounded-lg text-center hover:shadow-lg transition cursor-pointer bg-gray-50">
              <h3 className="text-xl font-bold">{cat}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About Us Section */}
      <section className="py-16 px-10 bg-gray-100 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            We are a leading tech store providing high-quality electronics to our customers since 2020.
            Our mission is to bring technology closer to everyone with affordable pricing and trust.
          </p>
        </div>

        {/* Image Section Update */}
        <div className="flex-1 w-full h-80 rounded-lg overflow-hidden shadow-xl">
          <img
            src="https://i.ibb.co.com/d4Bk2F3R/exospace-bbsr-M0-N-efn-l1-A-unsplash.jpg"
            alt="Our Tech Team"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 4. Why Choose Us (Features) */}
      <section className="py-16 px-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div><p className="text-4xl mb-2">🚚</p><h4 className="font-bold">Fast Delivery</h4></div>
          <div><p className="text-4xl mb-2">🛡️</p><h4 className="font-bold">Secure Payment</h4></div>
          <div><p className="text-4xl mb-2">💎</p><h4 className="font-bold">Original Products</h4></div>
          <div><p className="text-4xl mb-2">🎧</p><h4 className="font-bold">24/7 Support</h4></div>
        </div>
      </section>

      {/* 5. Statistics Section */}
      <section className="py-16 px-10 bg-blue-900 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div><h2 className="text-4xl font-bold">10k+</h2><p>Happy Customers</p></div>
          <div><h2 className="text-4xl font-bold">500+</h2><p>Products Sold</p></div>
          <div><h2 className="text-4xl font-bold">50+</h2><p>Top Brands</p></div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-16 px-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="max-w-2xl mx-auto italic text-center text-gray-600">"The best customer service ever! I bought a laptop and it arrived in perfect condition within 24 hours. Highly recommended!"
          <br /><span className="font-bold text-black not-italic mt-4 block">- Asif Al Fath</span>
        </div>
      </section>

      {/* 7. Call to Action (CTA) / Newsletter */}
      <section className="py-20 px-10 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Don't Miss Out on Deals!</h2>
        <p className="mb-8">Subscribe to our newsletter to get updates on new arrivals.</p>
        <div className="flex justify-center max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" className="p-3 rounded-l-lg w-full text-black outline-none" />
          <button className="bg-black px-6 py-3 rounded-r-lg font-bold hover:bg-gray-800">Join</button>
        </div>
      </section>

      {/* Footer Section */}
      <Footer></Footer>
      <footer className="py-10 bg-gray-900 text-gray-400 text-center border-t border-gray-800">
        <p>© 2026 MyStore. All Rights Reserved.</p>
      </footer>
    </div>
  );
}