import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
  return (
    <header className="z-10 sticky w-full top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-center ">
        <div className="flex justify-between w-full max-w-4xl px-8">
          <MainNav />
          <div>
            <ModeToggle />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
