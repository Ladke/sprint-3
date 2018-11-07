import {emailService} from '../services/email.service.js'
// import busService, {USR_MSG_DISPLAY} from '../../services/event-bus.service.js'

export default {

    template: `
        <section class="email-details" v-if="email">
          <div class="email-head flex between">
            <i class="fas fa-arrow-left email-back" @click="goBack"></i>
            <i class="fas fa-trash-alt email-delete"></i>
            <i class="fas fa-envelope email-read"></i>
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
            <div>Next<i class="fas fa-arrow-right" title="Next Email"></i></div>
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
      prevEmailId: null,
    };
  },
    created() {
        // const carId = this.$route.params.carId;
        // carService.getById(carId)
        // .then(car => this.car = car)
        this.loadEmailData();
    },
    methods: {
        deleteCEmail() {
            EmailService.deleteEmailr(this.email.id)
            .then(res => {
                busService.$emit(USR_MSG_DISPLAY, {txt: `Car ${this.car.vendor} Deleted`, type:'success' })
                this.$router.push('/misteremail');
            })
          },
        goBack(){
          this.$router.push('/misteremail');
        },
        loadEmailData() {
            const emailId = this.$route.params.emailId;
            console.log(emailId);
            
            emailService.getEmailById(emailId).then(email => {
              this.email = email;
            });
            emailService.nextEmail(emailId).then(nextEmail => {
              this.nextEmailId = nextEmail;
              console.log("nextEmailId ", this.nextEmailId);
            });
            emailService.prevEmail(emailId).then(prevEmail => {
              this.prevEmailId = prevEmail;
              console.log("prevEmailId ", this.prevEmailId);
            });
          }
    },
    components: {
    },
    watch: {
        "$route.params.emailId": function(id, prevValue) {
            console.log(id);
            
          this.loadEmailData();
        }
      }
    
}