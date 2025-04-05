"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function PurchasePage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login?purchaseRedirect=true");
    },
  });

  const [quantity, setQuantity] = useState(1);
  const devicePrice = 79.99;
  const shippingCost = 4.99;
  
  // Calculate totals
  const subtotal = devicePrice * quantity;
  const total = subtotal + shippingCost;

  // Handle quantity changes
  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Loading state
  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse">
          <div className="h-4 w-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-10 w-56 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get Your DataSense Device
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Start monitoring your environment in real-time with our advanced IoT solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image and Details */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6">
              <img 
                src="/sensor.png" 
                alt="DataSense IoT Device" 
                className="w-full h-auto rounded-lg object-cover"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
              
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900">DataSense Environmental Monitoring Kit</h2>
                <div className="mt-4 flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <svg
                        key={rating}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="ml-2 text-sm text-gray-500">4.9 (128 reviews)</p>
                </div>
                
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-bold text-gray-900">Product Details</h3>
                  <div className="mt-4 space-y-3 text-sm text-gray-600">
                    <p>✓ Raspberry Pi-based environmental monitoring device</p>
                    <p>✓ Measures temperature, humidity, and soil moisture</p>
                    <p>✓ Built-in Wi-Fi connectivity for real-time data transmission</p>
                    <p>✓ Weatherproof enclosure for indoor/outdoor use</p>
                    <p>✓ 2-year warranty</p>
                    <p>✓ Free access to DataSense cloud platform</p>
                  </div>
                </div>
                
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <div className="flex items-center">
                    <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg" alt="Trustpilot Rating" className="h-6" />
                    <p className="ml-2 text-sm text-gray-500">Rated 4.5/5 on Trustpilot</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Purchase Form */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 block mb-2">Quantity</label>
                <div className="flex items-center">
                  <button 
                    type="button" 
                    onClick={decreaseQuantity}
                    className="bg-gray-200 text-gray-600 rounded-l-md px-4 py-2 hover:bg-gray-300 transition-colors"
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={quantity} 
                    onChange={(e) => setQuantity(Math.min(10, Math.max(1, parseInt(e.target.value))))}
                    className="border-t border-b border-gray-300 text-center w-12 py-2 text-gray-700 focus:outline-none"
                    style={{ appearance: "textfield" }}
                  />
                  <button 
                    type="button" 
                    onClick={increaseQuantity}
                    className="bg-gray-200 text-gray-600 rounded-r-md px-4 py-2 hover:bg-gray-300 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Price</span>
                  <span className="text-gray-900 font-medium">${devicePrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Quantity</span>
                  <span className="text-gray-900 font-medium">{quantity}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900 font-medium">${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 font-bold border-t border-gray-200 mt-2 pt-2">
                  <span className="text-gray-900">Total</span>
                  <span className="text-[#1456BC]">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <button type="button" className="apple-button w-full">
                  Proceed to Checkout
                </button>
                <button type="button" className="w-full border border-gray-300 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                  Add to Cart
                </button>
              </div>
              
              <div className="mt-6 text-sm text-gray-500">
                <p className="mb-2">Payment options:</p>
                <div className="flex space-x-4">
                  <div className="w-20 h-12 border border-gray-300 rounded bg-white flex items-center justify-center px-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-5" />
                  </div>
                  <div className="w-20 h-12 border border-gray-300 rounded bg-white flex items-center justify-center px-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8" />
                  </div>
                  <div className="w-20 h-12 border border-gray-300 rounded bg-white flex items-center justify-center px-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5" />
                  </div>
                  <div className="w-auto h-12 border border-gray-300 rounded bg-white flex items-center justify-center px-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin" className="h-5 mr-2" />
                    <span className="text-xs font-medium">CRYPTO PAYMENT</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center text-xs text-gray-500">
                <p>By completing your purchase, you agree to our <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 