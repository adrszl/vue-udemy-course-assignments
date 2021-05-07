const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      inputStyle: "",
      isVisible: true,
      user1Class: false,
      user2Class: false,
    };
  },
  methods: {
    handleClassChange(event) {
      this.inputClass = event.target.value;
      if (this.inputClass === "user1") {
        this.user1Class = true;
        this.user2Class = false;
      } else if (this.inputClass === "user2") {
        this.user1Class = false;
        this.user2Class = true;
      } else {
        this.user1Class = false;
        this.user2Class = false;
      }
    },
    handleClick() {
      this.isVisible = !this.isVisible;
    },
    handleStyleChange(event) {
      this.inputStyle = event.target.value;
    },
  },
});

app.mount("#assignment");
