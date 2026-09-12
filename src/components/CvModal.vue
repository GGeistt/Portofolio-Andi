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
      v-if="show"
      class="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      @click.self="$emit('close')"
    >
      <div class="relative w-full max-w-3xl bg-white border border-zinc-200 rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-zinc-950">
        
        <!-- Modal Bar -->
        <div class="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-50 font-mono text-xs text-zinc-600">
          <div class="flex items-center gap-2">
            <FileText class="w-4 h-4 text-zinc-800" />
            <span class="text-zinc-950 font-bold">Curriculum Vitae Preview — Muhammad Rifqiandi</span>
          </div>
          <button 
            @click="$emit('close')"
            class="p-1.5 text-zinc-500 hover:text-zinc-950 rounded border border-zinc-200 bg-white hover:bg-zinc-100 transition-colors"
          >
            <X class="w-4 h-4" />
          </button>
        </div>

        <!-- Printable / Viewable Document Area -->
        <div class="p-6 sm:p-8 space-y-8 overflow-y-auto font-sans text-zinc-800" id="cv-printable-area">
          
          <!-- Header with Developer Foto CV -->
          <div class="border-b border-zinc-200 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            
            <!-- Left: Foto CV + Name & Title -->
            <div class="flex items-center gap-5">
              <!-- Passport Photo Frame -->
              <div class="w-24 h-32 sm:w-28 sm:h-36 bg-zinc-100 border-2 border-zinc-300 rounded overflow-hidden shrink-0 shadow-sm">
                <img 
                  src="/images/foto_cv.jpg" 
                  alt="Muhammad Rifqiandi — Foto CV" 
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Name & Role -->
              <div class="space-y-1">
                <h1 class="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">MUHAMMAD RIFQIANDI</h1>
                <p class="font-mono text-xs sm:text-sm text-zinc-700 font-bold">Software Developer / Fullstack Developer</p>
                <div class="font-mono text-[11px] text-zinc-500 pt-1">S1 Informatika — Institut Teknologi Kalimantan</div>
              </div>
            </div>

            <!-- Right: Contact Metadata -->
            <div class="font-mono text-xs text-zinc-600 space-y-1.5 border-t sm:border-t-0 pt-4 sm:pt-0 border-zinc-200 text-left sm:text-right shrink-0">
              <div><span class="text-zinc-400">Address:</span> Kec. Pakojan, Kota Tangerang, Banten</div>
              <div><span class="text-zinc-400">Phone:</span> 0821-5099-4837</div>
              <div><span class="text-zinc-400">Email:</span> andibeiber@gmail.com</div>
              <div><span class="text-zinc-400">LinkedIn:</span> www.linkedin.com/in/muhammad-rifqiandi</div>
              <div><span class="text-zinc-400">GitHub:</span> github.com/MRifqiandii</div>
            </div>

          </div>

          <!-- Summary -->
          <div class="space-y-2">
            <h2 class="font-mono text-xs text-zinc-500 uppercase tracking-wider font-bold">SUMMARY</h2>
            <p class="text-sm text-zinc-700 leading-relaxed font-normal">
              Hello, my name is Muhammad Rifqiandi, usually called Andi. I graduated from the Faculty of Information Science and Technology, Department of Informatics, Kalimantan Institute of Technology. I am interested in and focused on full-stack web development, which encompasses both front-end and back-end development.
            </p>
          </div>

          <!-- Core Technical Skills -->
          <div class="space-y-2">
            <h2 class="font-mono text-xs text-zinc-500 uppercase tracking-wider font-bold">TECHNICAL SKILLS</h2>
            <div class="p-3 bg-zinc-50 border border-zinc-200 rounded font-mono text-xs text-zinc-900 font-medium">
              Laravel, .NET, Blazor, Flutter, React JS, SQL Server, PostgreSQL, Stored Procedures, PHP, JavaScript, Bootstrap, Angular.
            </div>
          </div>

          <!-- Experience -->
          <div class="space-y-4">
            <h2 class="font-mono text-xs text-zinc-500 uppercase tracking-wider font-bold">WORK EXPERIENCE</h2>
            
            <div v-for="exp in experienceData" :key="exp.id" class="space-y-1.5 border-l-2 border-zinc-400 pl-4">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono">
                <span class="font-bold text-zinc-950 text-sm">{{ exp.role }} — {{ exp.company }}</span>
                <span class="text-zinc-500 font-semibold">{{ exp.period }}</span>
              </div>
              <p class="text-xs text-zinc-700 leading-relaxed font-sans">{{ exp.description }}</p>
              <ul class="list-disc pl-4 text-xs text-zinc-600 space-y-1 pt-1 font-sans">
                <li v-for="(resp, i) in exp.responsibilities" :key="i">{{ resp }}</li>
              </ul>
            </div>
          </div>

          <!-- Education -->
          <div class="space-y-3">
            <h2 class="font-mono text-xs text-zinc-500 uppercase tracking-wider font-bold">EDUCATION</h2>
            
            <div class="p-3 bg-zinc-50 border border-zinc-200 rounded flex justify-between items-center text-xs font-mono">
              <div>
                <div class="text-zinc-950 font-bold">S1 Informatika — Institut Teknologi Kalimantan</div>
                <div class="text-zinc-600 font-sans">Faculty of Information Science and Technology</div>
              </div>
              <div class="text-zinc-500 font-semibold">Jul 2021 — Jun 2025</div>
            </div>

            <div class="p-3 bg-zinc-50 border border-zinc-200 rounded flex justify-between items-center text-xs font-mono">
              <div>
                <div class="text-zinc-950 font-bold">SMA Negeri 1 Tanjung Selor</div>
                <div class="text-zinc-600 font-sans">MIPA</div>
              </div>
              <div class="text-zinc-500 font-semibold">Jul 2018 — Mei 2021</div>
            </div>
          </div>

        </div>

        <!-- Download Footer Action -->
        <div class="px-6 py-4 border-t border-zinc-200 bg-zinc-50 flex items-center justify-between font-mono text-xs">
          <span class="text-zinc-500">Official CV Document</span>
          <div class="flex items-center gap-3">
            <button 
              @click="$emit('close')"
              class="px-3 py-2 text-zinc-600 hover:text-zinc-950"
            >
              Cancel
            </button>
            <button 
              @click="downloadPdf"
              class="inline-flex items-center gap-2 px-4 py-2 bg-black text-white hover:bg-zinc-800 font-bold rounded-none shadow-sm"
            >
              <Download class="w-3.5 h-3.5" />
              <span>Download CV File</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  </transition>
</template>

<script setup>
import { experienceData } from '../data/portfolioData'
import { FileText, X, Download } from 'lucide-vue-next'

defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close'])

function downloadPdf() {
  const link = document.createElement('a')
  link.href = '/CV_MUHAMMAD_RIFQIANDI.pdf'
  link.download = 'CV_MUHAMMAD_RIFQIANDI.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
