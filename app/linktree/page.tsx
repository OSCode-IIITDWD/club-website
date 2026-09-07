"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import GradientWaves from "@/components/GradientWaves"

const socials = [
  {
    name: "Instagram",
    description: "Follow us for updates, reels, and behind-the-scenes",
    href: "https://www.instagram.com/oscode_iiitdwd?stkn=YWJodzhxYm94NGRw",
    icon: (
      <svg viewBox="0 0 24 24" className="size-7 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    gradient: "from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    hoverBorder: "hover:border-pink-400/60",
    glowColor: "group-hover:shadow-pink-500/20",
    ringColor: "group-hover:ring-pink-500/30",
  },
  {
    name: "LinkedIn",
    description: "Connect with us professionally and stay in the loop",
    href: "https://www.linkedin.com/company/os-code-iiit-dwd/",
    icon: (
      <svg viewBox="0 0 24 24" className="size-7 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    gradient: "from-[#0077B5] to-[#00a0dc]",
    hoverBorder: "hover:border-sky-400/60",
    glowColor: "group-hover:shadow-sky-500/20",
    ringColor: "group-hover:ring-sky-500/30",
  },
  {
    name: "WhatsApp",
    description: "Join our community group for quick updates and chat",
    href: "https://chat.whatsapp.com/FQ8v11hyPvOLlg5kWZorJC?s=sw&p=a&mlu=4&ilr=4",
    icon: (
      <svg viewBox="0 0 24 24" className="size-7 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    gradient: "from-[#25D366] to-[#128C7E]",
    hoverBorder: "hover:border-emerald-400/60",
    glowColor: "group-hover:shadow-emerald-500/20",
    ringColor: "group-hover:ring-emerald-500/30",
  },
  {
    name: "Discord",
    description: "Hang out, collaborate, and find your next project buddy",
    href: "https://discord.gg/2ucjFATtV",
    icon: (
      <svg viewBox="0 0 24 24" className="size-7 fill-current">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
      </svg>
    ),
    gradient: "from-[#5865F2] to-[#7289da]",
    hoverBorder: "hover:border-indigo-400/60",
    glowColor: "group-hover:shadow-indigo-500/20",
    ringColor: "group-hover:ring-indigo-500/30",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
}



export default function LinktreePage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-12">
      {/* Background — same GradientWaves used on the homepage */}
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

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute left-4 top-4 sm:left-8 sm:top-8"
      >
        <Link
          href="/"
          className="group/back inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400 backdrop-blur-sm transition-all hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="size-4 transition-transform group-hover/back:-translate-x-0.5" />
          Back
        </Link>
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mb-10 flex flex-col items-center"
      >
        {/* Logo with glow ring */}
        <div className="relative mb-6">
          <div className="absolute -inset-2 animate-pulse rounded-full bg-cyan-400/20 blur-xl" />
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-cyan-400/30 shadow-lg shadow-cyan-500/20 sm:h-28 sm:w-28">
            <Image
              src="/favicon.ico"
              alt="OS Code IIIT Dharwad"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h1 className="bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
          OS Code
        </h1>
        <p className="mt-1 text-center text-sm font-medium tracking-[0.2em] text-cyan-400/70">
          IIIT DHARWAD
        </p>
        <p className="mt-3 max-w-xs text-center text-sm leading-relaxed text-slate-400">
          Build in public. Learn together. Connect with us on your favorite
          platform.
        </p>
      </motion.div>

      {/* Social links */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex w-full max-w-md flex-col gap-4"
      >
        {socials.map((social) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md transition-all duration-300 sm:p-5 ${social.hoverBorder} ${social.ringColor} ring-0 ring-transparent hover:bg-white/[0.06] hover:shadow-2xl hover:ring-1 ${social.glowColor}`}
          >
            {/* Gradient background reveal on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.06]`}
            />

            {/* Icon container */}
            <div
              className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${social.gradient} p-[1px]`}
            >
              <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#0a0a0f]/90 text-white transition-colors duration-300 group-hover:bg-[#0a0a0f]/70">
                {social.icon}
              </div>
            </div>

            {/* Text */}
            <div className="relative min-w-0 flex-1">
              <p className="text-base font-semibold text-white">
                {social.name}
              </p>
              <p className="mt-0.5 text-sm leading-snug text-slate-400 transition-colors group-hover:text-slate-300">
                {social.description}
              </p>
            </div>

            {/* Arrow */}
            <ExternalLink className="relative size-5 shrink-0 text-slate-500 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 mt-12 text-center text-xs text-slate-600"
      >
        © {new Date().getFullYear()} OS Code Club · IIIT Dharwad
      </motion.p>


    </div>
  )
}
