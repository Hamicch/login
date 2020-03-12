        new Vue({
                el: '#app', 
                data () {
                return {
                        fullName: "",
                        email: "",
                        phone: "",
                        displayFullname: "",
                        displayEmail: "",
                        displayPhone: ""
                }
        },
        methods: {
              submit () {
                      this.displayFullname = 'Full Name: ' + this.fullName
                      this.displayEmail ='Email Address: ' + this.email
                      this.displayPhone ='Phone Number: '  + this.phone
                      this.fullName = null
                      this.email = null
                      this.phone = null
              }
        }

});