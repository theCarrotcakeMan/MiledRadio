<template id="media-player-template">
	<transition name="fade">
	<div v-if="showControls" class="fixed top-0 left-0 w-full h-full bg-grayoxford-dark z-30" style="left: -50vw;">
		<div v-if="loading" class="absolute z-50" style="left: 50%; top: 50%; transform: translate(-50%,-50%);">
			<div class="sk-chase">
			  <div class="sk-chase-dot"></div>
			  <div class="sk-chase-dot"></div>
			  <div class="sk-chase-dot"></div>
			  <div class="sk-chase-dot"></div>
			  <div class="sk-chase-dot"></div>
			  <div class="sk-chase-dot"></div>
			</div>
		</div>
		<header class="fixed w-full p-3 bg-grayoxford-light top-0 left-0 shadow-md z-30">
			<a class="text-lg text-grayoxford-dark inline-block" @click="closeControls"><span class="material-icons">arrow_back_ios</span></a>
			<a class="inline-block absolute align-text-bottom text-base font-medium leading-tight ml-4 w-3/4 pr-3 text-center" @click="closeControls"><span class="material-icons">home</span></a>
		</header>
		<article id="fullPlayerScreen" class="fixed w-full h-full p-6">
			<div class="absolute left-0 top-0 w-full h_2_3 py-0">
				<img :src="coverUrl" :alt="stationLabel" class="block m-auto mb-4" style="margin-top: 33%!important; max-height: 38vh; width: auto !important;">
				<h3 class="inline-block mt-3 leading-loose text-lg text-center font-medium text-white">{{stationLabel}} <span class="stationTag_inline font-medium">{{stationAddr}}</span> </h3>
			</div>
			<footer class="absolute left-0 bottom-0 w-full h_1_3 p-6">
			   <nav id="stationLinks" class="block flex justify-center px-3 py-6">
				   <a class="inline-block align-middle mr-3 text-grayoxford-light" target="_blank" v-on:click="openUrl(stationFb)" title="Síguenos en Facebook"><span class="social facebook"></span></a>
				   <a class="inline-block align-middle mr-3 text-grayoxford-light" target="_blank" onclick="window.open('https://www.twitter.com/noticiasmiled', '_blank', 'location=yes')" title="Síguenos en Twitter"><span class="social twitter"></span></a>
				   <a class="inline-block align-middle mr-3 text-grayoxford-light" target="_blank" onclick="window.open('https://miled.com', '_blank', 'location=yes')"><span class="social webpage"></span></a>
				   <a class="inline-block align-middle text-grayoxford-light" href="tel:+52 722 280 09 43"><span class="social phone"></span></a>
			   </nav>

			   <nav class="flex justify-center">
				   <a @click="resumeStream" v-show="paused" class="play text-grayoxford-light"><i class="material-icons text-4xl">play_arrow</i></a>
				   <a @click="pauseStream" v-show="!paused" class="pause text-grayoxford-light"><i class="material-icons text-4xl">pause</i></a>
			   </nav>
			   <div class="clearfix"></div>
			   <div v-if="!loading" class="block w-full p-1">
				   <vue-slider
					   v-model="volume"
					   tooltip="none"
					   :min="0"
					   :max="10"
					   >
				   </vue-slider>
			   </div>
		   </footer>
		</article>

	</div>
	</transition>
</template>

<script>

	import VueSlider from 'vue-slider-component';
    import Swal from 'sweetalert2';

    export default {

        template: "#media-player-template",

        props: {
            initialStatus: {
                type: Boolean,
                required: false
            }
        },

        data: function(){
            return {
                preloading: false,
                loading: false,
                coverUrl: null,
                streamUrl: null,
                stationLabel: null,
                stationAddr: null,
                stationFb: null,
                streamingMedia: null,
                mediaObject: null,
                volume: 5,
                playing: true,
                showControls: false
            }
        },

        created: function(){

            // Url global function and global paths
            var vm = this;
            _Event.$on( 'audio-event-received', this.playAudio );
            _Event.$on( 'loading-content', function(val){
				console.log("loading... ",val);
                vm.loading = !val.finished;
            } );
			// Is this what triggers auto play?
			// _Event.$emit('audio-event-received', dataObj);
        },

        methods: {

            playAudio: function(payload) {
				console.log("action: media.play > ");
                var vm = this;

				if(vm.playing && typeof vm.streamingMedia){
					vm.streamingMedia.stop();
					vm.streamingMedia.release();
				}
				console.log("Imma here");
				vm.coverUrl 	= payload.cover;
				vm.stationLabel = payload.station_title;
				vm.stationAddr 	= payload.station_addr;
				vm.stationFb 	= payload.station_fb || 'https://www.facebook.com/MiledMexico';
				vm.streamUrl 	= payload.url;

				vm.showControls = true;

				vm.streamingMedia = new Media(vm.streamUrl, vm.loadedFile, vm.showError);
				vm.streamingMedia.setVolume(vm.volume/10);
				vm.streamingMedia.play({ playAudioWhenScreenIsLocked : true });

            },
            loadedFile: function(){
				console.log("action: media.play > loaded file!");
				this.loading = false;
            },
            showError: function(errorMessage){
				console.log("media: Error", errorMessage);
                var error = "Hubo un problema al intentar reproducir la estación.";
                if(undefined !== errorMessage)
                    error = "Error code: " + errorMessage.code;
				this.loading = false;
                // Swal.fire(
                //     'Algo sucedió',
                //     error,
                //     'warning'
                // );
            },
            closeControls: function(){
				console.log("action: media.play > Closing controls");
                this.showControls = false;
            },
            reportStatus: function(statusCode){
                console.log(statusCode);
            },
            resumeStream: function(){
                console.log("action: media.play > Resume");
				this.playing = true;
				this.streamingMedia.play();
            },
            pauseStream: function(){
				console.log("Pause");
				this.playing = false;
				this.streamingMedia.pause();
            },
            openUrl: function(url){
				return window.open(url, '_blank', 'location=yes');
            }

        },

        computed: {
            paused: function(){
                return !this.playing;
            },
            player_status: function(){
                return this.playing ? 1 : 0;
            }
        },

	  	components: {
	    	VueSlider
	  	},

		watch: {
			volume: function(newVal){
				console.log("Setting volume ", newVal);
				return this.streamingMedia.setVolume(parseInt(newVal)/10);
			}
		}

    }

</script>
