const app = new Vue({

  el: '#app',
  data:{
    images: ['img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'],

    title:['Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'],

    text:[
    'Lorem ipsum, dolor sit amet consectetur adipisicingelit. Et temporibus voluptatum suscipit temporealiquid deleniti aut veniam inventore eligendi ex adullam, cumque provident totam omnis, magnam doloresdolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicingelit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicingelit. Et temporibus voluptatum suscipit temporealiquid deleniti aut veniam inventore eligendi ex adullam,',
    'Et temporibus voluptatum suscipit tempore aliquiddeleniti aut veniam inventore eligendi ex ad ullam,'
    ],

    counter:0
  },
  mounted(){
    setInterval(() => {
      this.nextSlide();
    }, 3000)
  },
  methods:{
    nextSlide(){
      this.counter++;
      if(this.counter > this.images.length - 1){
        this.counter = 0;
      }
    },

    prevSlide(){
      this.counter--;
      if(this.counter < 0){
        this.counter = this.images.length - 1;
      }
    }
  }
});


