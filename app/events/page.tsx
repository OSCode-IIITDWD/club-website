import { EventsSections } from "@/components/events/events-sections"
import { NavigationMenuDemo } from "@/components/navigation"
import { listEvents } from "@/lib/event-service"
import { getSession } from "@/lib/session"
import MoltenMetal from "@/components/MoltenMetal"
import TargetCursorWrapper from "@/components/TargetCursorWrapper"
import GradientWaves from "@/components/GradientWaves"

export const metadata = {
  title: "Events | OS Code IIIT Dharwad",
  description:
    "Upcoming and past events hosted by the OS Code open source club at IIIT Dharwad.",
  icons: {
    icon: "/oscode.ico",
  },
}

export default async function Page() {
  const [events, session] = await Promise.all([listEvents(), getSession()])

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="pointer-events-none fixed inset-x-0 bottom-0 -z-10 h-full w-full">
        <div className="h-full w-full">
          <GradientWaves
            horizonColor="#1E88E5"
            waveColor="#FF9FFC"
            crestColor="#FFFFFF"
            speed={0.4}
            amplitude={2.5}
            waveScale={0.6}
            waveRatio={0.9}
            swell={35}
            turbulence={20}
            tilt={1.11}
            zoom={1}
            height={5.5}
            fogDepth={15}
            detail="medium"
            brightness={1}
            opacity={1}
            mouseInteraction
            parallaxStrength={0.5}
            grain
            grainIntensity={0.05}
          />
        </div>
      </div>
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-6 sm:px-6 lg:px-8">
        <div className="w-full">
          <NavigationMenuDemo />
        </div>
        <TargetCursorWrapper />

        <EventsSections events={events} memberName={session?.name ?? null} />
      </main>
    </div>
  )
}
