import { emailService } from "../services/email.service.js";
import emailList from '../cmps/email-list.cmp.js'

export default {
    template: `
        <section class="email-main">
            <email-list  v-if="emails" :emails="emails"  @selected-item ="itemSelected"></email-list>
        </section>
    `,
    data() {
        return {
            emails:null,
            selectedItems:[],
        }
    },
    created() {
        emailService.query()
            .then(emails => this.emails = emails)
    },
    methods: {
        itemSelected(id){
            this.selectedItems.push(id)
            console.log(this.selectedItems);  
        },
    },
    
    components: {
        emailList,
    }
}