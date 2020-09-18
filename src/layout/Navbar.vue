<template>
    <b-container fluid="xg">
        <b-navbar toggleable="lg" type="dark" variant="info" fixed="top" class="mb-5">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <router-link to="/" class="nav-link">Home</router-link>
                    <router-link :to="{name: 'QuemSomos'}" class="nav-link">Quem Somos</router-link>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </b-container>
</template>

<script>
export default {
    name: 'navbar',
}
</script>

<style lang="css">
    .navbar {
        padding: 0;
    }
</style>