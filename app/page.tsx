import Image from 'next/image'
import styles from "./page.module.css";

import { Mail } from "lucide-react"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.intro}>
        <div className={styles.introTitle}>ACAD 276: Dev II</div>
        <div className={styles.introSubtext}>dev ii website because i&apos;m annoyed by how shitty the server is so that it goes down every two classes</div>
      </div>
      <div className={styles.hr}></div>
      <div className={styles.links}>
        <Button variant="outline" asChild>
          <Link href="https://100.21.86.112:2083" target="_blank">cPanel Login</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="https://piazza.com/class/llmjrudf45l1hu/" target="_blank">Piazza</Link>
        </Button>
      </div>
      <div className={styles.hr}></div>
        <div className={styles.content}>
          &quot;Assignment page scraper coming soon&quot;
        </div>
      <div className={styles.hr}></div>
      <div className={styles.paragraph}>
        For reasons on why the website is down again, contact
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" className={styles.hoverButton}>@dent</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-50">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="./app/dent.jpg" />
                <AvatarFallback>PD</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@dent</h4>
                <p className="text-sm">
                  &quot;the guy&quot;
                </p>
                <div className="flex items-center pt-2">
                  <Mail className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    <Link href="mailto:dent@usc.edu" className={styles.emailLink}>dent@usc.edu</Link>
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
      </HoverCard>
      .
        </div>
        <div>To contribute, check out the repo on <a className="text-primary underline underline-offset-4" href="https://github.com/bjmoonn/iyawebdevbecausetheotheroneneverworks">GitHub</a>.</div>
      </div>
    )
}
