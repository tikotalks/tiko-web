<script setup lang="ts">
import { useBemm } from 'bemm'
import PageHeader from '@/components/sections/PageHeader.vue';
import { Image } from '@tikotalks/media';
const bemm = useBemm('roadmap')
</script>

<template>

<PageHeader :image="Image.TRACTOR">
      <template #title>
        <h2>Roadmap</h2>
      </template>
      <template #description>
        <p>Tiko’s journey is just beginning. Our roadmap focuses on making communication easy and accessible for every child. In the short term, we're launching our first apps for Android, iOS, and Web, aiming to reach over 1,000 children. Next, we'll focus on customization features, multi-language support, and smart communication assistance powered by AI. As we grow, community feedback will shape Tiko’s future — ensuring we build tools that truly make a difference.</p>
      </template>
    </PageHeader>

  <div :class="bemm()">



    <!-- Phase 1 -->
    <section id="phase-1">
      <h2>Phase 1: <strong>Setting the Foundation (Months 1-2)</strong></h2>
      <ol>
        <li>
          <h3>Register Tiko NGO</h3>
          <p>We will officially register Tiko as a non-profit organization in Malta, ensuring a simple and transparent
            legal
            structure that allows us to access local and international funding while maintaining our mission-driven
            approach.</p>
        </li>
        <li>
          <h3>Build the Core Team</h3>
          <p>Assemble a dedicated team focused on Tiko’s mission, including leadership, finance management, and speech
            therapy expertise. This ensures the project has the right balance of vision, operational strength, and
            expert
            guidance.</p>
        </li>
        <li>
          <h3>Establish Legal & Operational Setup</h3>
          <p>Set up the necessary legal, financial, and operational frameworks, including accounting, contracts, and
            banking. The goal is to minimize bureaucracy while ensuring smooth day-to-day operations.</p>
        </li>
        <li>
          <h3>Define Product Vision</h3>
          <p>Clarify Tiko’s initial product roadmap, focusing on developing an intuitive, accessible communication tool
            for
            children that supports basic needs and grows over time.</p>
        </li>
      </ol>
    </section>

    <!-- Phase 2 -->
    <section id="phase-2">
      <h2>Phase 2: <strong>Securing Funding & Starting Development (Months 2-5)</strong></h2>
      <ol>
        <li>
          <h3>Apply for Grants & Funding</h3>
          <p>Begin applying for local and international grants to fund Tiko’s development. We will focus on securing the
            resources needed to build a high-quality, free app without compromising on design or usability.</p>
        </li>
        <li>
          <h3>Form Key Partnerships</h3>
          <p>Collaborate with experts in education, speech therapy, and accessibility to ensure Tiko’s development is
            guided
            by real-world expertise and meets the needs of its users.</p>
        </li>
        <li>
          <h3>Start Core Feature Development</h3>
          <p>Kickstart the development of Tiko’s core features, focusing on enabling simple, intuitive communication —
            from
            yes/no responses to basic sentence building — designed specifically for children.</p>
        </li>
        <li>
          <h3>Develop a Funding Strategy</h3>
          <p>Lay the foundation for sustainable growth by outlining a long-term funding strategy that ensures Tiko
            remains
            free and accessible while supporting future expansions.</p>
        </li>
      </ol>
    </section>

    <!-- Phase 3 -->
    <section id="phase-3">
      <h2>Phase 3: <strong>Building & Testing (Months 5-12)</strong></h2>
      <ol>
        <li>
          <h3>Launch Beta Version</h3>
          <p>Release a beta version of Tiko to a small group of families and speech therapists, enabling real-world
            testing
            and valuable feedback to refine the app before its public launch.</p>
        </li>
        <li>
          <h3>Collect & Implement Feedback</h3>
          <p>Engage actively with beta testers to gather insights on usability, engagement, and effectiveness. Use this
            feedback to fine-tune the app, ensuring it is intuitive and enjoyable for children.</p>
        </li>
        <li>
          <h3>Expand Features</h3>
          <p>Continue developing Tiko’s capabilities, including features that support a wider range of communication
            needs,
            such as selecting food, toys, or activities, and constructing simple sentences.</p>
        </li>
        <li>
          <h3>Build a Community</h3>
          <p>Establish a supportive community of early adopters — parents, therapists, and educators — who will
            contribute
            feedback and help shape Tiko’s future development.</p>
        </li>
      </ol>
    </section>

    <!-- Phase 4 -->
    <section id="phase-4">
      <h2>Phase 4: <strong>Public Launch & Growth (Year 2)</strong></h2>
      <ol>
        <li>
          <h3>Launch Tiko Publicly</h3>
          <p>Officially release Tiko on web and mobile platforms, making it widely accessible to children and families.
            The
            focus will be on ensuring a smooth and simple user experience from day one.</p>
        </li>
        <li>
          <h3>Reach 1,000+ Active Users</h3>
          <p>Aim to have at least 1,000 children actively using Tiko within the first year, helping them communicate
            more
            easily and effectively while gathering ongoing feedback for improvements.</p>
        </li>
        <li>
          <h3>Expand Features & Customization</h3>
          <p>Introduce new features like customizable boards, exercises, and smart communication assistance to enhance
            user
            experience and allow families and therapists to tailor the app to individual needs.</p>
        </li>
        <li>
          <h3>Continue Funding & Scaling</h3>
          <p>Secure additional funding to support further development and scaling, ensuring Tiko remains free,
            high-quality,
            and accessible to children everywhere.</p>
        </li>
      </ol>
    </section>

    <!-- Mission -->
    <section id="mission">
      <h2>Our Mission</h2>
      <p><strong>Tiko</strong> makes <strong>communication easy</strong> for every child — simple, engaging, and
        accessible
        to all, completely free. 💬✨</p>
    </section>

  </div>
</template>

<style lang="scss">
.roadmap {
  margin: 0 auto;
  padding: var(--spacing);
  display: flex;
  gap: var(--spacing);
  flex-direction: column;

  @media screen and (max-width: 960px) {
    padding: 0;
  }

  section {
    width: fit-content;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: var(--space);
    max-width: 100%;
    width: 960px;

    padding: var(--spacing);

    &#phase-2,
    &#phase-4 {
      background-color: var(--color-background);
      border-radius: var(--border-radius);

      @media screen and (max-width: 960px) {

        border-radius: 0;
      }
    }
  }

  &__hero {
    text-align: center;

  }



}
</style>
