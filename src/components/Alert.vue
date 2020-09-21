<template>
    <div>

    <b-alert :variant="type" show>{{ message | capitalize }}</b-alert>
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: ""
            },
            message:{
                type:String,
                default:""
            }
        },

        filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
        
    };
</script>

<style lang="scss" scoped>

</style>