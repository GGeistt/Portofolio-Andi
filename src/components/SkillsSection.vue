<template>
  <section id="skills" class="py-16 sm:py-24 border-t border-zinc-300 bg-[#f6f6f6]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex items-center justify-between pb-6 mb-12 border-b border-zinc-300 font-mono text-xs text-zinc-500 uppercase tracking-wider">
        <span class="text-zinc-900 font-bold">05 / TECHNICAL COMPETENCIES</span>
        <span>INDEX & CAPABILITIES</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left Title -->
        <div class="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Technical Index
          </h2>
          <p class="text-sm text-zinc-600 leading-relaxed font-normal">
            Categorized technical capabilities spanning backend systems, frontend frameworks, mobile apps, database optimization, and cloud infrastructure.
          </p>
          <div class="p-5 bg-white border border-zinc-300 font-mono text-xs text-zinc-600 space-y-1">
            <span class="text-black font-bold uppercase tracking-wider">STACK PHILOSOPHY</span>
            <p class="text-zinc-600 font-sans text-xs leading-relaxed">Tools are chosen based on problem requirements, maintainability, and production reliability.</p>
          </div>
        </div>

        <!-- Right Categorized Typographic Index -->
        <div class="lg:col-span-8 space-y-10">
          
          <!-- Category Block -->
          <div 
            v-for="(skills, categoryKey) in categoriesMap" 
            :key="categoryKey"
            class="border-b border-zinc-300 pb-8 space-y-4"
          >
            <div class="flex items-center justify-between font-mono text-xs">
              <span class="text-black font-bold uppercase tracking-wider">{{ categoryKey }}</span>
              <span class="text-zinc-500">({{ skills.length }} TECHS)</span>
            </div>

            <!-- Structured Table / Rows -->
            <div class="divide-y divide-zinc-200 border-t border-zinc-300">
              <div 
                v-for="item in skills" 
                :key="item.name"
                class="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:bg-white px-3 transition-colors"
              >
                <div class="flex items-center gap-3">
                  <span class="w-1.5 h-1.5 bg-zinc-400 group-hover:bg-black transition-colors"></span>
                  <span class="text-sm font-bold text-black">
                    {{ item.name }}
                  </span>
                </div>
                <div class="flex items-center justify-between sm:justify-end gap-6 font-mono text-xs">
                  <span class="text-zinc-600 text-left sm:text-right text-xs font-sans">
                    {{ item.desc }}
                  </span>
                  <span class="px-2.5 py-0.5 bg-zinc-100 border border-zinc-300 text-black font-semibold shrink-0">
                    {{ item.level }}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { skillsData } from '../data/portfolioData'

const categoriesMap = {
  "01 / Backend Systems": skillsData.backend,
  "02 / Frontend Frameworks": skillsData.frontend,
  "03 / Mobile Development": skillsData.mobile,
  "04 / Databases & Storage": skillsData.database,
  "05 / Infrastructure & DevOps": skillsData.toolsAndDeployment
}
</script>
