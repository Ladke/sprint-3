import {emailService} from '../services/email.service.js'
// import busService, {USR_MSG_DISPLAY} from '../../services/event-bus.service.js'

export default {

    template: `
        <section class="email-details">
            <!-- <button @click="deleteEmail">Delete</button> -->
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
        // deleteCar() {
        //     carService.deleteCar(this.car.id)
        //     .then(res => {
        //         busService.$emit(USR_MSG_DISPLAY, {txt: `Car ${this.car.vendor} Deleted`, type:'success' })
        //         this.$router.push('/car');
        //     })

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