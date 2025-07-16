<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-contact">
          <div class="logo">
            <img src="/star.svg" alt="Logo" class="logo-icon" />
            <span class="logo-text">Ink. House</span>
          </div>
          <div class="contact-info">
            <div class="tel">+7 (999) 543-54-54</div>
            <p>Мастерская</p>
          </div>
        </div>

        <div class="footer-nav">
          <div class="nav-column">
            <h3>Репродукции</h3>
            <ul>
              <li><a href="#">Франция</a></li>
              <li><a href="#">Германия</a></li>
              <li><a href="#">Англия</a></li>
            </ul>
          </div>
          <div class="nav-column">
            <h3>Новинки</h3>
            <ul>
              <li><a href="#">2021</a></li>
              <li><a href="#">2020</a></li>
            </ul>
          </div>
          <div class="nav-column">
            <h3>О нас</h3>
            <ul>
              <li><a href="#">Художники</a></li>
              <li><a href="#">Менеджеры</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-social">
          <div class="social-icons">
            <a href="#"><img src="/facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/instagram.svg" alt="Instagram" /></a>
            <a href="#"><img src="/youtube.svg" alt="YouTube" /></a>
          </div>
          <p class="copyright">Ink. House ®</p>
          <p class="copyright">All rights reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  margin-top: 70px;
  padding-top: 23px;
  height: 168px;
  background-color: var(--color-bg-light-green);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.footer-contact {
  .logo {
    display: flex;
    align-items: center;

    .logo-icon {
      width: 24px;
    }
    .logo-text {
      margin-left: 10px;
      font-weight: 700;
      font-size: 20px;
      line-height: 1.1739999771118164em;
      color: var(--color-green-primary);
    }
  }

  .contact-info {
    margin-top: 35px;
    .tel {
      font-size: 20px;
      line-height: 1.1739999771118164em;
      color: var(--color-dark-grey);
      margin-bottom: 8px;
    }

    p {
      font-size: 18px;
      line-height: 1.173999998304579em;
      color: var(--color-gray-text);
      opacity: 1;
    }
  }
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  .nav-column {
    h3 {
      font-size: 20px;
      line-height: 1.1739999771118164em;
      color: var(--color-dark-grey);
      margin-bottom: 6px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 10px;

        a {
          text-decoration: none;
          font-size: 18px;
          line-height: 1.5em;
          color: var(--color-gray-text);
          opacity: 1;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}

.footer-social {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .social-icons {
    display: flex;
    gap: 20px;

    img {
      width: 24px;
      height: 24px;
    }
  }

  .copyright {
    margin-top: 10px;
    font-size: 12px;
    line-height: 1.2000000476837158em;
    color: var(--color-gray-text);
    opacity: 1;
  }
}
</style>