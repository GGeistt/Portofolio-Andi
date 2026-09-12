<template>
  <section id="contact" class="py-16 sm:py-24 border-t border-zinc-300 bg-[#f6f6f6]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex items-center justify-between pb-6 mb-12 border-b border-zinc-300 font-mono text-xs text-zinc-500 uppercase tracking-wider">
        <span class="text-zinc-900 font-bold">06 / GET IN TOUCH</span>
        <span>START A CONVERSATION</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <!-- Left Column: Direct Info & Socials -->
        <div class="lg:col-span-5 space-y-8">
          
          <div class="space-y-4">
            <h2 class="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight">
              Have a project, system, or product idea?
            </h2>
            <p class="text-base text-zinc-600 leading-relaxed font-normal">
              Let's discuss how it can be transformed into a practical and well-structured digital solution.
            </p>
          </div>

          <!-- Direct Contact Grid -->
          <div class="space-y-4 font-mono text-xs">
            <div class="p-4 bg-white border border-zinc-300 space-y-2">
              <div class="text-zinc-500 font-bold">DIRECT EMAIL</div>
              <a 
                :href="`mailto:${developerData.contacts.email}`"
                class="text-sm font-bold text-black hover:underline block"
              >
                {{ developerData.contacts.email }}
              </a>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 bg-white border border-zinc-300 space-y-1">
                <div class="text-zinc-500 font-bold">LOCATION</div>
                <div class="text-black font-bold">Yogyakarta, ID</div>
              </div>
              <div class="p-4 bg-white border border-zinc-300 space-y-1">
                <div class="text-zinc-500 font-bold">AVAILABILITY</div>
                <div class="text-emerald-700 font-bold">Open for work</div>
              </div>
            </div>
          </div>

          <!-- Social Media Links -->
          <div class="pt-4 border-t border-zinc-300 space-y-3 font-mono text-xs">
            <div class="text-zinc-500 uppercase tracking-wider font-bold">Connect Elsewhere</div>
            <div class="flex flex-wrap gap-4">
              <a 
                :href="developerData.contacts.github" 
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-zinc-800 hover:text-black font-bold transition-colors"
              >
                <Github class="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a 
                :href="developerData.contacts.linkedin" 
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-zinc-800 hover:text-black font-bold transition-colors"
              >
                <Linkedin class="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a 
                :href="developerData.contacts.whatsapp" 
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-zinc-800 hover:text-black font-bold transition-colors"
              >
                <MessageSquare class="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Right Column: Minimal Underline Contact Form -->
        <div class="lg:col-span-7 bg-white border border-zinc-300 p-6 sm:p-8 space-y-6">
          <div class="font-mono text-xs text-zinc-500 flex justify-between items-center border-b border-zinc-200 pb-4 uppercase tracking-wider">
            <span class="text-black font-bold">SEND A MESSAGE</span>
            <span>NO SPAM · DIRECT INBOX</span>
          </div>

          <form @submit.prevent="submitForm" class="space-y-6">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- Name Input -->
              <div class="space-y-2">
                <label for="name" class="block font-mono text-xs text-zinc-600 uppercase tracking-wider font-bold">Your Name *</label>
                <input 
                  id="name" 
                  v-model="form.name"
                  type="text" 
                  required
                  placeholder="John Doe"
                  class="w-full bg-[#f9f9f9] border-b-2 border-zinc-300 px-3 py-2.5 text-sm text-black placeholder-zinc-400 focus:border-black focus:outline-none transition-colors"
                />
              </div>

              <!-- Email Input -->
              <div class="space-y-2">
                <label for="email" class="block font-mono text-xs text-zinc-600 uppercase tracking-wider font-bold">Your Email *</label>
                <input 
                  id="email" 
                  v-model="form.email"
                  type="email" 
                  required
                  placeholder="john@company.com"
                  class="w-full bg-[#f9f9f9] border-b-2 border-zinc-300 px-3 py-2.5 text-sm text-black placeholder-zinc-400 focus:border-black focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- Company Input -->
              <div class="space-y-2">
                <label for="company" class="block font-mono text-xs text-zinc-600 uppercase tracking-wider font-bold">Company / Org</label>
                <input 
                  id="company" 
                  v-model="form.company"
                  type="text" 
                  placeholder="Acme Studio"
                  class="w-full bg-[#f9f9f9] border-b-2 border-zinc-300 px-3 py-2.5 text-sm text-black placeholder-zinc-400 focus:border-black focus:outline-none transition-colors"
                />
              </div>

              <!-- Project Type Dropdown -->
              <div class="space-y-2">
                <label for="projectType" class="block font-mono text-xs text-zinc-600 uppercase tracking-wider font-bold">Project Type</label>
                <select 
                  id="projectType" 
                  v-model="form.projectType"
                  class="w-full bg-[#f9f9f9] border-b-2 border-zinc-300 px-3 py-2.5 text-sm text-black focus:border-black focus:outline-none transition-colors font-sans"
                >
                  <option value="Full Web Application">Full Web Application</option>
                  <option value="Mobile App (Flutter)">Mobile App (Flutter)</option>
                  <option value="Enterprise System & API">Enterprise System & API</option>
                  <option value="Database & Architecture">Database & Architecture</option>
                  <option value="Full-Time / Contract Role">Full-Time / Contract Role</option>
                </select>
              </div>
            </div>

            <!-- Message Input -->
            <div class="space-y-2">
              <label for="message" class="block font-mono text-xs text-zinc-600 uppercase tracking-wider font-bold">Message *</label>
              <textarea 
                id="message" 
                v-model="form.message"
                required
                rows="4"
                placeholder="Tell me about the goals, timeline, and requirements..."
                class="w-full bg-[#f9f9f9] border-b-2 border-zinc-300 px-3 py-2.5 text-sm text-black placeholder-zinc-400 focus:border-black focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="pt-2">
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black text-white hover:bg-zinc-800 font-mono text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-50 rounded-none"
              >
                <Send v-if="!isSubmitting" class="w-4 h-4" />
                <span>{{ isSubmitting ? 'SENDING MESSAGE...' : 'SEND MESSAGE' }}</span>
              </button>
            </div>

            <!-- Submission Confirmation Toast -->
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-2"
            >
              <div 
                v-if="submitted" 
                class="p-4 bg-emerald-50 border border-emerald-300 text-xs font-mono text-emerald-900 flex items-center gap-3"
              >
                <CheckCircle2 class="w-4 h-4 shrink-0 text-emerald-700" />
                <span>Thank you! Your message has been sent. I will respond within 24 hours.</span>
              </div>
            </transition>

          </form>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { developerData } from '../data/portfolioData'
import { Github, Linkedin, MessageSquare, Send, CheckCircle2 } from 'lucide-vue-next'

const form = reactive({
  name: '',
  email: '',
  company: '',
  projectType: 'Full Web Application',
  message: ''
})

const isSubmitting = ref(false)
const submitted = ref(false)

function submitForm() {
  isSubmitting.value = true
  
  setTimeout(() => {
    isSubmitting.value = false
    submitted.value = true
    
    form.name = ''
    form.email = ''
    form.company = ''
    form.message = ''

    setTimeout(() => {
      submitted.value = false
    }, 6000)
  }, 1000)
}
</script>
