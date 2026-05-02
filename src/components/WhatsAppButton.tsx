import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/94778048143"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-60" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/40 hover:bg-green-600 transition-all hover:scale-110">
        <MessageCircle className="h-7 w-7" fill="currentColor" />
      </span>
    </a>
  );
};

export default WhatsAppButton;
