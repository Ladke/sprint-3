export default {
    props: ['email'],
    template: `
         <li class="email-preview" :class="isRead">
            <input type="checkbox"  @click.stop="itemSelected">   
            <h4 class="email-subject">From: <span>{{email.name}}</span></h4>
            <div>{{email.subject}}</div>
        </li>
        `,
    // data(){
    //     return{
    //         isRead:null
    //     }
    // }
    methods:{
        itemSelected(){
            console.log(this.email.id);
            this.$emit('selectedItem', this.email.id)
            
        },
    },
    computed:{
        isRead(){
            return this.email.isRead
        }
    },
    created() {
       console.log('is read', this.email.isRead);
       
    }
}