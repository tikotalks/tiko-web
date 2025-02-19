<script setup lang="ts">
import { useBemm } from 'bemm';
import Button from '../components/ui/Button/Button.vue';
import { ButtonSettings } from '../components/ui/Button/Button.model';

const bemm = useBemm('legal');
</script>

<template>
  <div :class="bemm()">
    <section :class="bemm('hero')">
      <div :class="bemm('container')">
        <h1>Legal & Privacy</h1>
        <p>Our commitment to protecting your privacy and ensuring compliance</p>
      </div>
    </section>

    <section :class="bemm('content')">
      <div :class="bemm('container')">
        <div :class="bemm('grid')">
          <div :class="bemm('card')">
            <h2>Privacy Policy</h2>
            <div :class="bemm('section')">
              <h3>Data Collection</h3>
              <p>We collect minimal data necessary to provide our services:</p>
              <ul>
                <li>Basic user information for account creation</li>
                <li>Speech data for therapy exercises</li>
                <li>Progress tracking information</li>
              </ul>
              <Button :type="ButtonSettings.Type.Default">Read Full Privacy Policy</Button>
            </div>
          </div>

          <div :class="bemm('card')">
            <h2>Terms of Service</h2>
            <div :class="bemm('section')">
              <h3>User Agreement</h3>
              <p>By using Tiko, you agree to:</p>
              <ul>
                <li>Use the service for its intended purpose</li>
                <li>Respect other users and their privacy</li>
                <li>Not misuse or attempt to exploit the service</li>
              </ul>
              <Button :type="ButtonSettings.Type.Default">View Terms of Service</Button>
            </div>
          </div>

          <div :class="bemm('card')">
            <h2>GDPR Compliance</h2>
            <div :class="bemm('section')">
              <h3>Your Rights</h3>
              <p>Under GDPR, you have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Request data deletion</li>
                <li>Export your data</li>
                <li>Object to data processing</li>
              </ul>
              <Button :type="ButtonSettings.Type.Default">Learn More About GDPR</Button>
            </div>
          </div>
        </div>

        <div :class="bemm('contact')">
          <h2>Contact DPO</h2>
          <p>For privacy-related inquiries, contact our Data Protection Officer:</p>
          <Button :type="ButtonSettings.Type.Default" href="mailto:privacy@tikoapp.com">Contact DPO</Button>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.legal {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__hero {
    padding: var(--space-xl) var(--space);
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
    color: var(--text-primary);
    text-align: center;


  }

  &__content {
    padding: var(--space-xl) var(--space);
    flex: 1;
  }

  &__container {
    max-width: 75em;
    margin: 0 auto;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
    gap: var(--space-xl);

  }

  &__card {
    padding: var(--space-xl);
    background: var(--color-background);
    border-radius: var(--radius);
    box-shadow: 0 4px 6px color-mix(in srgb, var(--color-foreground), transparent 90%);

  }

  &__section {
    h3 {
      color: var(--color-primary);

      font-size: 1.25em;
    }

    p {
      color: var(--color-foreground-alt);

      line-height: 1.6;
    }

    ul {
      margin: var(--space) 0;
      padding-left: var(--space-l);
      color: var(--color-foreground-alt);

      li {

        line-height: 1.6;
      }
    }

    button {
      margin-top: var(--space);
    }
  }

  &__contact {
    text-align: center;
    padding: var(--space-xl);
    background: var(--color-background);
    border-radius: var(--radius);
    box-shadow: 0 4px 6px color-mix(in srgb, var(--color-foreground), transparent 90%);

    h2 {
      color: var(--color-primary);

      font-size: 2em;
    }

    p {
      color: var(--color-foreground-alt);

      font-size: 1.2em;
    }
  }
}
</style>
