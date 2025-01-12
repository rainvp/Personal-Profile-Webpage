// Gallery App
const app = Vue.createApp({
  data() {
    return {
      images: [
        { id: 1, src: 'https://github.com/rainvp/Personal-Profile-Webpage/blob/main/images/460961978_967543388415623_4541161538742405339_n.jpg?raw=true' },
        { id: 2, src: 'https://github.com/rainvp/Personal-Profile-Webpage/blob/main/images/472789858_1157284476015373_4532978188250656890_n.jpg?raw=true' },
        { id: 3, src: 'https://github.com/rainvp/Personal-Profile-Webpage/blob/main/images/472478541_1393676961599516_8296656406198264170_n.jpg?raw=true' },
        { id: 4, src: 'https://github.com/rainvp/Personal-Profile-Webpage/blob/main/images/363829702_970044974249532_9015369949003698015_n.jpg?raw=true' },
        { id: 5, src: 'https://raw.githubusercontent.com/rainvp/Personal-Profile-Webpage/refs/heads/main/images/4ebab79f-86d0-41ab-b557-e37c20843d4b.jfif' },
        { id: 6, src: 'https://github.com/rainvp/Personal-Profile-Webpage/blob/main/images/472699294_466149492989920_1496860658682248426_n.jpg?raw=true' },
        { id: 7, src: 'https://github.com/rainvp/Personal-Profile-Webpage/blob/main/images/8DD1B940-891E-44AA-BFCC-A3BE20992CDB.jpg?raw=true' },
        { id: 8, src: 'https://github.com/rainvp/Personal-Profile-Webpage/blob/main/images/af29de30-95ab-420c-90d6-6d6e91d783d3.jpg?raw=true' },
        { id: 9, src: 'https://github.com/rainvp/Personal-Profile-Webpage/blob/main/images/IMG_3543%20(2).JPG?raw=true' },
      ],
      captions: [
        'Slide 1: Welcome to the gallery!',
        'Slide 2: Highlights of the journey.',
        'Slide 3: Moments captured in time.',
      ],
      currentIndex: 0,
      itemsPerSlide: 3,
    };
  },
  computed: {
    currentImages() {
      const start = this.currentIndex * this.itemsPerSlide;
      return this.images.slice(start, start + this.itemsPerSlide);
    },
    currentCaption() {
      return this.captions[this.currentIndex] || '';
    },
  },
  methods: {
    prevSlide() {
      if (this.currentIndex === 0) {
        this.currentIndex = Math.floor(this.images.length / this.itemsPerSlide) - 1;
      } else {
        this.currentIndex--;
      }
    },
    nextSlide() {
      if ((this.currentIndex + 1) * this.itemsPerSlide >= this.images.length) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
  },
});

app.mount('#app');
