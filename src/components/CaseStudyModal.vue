<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div 
      v-if="project" 
      class="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-10"
      @click.self="$emit('close')"
    >
      <div class="relative w-full max-w-5xl bg-white border border-zinc-200 rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-zinc-950">
        
        <!-- Modal Top Bar -->
        <div class="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-50 font-mono text-xs text-zinc-600 sticky top-0 z-20">
          <div class="flex items-center gap-3">
            <span class="text-zinc-950 font-extrabold">{{ project.number }}</span>
            <span>/</span>
            <span class="text-zinc-800 font-semibold">{{ project.title }} Case Study</span>
          </div>
          <button 
            @click="$emit('close')"
            class="p-1.5 text-zinc-500 hover:text-zinc-950 rounded border border-zinc-200 bg-white hover:bg-zinc-100 transition-colors"
            aria-label="Close modal"
          >
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Modal Scrollable Content Body -->
        <div class="p-6 sm:p-8 lg:p-10 space-y-10 overflow-y-auto">
          
          <!-- Header & Title -->
          <div class="space-y-4">
            <div class="font-mono text-xs text-zinc-500 flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-1 bg-zinc-100 border border-zinc-200 rounded text-zinc-800 font-semibold">{{ project.category }}</span>
              <span>·</span>
              <span>Year {{ project.year }}</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              {{ project.title }}
            </h2>
            <p class="text-lg text-zinc-700 font-medium">
              {{ project.tagline }}
            </p>
          </div>

          <!-- Hero Image Banner -->
          <div class="rounded border border-zinc-200 overflow-hidden bg-zinc-100 aspect-[16/8] shadow-sm">
            <img 
              :src="resolveAssetUrl(project.image)" 
              :alt="project.title"
              class="w-full h-full object-cover filter"
            />
          </div>

          <!-- Quick Overview Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-zinc-50 border border-zinc-200 rounded font-mono text-xs">
            <div class="space-y-1">
              <div class="text-zinc-500 uppercase tracking-wider font-semibold">User Roles</div>
              <div class="text-zinc-900 font-semibold">{{ project.caseStudy.userRoles.join(', ') }}</div>
            </div>
            <div class="space-y-1">
              <div class="text-zinc-500 uppercase tracking-wider font-semibold">Tech Stack</div>
              <div class="text-zinc-900 font-semibold">{{ project.technologies.join(', ') }}</div>
            </div>
            <div class="space-y-1">
              <div class="text-zinc-500 uppercase tracking-wider font-semibold">Links</div>
              <div class="flex gap-4">
                <a 
                  v-if="project.caseStudy.repoUrl" 
                  :href="project.caseStudy.repoUrl" 
                  target="_blank" 
                  class="text-zinc-950 font-bold underline hover:text-black"
                >GitHub Repo</a>
                <a 
                  v-if="project.caseStudy.demoUrl" 
                  :href="project.caseStudy.demoUrl" 
                  target="_blank" 
                  class="text-zinc-950 font-bold underline hover:text-black"
                >Live Demo</a>
              </div>
            </div>
          </div>

          <!-- Business Problem & Objectives -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-200 pt-8">
            <div class="space-y-3">
              <h3 class="font-mono text-xs text-zinc-500 uppercase tracking-wider font-semibold">Business Problem</h3>
              <p class="text-sm text-zinc-700 leading-relaxed font-normal">
                {{ project.caseStudy.businessProblem }}
              </p>
            </div>

            <div class="space-y-3">
              <h3 class="font-mono text-xs text-zinc-500 uppercase tracking-wider font-semibold">Key Objectives</h3>
              <ul class="space-y-2 text-sm text-zinc-700 font-normal">
                <li v-for="(obj, i) in project.caseStudy.objectives" :key="i" class="flex items-start gap-2">
                  <CheckCircle2 class="w-4 h-4 text-zinc-700 shrink-0 mt-0.5" />
                  <span>{{ obj }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Application Workflow (Numbered Timeline) -->
          <div v-if="project.caseStudy.applicationWorkflow" class="space-y-6 border-t border-zinc-200 pt-8">
            <h3 class="font-mono text-xs text-zinc-500 uppercase tracking-wider font-semibold">Application Workflow</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
              <div 
                v-for="flow in project.caseStudy.applicationWorkflow" 
                :key="flow.step"
                class="p-4 bg-zinc-50 border border-zinc-200 rounded space-y-2"
              >
                <div class="text-xs text-zinc-400 font-bold">{{ flow.step }}</div>
                <div class="text-sm font-bold text-zinc-950">{{ flow.title }}</div>
                <p class="text-xs text-zinc-600 font-sans leading-relaxed">{{ flow.desc }}</p>
              </div>
            </div>
          </div>

          <!-- Technical Approach & Database Notes -->
          <div class="space-y-6 border-t border-zinc-200 pt-8">
            <div class="space-y-3">
              <h3 class="font-mono text-xs text-zinc-500 uppercase tracking-wider font-semibold">Technical Approach</h3>
              <p class="text-sm text-zinc-700 leading-relaxed font-normal">
                {{ project.caseStudy.technicalApproach }}
              </p>
            </div>

            <div class="space-y-3 p-4 bg-zinc-50 border border-zinc-200 rounded font-mono text-xs">
              <div class="text-zinc-900 font-bold">DATABASE & API ARCHITECTURE</div>
              <p class="text-zinc-700 font-sans text-xs leading-relaxed font-normal">
                {{ project.caseStudy.databaseApiNotes }}
              </p>
            </div>
          </div>

          <!-- Challenges & Solutions -->
          <div class="space-y-6 border-t border-zinc-200 pt-8">
            <h3 class="font-mono text-xs text-zinc-500 uppercase tracking-wider font-semibold">Engineering Challenges & Solutions</h3>
            <div class="space-y-4">
              <div 
                v-for="(item, i) in project.caseStudy.challengesAndSolutions" 
                :key="i"
                class="p-4 bg-zinc-50 border border-zinc-200 rounded space-y-2 text-sm"
              >
                <div class="font-mono text-xs text-zinc-600 font-bold">CHALLENGE: {{ item.challenge }}</div>
                <div class="text-zinc-800 font-normal pl-4 border-l-2 border-zinc-400">
                  <span class="font-mono text-xs text-zinc-500 mr-2">SOLUTION:</span>
                  {{ item.solution }}
                </div>
              </div>
            </div>
          </div>

          <!-- Final Result -->
          <div class="p-6 bg-zinc-50 border border-zinc-200 rounded space-y-2 border-t border-zinc-200">
            <div class="font-mono text-xs text-zinc-500 uppercase tracking-wider font-semibold">Project Impact & Final Result</div>
            <p class="text-base text-zinc-950 font-semibold leading-relaxed">
              {{ project.caseStudy.result }}
            </p>
          </div>

        </div>

        <!-- Modal Footer -->
        <div class="px-6 py-4 border-t border-zinc-200 bg-zinc-50 flex items-center justify-between font-mono text-xs">
          <span class="text-zinc-500">Muhammad Rifqiandi Portfolio Case Study</span>
          <button 
            @click="$emit('close')"
            class="px-4 py-2 bg-black text-white hover:bg-zinc-800 font-bold rounded-none shadow-sm"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  </transition>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { X, CheckCircle2 } from 'lucide-vue-next'

defineProps({
  project: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])

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

function handleKeyDown(e) {
  if (e.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>
