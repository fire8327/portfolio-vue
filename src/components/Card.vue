<template>
    <div class="rounded-2xl shadow bg-[#222233]">
        <Atropos v-bind="atr" class="atropos my-atropos group">
            <div class="atropos-scale">
                <div class="atropos-rotate">
                    <div class="atropos-inner">
                        <a :href="link" target="_blank"><img :src="img" alt="" class="rounded-t-2xl group-hover:rounded-2xl group-hover:delay-50 transition-all duration-500"></a>
                    </div>
                </div>
            </div>
        </Atropos>
        <div class="p-5 flex flex-col gap-4">
            <a :href="link" class="text-2xl font-semibold text-white">{{ title }}</a>
            <div class="flex gap-2 text-[#222233]">                
                <button v-for="tag in tags" class="bg-white rounded-full px-3 py-1 text-sm font-medium">#{{ tag }}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Atropos from 'atropos/vue'
    const atr = {
    shadow:false,
    activeOffset: 40,
    rotate:true,
    rotateTouch:('scroll-y'),  
    highlight:false,
    rotateXMax:8,
    rotateYMax:8
    }
    const props = defineProps({
        link:{type:String,default:"#"},
        img:{type:String,default:"https://avatars.mds.yandex.net/i?id=9c4f0a4b8b13a80f345661a40d6f3811_l-5449562-images-thumbs&n=13"},
        title:{type:String,default:"Типа сайт"},
        tags:{type:Array,default:["#en","#landing","#black-theme"]}
    })
</script>
