<template>
  <ClientOnly>
    <div class="home-container">
      <section class="hero-section">
        <div class="hero-content">
          <img
            src="/logo.png"
            alt="logo"
            class="logo animate__animated animate__pulse animate__infinite"
          />
          <h1 class="gradient-text">CSC-NOTES</h1>
          <p class="tagline">用代码丈量世界，用文字记录成长</p>
          <button
            class="action-button"
            @click="$router.push('/notes/web/javascript/')"
          >
            开始阅读 →
          </button>
        </div>
      </section>

      <!-- 数据看板 -->
      <section class="stats-section">
        <div class="stats-grid">
          <div v-for="(stat, index) in stats" :key="index" class="stat-item">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </section>

      <!-- 近期更新 -->
      <section class="updates-section">
        <h2 class="section-title">🎯 近期更新</h2>
        <div class="update-grid">
          <a
            v-for="(update, index) in updates"
            :key="index"
            :href="update.link"
            class="update-card"
          >
            <span class="update-badge">NEW</span>
            <span class="update-text">{{ update.text }}</span>
          </a>
        </div>
      </section>

      <!-- 核心特性 -->
      <section class="features-section">
        <div class="feature-grid">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-card"
          >
            <div class="card-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.details }}</p>
          </div>
        </div>
      </section>

      <!-- 技术生态 -->
      <section class="tech-section">
        <h2 class="section-title">🛠 技术栈</h2>
        <div class="tech-grid">
          <div
            v-for="(tech, index) in techStack"
            :key="index"
            class="tech-card"
          >
            <div class="tech-icon-container">
              <img :src="tech.icon" alt="" class="tech-icon" />
              <span class="tech-name">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 页脚 -->
      <footer class="site-footer">
        <div class="footer-content">
          <div class="footer-col">
            <h4>开源协议</h4>
            <p>MIT Licensed</p>
            <p>基于 VuePress 构建</p>
          </div>
          <div class="footer-col">
            <h4>联系作者</h4>
            <p>📧 chenshicong666@qq.com</p>
            <div class="social-links">
              <a
                v-for="(link, index) in socialLinks"
                :key="index"
                :href="link.url"
                target="_blank"
                rel="noopener"
              >
                <img
                  :src="link.icon"
                  alt="github"
                  :title="link.title"
                  style="width: 32px; height: 32px"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="copyright">
          Copyright © 2025 CSC | 用代码丈量世界，用文字记录成长
        </div>
      </footer>
    </div>
  </ClientOnly>
</template>

<script setup>
const features = [
  {
    title: "前沿技术",
    details:
      "涵盖JavaScript、TypeScript、Node.js等最新技术实践，每周更新原创教程",
    icon: "🚀",
  },
  {
    title: "全栈式开发",
    details: "从系统架构到部署运维，掌握高效可扩展的全栈解决方案",
    icon: "⚙️",
  },
  {
    title: "开源生态",
    details: "持续输出工程化解决方案，共建开发者生态",
    icon: "🌐",
  },
];

const updates = [
  { text: "CommonJS规范", link: "/csc-notes/notes/server/nodejs/CommonJS规范" },
  { text: "css和文档", link: "/csc-notes/notes/web/css/css和文档" },
  { text: "Node的模块实现", link: "/csc-notes/notes/server/nodejs/Node的模块实现" },
];

const techStack = [
  { icon: "/csc-notes/javascript.png", name: "JavaScript" },
  { icon: "/csc-notes/ts.png", name: "TypeScript" },
  { icon: "/csc-notes/css.png", name: "CSS" },
  { icon: "/csc-notes/nodejs.png", name: "Node.js" },
];

const stats = [
  { value: 6, label: "技术文章" },
  { value: 1, label: "开源项目" },
  { value: 2, label: "技术专栏" },
];

const socialLinks = [
  {
    icon: "/csc-notes/github.png",
    url: "https://github.com/csc666888",
    title: '我的GitHub主页',
  },
  {
    icon: "/csc-notes/csdn.png",
    url: "https://blog.csdn.net/linzhangmeidi",
    title: '我的CSDN主页',
  },
];
</script>

