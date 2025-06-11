<template>
   <div class="filter-component-container">
      <div class="filter-input-label">Filter By Age</div>
      <div class="filter-input-select">
         <select v-model="selectedValue" @change="onSelectChange">
            <option value="" disabled selected class="option-not-shown">
               Select age
            </option>
            <option
               v-for="item in filterItem"
               :key="item.value"
               :value="item.value"
            >
               {{ item.name }}
            </option>
         </select>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         filterItem: [
            { value: "all", name: "All" },
            { value: "20andBelow", name: "20 and below" },
            { value: "21to39", name: "21 to 39" },
            { value: "40andAbove", name: "40 and above" },
         ],
         selectedValue: "",
      };
   },
   mounted() {
      this.onSelectChange();
   },
   props: {
      getValue: Function,
   },
   methods: {
      onSelectChange() {
         this.$emit("get-value", this.selectedValue);
      },
   },
};
</script>

<style scoped>
.filter-component-container {
   padding-bottom: 2rem;
   border-bottom: 3px solid #e9e9e9;
}

.filter-input-label {
   font-weight: 500;
   margin-bottom: 0.8rem;
}

.filter-input-select select {
   width: 280px;
   height: 2.5rem;
   padding: 0 0.8rem 2px 0.8rem;
   border-color: #cecbcb;
   color: #606060;
   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;
   background: url("https://api.iconify.design/ic/outline-arrow-drop-down.svg?color=%23606060")
      calc(100% - 10px) / 28px no-repeat;
}

.option-not-shown {
   display: none;
}

@media screen and (max-width: 350px) {
   .filter-input-select select {
      width: 100%;
   }
}
</style>
