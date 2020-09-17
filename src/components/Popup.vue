<template>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{on}">
            <v-btn block text class="large success" v-on="on">
                Yeni Proje Ekle
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h2>Proje Ekleme Ekranı</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Başlık" v-model="title" prepend-icon="mdi-folder-outline" :rules="inputRules"></v-text-field>
                    <v-textarea label="İçerik" v-model="content" prepend-icon="mdi-pencil-outline" :rules="inputRules"></v-textarea>
                    <v-menu max-width="290">
                        <template v-slot:activator="{ on }">
                            <v-text-field  locale="tr" :value="formattedDate" label="Bitiş Tarihi" prepend-icon="mdi-calendar-range-outline" v-on="on" :rules="inputRules"></v-text-field>
                        </template>
                    <v-date-picker locale="tr" v-model="due"></v-date-picker>
                    </v-menu>
                    <v-btn depressed class="success mx-0 mt-3" @click="submit" :loading="loading">PROJEYİ EKLE</v-btn>
                </v-form>
                
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import db from '@/fb'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import firebase from 'firebase'

export default {
     data() {
    return {
      title: '',
      content: '',
      due: null,
      inputRules: [
          v =>  v && v.length >= 3 || 'Minimum uzunluk 3 karakterdir'

      ],
      loading: false,
      dialog: false,
      currentUser: false
    }
  },
      created() {
        if (firebase.auth().currentUser) {
            this.isLoggendIn = true
            this.currentUser = firebase.auth().currentUser.email
        }

    },
  methods: {
      submit() {
          if(this.$refs.form.validate()){
              this.loading = true
              const project = {
                  title : this.title,
                  content: this.content,
                  due: format(parseISO(this.due), "dd/MM/yyyy"),
                  person: 'İbrahim Gün',
                  status: 'sürüyor'
              }
              db.collection('projects').add(project).then(() => {
                  this.loading = false,
                  this.dialog = false,
                  this.$emit('projectAdded')
                  
              })
          }
          
      }
  },

computed: {
     formattedDate() {
    return this.due ? format(parseISO(this.due), 'dd/MM/yyyy') : ''
}
    
}
}
</script>