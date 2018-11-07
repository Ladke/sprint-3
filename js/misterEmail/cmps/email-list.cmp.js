import emailPreview from "./email-preview.cmp.js"
export default {
  props: ["emails"],
  template: `
      
            <ul class="email-list">
                <email-Preview  v-for="email in emails"
                            :key="email.id"
                            :email="email" @click.native="emailClicked(email.id)">
                </email-Preview>
            </ul>
    `,
  methods: {
    emailClicked(id) {
      this.$router.push(`/misteremail/${id}`);
      console.log("email selected");
      this.$emit("selected-email", id);
    }
  },

  components: {
    emailPreview
  }
};
