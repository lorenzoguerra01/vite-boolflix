import {reactive} from 'vue';

export const store = reactive({
    apiUrl: '',
    endPoint: {
      },
      options: {
          params: {
          }
      },
      // cards: [],
      isLoading: false,
      error:{
        message: null
      }
});