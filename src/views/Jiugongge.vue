<template>
    <div class="canvas">
        <lucky-grid
            class="lucky-grid"
            ref="luckyWheel"
            width="360px"
            height="360px"
            :blocks="prizes"
        ></lucky-grid>
    </div>
</template>

<script>
import { LuckyGrid } from '@lucky-canvas/vue';
export default {
    components: {
        LuckyGrid,
    },
    data () {
        return {
            prizes: [],
        }
    }
}
</script>
 
<style lang = "less" scoped>
    .canvas {
        width: 100%;
        .lucky-grid {
            margin: 0 auto;
        }
    }
</style>