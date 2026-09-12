<template>
  <section id="projects" class="py-16 sm:py-24 border-t border-zinc-300 bg-[#f6f6f6]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex items-center justify-between pb-6 mb-16 border-b border-zinc-300 font-mono text-xs text-zinc-500 uppercase tracking-wider">
        <span class="text-zinc-900 font-bold">04 / SELECTED WORK</span>
        <span>CURATED CASE STUDIES ({{ projectsData.length }})</span>
      </div>

      <!-- Projects List with Alternating Editorial Layouts -->
      <div class="space-y-24">
        
        <article 
          v-for="(project, index) in projectsData" 
          :key="project.id"
          class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          <!-- Image Column (Alternates Left / Right based on index) -->
          <div 
            class="lg:col-span-7"
            :class="index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'"
          >
            <div 
              class="group relative overflow-hidden border border-zinc-300 bg-white cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              @click="$emit('select-project', project)"
            >
              <!-- High-contrast monochrome image frame -->
              <div class="aspect-[16/9] w-full overflow-hidden bg-zinc-200">
                <img 
                  :src="resolveAssetUrl(project.image)" 
                  :alt="project.title"
                  class="w-full h-full object-cover grayscale contrast-125 filter transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <!-- Subtle Overlay Badge -->
              <div class="absolute top-4 left-4 font-mono text-xs px-3 py-1 bg-white border border-zinc-300 font-semibold text-black">
                {{ project.category }} · {{ project.year }}
              </div>

              <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span class="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider px-4 py-2.5 bg-white text-black">
                  <span>Explore Case Study</span>
                  <ArrowUpRight class="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          <!-- Text Information Column -->
          <div 
            class="lg:col-span-5 space-y-6"
            :class="index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'"
          >
            <div class="font-mono text-xs text-zinc-500 flex items-center gap-3">
              <span class="text-black font-extrabold text-sm">{{ project.number }}</span>
              <span>/</span>
              <span>{{ project.category }}</span>
              <span>/</span>
              <span>{{ project.year }}</span>
            </div>

            <h3 class="text-3xl sm:text-4xl font-extrabold text-black tracking-tight leading-tight">
              {{ project.title }}
            </h3>

            <p class="text-base text-zinc-600 leading-relaxed font-normal">
              {{ project.tagline }}
            </p>

            <!-- Tech Stack Pills -->
            <div class="flex flex-wrap gap-2 pt-2 font-mono text-xs">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-2.5 py-1 bg-white border border-zinc-300 text-black font-medium"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-300">
              <button 
                @click="$emit('select-project', project)"
                class="inline-flex items-center gap-2 px-5 py-3 bg-black text-white hover:bg-zinc-800 font-mono text-xs font-bold uppercase tracking-wider transition-colors rounded-none"
              >
                <span>View Case Study</span>
                <ArrowUpRight class="w-4 h-4" />
              </button>

              <a 
                v-if="project.caseStudy?.repoUrl"
                :href="project.caseStudy.repoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-3 bg-[#e8e8e8]/80 hover:bg-[#dfdfdf] border border-zinc-300 text-black font-mono text-xs font-bold uppercase tracking-wider transition-colors rounded-none"
              >
                <Github class="w-3.5 h-3.5" />
                <span>Repository</span>
              </a>
            </div>

          </div>

        </article>

      </div>

    </div>
  </section>
</template>

<script setup>
import { projectsData } from '../data/portfolioData'
import { ArrowUpRight, Github } from 'lucide-vue-next'

defineEmits(['select-project'])

function resolveAssetUrl(path) {
  if (!path) return ''
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  const base = import.meta.env.BASE_URL.endsWith('/') 
    ? import.meta.env.BASE_URL 
    : import.meta.env.BASE_URL + '/'
  return base + cleanPath
}
</script>
