import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PinBottomIcon,
  SewingPinIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import SocialButton from "@/components/social-button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24 bg-background">
      <div className="w-full px-12 lg:px-0 lg:w-2/5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-6xl font-bold mb-2">Hi, I&rsquo;m Manav{" "}👋</h1>
            <h2 className="text-primary text-xl">
              I&rsquo;m wearer of many hats - engineer, designer, and founder.
            </h2>
          </div>

          <Avatar className="w-24 h-24">
            <AvatarImage src="/me.png" />
            <AvatarFallback>MB</AvatarFallback>
          </Avatar>
        </div>

        {/* <div className="mt-2 flex gap-1 items-center">
          <SewingPinIcon className="w-4 h-4" />
          <p>San Francisco</p>
        </div> */}

        <p className="mt-4 text-lg">
          I&rsquo;m currently building{" "}
          <Link
            href="https://vly.ai"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            vly
          </Link>
          , an LLM-powered platform to design, build, and deploy full-stack web
          apps without needing to write code.
        </p>

        <p className="mt-8 mb-8 text-center mx-auto">
          I love meeting new people and learning about new ideas. Feel free to reach out at{"  "}
          <Link href="mailto:manav.bokinala@gmail.com" className="underline">
            manav.bokinala@gmail.com
          </Link>
          .
        </p>
        <div className="mt-4 mb-4 flex justify-center">
          <p className="italic">more coming soon</p>
        </div>

        <div className="flex gap-2 items-center justify-center">
          <SocialButton
            Icon={GitHubLogoIcon}
            href="https://github.com/mbokinala"
          />
          <SocialButton
            Icon={TwitterLogoIcon}
            href="https://github.com/mbokinala"
          />
          <SocialButton
            Icon={LinkedInLogoIcon}
            href="https://www.linkedin.com/in/mbokinala/"
          />
          <SocialButton
            Icon={EnvelopeClosedIcon}
            href="mailto:manav.bokinala@gmail.com"
          />
        </div>
      </div>
    </main>
  );
}
