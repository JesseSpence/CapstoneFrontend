<template>
    <div v-show="visibleSlide === index" class="Carousel-slde">
        <slot></slot>
    </div>
    </template>
    
    <script>
    export default {
        props: ['visibleSlide', 'index'],
        data() {
            return {
            
        }
    }
    }
    </script>
    
    <style>
    
    </style>