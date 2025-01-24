

const Footer = () => {
  return (
    <div>
      <div className="bg-white w-full p-10">
  {/* Footer container */}
  <div className="grid grid-cols-4 gap-8">
    {/* Address Section */}
    <div className="text-gray-500">
      <p>400 University Drive Suite 200 Coral Gables,</p>
      <p>FL 33134 USA</p>
    </div>

    {/* Links Section */}
    <div>
      <h3 className="text-gray-400 font-semibold mb-3">Links</h3>
      <ul className="space-y-2">
        <li className="text-black">Home</li>
        <li className="text-black">Shop</li>
        <li className="text-black">About</li>
        <li className="text-black">Contact</li>
      </ul>
    </div>

    {/* Help Section */}
    <div>
      <h3 className="text-gray-400 font-semibold mb-3">Help</h3>
      <ul className="space-y-2">
        <li className="text-black">Payment Options</li>
        <li className="text-black">Returns</li>
        <li className="text-black">Privacy Policies</li>
      </ul>
    </div>

    {/* Newsletter Section */}
    <div>
      <h3 className="text-gray-400 font-semibold mb-3">Newsletter</h3>
      <div className="flex items-center space-x-2">
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="border-b border-black w-full focus:outline-none"
        />
        <button className="text-white bg-black px-4 py-2 rounded-md">SUBSCRIBE</button>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="border-t mt-10 pt-4  text-gray-500">
    <p>2022 Meubel House. All rights reserved</p>
  </div>
</div>

    </div>
  )
}

export default Footer
