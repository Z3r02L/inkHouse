<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="image" alt="Product Image" />
    </div>
    <div class="product-details">
      <p class="product-author">{{ author }}</p>
      <p class="product-title">{{ title }}</p>
      <p class="product-category">{{ tech }}</p>
      <p class="product-price">{{ price }} руб</p>
      <button class="add-to-cart-btn">В корзину</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductCard',
  props: {
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tech: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.product-card {
  max-width: 350px;
  max-height: 730px;
  background-color: var(--color-bg-light-green);
  padding: 20px;
}

.product-image {
  width: 310px;
  height: 422px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-author {
  font-size: 18px;
  color: var(--color-gray-text);
  margin-top: 20px;
}

.product-title {
  margin-top: 10px;
  font-size: 30px;
  color: var(--color-dark-grey);
  margin-bottom: 10px;
}

.product-category {
  margin-top: 8px;
  font-size: 18px;
  color: var(--color-dark-grey);
}

.product-price {
  margin-top: 30px;
  font-size: 24px;
  color: var(--color-green-primary);
  margin-bottom: 20px;
}

.add-to-cart-btn {
  margin-top: 20px;
  width: 310px;
  height: 65px;
  border: 1px solid var(--color-green-primary);
  color: var(--color-green-primary);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.add-to-cart-btn:hover {
  background-color: var(--color-green-primary);
  color: white;
}
</style>