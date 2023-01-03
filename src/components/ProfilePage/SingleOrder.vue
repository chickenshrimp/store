<template>
    <div class="line">
        {{ order_item_data }}
    </div>
</template>

<script>
export default {
    name: 'SingleOrder',
    props: {
        order_item_data: {
            type: String,
            default() {
                 
            }
        }
    },
}
</script>

<style>
.line {
    margin: auto;
    justify-content: center;
    flex: auto;
    flex-direction: row;
}
</style>