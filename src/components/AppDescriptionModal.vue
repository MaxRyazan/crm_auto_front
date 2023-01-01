<template>
    <div class="modal">
        <button class="close_modal" @click="$emit('closeModal')">x</button>
        <div>
            {{detail.description}}
        </div>
    </div>
</template>
<script>
export default {
    name: 'AppDescriptionModal',
    props: {
        detail: Object
    }
}
</script>