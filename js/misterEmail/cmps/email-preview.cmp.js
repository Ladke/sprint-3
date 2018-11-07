export default {
    props: ['email'],
    template: `
         <li class="email-preview" >
            <h4 class="email-subject">From: <span>{{email.name}}</span></h4>
            <div>{{email.subject}}</div>
        </li>
        `,
    methods: {
     
    },
    computed: {

    },

    created() {
        console.log('book-Preview was created!');
    }
}