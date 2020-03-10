<template id="side-menu-template">

	<ul class="list-none w-full text-grayoxford-text pd-0 mb-6">
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block" @click="emitPlayEvent('http://google.com/search?q=radio+miled', 'Toluca, México', 'https://endeavour-one.s3-us-west-2.amazonaws.com/tmp/Toluca-MILED-mdpi.png')"><i class="material-icons align-middle">play_circle_outline</i> Toluca, México</a>
		</li>
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block" @click="emitPlayEvent('http://google.com/search?q=radio+miled', 'Atlacomulco, México', 'https://endeavour-one.s3-us-west-2.amazonaws.com/tmp/Atlacomulco-MILED-mdpi.png')"><i class="material-icons align-middle">play_circle_outline</i> Atlacomulco, México</a>
		</li>
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block" @click="emitPlayEvent('http://google.com/search?q=radio+miled', 'Valle de Bravo, México', 'https://endeavour-one.s3-us-west-2.amazonaws.com/tmp/Valle-de-Bravo-MILED-mdpi.png')"><i class="material-icons align-middle">play_circle_outline</i> Valle de Bravo, México</a>
		</li>
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block" @click="emitPlayEvent('http://google.com/search?q=radio+miled', 'Guadalajara, Jalisco', 'https://endeavour-one.s3-us-west-2.amazonaws.com/tmp/Guadalajara-MILED-mdpi.png')"><i class="material-icons align-middle">play_circle_outline</i> Guadalajara, Jalisco</a>
		</li>
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block" @click="emitPlayEvent('http://google.com/search?q=radio+miled', 'Tulancingo, Hidalgo', 'https://endeavour-one.s3-us-west-2.amazonaws.com/tmp/Tulancingo-MILED-mdpi.png')"><i class="material-icons align-middle">play_circle_outline</i> Tulancingo, Hidalgo</a>
		</li>
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block" @click="emitPlayEvent('http://google.com/search?q=radio+miled', 'San Luis Potosi', 'https://endeavour-one.s3-us-west-2.amazonaws.com/tmp/San-Luis-Potosi-MILED-mdpi.png')"><i class="material-icons align-middle">play_circle_outline</i> San Luis Potosi</a>
		</li>
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block" @click="emitPlayEvent('http://google.com/search?q=radio+miled', 'Querétaro, Qro.', 'https://endeavour-one.s3-us-west-2.amazonaws.com/tmp/Queretaro-MILED-mdpi.png')"><i class="material-icons align-middle">play_circle_outline</i> Querétaro, Qro.</a>
		</li>
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block" @click="emitPlayEvent('http://google.com/search?q=radio+miled', 'San Juan del Río, Qro.', 'https://endeavour-one.s3-us-west-2.amazonaws.com/tmp/San-Juan-Del-Rio-MILED-mdpi.png')"><i class="material-icons align-middle">play_circle_outline</i> San Juan del Río, Qro.</a>
		</li>
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block" @click="emitPlayEvent('http://google.com/search?q=radio+miled', 'Zacatecas', 'https://endeavour-one.s3-us-west-2.amazonaws.com/tmp/Zacatecas-MILED-mdpi.png')"><i class="material-icons align-middle">play_circle_outline</i> Zacatecas</a>
		</li>
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block" onclick="window.navigator.app.exitApp()"><i class="material-icons align-middle">clear</i> Salir</a>
		</li>
	</ul>

</template>

<script>

    export default {

        template: "#side-menu-template",

        data: function(){
            return {
                preloading: false,
                loading: false
            }
        },

        mounted: function(){
            /* Fet initial values from the urlVars */
            var vm = this;

        },

        methods: {

			emitPlayEvent: function(stationUrl, stationTitle, stationCover){
				var dataObj = {'url': stationUrl, 'station_title': stationTitle, 'cover': stationCover};
                _Event.$emit('audio-event-received', dataObj);
			}
        }

    }

</script>
