<template>

 <div class="team">
   <Navbar />
   <h1 class="subtitle-1 grey--text  mx-4 mb-4">Takım</h1>

   <v-container class="my-5">
     
     <v-row>
  <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
    <v-card class="text-center ma-3">
      <v-responsive class="pt-4">
        


        <v-avatar size="100" class="grey lighten-2">
          <img :src="person.avatar">
        </v-avatar>





      </v-responsive>
      <v-card-text>
        <div class=" text-subtitle-1 ">{{person.name}}</div>
        <div class="grey--text">{{person.role}}</div>
      </v-card-text>
      <v-card-action>
        <v-btn left text color="grey">
          <v-icon small left> mdi-message </v-icon>
          <span>E-Posta Gönder</span>
        </v-btn>
      </v-card-action>
    </v-card>
  </v-col>
</v-row>





   </v-container>


 



 </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: { Navbar },
  data(){
    return {
      team: [
        { name: 'İbrahim Gün', role: 'Web developer', avatar: '/avatar-1.jpg' },
        { name: 'Tunahan Akbaba', role: 'Backend Developer', avatar: '/avatar-2.jpg' },
        { name: 'Mark Zuckberg', role: 'Web developer', avatar: '/avatar-3.jpg' },
        { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.jpg' }
      ]
    }
  }

}
</script>
