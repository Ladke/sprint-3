export default {
  template: `
        <section>

          <div class="screen" @click=""></div>
          <section class="main-nav">
              <div><i class="fas fa-globe-americas"></i>&ensp;All</div>
              <div><i class="fas fa-envelope"></i>&ensp;Unread</div>
              <div><i class="fas fa-envelope-open"></i>&ensp;Read</div>
              <div><i class="fas fa-star"></i>&ensp;Important</div>
          </section>
        </section>
        `,
  method:{
    closeNav(){
      console.log('closing nav');
      
    }
  },
  created() {
    console.log("Main nav here!");
  }
};
