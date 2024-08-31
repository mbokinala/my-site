import { ComponentType, ForwardRefExoticComponent, RefAttributes } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function SocialButton({
  Icon,
  href,
}: {
  Icon: ComponentType<any>;
  href: string;
}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="border-neutral-300 w-8 h-8"
      asChild
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Icon className="h-5 w-5" />
      </Link>
    </Button>
  );
}
