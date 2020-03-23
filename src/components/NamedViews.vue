<template>
    <div>
        <h1>Vues nommées exemple</h1>
        <!-- Vues   -->
        <router-view></router-view>

        <!-- Sous vues nommées  -->
        <router-view name="named"></router-view>

        <router-link to="/">Go to Main page</router-link> <br>
    </div>
</template>
<script>
export default {
    name: 'NamedViews'
}
</script>
<style lang="scss">

</style>