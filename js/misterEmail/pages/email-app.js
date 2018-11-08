import {emailService} from '../services/email.service.js'

import emailList from '../cmps/email-list.cmp.js'
// import carFilter from '../../cmps/car/car-filter.js'

export default {
    template: `
        <section class="email">
            <email-list :emails="emails"  @selected-item ="itemSelected"></email-list>
        </section>
    `,
    data() {
        return {
            emails:[],
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
        // emailFilter
    }
}