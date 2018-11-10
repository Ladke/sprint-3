import { emailService } from "../services/email.service.js";
import eventBus from "../services/event-bus.service.js";

export default {
  template: `
    <section class="email-edit">
        <div class="email-head flex between">
             <router-link to="/misteremail"> <i  class="fas fa-arrow-left back-arrow"></i></router-link>
        </div>

        <form @submit.prevent="saveEmail" class="email-main flex column">

            <h4>To: <input type="email"  placeholder=" name@example.com" v-model="email.emailTo"></h4>
            <h4>Subject:  <input type="text" v-model="email.subject"></h4>
            <hr>
            <p><textarea  rows="8" cols="70" v-model="email.body"></textarea ></p>
            <hr>
            <!-- <div type="submit" class="submit-btn"><i class="fas fa-paper-plane" ></i></div>     -->
            <div type="submit" class="submit-btn" @click="saveMail">SEND</i></div>    
        </form>
    </section>
    `,
  data() {
    return {
      email:{
        id: null,
        name: '',
        important: false,
        emailFrom: '',
        emailTo: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt:'',
      }
    };
  },
  methods: {
    loadEmailData() {
      const emailId = this.$route.params.emailId;
      if (!emailId) return;
      return emailService.getEmailById(emailId).then(email => {
        
        this.email.emailTo = email.emailFrom;
        this.email.name = 'User Name'
        this.email.emailFrom = email.emailTo;
        this.email.subject = "Re: " + email.subject;
      });
    },

    saveMail() {
      this.email.sentAt = moment(Date.now()).format()
      emailService.updateItem(this.email).then(() => {
        console.log( this.email);
        console.log("Saved!");
        
        this.$router.push("/misteremail/");
      });
    },


  },
  components: {
    emailService
  },
  created() {
    this.loadEmailData() 

  },
  watch: {
    "$route.params.emailId": function(id, prevValue) {
      this.loadEmailData();
    }
  }
};
