<template>
  <div class="product-detail">
    <div class="container">
      <button @click="$router.back()" class="button-green">Назад</button>

      <div class="product-detail__content" v-if="product">
        <div class="product-detail__image">
          <img :src="`/src/assets/${product.image}`" :alt="product.title" />
        </div>

        <div class="product-detail__info">
          <h1 class="product-detail__title">{{ product.title }}</h1>
          <p class="product-detail__author">{{ product.author }}</p>
          <p class="product-detail__tech">{{ product.tech }}</p>

          <div class="product-detail__price">
            <span class="price">{{ product.price }} руб</span>
          </div>

          <button class="button-green">В корзину</button>

          <div class="product-detail__description">
            <h3>Описание</h3>
            <p>{{ product.description || 'супер-мега картина' }}</p>
          </div>
        </div>
      </div>

      <div v-else>
        <p>Товар не найден</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { products } from '../data/products-data';

  const route = useRoute();
  const productId = computed(() => Number(route.params.id));

  const product = computed(() => {
    return products.find((p) => p.id === productId.value);
  });
</script>

<style scoped>
  .product-detail {
    padding: 40px 0;
  }

  .product-detail__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: start;
  }

  .product-detail__image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .product-detail__title {
    font-size: 32px;
    margin-bottom: 10px;
  }

  .product-detail__author {
    font-size: 20px;
    color: #666;
    margin-bottom: 10px;
  }

  .product-detail__tech {
    font-size: 16px;
    color: #888;
    margin-bottom: 20px;
  }

  .product-detail__price {
    margin: 20px 0;
  }

  .price {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }

  .btn {
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }

  .product-detail__description {
    margin-top: 30px;
  }

  .product-detail__description h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    .product-detail__content {
      grid-template-columns: 1fr;
    }
  }
</style>
