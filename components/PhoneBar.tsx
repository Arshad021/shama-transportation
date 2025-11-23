export default function PhoneBar() {
  return (
    <div className="bg-yellow-500 text-black py-3">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <div className="font-semibold mb-3 sm:mb-0">
          Your Global Chauffeur Service
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-base font-medium">

          <a href="tel:+971558840121" className="underline block">
            +971 55 884 0121
          </a>

          <a href="mailto:Shamapassenger@gmail.com"
             className="underline block break-all sm:break-normal">
            Shamapassenger@gmail.com
          </a>

          <a
            href="https://wa.me/971558840121"
            className="underline block">
            WhatsApp Us
          </a>

        </div>
      </div>
    </div>
  );
}
