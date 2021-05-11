const app = Vue.createApp({
  data() {
    return {
      textInput: "",
      tasks: [],
      isListVisible: true,
    };
  },
  methods: {
    handleInput(event) {
      this.textInput = event.target.value;
    },
    addTask() {
      this.tasks.push(this.textInput);
      this.textInput = "";
    },
    toggleList() {
      this.isListVisible = !this.isListVisible;
    },
  },
});

app.mount("#assignment");
