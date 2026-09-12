<template>
  <section id="experience" class="py-16 sm:py-24 border-t border-zinc-300 bg-[#f6f6f6]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex items-center justify-between pb-6 mb-12 border-b border-zinc-300 font-mono text-xs text-zinc-500 uppercase tracking-wider">
        <span class="text-zinc-900 font-bold">03 / EXPERIENCE & TRACK RECORD</span>
        <span>CAREER HISTORY</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left Sticky Header -->
        <div class="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Professional Experience
          </h2>
          <p class="text-sm text-zinc-600 leading-relaxed">
            A history of building software across agency environments, enterprise platforms, and business operations.
          </p>
          <div class="pt-4 font-mono text-xs text-zinc-500">
            Click any row to expand responsibilities & tech stack details.
          </div>
        </div>

        <!-- Right Timeline Rows -->
        <div class="lg:col-span-8 space-y-4">
          
          <div 
            v-for="(exp, index) in experienceData" 
            :key="exp.id"
            class="border border-zinc-300 bg-white transition-all overflow-hidden"
            :class="expandedId === exp.id ? 'border-black shadow-sm' : 'hover:border-zinc-400'"
          >
            <!-- Row Header -->
            <button 
              @click="toggleExpand(exp.id)"
              class="w-full p-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors"
            >
              <div class="space-y-1">
                <div class="flex items-center gap-3">
                  <span class="font-mono text-xs text-zinc-400 font-bold">0{{ index + 1 }}</span>
                  <h3 class="text-lg font-bold text-black tracking-tight">
                    {{ exp.role }}
                  </h3>
                </div>
                <div class="text-xs font-mono text-zinc-600 flex flex-wrap items-center gap-2">
                  <span class="text-black font-bold">{{ exp.company }}</span>
                  <span>·</span>
                  <span>{{ exp.location }}</span>
                  <span>·</span>
                  <span class="px-2 py-0.5 bg-zinc-100 border border-zinc-300 text-black font-medium text-[11px]">{{ exp.type }}</span>
                </div>
              </div>

              <div class="flex items-center justify-between sm:justify-end gap-4">
                <span class="font-mono text-xs text-zinc-800 font-semibold px-3 py-1 bg-zinc-100 border border-zinc-300">
                  {{ exp.period }}
                </span>
                <ChevronDown 
                  class="w-4 h-4 text-zinc-500 transition-transform duration-200"
                  :class="{ 'rotate-180 text-black': expandedId === exp.id }"
                />
              </div>
            </button>

            <!-- Expandable Detail Body -->
            <div 
              v-show="expandedId === exp.id"
              class="px-6 pb-6 pt-2 border-t border-zinc-200 space-y-4 font-sans text-sm text-zinc-700"
            >
              <p class="text-zinc-600 leading-relaxed font-normal">
                {{ exp.description }}
              </p>

              <div class="space-y-2">
                <div class="font-mono text-xs text-zinc-500 font-bold uppercase tracking-wider">Key Responsibilities:</div>
                <ul class="space-y-2 pl-4 list-disc text-zinc-800">
                  <li v-for="(resp, i) in exp.responsibilities" :key="i">
                    {{ resp }}
                  </li>
                </ul>
              </div>

              <div class="pt-4 flex flex-wrap gap-2 font-mono text-xs">
                <span 
                  v-for="tech in exp.technologies" 
                  :key="tech"
                  class="px-2.5 py-1 bg-zinc-100 border border-zinc-300 text-zinc-800 font-medium"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { experienceData } from '../data/portfolioData'
import { ChevronDown } from 'lucide-vue-next'

const expandedId = ref(experienceData[0].id)

function toggleExpand(id) {
  expandedId.value = expandedId.value === id ? null : id
}
</script>
