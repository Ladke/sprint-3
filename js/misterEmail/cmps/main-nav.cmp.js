import { emailService } from "../services/email.service.js";

export default {
  // props: ["emails"],
  template: `

          <section v-if="emails" class="main-nav">
       
              <div class="nav-items">
              <i class="fas fa-globe-americas"></i>    
                  <span>&emsp;All</span>  <span>&emsp;&emsp;{{totalEmails}}</span>
                 
              </div>
              
              <div class="nav-items" >
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
      emails: null,
      unread: null
    };
  },
  methods: {
    unreadEmails() {
      emailService.query().then(emails => {
        this.unread = emails.filter(email => {
          return email.isRead === false;
        });
      });
    }
    // onUnread() {
    //   console.log(this.emails);

    //   var unreadList = this.emails.filter(email => {
    //     console.log(email);

    //     return email.isRead === false;
    //   });

    //   this.unread = unreadList.length;
    //   console.log(unreadList);
    //   return this.unreadList;
    // }
  },
  computed: {
    totalEmails() {
      return this.emails.length;
    }
  },
  created() {
    emailService.query().then(emails => (this.emails = emails));
    this.unreadEmails();
    console.log(this.unread);
  }
};
