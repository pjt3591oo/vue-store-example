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
  

  export default {
    computed: {
      ...mapState({
        id: state => state.moduleName.id
      }),
      ...mapGetters('moduleName', {
        getId: 'get_id'
      })
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
