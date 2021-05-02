const app = Vue.createApp({
  data() {
    return {
      firstName: "Adrian",
      age: 25,
      imgUrl: "https://v3.vuejs.org/logo.png",
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
