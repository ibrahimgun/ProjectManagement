<template>
     <v-container id="signinup-form" class="fill-height">

    <v-row align="center" justify="center" no-gutters>
      <v-col cols="12" sm="8" md="8" class="">
        <v-card class="evelation-12 card">
          <v-window>
            
            <v-window-item :value="1">
              <v-row class="">
                <v-col cols="12" md="8" class="pt-6 pb-6">
                  <v-card-text>
                    <v-form class="signup-form-form">
                      <h1
                        class="text-center display-1 mb-10"
                        :class="`${bgColor}--text`"
                      >
                        ÜYE GİRİŞİ
                      </h1>
                      <v-text-field
                       
                        v-model="email"
                        label="E-Posta Adresi"
                        
                        append-icon="mdi-email"
                        
                      />
                      <v-text-field
                        type="password"
                        v-model="password"
                        label="Şifre"
                        
                        append-icon="mdi-lock"
                        
                        :color="bgColor"
                      />
 
                      <div class="text-center mt-6">
                        <v-btn @click="login" type="submit" large :color="bgColor" dark
                          >OTURUM AÇ</v-btn
                        >
                      </div>
                    </v-form>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                  class=" vcenter"
                  :class="`${bgColor}`"
                >
                  <div>
                    <v-card-text :class="`${fgColor}--text`">
                      <h1 class="text-center headline mb-3"></h1>
                      <h5 class="text-center overline mb-3">
                                       <span class="font-weight-light">Proje</span>
                <span>YÖNETİM</span>
                      </h5>
                    </v-card-text>
                    <div class="text-center mb-6">
                      <v-btn dark outlined route :to="'/register'">ÜYE OL</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
           
            
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from 'firebase'


export default {
      name : 'login',
    data: function() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login: function(e) {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(
                this.$router.push('/')
            
            )
            e.preventDefault()
        }
    },
  
  
  props: {
    source: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: 'primary'
    },
    fgColor: {
      type: String,
      default: 'white'
    }
  },
  show1: false,
  
  
 
}
</script>

<style scoped lang="scss">
.v-input__icon--double .v-input__icon {
  margin-left: -4.25rem !important;
}
a.no-text-decoration {
  text-decoration: none;
}
#signinup-form {
  max-width: 75rem;
}
.signup-form-form {
  max-width: 23rem;
  margin: 0 auto;
}
.card {
  overflow: hidden;
}
.vcenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>