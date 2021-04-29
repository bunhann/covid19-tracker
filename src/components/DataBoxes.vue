<template>
    <div class="grid md:grid-cols-2 gap-4">
        <div class="shadow-md bg-blue-100 p-10 text-center rounded">
            <h3 class="text-3xl text-blue-800 font-bold mb-4">Cases</h3>
            <div class="text-2xl mb-4">
                <span class="font-bold">New: </span>
                <p class="slashed-zero lining-nums">{{ numberWithCommas(stats.NewConfirmed) }}</p>
                <div class="text-2xl mt-4">
                     <span class="font-bold">តួលេខជាអក្សរ: </span>
                     <p class="text-gray-800 mt-4"> {{ n2w(stats.NewConfirmed) }} </p>
                </div>
            </div>
             <div class="text-2xl mb-4">
                <span class="font-bold">Total:</span>
                <p class="slashed-zero lining-nums"> {{ numberWithCommas(stats.TotalConfirmed) }} </p>
                <div class="text-2xl mt-4">
                    <span class="font-bold mb-10">តួលេខជាអក្សរ: </span>
                    <p class="text-gray-800"> {{ n2w(stats.TotalConfirmed) }} </p>
                </div>
               
            </div>
        </div>

        <!-- Box2 -->

        <div class="shadow-md bg-blue-300 p-10 text-center rounded hover:bg-blue-100">
            <h3 class="text-3xl text-red-800 font-bold mb-4">Deaths</h3>
            <div class="text-2xl mb-4">
                <span class="font-bold">New: </span>
                <p class="slashed-zero lining-nums">{{ numberWithCommas(stats.NewDeaths) }}</p>
               
            </div>
             <div class="text-2xl mb-4">
                <span class="font-bold">Total:</span>
                <p class="slashed-zero lining-nums"> {{ numberWithCommas(stats.TotalDeaths) }} </p>
            </div>
        </div>
    </div>
    <div>

    </div>

</template>

<script>

import { numberToWord } from 'number_to_khmer_word';

export default {
    name: 'DataBoxes',
    props: [
        'stats'
    ],
    methods: {
        numberWithCommas(x) {
            return Number(x).toLocaleString()
        },

        n2w(x) {
            return numberToWord(x)
        }
    }, 

}
</script>