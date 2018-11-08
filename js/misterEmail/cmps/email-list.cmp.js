import emailPreview from "./email-preview.cmp.js";
import mainNav from "./main-nav.cmp.js";
import { emailService } from "../services/email.service.js";

export default {
  props: ["emails"],
  template: `
      <section>
        <div class="email-head flex between">
          <i class="fas fa-bars" @click="isNav=!isNav"></i>
        </div>
        <ul class="email-list">
          <email-Preview  v-for="email in emails"
            :key="email.id"
            :email="email" @click.native="emailClicked(email.id)">
          </email-Preview>
        </ul>
      <main-nav  :class="{ open: isNav }" :email="emails"></main-nav>
    </section>
    `,
  data() {
    return {
      isNav: false
    };
  },
  methods: {
    emailClicked(id) {
      emailService.getEmailById(id).then(email => (email.isRead = true));
      this.$router.push(`/misteremail/${id}`);
      this.$emit("selected-email", id);
    }
  },

  components: {
    emailPreview,
    mainNav,
    emailService
  }
};
