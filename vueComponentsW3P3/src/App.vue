<!-------------------------------------------------------
  ---
#Original Author: Auri Rosenberger
#Date Created: 15, October 2021
#Version: 1
#Date Last Modified: 15, October 2021
#Modified by: Auri Rosenberger
#Modification log:
- 10/15/2021 - Got Vue.js working with CLI:
             + Search:
             + C:\Windows\System32\cmd.exe
             + Then continue on:
             + C:\WINDOWS\system32>node -v
             + C:\WINDOWS\system32>npm install -g vue-cli
             + C:\WINDOWS\system32>cd /Users/aurie/Real_Documents/SWDV-143-ClientSideFrameworks/vueComponentsW3P3
             + C:\Users\aurie\Real_Documents\SWDV-143-ClientSideFrameworks\vueComponentsW3P3>vue init webpack-simple vuejs-begin
             + ? Project name vuejs-begin
             + ? Project description A Vue.js project
             + ? Author Auri
             + ? License MIT
             + ? Use sass? No
             + C:\Users\aurie\Real_Documents\SWDV-143-ClientSideFrameworks\vueComponentsW3P3>cd vuejs-begin
             + C:\Users\aurie\Real_Documents\SWDV-143-ClientSideFrameworks\vueComponentsW3P3\vuejs-begin>npm install
             + C:\Users\aurie\Real_Documents\SWDV-143-ClientSideFrameworks\vueComponentsW3P3\vuejs-begin>npm run dev
             + 
             - Background map image: https://images.photowall.com/products/52423/old-vintage-world-map.jpg?h=699&q=85
             - Favicon(s) links added to index.html page: https://openclipart.org/image/2000px/211388
             - Information from Worldometer: https://www.worldometers.info/geography/how-many-countries-are-there-in-the-world/#:~:text=Countries%20in%20the%20World%3A&text=There%20are%20195%20countries%20in,and%20the%20State%20of%20Palestine.
             - Aid from: https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa
             - May need later: https://git-scm.com/
---
------------------------------------------------------->
<template>
<div>
  <app-section></app-section>
  <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
  <app-body v-bind:index="index"></app-body>
  <app-piece></app-piece>
  <app-footer v-bind:title="title"></app-footer>
</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Body from './components/Body.vue';
import Section from './components/Section.vue';
import Piece from './components/Piece.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-body': Body,
    'app-section': Section,
    'app-piece': Piece
  },
  data () {
    return {
      index: [
              {country: 'Bulgaria', capital: 'Sofia', show: false},
              {country: 'China', capital: 'Beijing', show: false},
              {country: 'Denmark', capital: 'Copenhagen', show: false},
              {country: 'Egypt', capital: 'Cairo', show: false},
              {country: 'Fiji', capital: 'Suva', show: false},
              {country: 'Germany', capital: 'Berlin', show: false},
              {country: 'Iceland', capital: 'Reykjavik', show: false},
              {country: 'Jamaica', capital: 'Kingston', show: false},
              {country: 'Peru', capital: 'Lima', show: false}
          ],
          title: 'Countries'
        }
    },
    methods: {
      updateTitle: function(updatedTitle){
        this.title = updatedTitle;
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
  background-image: url('./assets/vintageMap.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
