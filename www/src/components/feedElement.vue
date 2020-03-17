<template id="media-player-template">

    <article @click="triggerPlay(streamUrl, label, cover)" class="w-1/2 px-4 pt-4">
        <img :src="cover" :alt="label">
		<div class="relative bg-gray-900 p-4" style="min-height: 86px!important;">
	        <h2 v-html="label" class="text-white text-sm font-light leading-loose" style="max-width: 80%;"></h2>
			<span v-if="station" class="stationTag">{{station}}</span>
		</div>
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
            station: {
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
