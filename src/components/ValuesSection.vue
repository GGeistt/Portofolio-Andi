<template>
  <section class="py-16 sm:py-24 border-t border-zinc-300 bg-[#f6f6f6]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex items-center justify-between pb-6 mb-12 border-b border-zinc-300 font-mono text-xs text-zinc-500 uppercase tracking-wider">
        <span class="text-zinc-900 font-bold">ENGINEERING VALUES</span>
        <span>PRINCIPLES</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div class="lg:col-span-4 space-y-4">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Professional Values
          </h2>
          <p class="text-sm text-zinc-600 leading-relaxed font-normal">
            Core principles guiding daily decisions, technical trade-offs, and client communication.
          </p>
        </div>

        <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div 
            v-for="(val, index) in valuesData" 
            :key="index"
            class="p-6 bg-white border border-zinc-300 space-y-3 hover:border-black transition-colors"
          >
            <div class="font-mono text-xs text-zinc-400 font-bold">
              0{{ index + 1 }}
            </div>
            <h3 class="text-lg font-bold text-black tracking-tight">
              {{ val.title }}
            </h3>
            <p class="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
              {{ val.description }}
            </p>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { valuesData } from '../data/portfolioData'
</script>
