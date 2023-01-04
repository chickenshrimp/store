<template>
    <div class="line">
        {{ order_item_data.replaceAll('"', '').replace('{', '')
        .replace('}', '').replaceAll(',', ', ') }}
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
    margin: 13px;
    justify-content: center;
    flex: auto;
    flex-direction: row;
    font-family: SomeCoolFont;
    font-size: 13px;
}
</style>