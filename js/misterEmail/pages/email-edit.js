import { emailService } from "../services/email.service.js";
import eventBus  from '../services/event-bus.service.js'


export default {
  template: `
    <section class="email-edit">
        <div class="email-head flex between">
             <router-link to="/misteremail"> <i  class="fas fa-arrow-left back-arrow"></i></router-link>
        </div>

        <form @submit.prevent="saveEmail" class="email-main flex column">

            <h4>To: <input type="email"  placeholder=" name@example.com" v-model="newMail.to">{{newMail.to}}</h4>
            <h4>Subject:  <input type="text" v-model="this.newMail.subject">{{newMail.subject}}</h4>
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
    replayEmail(subject, email){
        console.log(subject, email);
        
        this.newMail.subject = 're:' +subject
        this.newMail.to = email
    }
  },
  components: {
    emailService
  },
  created() {
    eventBus.$on('reply-email', this.replayEmail);

    const emailId = this.$route.params.emailId;
    if (emailId) {
      emailService.getById(emailId).then(email => {
        this.email = email;
      });
    }
  }
};
