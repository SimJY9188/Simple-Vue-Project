<template>
   <div class="body-container">
      <FilterComponent @get-value="getSelectedValue" />
      <div class="manager-list">
         <ManagerList
            v-for="manager in managers"
            :key="manager.id"
            :manager="manager"
            :filterAgeValue="selectedValue"
         />
      </div>
   </div>
</template>

<script>
import FilterComponent from "@/components/FilterComponent.vue";
import ManagerList from "@/components/ManagerList.vue";
import EventService from "@/services/EventService.js";

export default {
   components: {
      ManagerList,
      FilterComponent,
   },
   data() {
      return {
         selectedValue: "",
         managers: [],
      };
   },
   created() {
      EventService.getManager()
         .then((response) => {
            this.managers = response.data;
         })
         .catch((error) => {
            console.log("There was an error: " + error.response);
         });
   },
   methods: {
      getSelectedValue(value) {
         this.selectedValue = value;
      },
   },
};
</script>

<style scoped>
.body-container {
   width: 80%;
   padding: 3rem 0;
   margin: 0 auto;
}

.manager-list {
   padding-top: 3rem;
   display: flex;
   flex-wrap: wrap;
   width: calc(100% + 5%);
}
</style>
