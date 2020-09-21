<template>
    <b-container fluid="xg" class="mb-5">
        <b-navbar toggleable="lg" fixed="top" type="dark" class="mb-5">
            <router-link to="/" class="navbar-brand">
                <img :src="require('../assets/img/logo.png')" class="img-fluid logo-nav"></router-link>

            <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <router-link :to="{name: 'QuemSomos'}" class="nav-link">Quem Somos</router-link>
                    <router-link to="/" class="nav-link">Solicite Seu Crédito</router-link>
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
        background-color: #ffffff;
        color: #474D4F;
    }
    .logo-nav {  
        width: 250px;
    }
    @media (max-width: 768px) {
        .navbar {
            background-color: #10206A;
        }
    }
</style>