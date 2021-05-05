const app = Vue.createApp({
  data() {
    return {
      result: 0,
      infoMsg: "RESULT",
    };
  },
  watch: {
    result(value) {
      const self = this;
      if (value < 37) {
        this.infoMsg = "Not there yet";
      } else if (value > 37) {
        this.infoMsg = "Too much!";
      } else {
        this.infoMsg = value;
      }
      setTimeout(() => {
        self.result = 0;
      }, 5000);
    },
  },
  methods: {
    addFive() {
      this.result += 5;
    },
    addOne() {
      this.result += 1;
    },
  },
});

app.mount("#assignment");
