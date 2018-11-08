export default {
    props: ['email'],
    template: `
         <li class="email-preview flex row " :class="{unRead: !email.isRead}">
            <input type="checkbox"  @click.stop="itemSelected" class="email-check flex">  
            <div class="prev-content flex column">
                <h4 class="email-sender flex between"><span>{{email.name}}</span>
                <span class="email-date">&emsp;{{time}}</span></h4>
                <div class="prev-subject">{{email.subject}}</div>
            </div> 
            <!-- <div class="prev-body">{{email.body}}</div> -->
        </li>
        `,
  
    methods:{
        itemSelected(){
            console.log(this.email.id);
            this.$emit('selectedItem', this.email.id)
            
        },
    },
    computed:{
        time(){ 
            return moment(this.email.sentAt).fromNow()   
        },
        isRead(){
            return this.email.isRead
        }
    },
    created() { 
    }
}