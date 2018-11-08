import { emailService } from "../services/email.service.js";
// import busService, {USR_MSG_DISPLAY} from '../../services/event-bus.service.js'

export default {
  template: `
        <section class="email-details" v-if="email">
          <div class="email-head flex between">
            <i class="fas fa-arrow-left email-back" @click="goBack" title="Back to Emails"></i>
            <i class="fas fa-trash-alt email-delete" @click = "onDeleteEmail" title="Delete"></i>
            <i  class="fas fa-envelope email-read" 
            title="Mark as Unread" @click="emailRead"></i>
           
          </div>
          <section class="email-main">
            <h4>From: {{email.name}}</h4>
            <h4>Subject: {{email.subject}}</h4>
            <hr>
            <p>{{email.body}}</p>
            <hr>
          </section>

          <section class='emails-nav flex between'>
            <div><i class="fas fa-arrow-left " title="Previous Email"></i>Previous</div>
            <div @click="onNext">Next<i class="fas fa-arrow-right" title="Next Email"></i></div>
          </section>

          <section class="email-bottom-ctrl flex around">
          <i class="fas fa-reply"></i>
          <i class="fas fa-reply-all"></i>
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
    onNext(){
      var id = emailService.nextEmail()
      .then(id => (log(id)))
      // emailService.getEmailById(id).then(email => (email.isRead = true));
      this.$router.push(`/misteremail/${id}`);
    },
    emailRead() {
      this.email.isRead = false;
      this.$router.push("/misteremail");
    },
    onDeleteEmail() {
      emailService.deleteEmail(this.email.id).then(res => {
        // busService.$emit(USR_MSG_DISPLAY, {txt: `Car ${this.car.vendor} Deleted`, type:'success' })
        this.$router.push("/misteremail");
      });
    },
    goBack() {
      this.$router.push("/misteremail");
    },

    loadEmailData() {
      const emailId = this.$route.params.emailId;

      emailService.nextEmail(emailId).then(nextEmailId => {
        this.nextEmailId = nextEmailId;
      });
      emailService.prevEmail(emailId).then(prevEmailId => {
        this.prevEmailId = prevEmailId;
      });
      return emailService
        .getEmailById(emailId)
        .then(email => (this.email = email));
    }
  },
  components: {},

  watch: {
    "$route.params.emailId": function(id, prevValue) {
      console.log(id);
      
      this.loadEmailData();
    }
  },
  
        created() {
          this.loadEmailData().then(() => {
            this.email.isRead = true;
            console.log(this.email.isRead);
          });
        },
  destroyed() {
    emailService.updateItem(this.email);
  }
};
