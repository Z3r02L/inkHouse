<template>
  <div class="promo">
    <div class="container">
    <div class="column-wrapper">
      <div class="title-section">
        <img src="/star2.svg" alt="Star icon" class="star-icon" />
        <h1 class="title">Новая коллекция французских авторов</h1>
      </div>
      <p class="description">
        Сложно сказать, почему акционеры крупнейших компаний призывают нас к
        новым свершениям, которые, в свою очередь, должны быть заблокированы в
        рамках своих собственных рациональных ограничений. <br><br> Принимая во внимание
        показатели успешности, граница обучения кадров предопределяет высокую
        востребованность направлений прогрессивного развития.
      </p>
      <button class="promo-btn">Ознакомиться</button>
    </div>
  </div>
  </div>
</template>

<style scoped lang="scss">
.promo {
  margin-top: 128px;
  background: url('/pic_background.jpg') center / cover no-repeat;
  padding: 70px 0;
}

.title-section {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.star-icon {
  width: 80px;
  padding: 10px;
  box-sizing: border-box;
}

.title {
  font-size: 40px;
  color: #F4F6F5;
  width: 421px;
}

.description {
  font-size: 18px;
  line-height: 1.5em;
  color: white;
  width: 540px;
  height: 209px;
  margin-top: 0;
  margin-bottom: 40px;
}

.promo-btn {
  background-color: #EEDB6D;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 60px;
  height: 65px;
  font-size: 20px;
  color: var(--color-dark-grey);
  border: none;
  cursor: pointer;
}
</style>