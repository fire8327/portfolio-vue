<template>
    <main class="container mx-auto flex flex-col gap-12 py-12 px-4 text-white">
        <div class="flex flex-col gap-6">
            <p class="text-xl md:text-2xl lg:text-3xl font-semibold">Кто я?</p>
            <Button>Узнать больше</Button>
        </div>
        <div class="flex flex-col gap-6">
            <p class="text-xl md:text-2xl lg:text-3xl font-semibold">Время делать проекты!</p>
            <div class="flex flex-col items-center gap-6">
                <div class="flex items-center gap-2 text-4xl">
                    <div class="flex items-center justify-center bg-gradient-to-b from-pink-500 via-red-500 to-yellow-500 p-1 rounded-full w-20 md:w-36 lg:w-44 h-20 md:h-36 lg:h-44 animate-pulse">
                        <div class="flex items-center justify-center rounded-full bg-[#12121C] w-full h-full">{{ hours }}</div>
                    </div>
                    <p class="text-center">:</p>
                    <div class="flex items-center justify-center bg-gradient-to-b from-pink-500 via-red-500 to-yellow-500 p-1 rounded-full w-20 md:w-36 lg:w-44 h-20 md:h-36 lg:h-44 animate-pulse">
                        <div class="flex items-center justify-center rounded-full bg-[#12121C] w-full h-full">{{ minutes }}</div>
                    </div>
                    <p class="text-center">:</p>
                    <div class="flex items-center justify-center bg-gradient-to-b from-pink-500 via-red-500 to-yellow-500 p-1 rounded-full w-20 md:w-36 lg:w-44 h-20 md:h-36 lg:h-44 animate-pulse">
                        <div class="flex items-center justify-center rounded-full bg-[#12121C] w-full h-full">{{ seconds }} </div>
                    </div>
                </div>
                <p class="text-xl md:text-2xl lg:text-3xl first-letter:uppercase">{{ date.toLocaleDateString("ru" ,{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
            </div>
        </div>
        <div class="flex flex-col gap-6">
            <p class="text-xl md:text-2xl lg:text-3xl font-semibold">Изображение дня от NASA</p>
            <img :src="nasa.hdurl" alt="" class="rounded-2xl">
        </div>
        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card v-for="card in cards" :img="card.img" :link="card.link" :title="card.title" :tags="card.tags"></Card>
        </div>
        <div class="flex flex-col gap-6">
            <p class="text-xl md:text-2xl lg:text-3xl font-semibold">Были бы идеи...</p>
            <div class="w-full flex flex-col md:flex-row">
                <div class="h-56 md:h-auto w-full md:w-1/2 [perspective:1000px] mt-8">
                    <div class="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d]" :class="{'[transform:rotateY(180deg)]':flipCheck}">
                        <Transition name="fade" mode="out-in">
                            <div class="left-0 inset-0 h-full-w-full flex flex-col md:items-center justify-center !duration-200" v-if="!flipCheck">
                                <div class="w-full md:w-96">
                                    <p class="py-1">Возможно вам понравилось то, что вы увидели.</p>
                                    <p class="pt-1 pb-6">Если у вас есть идея или проект, который вы бы хотели реализовать, то напишите мне.</p>
                                    <Button @click="flipCheck = !flipCheck">Связаться со мной</Button>                    
                                </div>    
                            </div>
                            <div class="left-0 inset-0 h-full-w-full rounded-xl [transform:rotateY(180deg)] flex flex-col md:items-center justify-center !duration-200" v-else>
                                <div class="w-full md:w-96 flex flex-col gap-8">
                                    <div class="flex flex-col gap-2">
                                        <p>Вы можете написать мне в телеграм.</p>
                                        <div>Для этого перейдите по ссылке <a href="https://t.me/fire83274" class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">*клик*</a></div>
                                        <p>Или введите в поиск <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">@fire83274</span></p>
                                    </div>
                                    <button @click="flipCheck = !flipCheck" class="animate-bounce w-12"><img src="/Images/contact/back.svg" alt=""></button>
                                </div>
                            </div>
                        </Transition>                        
                    </div>
                </div>
                <div class="w-full md:w-1/2 flex justify-center">
                    <svg class="w-56 md:w-64" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">
                    <circle style="fill:#273B7A;" cx="256.001" cy="256" r="256"/>
                    <path style="fill:#273B7A;" d="M170.778,387.355l-54.72,5.354L234.438,511.09c7.111,0.593,14.3,0.912,21.563,0.912
                        c125.805,0,230.412-90.75,251.938-210.356L318.277,111.876l-131.124,79.872l3.724,3.724l-54.974,39.267l1.083,46.545
                        L170.778,387.355z"/>
                    <polygon style="fill:#38C6D9;" points="171.585,395.354 118.19,235.168 251.61,128.433 264.203,144.174 141.758,242.128 
                        190.71,388.98 "/>
                    <polygon class="fill-[#475a8d] transition-all duration-700" :class="{'fill-yellow-400':flipCheck}" points="455.112,398.222 256.001,398.222 256.001,227.556 350.29,198.408 "/>
                    <polygon class="fill-[#475a8d] transition-all duration-700" :class="{'fill-yellow-400':flipCheck}" points="350.29,198.408 307.035,211.78 365.593,398.222 455.112,398.222 "/>
                    <circle style="fill:#D0D1D3;" cx="287.324" cy="142.446" r="43.494"/>
                    <path style="fill:#D0D1D3;" d="M299.367,184.227c23.078-6.649,36.399-30.748,29.749-53.827
                        c-6.649-23.08-30.748-36.399-53.827-29.749c-0.972,0.281-1.922,0.603-2.86,0.943l26.028,82.87
                        C298.761,184.384,299.064,184.315,299.367,184.227z"/>
                    <polygon style="fill:#FFFFFF;" points="374.088,207.956 248.724,244.072 245.54,154.477 329.117,130.4 "/>
                    <polygon style="fill:#FFFFFF;" points="374.088,207.956 329.117,130.4 285.43,142.986 311.499,225.989 "/>
                    <g>
                        <circle style="fill:#386895;" cx="133.845" cy="238.64" r="20.935"/>
                        <path style="fill:#386895;" d="M228.917,398.222H126.572c-7.066,0-12.793-5.729-12.793-12.793l0,0
                            c0-7.066,5.729-12.793,12.793-12.793h102.345c7.066,0,12.793,5.729,12.793,12.793l0,0
                            C241.711,392.494,235.983,398.222,228.917,398.222z"/>
                    </g>
                    </svg>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-6">
            <FeedbackForm></FeedbackForm>
        </div>
    </main>
</template>

<script setup>
    import Button from '../components/Button.vue'
    import Card from '../components/Card.vue'
    import FeedbackForm from '../components/FeedbackForm.vue'
    import { computed, ref } from 'vue'
    import axios from 'axios'
    document.title = "Главная"

    /* Date */
    let date = ref(new Date())
    const hours = computed(() => {return date.value.getHours()})
    const minutes = computed(() => {return date.value.getMinutes()})
    const seconds = computed(() => {return date.value.getSeconds()})    
    setInterval(() => {
        date.value = new Date()
    }, 1000);

    /* Random picture */
    let nasa = ref("https://avatars.mds.yandex.net/i?id=9c4f0a4b8b13a80f345661a40d6f3811_l-5449562-images-thumbs&n=13")
    axios.get('https://api.nasa.gov/planetary/apod?api_key=rWbh3Tk6Zc9dmJyTA27or1NMnsJLmfjJhRqjfBjF')
    .then(function (response) {
        nasa.value = response.data
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
    });

    /* Cards */
    const cards = [
        {img:"/Images/examples/Estate.png",link:"https://fire8327.github.io/Real_estate/",title:"Сайт недвижимости",tags:['ru','landing','white-theme']},
        {img:"/Images/examples/NFT.png",link:"https://fire8327.github.io/NFT/",title:"Сайт NFT",tags:['en','landing','black-theme']},
    ]

    /* Flip */
    let flipCheck = ref(false)

    /*  */
    
</script>