<style scoped>
.home-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem;
}

.hero-section {
  text-align: center;
  padding: 4rem 0 2rem;
  position: relative;
}

.logo {
  width: 120px;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 15px rgba(66, 211, 146, 0.3));
  animation-duration: 2.5s;
}

.gradient-text {
  background: linear-gradient(135deg, #42d392 20%, #647eff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 3rem;
  margin: 0.8rem 0;
  line-height: 1.2;
}

.tagline {
  font-size: 1.3rem;
  color: var(--c-text-light);
  margin-bottom: 2rem;
}

.action-button {
  background: linear-gradient(45deg, #42d392, #647eff);
  border: none;
  padding: 0.9rem 2rem;
  border-radius: 30px;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.action-button:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 8px 20px rgba(66, 211, 146, 0.3);
}

/* 近期更新 */
.updates-section {
  padding: 2rem 0;
}

.section-title {
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--c-border);
  color: var(--c-text);
}

.update-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.2rem;
}

.update-card {
  background: var(--c-bg-accent);
  padding: 1.2rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s;
  border: 1px solid var(--c-border);
  position: relative;
}

.update-card:hover {
  transform: translateY(-3px);
}

.update-badge {
  background: #647eff;
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
}

.update-date {
  color: var(--c-text-light);
  font-size: 0.85rem;
  margin-left: auto;
}

/* 特性网格 */
.features-section {
  padding: 3rem 0;
}

.feature-grid {
  display: flex;
  justify-content: space-around;
  width: 800px;
}

.feature-card {
  padding: 1.5rem;
  min-height: 225px; /* 统一卡片高度 */
  width: 200px;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.card-icon {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  display: inline-block;
  transition: transform 0.3s ease;
}

.feature-card:hover .card-icon {
  transform: scale(1.15) rotate(15deg);
}

/* 技术栈 */
.tech-section {
  padding: 3rem 0;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.tech-card {
  background: var(--c-bg-accent);
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid var(--c-border);
}

.tech-card:hover {
  transform: translateY(-3px);
}

.tech-icon {
  font-size: 1.8rem;
  display: block;
  margin-bottom: 0.5rem;
}

.tech-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.tech-name {
  background: #647eff;
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* 数据看板 */
.stats-section {
  padding: 3rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.stat-item {
  background: var(--c-bg-accent);
  padding: 1.5rem;
  border-radius: 16px;
  text-align: center;
  border: 1px solid var(--c-border);
}

.stat-value {
  font-size: 1.8rem;
  font-weight: bold;
  background: linear-gradient(45deg, #42d392, #647eff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.2;
}

.stat-label {
  color: var(--c-text-light);
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

/* 页脚 */
.site-footer {
  margin-top: 4rem;
  padding: 3rem 0 2rem;
  background: var(--c-bg-accent);
  border-top: 1px solid var(--c-border);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-col {
  height: 162px;
}

.footer-col h4 {
  color: var(--c-brand);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.footer-link {
  display: block;
  margin: 0.5rem 0;
  color: var(--c-text-light);
  transition: color 0.2s;
}

.footer-link:hover {
  color: var(--c-brand);
}

.social-links {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

.social-links a {
  font-size: 1.4rem;
  transition: transform 0.3s ease;
}

.social-links a:hover {
  transform: translateY(-2px);
}

.copyright {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--c-border);
  color: var(--c-text-light);
  font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .home-container {
    padding: 0 1rem;
  }

  .gradient-text {
    font-size: 2.2rem;
  }

  .tagline {
    font-size: 1.1rem;
  }

  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .update-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .update-date {
    margin-left: 0;
  }
}

@media (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    min-height: auto;
  }
  .hero-section {
    padding: 2rem 0;
  }

  .logo {
    width: 80px;
  }

  .action-button {
    width: 100%;
  }
}
</style>
