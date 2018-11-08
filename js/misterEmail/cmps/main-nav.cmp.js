export default {
  props: ["emails"],
  template: `

          <section class="main-nav">
       
              <div class="nav-items">
              <i class="fas fa-globe-americas"></i>    
                  <span>&emsp;All</span>  <span>&emsp;&emsp;{{totalEmails}}</span>
                 
              </div>
              
              <div class="nav-items">
                  <i class="fas fa-envelope"></i>
                  <span>&emsp;Unread</span>  <span>&emsp;&emsp;{{unRead}}</span> </div>
              
              
              <div class="nav-items">
                <i class="fas fa-envelope-open"></i>
                 <span>&emsp;Read</span>
                
              </div>
              
              <div><i class="fas fa-star"></i>&emsp;Important</div>
          </section>
        `,
  method: {},
  computed: {

    unRead() {
      var unRead = 0;
      this.emails.forEach(email => {
        if (!email.isRead) unRead++;
      });
      return unRead;
    },
    totalEmails() {
      return this.emails.length;
    }
  },
  created() {
    console.log("Main nav here!");
  }
};
