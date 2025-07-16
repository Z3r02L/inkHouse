<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <!-- Логотип -->
        <div class="logo">
          <img
            src="/star.svg"
            alt="Logo"
            class="logo-icon"
          />
          <span class="logo-text">Ink. House</span>
        </div>

        <!-- Навигация -->
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item"><a href="#" class="nav-link">Репродукции</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Новинки</a></li>
            <li class="nav-item"><a href="#" class="nav-link">О нас</a></li>
            <li class="nav-item">
              <img
                src="/cart.svg"
                alt="Cart"
                class="cart-icon"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: var(--color-bg-light-green);
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-icon {
  width: 24px;
}

.logo-text {
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
}

.nav {
  display: flex;
  justify-content: start;
}

.nav-list {
  width: 470px;
  display: flex;
  justify-content: space-between;
  list-style: none;
}

.nav-link {
  color: #333;
  text-decoration: none;
}

.nav-link:hover {
  color: var(--color-green-secondary);
}

.cart-icon {
  width: 24px;
  cursor: pointer;
}
</style>