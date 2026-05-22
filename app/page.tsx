import { Desktop } from "@/components/os/desktop"

export default function Page() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-black text-foreground antialiased selection:bg-primary/30">
      <Desktop />
    </main>
  )
}
