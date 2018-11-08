export default {
  props: ["emails"],
  template: `
        <section>

          <!-- <div class="screen" @click="closeNav"></div> -->
          <section class="main-nav">
              <div><i class="fas fa-globe-americas"></i>&emsp;All</div>
              <div><i class="fas fa-envelope"></i>&emsp;Unread</div>
              <div><i class="fas fa-envelope-open"></i>&emsp;Read</div>
              <div><i class="fas fa-star"></i>&emsp;Important</div>
          </section>
        </section>
        `,
  method:{
    closeNav(){
      console.log('closing nav');
      this.$emit('isNav, false')
      
    }
  },
  computed:{
    unRead(){ 
      var unRead = 0;
       this.emails.forEach(email => {
          return !email.isRead
        }
    },

 
},
  created() {
    console.log("Main nav here!");
  }
};
