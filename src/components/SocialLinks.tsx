import { Facebook, Instagram, Linkedin, MessageCircle, Music2 } from "lucide-react";
import { cn } from "@/lib/utils";

const socials = [
  { href: "https://facebook.com", label: "Facebook", Icon: Facebook, hover: "hover:text-[#1877F2]" },
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram, hover: "hover:text-[#E4405F]" },
  { href: "https://tiktok.com", label: "TikTok", Icon: Music2, hover: "hover:text-foreground" },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin, hover: "hover:text-[#0A66C2]" },
  { href: "https://wa.me/94778048143", label: "WhatsApp", Icon: MessageCircle, hover: "hover:text-[#25D366]" },
];

interface Props {
  className?: string;
  iconClassName?: string;
}

const SocialLinks = ({ className, iconClassName }: Props) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socials.map(({ href, label, Icon, hover }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "transition-all duration-200 hover:scale-110",
            hover,
            iconClassName,
          )}
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
