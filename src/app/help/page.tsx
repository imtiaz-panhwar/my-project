import React from 'react'

function Help() {
  return (
    <>
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-900">Customer Support</h1>
      <div className="mt-8 space-y-6">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">1. How do I place an order?</h3>
              <p className="text-gray-600">Simply browse our collection of shoes, select your desired pair, choose the size, and click on the &quot;Add to Cart&quot; button. Once you&apos;re ready, go to the cart page and follow the instructions to complete your purchase.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">2. How can I track my order?</h3>
              <p className="text-gray-600">After placing your order, you will receive an email with a tracking number and a link to track your shipment. You can also log in to your account to view order details and tracking updates.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">3. What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept major credit cards, PayPal, and bank transfers. Payment options will be displayed during the checkout process.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">4. How do I return an item?</h3>
              <p className="text-gray-600">We offer a 30-day return policy on unworn and unused items. Please visit our returns page for instructions and initiate a return. You will need the original receipt or order confirmation.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">5. Can I change my order after placing it?</h3>
              <p className="text-gray-600">We process orders quickly to ensure fast delivery. If you need to make changes, please contact our customer support team immediately. We will do our best to accommodate your request before the order ships.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">6. Do you ship internationally?</h3>
              <p className="text-gray-600">Yes! We offer international shipping to most countries. International shipping fees will be calculated at checkout based on your location.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-gray-600">If you need further assistance, feel free to reach out to our customer support team. We&apos;re here to help!</p>
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Email Support</h3>
              <p className="text-gray-600">Send us an email at <span className="text-blue-600">support@yourshoestore.com</span> for inquiries related to orders, returns, shipping, or product details.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Phone Support</h3>
              <p className="text-gray-600">Call our support team at <span className="text-blue-600">+1 800-123-4567</span> for any urgent issues or if you need immediate assistance.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Social Media</h3>
              <p className="text-gray-600">Connect with us on social media for updates, promotions, and customer service inquiries.</p>
              <div className="flex space-x-4 mt-2">
                <a href="https://www.facebook.com" className="text-blue-600">Facebook</a>
                <a href="https://www.twitter.com" className="text-blue-600">Twitter</a>
                <a href="https://www.instagram.com" className="text-blue-600">Instagram</a>
                <a href="https://www.linkedin.com" className="text-blue-600">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

    </>
  )
}

export default Help