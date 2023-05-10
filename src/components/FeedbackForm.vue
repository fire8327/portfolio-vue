<template>
    <FormKit v-autoanimate type="form" submit-label="Отправить" :submit-attrs="{wrapperClass:'w-fit mx-auto',inputClass:'bg-[#222233] border-2 border-slate-400 rounded-xl px-2 py-1 w-fit text-white hover:bg-white hover:text-[#222233] transition-color duration-500 hover:border-white'}" form-class="flex flex-col gap-6 w-full md:w-1/2 lg:w-1/3 mx-auto" @submit="submitForm">
        <p class="text-center font-semibold text-2xl md:text-3xl lg:text-4xl">Свяжитесь со мной</p>
        <p class="text-center text-sm md:text-lg">Возник вопрос? Хотите отправить отзыв? Нужна подробная информация? Дайте мне знать.</p>
        <div class="flex flex-col gap-2">
            <p class="text-lg md:text-xl">Ваше имя</p>
            <FormKit type="text" name="name" input-class="bg-[#222233] border-2 border-slate-400 rounded-xl px-2 py-1 text-white focus:outline-none transition-color duration-500 focus:border-white w-full" placeholder="Иван"/>
        </div>
        <div class="flex flex-col gap-2">
            <p class="text-lg md:text-xl">Ваш никнейм в тг (без @)</p>
            <FormKit type="text" name="nickname" input-class="bg-[#222233] border-2 border-slate-400 rounded-xl px-2 py-1 text-white focus:outline-none transition-color duration-500 focus:border-white w-full" placeholder="_Ivan_"/>
        </div>
        <div class="flex flex-col gap-2">
            <p class="text-lg md:text-xl">Ваш вопрос</p>
            <FormKit type="textarea" name="question" input-class="h-32 bg-[#222233] border-2 border-slate-400 rounded-xl px-2 py-1 text-white focus:outline-none transition-color duration-500 focus:border-white resize-none w-full" placeholder="Создание сайта..."/>
        </div>
        <p v-if="success.isShow" :class="(success.type == 'info') ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'" class="rounded-xl py-2 px-3">{{ success.text }}</p>
    </FormKit>
</template>

<script setup>
    import axios from 'axios'
    import { ref } from 'vue'
    const token = "6046764797:AAFAFULakfayU2Hg9iEoiuKFBGe8rZIA19w"
    const chatId = "-1001907080964"
    const url = `https://api.telegram.org/bot${token}/sendMessage`
    let success = ref({isShow:false,text:"",type:"danger"})
    const submitForm = (formValues,{reset}) => {
        let msg = `<b>Сообщение с сайта!</b>\n`
        msg += `<b>Отправитель: </b> @${formValues.nickname}\n`
        msg += `<b>Вопрос: </b> ${formValues.question}\n`
        console.log(msg)
        axios.post(url, {
            chat_id: chatId,
            parse_mode: 'html',
            text: msg
        })
        .then(function (response) {
            reset()
            success.value.isShow = true
            success.value.type = "info"
            success.value.text = "Успешная отправка!"
            setTimeout(() => {
                success.value.isShow = false
            }, 1500);
        })
        .catch(function (error) {
            console.log(error);
            success.value.isShow = true
            success.value.type = "danger"
            success.value.text = "При отправке произошла ошибка!"
        })
        .finally(function () {
        })
    }
</script>
