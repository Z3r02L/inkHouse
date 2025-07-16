<template>
  <section class="team">
    <div class="container">
    <div class="team-content">
      <div class="team-image-container">
        <img src="/images/team/Group.png" alt="Frame" class="team-frame-image" />
      </div>
      <div class="team-text-content">
        <h2 class="team-title">Наша команда</h2>
        <p class="team-description">
          Значимость этих проблем настолько очевидна, что базовый вектор
          развития позволяет оценить значение экспериментов, поражающих
          по своей масштабности и грандиозности. Мы вынуждены отталкиваться
          от того, что консультация с широким активом.
        </p>
        <div class="team-members">
          <img src="/images/team/Ellipse 30.png" alt="Team 1" class="team-member-avatar" />
          <img src="/images/team/Ellipse 31.png" alt="Team 2" class="team-member-avatar" />
          <img src="/images/team/Ellipse 32.png" alt="Team 3" class="team-member-avatar" />
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.team {
  margin-top: 12px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.team-content {
  display: flex;
  align-items: center;
  max-width: 1110px;
  width: 100%;
}

.team-image-container {
  position: relative;
  width: 445px;
  height: 440px;
  flex-shrink: 0;
}

.team-hand-image {
  position: absolute;
  top: 0;
  left: 48px;
  width: 269px;
  height: 397px;
  object-fit: contain;
}

.team-text-content {
  margin-top: 128px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  max-width: 635px;
}

.team-title {
  font-size: 40px;
  line-height: 1.1em;
  color: var(--color-dark-grey);
}

.team-description {
  margin-top: 20px;
  font-size: 18px;
  line-height: 1.5em;
  color: black;
}

.team-members {
  margin-top: 20px;
  display: flex;
  gap: 30px;
  margin-top: 20px;
}

.team-member-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #c4c4c4;
}
</style>