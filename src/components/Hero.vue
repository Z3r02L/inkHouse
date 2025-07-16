<template>
<section class="hero">
  <div class="container">
    <div class="row-wrapper">
      <img src="/bird.png" alt="bird">
      <div class="hero-content">
        <h1>Реплики картин от <span>Ink. House</span></h1>
        <p>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
        <button href="#" class="hero-btn">Продукция</button>
      </div>
    </div>
    </div>
</section>
</template>

<style scoped lang="scss">
.hero {
    max-height: 620px;
}

.hero-content {
  display: flex;
  flex-direction: column;
  margin-top: 145px;
  margin-left: 30px;
  max-width: 540px;
  max-height: 331px;
  text-align: left;
  color: var(--color-dark-grey);
}

.hero-content span {
  color: var(--color-green-primary);
}

.hero h1 {
  max-width: 490px;
  font-size: 60px;
  line-height: 1.1em;
  color: var(--color-dark-grey);
}

.hero p {
  margin-top: 20px;
  font-size: 18px;
  line-height: 1.5em;
  color: var(--color-gray-text);
}

.hero-btn {
  margin-top: 60px;
  border: 1px solid var(--color-green-primary);
  padding: 20px 60px;
  width: 227px;
  height: 65px;
  font-size: 20px;
  color: var(--color-green-primary);
  cursor: pointer;
}

.hero-btn:hover {
  background: var(--color-green-primary);
  color: white;
}
</style>