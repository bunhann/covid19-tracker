<template>
    <select @change="onChange()"
    v-model="selected" class="form-select mt-10 block w-full border p-3 rouned" >
        <option value="0">Select a country</option>
        <option v-for="country in countries" :value="country.ID" v-bind:key="country.ID" >
            {{country.Country}}
        </option>
    </select>
</template>

<script>
export default {
    name: 'CountrySelect',
    props: ['countries'],
    data() {
        return {
            selected: 0
        }
    },
    methods: {
        onChange() {
            const country = this.countries.find((item) => item.ID === this.selected);
            this.$emit('get-country', country)
        }
    }
    

}
</script>
