import React from "react";

const Cart = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-end">
        
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Shop</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div
  className="bg-gray-100 py-4 bg-cover bg-center h-72 flex justify-center items-center "
  style={{ backgroundImage: "url('/image/cartimg.png')" }}
>
  <div className=" mx-auto px-4  ">
    <h2 className="text-2xl font-semibold flex justify-center items-center">Cart</h2>
    <p className="text-gray-600 flex justify-center "> <a href="/">Home</a> &gt; Cart</p>
  </div>
</div>


      {/* Cart Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Product Table */}
          <div className="lg:col-span-2">
            <table className="w-full bg-white shadow rounded-md overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left py-4 px-6 text-gray-600">Product</th>
                  <th className="text-left py-4 px-6 text-gray-600">Price</th>
                  <th className="text-left py-4 px-6 text-gray-600">Quantity</th>
                  <th className="text-left py-4 px-6 text-gray-600">Subtotal</th>
                  <th className="py-4 px-6"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-6 flex items-center">
                    <img
                      src="/image/asgaard.png"
                      alt="Asgaard Sofa"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="ml-4 text-gray-800">Asgaard Sofa</span>
                  </td>
                  <td className="py-4 px-6 text-gray-800">Rs. 250,000.00</td>
                  <td className="py-4 px-6">
                    <input
                      type="number"
                      defaultValue={1}
                      className="w-16 text-center border border-gray-300 rounded px-2 py-1"
                    />
                  </td>
                  <td className="py-4 px-6 text-gray-800">Rs. 250,000.00</td>
                  <td className="py-4 px-6">
                    <button className="text-red-500 hover:text-red-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="bg-white shadow rounded-md p-6">
            <h3 className="text-lg font-semibold text-gray-800">Cart Totals</h3>
            <div className="mt-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between mt-2 text-gray-800 font-semibold">
                <span>Total</span>
                <span>Rs. 250,000.00</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600">
              Check Out
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <h4 className="text-lg font-semibold">Free Delivery</h4>
            <p className="text-gray-600 mt-2">For all orders over $50.</p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold">90 Days Return</h4>
            <p className="text-gray-600 mt-2">If goods have problems.</p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold">Secure Payment</h4>
            <p className="text-gray-600 mt-2">100% secure payment.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-gray-600">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
          <div>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Newsletter</h4>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-l px-4 py-2"
              />
              <button className="bg-yellow-500 text-white px-4 rounded-r hover:bg-yellow-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-600 mt-6">
          © 2022 Meubel House. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Cart;
