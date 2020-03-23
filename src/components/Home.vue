<template>
    <div>
        <h2>
            {{ msg }} <br>
            
            <router-link to="/">Go to HelloWorld by router link</router-link> <br>
            <button @click="goToHelloWorld"> Go to Hello World by router.push</button>
        </h2>
    </div>
</template>
<script>
export default {
    name: 'Home',
    computed: {
        msg() {
            console.log(this.$route);
            return this.$route && this.$route.params && this.$route.params.msg ? this.$route.params.msg : '';
        }
    },
    methods: {
        goToHelloWorld() {
            this.$router.push({path: '/'});
        }
    }
}
</script>
<style lang="scss">

</style>