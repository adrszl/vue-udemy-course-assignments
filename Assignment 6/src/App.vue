<template>
  <main>
    <active-users :username="user.name" :userage="user.age"></active-users>
    <user-data @set-data="setUserData"></user-data>
  </main>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Adrian",
        age: "25"
      }
    }
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name: name,
        age: age
      };
    }
  }
}
</script>
