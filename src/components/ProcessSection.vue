<template>
  <section class="py-16 sm:py-24 border-t border-zinc-300 bg-[#f6f6f6]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex items-center justify-between pb-6 mb-12 border-b border-zinc-300 font-mono text-xs text-zinc-500 uppercase tracking-wider">
        <span class="text-zinc-900 font-bold">DEVELOPMENT METHODOLOGY</span>
        <span>5-STEP WORKFLOW</span>
      </div>

      <div class="space-y-8">
        <div class="max-w-2xl space-y-3">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            How I Build Software
          </h2>
          <p class="text-sm text-zinc-600 leading-relaxed font-normal">
            A structured development lifecycle ensuring requirements are clarified before code is written, and systems run reliably after deployment.
          </p>
        </div>

        <!-- Desktop Horizontal Grid / Mobile Vertical Stack -->
        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 font-mono text-xs">
          
          <div 
            v-for="proc in processData" 
            :key="proc.step"
            class="p-6 bg-white border border-zinc-300 space-y-4 hover:border-black transition-colors flex flex-col justify-between"
          >
            <div class="space-y-2">
              <div class="text-xs text-zinc-400 font-bold border-b border-zinc-200 pb-2">
                {{ proc.step }}
              </div>
              <div class="text-base font-bold text-black tracking-tight">
                {{ proc.title }}
              </div>
            </div>
            
            <p class="text-xs text-zinc-600 font-sans leading-relaxed pt-2 font-normal">
              {{ proc.description }}
            </p>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { processData } from '../data/portfolioData'
</script>
