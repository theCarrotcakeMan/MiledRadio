<template id="side-menu-template">

	<ul class="list-none w-full text-grayoxford-text pd-0 mb-6">
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block w-full truncate" @click="emitPlayEvent('https://stereotoluca.radioca.st/stream', '98.9 FM', 'Toluca, México', 'https://endeavour-one.s3-us-west-2.amazonaws.com/tmp/Toluca-MILED-mdpi.png')"><i class="material-icons align-middle">play_circle_outline</i> Toluca, México 98.9 FM</a>
		</li>
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block w-full truncate" @click="emitPlayEvent('https://stereoatlaco.radioca.st/stream', '104.7 FM', 'Atlacomulco, México', 'https://endeavour-one.s3-us-west-2.amazonaws.com/tmp/Atlacomulco-MILED-mdpi.png')"><i class="material-icons align-middle">play_circle_outline</i> Atlacomulco, México 104.7 FM</a>
		</li>
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block w-full truncate" @click="emitPlayEvent('https://stereovalle.radioca.st/stream', '93.5 FM', 'Valle de Bravo, México', 'https://endeavour-one.s3-us-west-2.amazonaws.com/tmp/Valle-de-Bravo-MILED-mdpi.png')"><i class="material-icons align-middle">play_circle_outline</i> Valle de Bravo, México 93.5 FM</a>
		</li>
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block w-full truncate" @click="emitPlayEvent('https://guadalajara.radioca.st/stream', '1510 AM', 'Guadalajara, Jalisco', 'https://endeavour-one.s3-us-west-2.amazonaws.com/tmp/Guadalajara-MILED-mdpi.png')"><i class="material-icons align-middle">play_circle_outline</i> Guadalajara, Jalisco 1510 AM</a>
		</li>
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block w-full truncate" @click="emitPlayEvent('https://stereotulancingo.radioca.st/stream', '97.1 FM', 'Tulancingo, Hidalgo', 'https://endeavour-one.s3-us-west-2.amazonaws.com/tmp/Tulancingo-MILED-mdpi.png')"><i class="material-icons align-middle">play_circle_outline</i> Tulancingo, Hidalgo 97.1 FM</a>
		</li>
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block w-full truncate" @click="emitPlayEvent('https://sanluis.radioca.st/stream', '620 AM','San Luis Potosi', 'https://endeavour-one.s3-us-west-2.amazonaws.com/tmp/San-Luis-Potosi-MILED-mdpi.png')"><i class="material-icons align-middle">play_circle_outline</i> San Luis Potosi 620 AM</a>
		</li>
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block w-full truncate" @click="emitPlayEvent('https://queretaro.radioca.st/stream', '103.1 FM','Querétaro, Qro.', 'https://endeavour-one.s3-us-west-2.amazonaws.com/tmp/Queretaro-MILED-mdpi.png')"><i class="material-icons align-middle">play_circle_outline</i> Querétaro, Qro. 103.1 FM</a>
		</li>
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block w-full truncate" @click="emitPlayEvent('https://sanjuan.radioca.st/stream', '93.1 FM', 'San Juan del Río, Qro.', 'https://endeavour-one.s3-us-west-2.amazonaws.com/tmp/San-Juan-Del-Rio-MILED-mdpi.png')"><i class="material-icons align-middle">play_circle_outline</i> San Juan del Río, Qro. 93.1 FM</a>
		</li>
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block w-full truncate" @click="emitPlayEvent('https://zacatecas.radioca.st/stream', '104.9 FM','Zacatecas', 'https://endeavour-one.s3-us-west-2.amazonaws.com/tmp/Zacatecas-MILED-mdpi.png')"><i class="material-icons align-middle">play_circle_outline</i> Zacatecas 104.9 FM</a>
		</li>
		<li class="block leading-loose mt-8 mb-8 font-body font-medium text-base hover:text-grayoxford-text">
			<a class="leading-relaxed inline-block w-full truncate" onclick="window.navigator.app.exitApp()"><i class="material-icons align-middle">clear</i> Cerrar la applicación</a>
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

			emitPlayEvent: function(stationUrl, stationAddr, stationTitle, stationCover){
				var dataObj = {'url': stationUrl, 'station_title': stationTitle,'station_addr': stationAddr, 'cover': stationCover};
                _Event.$emit('audio-event-received', dataObj);
			}
        }

    }

</script>
