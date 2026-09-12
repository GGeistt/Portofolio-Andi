<template>
  <footer class="bg-[#f6f6f6] border-t border-zinc-300 text-zinc-600 py-16 font-mono text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Top Grid: Bio & Nav Links -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        <!-- Brand & Statement Column -->
        <div class="md:col-span-6 space-y-4">
          <div class="flex items-center gap-3">
            <span class="font-mono text-xs px-2.5 py-1 border border-zinc-400 bg-white font-bold text-black">
              MR
            </span>
            <span class="font-extrabold text-black text-base">Muhammad Rifqiandi</span>
          </div>
          <p class="text-sm font-sans text-zinc-600 max-w-md leading-relaxed">
            Full stack and mobile developer building systems that hold up under real business use — from the first interface to the server it runs on.
          </p>
          <div class="text-zinc-500 text-[11px]">
            Kota Tangerang, Indonesia — GMT+7
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="md:col-span-3 space-y-3">
          <div class="text-black font-bold uppercase tracking-wider">Navigate</div>
          <ul class="space-y-2">
            <li><a href="#home" @click.prevent="scrollTo('#home')" class="hover:text-black transition-colors">01 / Home</a></li>
            <li><a href="#about" @click.prevent="scrollTo('#about')" class="hover:text-black transition-colors">02 / About</a></li>
            <li><a href="#experience" @click.prevent="scrollTo('#experience')" class="hover:text-black transition-colors">03 / Experience</a></li>
            <li><a href="#projects" @click.prevent="scrollTo('#projects')" class="hover:text-black transition-colors">04 / Projects</a></li>
            <li><a href="#skills" @click.prevent="scrollTo('#skills')" class="hover:text-black transition-colors">05 / Skills</a></li>
            <li><a href="#contact" @click.prevent="scrollTo('#contact')" class="hover:text-black transition-colors">06 / Contact</a></li>
          </ul>
        </div>

        <!-- Social Media Links -->
        <div class="md:col-span-3 space-y-3">
          <div class="text-black font-bold uppercase tracking-wider">Elsewhere</div>
          <ul class="space-y-2">
            <li>
              <a :href="developerData.contacts.github" target="_blank" rel="noopener noreferrer" class="hover:text-black transition-colors flex items-center gap-2">
                <span>GitHub</span>
                <ArrowUpRight class="w-3 h-3 text-zinc-400" />
              </a>
            </li>
            <li>
              <a :href="developerData.contacts.linkedin" target="_blank" rel="noopener noreferrer" class="hover:text-black transition-colors flex items-center gap-2">
                <span>LinkedIn</span>
                <ArrowUpRight class="w-3 h-3 text-zinc-400" />
              </a>
            </li>
            <li>
              <a :href="developerData.contacts.whatsapp" target="_blank" rel="noopener noreferrer" class="hover:text-black transition-colors flex items-center gap-2">
                <span>WhatsApp</span>
                <ArrowUpRight class="w-3 h-3 text-zinc-400" />
              </a>
            </li>
            <li>
              <a :href="`mailto:${developerData.contacts.email}`" class="hover:text-black transition-colors flex items-center gap-2">
                <span>Email</span>
                <ArrowUpRight class="w-3 h-3 text-zinc-400" />
              </a>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom Disclaimer & Copyright Strip -->
      <div class="pt-8 border-t border-zinc-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500">
        <div>
          © {{ currentYear }} Muhammad Rifqiandi. All rights reserved.
        </div>
        <div class="text-black font-bold">
          Designed and developed with intention.
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { developerData } from '../data/portfolioData'
import { ArrowUpRight } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
