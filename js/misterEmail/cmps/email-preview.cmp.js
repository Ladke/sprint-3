export default {
    props: ['email'],
    template: `
         <li class="email-preview" :class="isRead">
            <h4 class="email-subject">From: <span>{{email.name}}</span></h4>
            <div>{{email.subject}}</div>
        </li>
        `,
    // data(){
    //     return{
    //         isRead:null
    //     }
    // }
    computed:{
        isRead(){
            return this.email.isRead
        }
    },
    created() {
       console.log('is read', this.email.isRead);
       
    }
}