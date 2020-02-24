<template id="media-player-template">

    <article @click="triggerPlay(streamUrl, label, cover)" class="w-1/2 px-4 pt-4">
        <img :src="cover" :alt="label">
        <h2 v-html="label" class="text-white text-base font-light leading-loose bg-gray-900 p-4"></h2>
    </article>

</template>

<script>

    module.exports = {

        template: "#media-player-template",

        props: {
            cover: {
                type: String,
                required: false
            },
            label: {
                type: String,
                required: false
            },
            streamUrl: {
                type: String,
                required: false
            }
        },

        data: function(){
            return {
                preloading: false,
                loading: false,
                mediaObject: null,
                playing: false
            }
        },

        created: function(){


        },

        mounted: function(){
            /* Fet initial values from the urlVars */
            var vm = this;


        },

        methods: {

            triggerPlay: function(url, title, cover_url) {
                var dataObj = {'url': url, 'station_title': title, 'cover': cover_url};
                _Event.$emit('audio-event-received', dataObj);
                _Event.$emit('loading-content');
            }

        },

        computed: {
            paused: function(){
                return !this.playing;
            }
        }

    }

</script>
