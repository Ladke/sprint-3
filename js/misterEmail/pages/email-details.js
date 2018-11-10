import { emailService } from "../services/email.service.js";
// import eventBus from "../services/event-bus.service.js";

export default {
  template: `
        <section class="email-details" v-if="email">
          <div class="email-head flex between">
            <router-link to="/misteremail"> <i class="fas fa-arrow-left email-back" title="Back to Emails"></i></router-link>
           
            <i class="fas fa-trash-alt email-delete" @click = "onDeleteEmail" title="Delete"></i>
            <i  class="fas fa-envelope email-read" 
            title="Mark as Unread" @click="emailToUnread"></i>
           
          </div>
          <section class="email-main">
            <h3>From: {{email.name}}</h3>
            <h3>Subject: {{email.subject}}</h3>
            <hr>
            <p>{{email.body}}</p>
            <hr>
          </section>

          <section class='emails-nav flex between'>
            <div @click="onPrev"><i class="fas fa-arrow-left " title="Previous Email"></i>Previous</div>
            <i class="fas fa-reply" @click="onReply"></i>
            <div @click="onNext">Next<i class="fas fa-arrow-right" title="Next Email"></i></div>
          </section>

          <section class="email-bottom-ctrl flex around">
          <!-- <router-link to="/misteremail/edit"><i class="fas fa-reply"></i></router-link> -->
          <!-- <i class="fas fa-reply-all"></i> -->
          </section>
        </section>
    `,
  data() {
    return {
      email: null,
      nextEmailId: null,
      prevEmailId: null
    };
  },

  methods: {
    onNext() {
      this.$router.push(`/misteremail/${this.nextEmailId}`);
    },

    onPrev() {
      this.$router.push(`/misteremail/${this.prevEmailId}`);
    },

    emailToUnread() {
      this.email.isRead = false;
      emailService.updateItem(this.email);
      this.$router.push("/misteremail");
    },
    onDeleteEmail() {
      emailService.deleteEmail(this.email.id).then(() => {
        this.$router.push("/misteremail");
      });
    },
    onReply() {
      this.$router.push(`/misteremail/edit/${this.email.id}`);
      // eventBus.$emit("reply-email", this.email.subject, this.email.emailAdrs);
    },


    loadEmailData() {
      const emailId = this.$route.params.emailId;
      if (!emailId) return;
      emailService.nextEmailId(emailId).then(nextEmailId => {
        this.nextEmailId = nextEmailId;
      });
      emailService.prevEmailId(emailId).then(prevEmailId => {
        this.prevEmailId = prevEmailId;
      });
      return emailService.getEmailById(emailId).then(email => {
        email.isRead = true;
        this.email = email;
        console.log(this.email);
      });
    }
  },
  components: {},

  watch: {
    "$route.params.emailId": function(id, prevValue) {
      this.loadEmailData();
    }
  },

  created() {
    this.loadEmailData().then(() => {
      this.email.isRead = true;
    });

    setTimeout(() => {
      emailService.updateItem(this.email), 500;
    });
  },

  destroyed() {
    emailService.updateItem(this.email);
  }
};
