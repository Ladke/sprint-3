import {emailService} from '../services/email.service.js'

import emailList from '../cmps/email-list.cmp.js'
// import carFilter from '../../cmps/car/car-filter.js'

export default {
    template: `
        <section class="email">
            <email-list :emails="emails"></email-list>
        </section>
    `,
    data() {
        return {
            emails:[],
        }
    },
    created() {
        emailService.query()
            .then(emails => this.emails = emails)
    },
    methods: {
        setFilter(filter) {
            emailService.query(filter)
            .then(emails => this.emails = emails)
        }
    },
    
    components: {
        emailList,
        // emailFilter
    }
}