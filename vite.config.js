import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
  // This repository serves from the root URL: https://llacuna750.github.io/
  base: '/',
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        subnetCalculator: fileURLToPath(new URL('./projects/ipv4-subnet-cidr-calculator/index.html', import.meta.url)),
        networkDiagnostic: fileURLToPath(new URL('./projects/network-port-latency-diagnostic-simulator/index.html', import.meta.url)),
        systemsJournal: fileURLToPath(new URL('./projects/it-systems-architecture-lab-journal/index.html', import.meta.url)),
      },
    },
  },
})
