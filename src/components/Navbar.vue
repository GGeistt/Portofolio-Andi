<template>
  <header 
    class="sticky top-0 z-40 w-full transition-all duration-300 bg-[#f6f6f6]/95 backdrop-blur-sm"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <!-- Brand Logo / Mark -->
      <a 
        href="#home" 
        class="group flex items-center gap-3 text-black hover:opacity-80 transition-opacity"
        @click.prevent="scrollTo('#home')"
      >
        <span class="font-mono text-xs px-2.5 py-1 border border-zinc-400 bg-white font-medium text-black">
          MR
        </span>
        <span class="font-bold tracking-tight text-base text-black">
          Muhammad Rifqiandi
        </span>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-6 lg:gap-8">
        <a 
          v-for="item in navItems" 
          :key="item.id"
          :href="item.href"
          @click.prevent="scrollTo(item.href)"
          class="text-xs lg:text-sm font-sans tracking-tight transition-colors relative py-1 text-zinc-600 hover:text-black"
          :class="{ 'text-black font-semibold': activeSection === item.id }"
        >
          {{ item.label }}
          <span 
            v-if="activeSection === item.id" 
            class="absolute bottom-0 left-0 w-full h-[2px] bg-black"
          ></span>
        </a>
      </nav>

      <!-- Action Button & Mobile Toggle -->
      <div class="flex items-center gap-3">
        <button
          @click="$emit('open-cv')"
          class="hidden sm:inline-block text-xs font-mono font-bold uppercase tracking-wider px-5 py-2.5 bg-black text-white hover:bg-zinc-800 transition-colors rounded-none"
        >
          DOWNLOAD CV
        </button>

        <!-- Mobile Menu Trigger -->
        <button 
          @click="isMobileOpen = !isMobileOpen"
          class="md:hidden p-2 text-zinc-800 hover:text-black border border-zinc-300 bg-white"
          aria-label="Toggle Navigation Menu"
        >
          <Menu v-if="!isMobileOpen" class="w-5 h-5" />
          <X v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Overlay -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-if="isMobileOpen"
        class="md:hidden border-b border-zinc-300 bg-[#f6f6f6] px-4 pt-4 pb-6 space-y-4 shadow-xl"
      >
        <div class="space-y-1">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="item.href"
            @click.prevent="mobileScrollTo(item.href)"
            class="flex items-center justify-between px-3 py-2.5 text-sm font-sans transition-colors"
            :class="activeSection === item.id ? 'bg-white text-black font-bold border border-zinc-300' : 'text-zinc-700 hover:bg-zinc-100'"
          >
            <span>{{ item.label }}</span>
            <span class="text-xs text-zinc-400 font-mono">{{ item.num }}</span>
          </a>
        </div>

        <div class="pt-2 border-t border-zinc-200">
          <button
            @click="$emit('open-cv'); isMobileOpen = false"
            class="w-full text-xs font-mono font-bold uppercase tracking-wider py-3 bg-black text-white"
          >
            DOWNLOAD CV (PDF)
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'

defineEmits(['open-cv'])

const isMobileOpen = ref(false)
const activeSection = ref('home')

const navItems = [
  { id: 'home', num: '01', label: 'Home', href: '#home' },
  { id: 'about', num: '02', label: 'About', href: '#about' },
  { id: 'experience', num: '03', label: 'Experience', href: '#experience' },
  { id: 'projects', num: '04', label: 'Projects', href: '#projects' },
  { id: 'skills', num: '05', label: 'Skills', href: '#skills' },
  { id: 'contact', num: '06', label: 'Contact', href: '#contact' },
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

function mobileScrollTo(href) {
  isMobileOpen.value = false
  scrollTo(href)
}

function updateActiveSection() {
  const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean)
  const scrollPosition = window.scrollY + 120

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section.offsetTop <= scrollPosition) {
      activeSection.value = section.id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>
