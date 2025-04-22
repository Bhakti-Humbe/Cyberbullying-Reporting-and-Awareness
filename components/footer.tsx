import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-purple-600 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <span className="text-xl font-bold">CyberShield</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering individuals to stand against cyberbullying through awareness, support, and community action.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-foreground">
                  Support Resources
                </Link>
              </li>
              <li>
                <Link href="/helpline" className="text-muted-foreground hover:text-foreground">
                  Helpline
                </Link>
              </li>
              <li>
                <Link href="/statistics" className="text-muted-foreground hover:text-foreground">
                  Statistics
                </Link>
              </li>
              <li>
                <Link href="/awareness" className="text-muted-foreground hover:text-foreground">
                  Awareness
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground">
                  Forums
                </Link>
              </li>
              <li>
                <Link href="/report" className="text-muted-foreground hover:text-foreground">
                  Report Bullying
                </Link>
              </li>
              <li>
                <Link href="/community/events" className="text-muted-foreground hover:text-foreground">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/community/volunteer" className="text-muted-foreground hover:text-foreground">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Stay Updated</h3>
            <form className="flex flex-col gap-2">
              <Input type="email" placeholder="Enter your email" className="h-9" />
              <Button type="submit" className="h-9 w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CyberShield. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
