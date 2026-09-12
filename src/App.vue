<template>
  <div class="min-h-screen bg-[#f6f6f6] text-black font-sans selection:bg-black selection:text-white">
    <!-- Main Sticky Navigation Bar -->
    <Navbar @open-cv="showCvModal = true" />

    <!-- Core Portfolio Sections -->
    <main id="main">
      <HeroSection @open-cv="showCvModal = true" />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection @select-project="openProjectModal" />
      <SkillsSection />
      <ProcessSection />
      <ValuesSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Modals -->
    <CaseStudyModal 
      :project="selectedProject" 
      @close="selectedProject = null" 
    />

    <CvModal 
      :show="showCvModal" 
      @close="showCvModal = false" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import CaseStudyModal from './components/CaseStudyModal.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import ValuesSection from './components/ValuesSection.vue'
import ContactSection from './components/ContactSection.vue'
import CvModal from './components/CvModal.vue'
import Footer from './components/Footer.vue'

const selectedProject = ref(null)
const showCvModal = ref(false)

function openProjectModal(project) {
  selectedProject.value = project
}
</script>
