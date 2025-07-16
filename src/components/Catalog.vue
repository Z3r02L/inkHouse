<script setup lang="ts">
import { ref } from 'vue';
import ProductCard from './ProductCard.vue';
import { products } from '../data/products-data';

const activeFilter = ref('franc'); // Текущий фильтр
</script>

<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog__title">
        <h2>Репродукции</h2>
        <div class="catalog__filter">
          <button :class="{ active: activeFilter === 'franc' }" @click="activeFilter = 'franc'">Франция</button>
          <button :class="{ active: activeFilter === 'germany' }" @click="activeFilter = 'germany'">Германия</button>
          <button :class="{ active: activeFilter === 'erland' }" @click="activeFilter = 'erland'">Англия</button>
        </div>
      </div>
      <div class="catalog__items">
        <ProductCard
          v-for="product in products.filter(i => i.filter === activeFilter)"
          :key="product.id"
          :filter="product.filter"
          :image="product.image"
          :author="product.author"
          :title="product.title"
          :tech="product.tech"
          :price="product.price"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.catalog {
    margin-top: 70px;
}

.catalog__title {
    display: flex;
    font-size: 40px;
    justify-content: space-between;
    align-items: center;
}

.catalog__filter button {
    background: none;
    border: 1px solid var(--color-green-primary);
    border-radius: 20px;
    padding: 10px 20px;
    margin-left: 20px;
    color: var(--color-green-primary);
    font-size: 20px;
    cursor: pointer;
}

.catalog__filter button:hover,
.catalog__filter button.active {
    background-color: var(--color-green-primary);
    color: white;
}

.catalog__items {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    gap: 15px;
}
</style>