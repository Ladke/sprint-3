import { emailService } from "../services/email.service.js";

export default {
  props: ["emails"],
  template: `

          <section v-if="emails" class="main-nav">
                  <div class="nav-items">
                  <i class="fas fa-globe-americas"></i>    
                      <span>&emsp;All</span>  <span>&emsp;&emsp;{{totalEmails}}</span>
                  </div>
                  
                  <div class="nav-items">
                      <i class="fas fa-envelope"></i>
                      <span>&emsp;unread</span>  <span>&emsp;&emsp;{{unread.length}} </span>
                  </div>
                  
                  
                  <div class="nav-items">
                    <i class="fas fa-envelope-open"></i>
                    <span>&emsp;Read</span>                
                  </div>

                  <div class="nav-items"><i class="fas fa-star"></i>&emsp;Important</div>

          </section>
        `,

  data() {
    return {
      unread: null
    };
  },
  methods: {
    unreadEmails() {
      this.unread = this.emails.filter(email => {
        return email.isRead === false;
      });
    },

    onDeleteEmail() {
      emailService.deleteEmail(this.email.id).then(() => {
        this.$router.push("/misteremail");
      });
    }
  },
  computed: {
    totalEmails() {
      return this.emails.length;
    }
  },
  created() {
    this.unreadEmails();
  }
};
