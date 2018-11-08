import { emailService } from "../services/email.service.js";
import eventBus from "../services/event-bus.service.js";

export default {
  template: `
    <section class="email-edit">
        <div class="email-head flex between">
             <router-link to="/misteremail"> <i  class="fas fa-arrow-left back-arrow"></i></router-link>
        </div>

        <form @submit.prevent="saveEmail" class="email-main flex column">

            <h4>To: <input type="email"  placeholder=" name@example.com" v-model="newMail.to"></h4>
            <h4>Subject:  <input type="text" v-model="this.newMail.subject" placeholder="Compose email"></h4>
            <hr>
            <p><textarea  rows="8" cols="70"></textarea></p>
            <hr>
            <!-- <div type="submit" class="submit-btn"><i class="fas fa-paper-plane" ></i></div>     -->
            <div type="submit" class="submit-btn">SEND</i></div>    
        </form>
    </section>
    `,
  data() {
    return {
      email: null,
      newMail: {
        to: "",
        subject: "",
        body: ""
      }
    };
  },
  methods: {
    saveEmail() {
      console.log(this.newMail);
      emailService.saveEmail(this.newMail).then(() => {
        console.log("Saved!");
        this.$router.push("/misteremail");
      });
    },
    replyToEmail(emailId) {
      //   const emailId = this.$route.params.emailId;
      console.log(this.email);
        
      emailService.getEmailById(emailId).then(email => {
        this.newMail.to = this.email.emailAdrs;
        this.newMail.subject = "Re: " + this.email.subject;
      });
    }
  },
  components: {
    emailService
  },
  created() {
    const emailId = this.$route.params.emailId;

    if (emailId) {
      emailService.getEmailById(emailId)
      .then(email => {
        this.email = email;
        this.replyToEmail(emailId)
      });
    }
  },
  watch: {
    "$route.params.emailId": function(id, prevValue) {
      this.loadEmailData();
    }
  }
};
