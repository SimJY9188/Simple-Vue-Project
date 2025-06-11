<template>
   <div
      class="manager-card"
      v-show="manager.age <= ageMax && manager.age >= ageMin"
   >
      <img src="../assets/userphoto-prime1.jpg" class="manager-image" />
      <div class="manager-info">
         <div class="manager-name">{{ manager.name }}</div>
         <div class="manager-detail">
            Email: <span>{{ manager.email }}</span>
         </div>
         <div class="manager-detail">
            Mobile: <span>{{ manager.phone }}</span>
         </div>
         <div class="manager-detail">
            Company: <span>{{ manager.company }}</span>
         </div>
         <div class="manager-detail">
            Address: <span>{{ address }}</span>
         </div>
         <div class="manager-detail">
            Website: <span>{{ manager.website }}</span>
         </div>
         <div class="manager-detail">
            Age: <span>{{ manager.age }}</span>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      manager: Object,
      filterAgeValue: String,
   },
   computed: {
      address() {
         return (
            this.manager.address.suite +
            " " +
            this.manager.address.street +
            ", " +
            this.manager.address.zipcode +
            " " +
            this.manager.address.city +
            "."
         );
      },
      ageMax() {
         return this.filterAgeValue === "20andBelow"
            ? 20
            : this.filterAgeValue === "21to39"
            ? 39
            : Math.min(); //Infinity
      },
      ageMin() {
         return this.filterAgeValue === "21to39"
            ? 21
            : this.filterAgeValue === "40andAbove"
            ? 40
            : Math.max(); //-Infinity
      },
   },
};
</script>

<style scoped>
.manager-card {
   width: 29%;
   margin-bottom: 3rem;
   margin-right: 4.1%;
   background: white;
   box-shadow: 0px 0px 23px -12px rgba(0, 0, 0, 0.3);
   display: flex;
   flex-direction: row;
}

.manager-image {
   width: 85px;
   height: 85px;
   margin: 2.5rem 1.7rem 0 2rem;
   border-radius: 50%;
}

.manager-info {
   margin: 2.5rem 1.5rem 3.3rem 0;
}

.manager-name {
   font-size: 1.5rem;
   font-weight: 700;
   text-transform: uppercase;
   margin-bottom: 0.9rem;
}

.manager-detail span {
   font-weight: 600;
}

@media screen and (min-width: 4000px) {
   .manager-card {
      width: 20.7%;
   }
}

@media screen and (max-width: 1800px) {
   .manager-card {
      width: 45.6%;
   }
}

@media screen and (max-width: 1155px) {
   .manager-card {
      width: 95%;
   }
}

@media screen and (max-width: 500px) {
   .manager-card {
      flex-direction: column;
      min-width: fit-content;
   }

   .manager-info {
      margin-left: 2rem;
   }
}
</style>
