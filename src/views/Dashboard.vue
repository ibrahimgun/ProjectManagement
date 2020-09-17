<template>

 <div class="dashboard">
   <Navbar />
   <h1 class="subtitle-1 grey--text  mx-4 mb-4">Kontrol Paneli</h1>
   

  <v-container class="my-12">
    

    <v-row  class="mb-3">
      <v-tooltip small top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn small depressed class="grey--text" @click="sortBy('title')" v-bind="attrs" v-on="on">
            <v-icon left small>mdi-folder</v-icon>
            <span class="caption text-lowercase">Proje Adı</span>
         </v-btn>
        </template>
          <span>Proje Adına Göre Sırala</span>
    </v-tooltip>


    <v-tooltip small top>
        <template v-slot:activator="{ on, attrs }">
      <v-btn small depressed class="grey--text"  @click="sortBy('person')" v-bind="attrs" v-on="on">
        <v-icon left small>mdi-account</v-icon>
        <span class="caption text-lowercase">Kişi</span>
      </v-btn>
      </template>
      <span>Kişiye Göre Sırala</span>
    </v-tooltip>

    </v-row >


   <v-card flat class="px-3" v-for="project in projects" :key="project.title">
   <v-row :class="`pl-3 project ${project.status}`">
     <v-col cols="12" md="6">
       <div class="caption grey--text">Proje Başlığı</div>
       <div>{{ project.title }}</div>
       </v-col>
       <v-col xs="2">
         <div class="caption grey--text">Kişi</div>
       <div>{{ project.person }}</div>
       </v-col>
          <v-col xs="2">
         <div class="caption grey--text">Bitiş Tarihi</div>
       <div>{{ project.due }}</div>
       </v-col>
        <v-col xs="2">
          <div>
           <v-chip small :color="`${project.status}`" 
                        :class="`v-chip--active white--text caption my-2`">
                          {{ project.status }}
                        </v-chip>
          </div>
       </v-col>
  </v-row>
  <v-divider></v-divider>
</v-card>
 </v-container>



 </div>
</template>

<script>
import db from '@/fb'
import Navbar from '@/components/Navbar'

export default {
   components: { Navbar },
  data() {
    return {
      projects: []
    }
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }

}
</script>

<style>

  .v-chip.tamamlandı {
    background: #3cd1c3;
  }
  .v-chip.sürüyor {
    background: orange;
  }
  .v-chip.zaman-aşımı {
    background: #f83e70;
  }
</style>