import emailPreview from "./email-preview.cmp.js";
import mainNav from "./main-nav.cmp.js";
import filterEmails from "./email-filter.js";
import { emailService } from "../services/email.service.js";

export default {
  props: ["emails"],
  template: `
      <section>
        <div class="email-head flex between">
          <i v-if="!isNav" class="fas fa-bars burger" @click="isNav=!isNav"></i>
          <i  v-if="isNav" class="fas fa-times" @click="isNav=!isNav"></i>
          <i class="fas fa-plus" @click="addEmail"></i>
          <i class="fas fa-search"  @click="isFilter=!isFilter"></i>
          <router-link to="/"><i class=" goHome fas fa-home"></i></router-link>
        </div>
        <ul class="email-list">
          <email-Preview  v-for="email in emails"
            :key="email.id"
            :email="email" @click.native="emailClicked(email.id)">
          </email-Preview>
        </ul>
      <filter-emails :class="{open: isFilter }" @filtered="setFilter" ></filter-emails>
      <main-nav  :class="{open: isNav }"  :emails="emails" ></main-nav>
    </section>
    `,
  data() {
    return {
      isNav: false,
      isFilter: false
    };
  },
  methods: {
    emailClicked(id) {
      emailService.getEmailById(id).then(email => (email.isRead = true));
      this.$router.push(`/misteremail/${id}`);
      this.$emit("selected-email", id);
    },
    addEmail() {
      this.$router.push(`/misteremail/edit`);
    },
    setFilter(filter) {
      emailService.query(filter).then(emails => (this.emails = emails));
    },
  },
  computed: {},

  components: {
    emailPreview,
    mainNav,
    emailService,
    filterEmails
  }
};
