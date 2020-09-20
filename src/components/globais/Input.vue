<template>
    <label :id="idProps">
    <input :type="nomeProps" :placeholder="textProps">
    <span></span>
    </label>
</template>


<script>
export default {
    name: 'inputEstilizado',
    props: {
        id: String,
        type: String,
        placeholder: String
    }
}
</script>

<style lang="css">

</style>