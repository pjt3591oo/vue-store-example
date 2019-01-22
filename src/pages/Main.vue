<template>
    <div>
        <div>

            <div>
              <h2>{{getId}}</h2>
              <h2>{{id}}</h2>
              <button @click="update_id(new Date().getTime())">update</button>
            </div>
            <div>
              <MainLinks essential="test" ecosystem="mung"></MainLinks>
            </div>
            
        </div>
    </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  import MainLinks from '../components/MainLinks'
  import testMixin from '../mixin/test.js'

  export default {
    computed: {
      ...mapState({
        id: state => state.moduleName.id
      }),
      ...mapGetters('moduleName', {
        getId: 'get_id'
      })
    },

    mixins: [testMixin],

    created() {
      console.log(this.d1)
      console.log(this.d2)
      this.helloworld()
    },

    components: {
      MainLinks
    },

    methods: {
      ...mapActions( 'moduleName',[
        'update_id'
      ])
    },
    

    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
