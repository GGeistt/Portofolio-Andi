<template>
  <section id="about" class="py-16 sm:py-24 border-t border-zinc-300 bg-[#f6f6f6]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex items-center justify-between pb-6 mb-12 border-b border-zinc-300 font-mono text-xs text-zinc-500 uppercase tracking-wider">
        <span class="text-zinc-900 font-bold">02 / ABOUT & PHILOSOPHY</span>
        <span>BACKGROUND</span>
      </div>

      <!-- Main Editorial Split Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <!-- Left Column: Headline Statement -->
        <div class="lg:col-span-5 space-y-6">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-black tracking-tight leading-snug">
            Translating complex operational rules into clean, maintainable digital products.
          </h2>
          <div class="p-5 bg-white border border-zinc-300 font-mono text-xs text-zinc-600 space-y-2">
            <div class="text-black font-bold uppercase tracking-wider">ENGINEERING APPROACH</div>
            <p class="font-sans text-xs leading-relaxed">Code is written to be read six months later by someone who was not in the original room.</p>
          </div>
        </div>

        <!-- Right Column: Narrative Body Copy -->
        <div class="lg:col-span-7 space-y-8">
          
          <div class="space-y-6 text-zinc-700 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              {{ developerData.aboutIntro }}
            </p>
            <p class="text-zinc-600">
              {{ developerData.aboutPhilosophy }}
            </p>
          </div>

          <!-- Structured 3-Column Capabilities Grid -->
          <div class="pt-8 border-t border-zinc-300 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
            
            <div class="p-5 bg-white border border-zinc-300 space-y-2">
              <div class="text-zinc-400 font-bold">01 / ARCHITECTURE</div>
              <div class="text-sm font-bold text-black">Database & APIs</div>
              <p class="text-zinc-600 font-sans text-xs leading-relaxed">Relational schema design, transactional integrity, REST endpoints, microservices.</p>
            </div>

            <div class="p-5 bg-white border border-zinc-300 space-y-2">
              <div class="text-zinc-400 font-bold">02 / INTERFACE</div>
              <div class="text-sm font-bold text-black">Web & Mobile</div>
              <p class="text-zinc-600 font-sans text-xs leading-relaxed">Vue 3, React, Flutter mobile apps with responsive offline-first capability.</p>
            </div>

            <div class="p-5 bg-white border border-zinc-300 space-y-2">
              <div class="text-zinc-400 font-bold">03 / DEPLOYMENT</div>
              <div class="text-sm font-bold text-black">VPS & Linux</div>
              <p class="text-zinc-600 font-sans text-xs leading-relaxed">Nginx configuration, SSL certs, Docker containers, system service setup.</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { developerData } from '../data/portfolioData'
</script>
