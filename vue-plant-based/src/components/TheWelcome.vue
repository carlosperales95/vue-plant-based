<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div id="welcome-container">
    <div id="welcome-illustration">
      <img alt="Vue logo" class="logo" src="@/assets/undraw_flowers.svg" width="400" height="400" />
    </div>
    <div>
      <WelcomeItem>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>
          Documentation
        </template>

        Learn about your plants in our
        <a href="https://vuejs.org/" target="_blank" rel="noopener">
          huge plant database</a>, which provides you with all information about each of them.
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <ToolingIcon />
        </template>
        <template #heading>
          Setup
        </template>

        Import your current setup stats:
        <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">
          Humidity
        </a>,
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">
          Sunlight
        </a> or
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">Temperature</a>,
          which can be used to track the chances of survival for each plant type.
        <br />
        More instructions about this are available in <code>README.md</code>.
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <EcosystemIcon />
        </template>
        <template #heading>
          Ecosystem
        </template>

        Track your plants and make them thrive using the free knowledge available.
        You can set trackers for
        <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Seeding</a>,
        <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Repotting or feeding</a>,
        <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Propagating</a>, and
        <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Healing</a>. If
        you have plants that bear fruit/veggies you can also control
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Harvests</a>.
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <CommunityIcon />
        </template>
        <template #heading>
          Community
        </template>

        Need help, or do you want to shaer ideas?
        <br />
        Take some advice from your fellow plant based people thanks to pur community features.
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <SupportIcon />
        </template>
        <template #heading>
          Support Us

        </template>

        As an independent project, made for the love of plants.
        Plant Based relies on community backing for its sustainability. You can help
        us by
        <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
      </WelcomeItem>
    </div>
  </div>
</template>

<style scoped>
#welcome-illustration {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  #welcome-illustration {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  #welcome-illustration .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

</style>
