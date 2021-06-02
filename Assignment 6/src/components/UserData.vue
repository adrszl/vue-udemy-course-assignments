<template>
  <div>
    <form @submit.prevent="submitData">
      <label for="user-name">Name</label>
      <input name="user-name" v-model="enteredName" />
      <label for="user-age">Age</label>
      <input name="user-age" v-model="enteredAge" />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ['set-data'],
  data() {
    return {
      enteredName: '',
      enteredAge: ''
    };
  },
  methods: {
    submitData() {
      this.$emit('set-data', this.enteredName, this.enteredAge);  
    }
  }
}
</script>