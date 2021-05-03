const app = Vue.createApp({
  data() {
    return {
      output1: "OUTPUT",
      output2: "OUTPUT",
    };
  },
  methods: {
    handleButton() {
      alert("Button clicked");
    },
    handleInput1(event) {
      this.output1 = event.target.value;
    },
    handleInput2(event) {
      this.output2 = event.target.value;
    },
  },
});

app.mount("#assignment");
