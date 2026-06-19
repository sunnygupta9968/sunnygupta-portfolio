import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";
import { getSocialPlatform, socialIcons, socialLabels } from "@/components/social-icons";

export function Footer() {
  return (
    <footer className="border-t-[3px] border-[#2D3142] bg-white py-8">
      <div className="container-page flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <p className="font-black">
            © {new Date().getFullYear()} {profile.personal.name}
          </p>
          <p className="mt-1 text-xs font-bold text-[#66677a]">
            {profile.site.copyright}
          </p>
        </div>

        <nav
          aria-label={profile.site.footerNav}
          className="flex flex-wrap justify-center gap-4"
        >
          {profile.navigation.map((item) => (
            <a
              className="text-sm font-bold hover:text-[#5B8CFF]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <nav
            aria-label={profile.site.socialNav}
            className="flex flex-wrap justify-center gap-2"
          >
            {Object.entries(profile.socials)
              .filter(([, url]) => Boolean(url))
              .flatMap(([key, url]) => {
                const platform = getSocialPlatform(key);
                if (!platform) return [];
                const Icon = socialIcons[platform];
                return (
                  <a
                    className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#2D3142] bg-white shadow-[3px_3px_0_#2D3142] transition-transform hover:-translate-y-1"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={socialLabels[platform]}
                    title={socialLabels[platform]}
                    key={key}
                  >
                    <Icon size={19} aria-hidden />
                  </a>
                );
              })}
          </nav>

          <a
            href="#top"
            aria-label={profile.site.backToTop}
            className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#2D3142] bg-[#F9C74F] shadow-[3px_3px_0_#2D3142] transition-transform hover:-translate-y-1"
          >
            <ArrowUp size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}
