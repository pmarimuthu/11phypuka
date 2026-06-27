<script setup lang="ts">
const { index } = defineProps<{ index: number }>()
</script>

<template>
  
  <svg v-if="index===0" viewBox="0 0 320 160" class="pa-svg" aria-label="Projectile motion">
    <defs>
      <path id="para" d="M20,140 Q160,10 300,140" fill="none"/>
    </defs>
    <path d="M20,140 Q160,10 300,140" fill="none" stroke="#06b6d4" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/>
    <line x1="10" y1="140" x2="310" y2="140" stroke="var(--vp-c-text-3)" stroke-width="1"/>
    <circle r="7" fill="#f59e0b">
      <animateMotion dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.25 0 0.75 1">
        <mpath href="#para"/>
      </animateMotion>
    </circle>
    <text x="18" y="155" font-size="9" fill="var(--vp-c-text-3)" font-family="system-ui">v₀</text>
    <line x1="20" y1="140" x2="42" y2="118" stroke="#10b981" stroke-width="1.5" marker-end="url(#arr0)"/>
    <defs><marker id="arr0" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto"><polygon points="0,0 5,2.5 0,5" fill="#10b981"/></marker></defs>
    <text x="125" y="14" font-size="10" fill="#06b6d4" font-family="system-ui" font-weight="600" text-anchor="middle">Projectile Motion</text>
  </svg>

  
  <svg v-else-if="index===1" viewBox="0 0 200 200" class="pa-svg" aria-label="Simple pendulum">
    <line x1="100" y1="10" x2="100" y2="15" stroke="var(--vp-c-text-2)" stroke-width="2"/>
    <rect x="80" y="10" width="40" height="6" rx="2" fill="var(--vp-c-bg-soft)" stroke="var(--vp-c-text-3)" stroke-width="1"/>
    <g style="transform-origin:100px 13px">
      <animateTransform attributeName="transform" type="rotate" values="-30;30;-30" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1"/>
      <line x1="100" y1="13" x2="100" y2="140" stroke="var(--vp-c-text-2)" stroke-width="1.5"/>
      <circle cx="100" cy="148" r="14" fill="#8b5cf6" opacity="0.9"/>
    </g>
    <text x="100" y="192" font-size="10" fill="#8b5cf6" font-family="system-ui" font-weight="600" text-anchor="middle">Simple Pendulum</text>
  </svg>

  
  <svg v-else-if="index===2" viewBox="0 0 220 200" class="pa-svg" aria-label="Planetary orbit">
    <ellipse cx="110" cy="100" rx="90" ry="55" fill="none" stroke="#06b6d4" stroke-width="1" stroke-dasharray="3 3" opacity="0.4"/>
    
    <circle cx="72" cy="100" r="14" fill="#f59e0b">
      <animate attributeName="r" values="13;15;13" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="72" cy="100" r="20" fill="#f59e0b" opacity="0.15">
      <animate attributeName="r" values="18;24;18" dur="3s" repeatCount="indefinite"/>
    </circle>
    
    <circle r="8" fill="#06b6d4">
      <animateMotion dur="4s" repeatCount="indefinite">
        <mpath href="#orbit2"/>
      </animateMotion>
    </circle>
    <defs><path id="orbit2" d="M200,100 A90,55 0 1,1 199.9,100"/></defs>
    
    <circle r="4" fill="#a3e635">
      <animateMotion dur="1.2s" repeatCount="indefinite">
        <mpath href="#orbit2m"/>
      </animateMotion>
    </circle>
    <defs><path id="orbit2m" d="M215,100 A105,65 0 1,1 214.9,100"/></defs>
    <text x="110" y="188" font-size="10" fill="#f59e0b" font-family="system-ui" font-weight="600" text-anchor="middle">Planetary Motion</text>
  </svg>

  
  <svg v-else-if="index===3" viewBox="0 0 240 180" class="pa-svg" aria-label="Newton's cradle">
    <line x1="50" y1="20" x2="190" y2="20" stroke="var(--vp-c-text-2)" stroke-width="2"/>
    
    <line x1="100" y1="20" x2="100" y2="120" stroke="var(--vp-c-text-3)" stroke-width="1"/>
    <circle cx="100" cy="130" r="11" fill="var(--vp-c-text-2)" opacity="0.7"/>
    <line x1="120" y1="20" x2="120" y2="120" stroke="var(--vp-c-text-3)" stroke-width="1"/>
    <circle cx="120" cy="130" r="11" fill="var(--vp-c-text-2)" opacity="0.7"/>
    <line x1="140" y1="20" x2="140" y2="120" stroke="var(--vp-c-text-3)" stroke-width="1"/>
    <circle cx="140" cy="130" r="11" fill="var(--vp-c-text-2)" opacity="0.7"/>
    
    <g style="transform-origin:80px 20px">
      <animateTransform attributeName="transform" type="rotate" values="-38;0;0;0;0;0;0" dur="1.5s" repeatCount="indefinite" keyTimes="0;0.25;0.5;0.55;0.6;0.8;1" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0 0 1 1;0 0 1 1;0 0 1 1;0 0 1 1"/>
      <line x1="80" y1="20" x2="80" y2="120" stroke="var(--vp-c-text-3)" stroke-width="1"/>
      <circle cx="80" cy="130" r="11" fill="#06b6d4"/>
    </g>
    
    <g style="transform-origin:160px 20px">
      <animateTransform attributeName="transform" type="rotate" values="0;0;0;0;0;38;0" dur="1.5s" repeatCount="indefinite" keyTimes="0;0.2;0.4;0.45;0.5;0.75;1" calcMode="spline" keySplines="0 0 1 1;0 0 1 1;0 0 1 1;0 0 1 1;0.5 0 0.5 1;0.5 0 0.5 1"/>
      <line x1="160" y1="20" x2="160" y2="120" stroke="var(--vp-c-text-3)" stroke-width="1"/>
      <circle cx="160" cy="130" r="11" fill="#10b981"/>
    </g>
    <text x="120" y="170" font-size="10" fill="var(--vp-c-text-2)" font-family="system-ui" font-weight="600" text-anchor="middle">Newton's Cradle</text>
  </svg>

  
  <svg v-else-if="index===4" viewBox="0 0 320 120" class="pa-svg" aria-label="Wave propagation">
    <defs>
      <clipPath id="wclip"><rect x="0" y="0" width="320" height="120"/></clipPath>
    </defs>
    <g clip-path="url(#wclip)">
      <path fill="none" stroke="#06b6d4" stroke-width="2.5">
        <animate attributeName="d"
          values="M-80,60 C-60,20 -40,100 -20,60 C0,20 20,100 40,60 C60,20 80,100 100,60 C120,20 140,100 160,60 C180,20 200,100 220,60 C240,20 260,100 280,60 C300,20 320,100 340,60 C360,20 380,100 400,60;
                  M-60,60 C-40,20 -20,100 0,60 C20,20 40,100 60,60 C80,20 100,100 120,60 C140,20 160,100 180,60 C200,20 220,100 240,60 C260,20 280,100 300,60 C320,20 340,100 360,60 C380,20 400,100 420,60"
          dur="1.2s" repeatCount="indefinite" calcMode="linear"/>
      </path>
      <path fill="none" stroke="#8b5cf6" stroke-width="1.5" opacity="0.5">
        <animate attributeName="d"
          values="M-80,60 C-60,30 -40,90 -20,60 C0,30 20,90 40,60 C60,30 80,90 100,60 C120,30 140,90 160,60 C180,30 200,90 220,60 C240,30 260,90 280,60 C300,30 320,90 340,60;
                  M-60,60 C-40,30 -20,90 0,60 C20,30 40,90 60,60 C80,30 100,90 120,60 C140,30 160,90 180,60 C200,30 220,90 240,60 C260,30 280,90 300,60 C320,30 340,90 360,60"
          dur="1.8s" repeatCount="indefinite" calcMode="linear"/>
      </path>
    </g>
    <text x="160" y="112" font-size="10" fill="#06b6d4" font-family="system-ui" font-weight="600" text-anchor="middle">Wave Propagation</text>
  </svg>

  
  <svg v-else-if="index===5" viewBox="0 0 160 200" class="pa-svg" aria-label="Free fall">
    <line x1="80" y1="10" x2="80" y2="180" stroke="var(--vp-c-text-3)" stroke-width="1" stroke-dasharray="3 3"/>
    <text x="95" y="50" font-size="8" fill="var(--vp-c-text-3)" font-family="monospace">v=gt</text>
    <text x="95" y="100" font-size="8" fill="var(--vp-c-text-3)" font-family="monospace">2v</text>
    <text x="95" y="150" font-size="8" fill="var(--vp-c-text-3)" font-family="monospace">3v</text>
    
    <line x1="76" y1="50"  x2="84" y2="50"  stroke="var(--vp-c-text-3)" stroke-width="1"/>
    <line x1="76" y1="100" x2="84" y2="100" stroke="var(--vp-c-text-3)" stroke-width="1"/>
    <line x1="76" y1="150" x2="84" y2="150" stroke="var(--vp-c-text-3)" stroke-width="1"/>
    
    <line x1="20" y1="30" x2="20" y2="60" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#garr)"/>
    <text x="26" y="48" font-size="8" fill="#f59e0b" font-family="system-ui">g</text>
    <defs><marker id="garr" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto"><polygon points="0,0 5,2.5 0,5" fill="#f59e0b"/></marker></defs>
    
    <circle cx="80" r="10" fill="#ef4444">
      <animate attributeName="cy" values="18;168" dur="1.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 1 1"/>
      <animate attributeName="opacity" values="1;1;0" dur="1.8s" repeatCount="indefinite" keyTimes="0;0.9;1"/>
    </circle>
    <text x="80" y="195" font-size="10" fill="#ef4444" font-family="system-ui" font-weight="600" text-anchor="middle">Free Fall  g=9.8 m/s²</text>
  </svg>

  
  <svg v-else-if="index===6" viewBox="0 0 240 160" class="pa-svg" aria-label="Spring oscillation">
    <rect x="8" y="50" width="10" height="60" rx="2" fill="var(--vp-c-text-3)"/>
    
    <path fill="none" stroke="#10b981" stroke-width="2">
      <animate attributeName="d"
        values="M18,80 L30,80 Q35,65 40,80 Q45,95 50,80 Q55,65 60,80 Q65,95 70,80 Q75,65 80,80 Q85,95 90,80 Q95,65 100,80 L108,80;
                M18,80 L26,80 Q30,60 34,80 Q38,100 42,80 Q46,60 50,80 Q54,100 58,80 Q62,60 66,80 Q70,100 74,80 Q78,60 82,80 Q86,100 90,80 Q94,60 98,80 Q102,100 106,80 Q110,60 114,80 Q118,100 122,80 Q126,60 130,80 L138,80;
                M18,80 L30,80 Q35,65 40,80 Q45,95 50,80 Q55,65 60,80 Q65,95 70,80 Q75,65 80,80 Q85,95 90,80 Q95,65 100,80 L108,80"
        dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1"/>
    </path>
    
    <rect y="60" width="36" height="40" rx="4" fill="#8b5cf6">
      <animate attributeName="x" values="108;138;108" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1"/>
    </rect>
    
    <line x1="126" y1="115" x2="126" y2="125" stroke="var(--vp-c-text-3)" stroke-width="1" stroke-dasharray="2 2"/>
    <text x="128" y="132" font-size="8" fill="var(--vp-c-text-3)" font-family="system-ui">x=0</text>
    <text x="120" y="152" font-size="10" fill="#10b981" font-family="system-ui" font-weight="600" text-anchor="middle">Spring Oscillation</text>
  </svg>

  
  <svg v-else-if="index===7" viewBox="0 0 200 200" class="pa-svg" aria-label="Circular motion">
    <circle cx="100" cy="100" r="70" fill="none" stroke="var(--vp-c-text-3)" stroke-width="1" stroke-dasharray="3 3"/>
    <circle cx="100" cy="100" r="4" fill="var(--vp-c-text-2)"/>
    
    <g style="transform-origin:100px 100px">
      <animateTransform attributeName="transform" type="rotate" values="0;360" dur="3s" repeatCount="indefinite" calcMode="linear"/>
      <line x1="100" y1="100" x2="170" y2="100" stroke="var(--vp-c-text-3)" stroke-width="1"/>
      
      <circle cx="170" cy="100" r="10" fill="#f59e0b"/>
      
      <line x1="170" y1="100" x2="170" y2="68" stroke="#10b981" stroke-width="1.5" marker-end="url(#varr)"/>
      
      <line x1="170" y1="100" x2="142" y2="100" stroke="#ef4444" stroke-width="1.5" marker-end="url(#carr)"/>
    </g>
    <defs>
      <marker id="varr" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto"><polygon points="0,0 5,2.5 0,5" fill="#10b981"/></marker>
      <marker id="carr" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto"><polygon points="0,0 5,2.5 0,5" fill="#ef4444"/></marker>
    </defs>
    <text x="100" y="188" font-size="10" fill="#f59e0b" font-family="system-ui" font-weight="600" text-anchor="middle">Circular Motion</text>
  </svg>

  
  <svg v-else-if="index===8" viewBox="0 0 320 160" class="pa-svg" aria-label="Doppler effect">
    
    <circle r="8" fill="#f59e0b">
      <animateMotion dur="3s" repeatCount="indefinite" path="M40,80 L280,80"/>
    </circle>
    
    <circle fill="none" stroke="#ef4444" stroke-width="1.2" opacity="0">
      <animate attributeName="cx" values="80;280" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="80;80" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="r" values="0;28" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.8;0" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle fill="none" stroke="#ef4444" stroke-width="1.2" opacity="0">
      <animate attributeName="cx" values="120;320" dur="3s" repeatCount="indefinite" begin="-0.5s"/>
      <animate attributeName="cy" values="80;80" dur="3s" repeatCount="indefinite" begin="-0.5s"/>
      <animate attributeName="r" values="0;28" dur="3s" repeatCount="indefinite" begin="-0.5s"/>
      <animate attributeName="opacity" values="0.8;0" dur="3s" repeatCount="indefinite" begin="-0.5s"/>
    </circle>
    
    <circle fill="none" stroke="#06b6d4" stroke-width="1.2" opacity="0">
      <animate attributeName="cx" values="80;-40" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="80;80" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="r" values="0;60" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.8;0" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle fill="none" stroke="#06b6d4" stroke-width="1.2" opacity="0">
      <animate attributeName="cx" values="40;-80" dur="3s" repeatCount="indefinite" begin="-0.8s"/>
      <animate attributeName="cy" values="80;80" dur="3s" repeatCount="indefinite" begin="-0.8s"/>
      <animate attributeName="r" values="0;60" dur="3s" repeatCount="indefinite" begin="-0.8s"/>
      <animate attributeName="opacity" values="0.8;0" dur="3s" repeatCount="indefinite" begin="-0.8s"/>
    </circle>
    <text x="60" y="130" font-size="9" fill="#06b6d4" font-family="system-ui" text-anchor="middle">Lower f</text>
    <text x="270" y="130" font-size="9" fill="#ef4444" font-family="system-ui" text-anchor="middle">Higher f</text>
    <text x="160" y="152" font-size="10" fill="#f59e0b" font-family="system-ui" font-weight="600" text-anchor="middle">Doppler Effect</text>
  </svg>

  
  <svg v-else-if="index===9" viewBox="0 0 320 160" class="pa-svg" aria-label="Electromagnetic wave">
    <defs><clipPath id="emclip"><rect width="320" height="160"/></clipPath></defs>
    <g clip-path="url(#emclip)">
      
      <path fill="none" stroke="#06b6d4" stroke-width="2">
        <animate attributeName="d"
          values="M0,80 C20,80 30,20 40,80 C50,140 60,80 80,80 C100,80 110,20 120,80 C130,140 140,80 160,80 C180,80 190,20 200,80 C210,140 220,80 240,80 C260,80 270,20 280,80 C290,140 300,80 320,80;
                  M0,80 C20,140 30,80 40,80 C50,80 60,20 80,80 C90,140 100,80 120,80 C130,80 140,20 160,80 C170,140 180,80 200,80 C210,80 220,20 240,80 C250,140 260,80 280,80 C290,80 300,20 320,80"
          dur="1.5s" repeatCount="indefinite" calcMode="linear"/>
      </path>
      
      <path fill="none" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="4 2">
        <animate attributeName="d"
          values="M0,80 C20,80 30,50 40,80 C50,110 60,80 80,80 C100,80 110,50 120,80 C130,110 140,80 160,80 C180,80 190,50 200,80 C210,110 220,80 240,80 C260,80 270,50 280,80 C290,110 300,80 320,80;
                  M0,80 C20,110 30,80 40,80 C50,80 60,50 80,80 C90,110 100,80 120,80 C130,80 140,50 160,80 C170,110 180,80 200,80 C210,80 220,50 240,80 C250,110 260,80 280,80 C290,80 300,50 320,80"
          dur="1.5s" repeatCount="indefinite" calcMode="linear"/>
      </path>
    </g>
    
    <line x1="270" y1="25" x2="305" y2="25" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#earr)"/>
    <text x="270" y="21" font-size="8" fill="#f59e0b" font-family="system-ui">c →</text>
    <defs><marker id="earr" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto"><polygon points="0,0 5,2.5 0,5" fill="#f59e0b"/></marker></defs>
    <text x="20" y="45" font-size="9" fill="#06b6d4" font-family="system-ui" font-weight="600">E</text>
    <text x="20" y="108" font-size="9" fill="#8b5cf6" font-family="system-ui" font-weight="600">B</text>
    <text x="160" y="152" font-size="10" fill="var(--vp-c-text-2)" font-family="system-ui" font-weight="600" text-anchor="middle">Electromagnetic Wave</text>
  </svg>
</template>

<style scoped>
.pa-svg {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
