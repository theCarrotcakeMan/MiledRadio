<template id="media-player-template">

    <footer class="bg-gray-300 shadow-md fixed left-0 bottom-0 w-full h-0">
<!--        <nav class="flex justify-center">-->
<!--            <a href="#" v-show="paused" class="play text-gray-500"><i class="material-icons">play_arrow</i></a>-->
<!--            <a href="#" v-show="playing" class="pause text-gray-500"><i class="material-icons">pause</i></a>-->
<!--        </nav>-->
    </footer>

</template>

<script>

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
                streamingMedia: null,
                mediaObject: null,
                playing: false
            }
        },

        created: function(){

            // Url global function and global paths
            var vm = this;
            _Event.$on( 'audio-event-received', this.playAudio );
            _Event.$on( 'loading-content', function(){
                vm.loading = true;
            } );

        },

        mounted: function(){
            /* Fet initial values from the urlVars */
            var vm = this;
            vm.streamingMedia = window.plugins.streamingMedia;
        },

        methods: {

            playAudio: function(payload) {
                var vm = this;
                // var image_path = vm.$root.listDir(cordova.file.applicationDirectory + "www/");
                var cover_image = (undefined !== payload.cover) ? payload.cover : "Default-cover.png";
                // Play an audio file with options (all options optional)
                var options = {
                    bgColor: "#393d42",
                    bgImage: payload.cover,
                    bgImageScale: "fit",
                    initFullscreen: false,
                    successCallback: vm.loadedFile,
                    errorCallback: vm.showError
                };
                console.log(JSON.stringify(options));
                console.log(payload.url);
                vm.streamingMedia.playAudio(payload.url, options);

                console.log("Do you know someone named Francisco on the streets");
            },
            loadedFile: function(){
                console.log("Player closed without error.");
            },
            showError: function(errorMessage){
                var error = "Hubo un problema al intentar reproducir la estación.";
                if(undefined !== errorMessage)
                    error = errorMessage;
                Swal.fire(
                    'Algo sucedió',
                    errorMessage,
                    'warning'
                );
            },
            reportStatus: function(statusCode){
                console.log(statusCode);
            }

        },

        computed: {
            paused: function(){
                return !this.playing;
            },
            player_status: function(){
                return this.playing ? 1 : 0;
            }
        }

    }

</script>
