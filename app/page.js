const design = [
  { icon: "🎬", title: "موشن دیزاین با افتر افکت", text: "ساخت موشن گرافیک، اینفوگرافیک متحرک، لوگو‌موشن و اینترو و تیزر. تسلط بر کیفریم‌ها، گراف ادیتور، اکسپرشن‌ها، شیپ لیرها و انیمیشن کاراکتر تا ویدیوها جان بگیرند و پیام برند به‌شکل جذاب منتقل شود.", tags: ["Motion Graphic", "Logo Animation", "Expressions", "Kinetic Type"] },
  { icon: "✂️", title: "ادیت فیلم با پریمیر پرو", text: "تدوین حرفه‌ای ویدیو شامل ریتم‌بندی و برش، همگام‌سازی صدا، رنگ‌بندی و اصلاح رنگ، افکت‌های صوتی و تصویری و خروجی مناسب هر پلتفرم؛ از ریلز و یوتیوب تا تبلیغات و کلیپ‌های سازمانی.", tags: ["Video Editing", "Color Grading", "Sound Design", "Reels & YouTube"] },
  { icon: "🖋️", title: "طراحی لوگو با ایلوستریتور", text: "طراحی لوگوی وکتوری، هویت بصری و ست اداری با تمرکز بر سادگی، خوانایی و ماندگاری. از ایده‌پردازی و اسکچ تا شبکه‌بندی، انتخاب رنگ و تایپوگرافی و تحویل فایل‌های آماده چاپ و وب.", tags: ["Vector Logo", "Brand Identity", "Typography", "Grid System"] },
  { icon: "🎨", title: "طراحی گرافیکی با فوتوشاپ", text: "ساخت پوستر، بنر، کاور، تصویرسازی دیجیتال و روتوش عکس. ترکیب‌بندی تصاویر، افکت‌های نوری و سایه، فتومنتاژ و طراحی محتوای شبکه‌های اجتماعی با جزئیات تمیز و کیفیت بالا.", tags: ["Poster & Banner", "Photo Manipulation", "Retouch", "Social Media"] },
];
const dev = [
  { icon: "🌿", title: "بک‌اند با جنگو", text: "طراحی و توسعه وب‌سایت و API با Django و Django REST Framework؛ مدل‌سازی دیتابیس و ORM، احراز هویت و سطح دسترسی، پنل ادمین، کش، تسک‌های پس‌زمینه با Celery و نوشتن کدی تمیز، امن و قابل‌گسترش.", tags: ["Django", "REST API", "PostgreSQL", "Celery", "Auth & JWT"] },
  { icon: "🐍", title: "پایتون", text: "برنامه‌نویسی پایتون برای وب، اتوماسیون و داده؛ نوشتن اسکریپت و ربات، کار با APIها، پردازش فایل و داده، وب‌اسکرپینگ و ساخت ابزارهای کاربردی با تمرکز بر خوانایی و تست‌پذیری.", tags: ["Automation", "Scraping", "Async", "Data Processing"] },
  { icon: "🐳", title: "داکر", text: "کانتینری‌سازی پروژه‌ها با Docker و Docker Compose برای ساخت محیط یکسان توسعه و استقرار. راه‌اندازی سرویس‌های Django، دیتابیس، Redis و Nginx و ساخت ایمیج‌های سبک و ایمن برای دیپلوی سریع.", tags: ["Docker", "Compose", "Nginx", "Deploy"] },
  { icon: "🔀", title: "گیت", text: "مدیریت نسخه و کار تیمی با Git و GitHub؛ برنچ‌بندی، مرج و ریبیس، حل کانفلیکت، پول‌ریکوئست و ریویوی کد، و آشنایی با CI/CD برای انتشار منظم و بدون دردسر پروژه‌ها.", tags: ["Git", "GitHub", "Pull Request", "CI/CD"] },
  { icon: "🧠", title: "مهندس هوش مصنوعی", text: "طراحی و پیاده‌سازی راهکارهای هوشمند: مدل‌های زبانی بزرگ (LLM)، مهندسی پرامپت، RAG و ایجنت‌ها، یادگیری ماشین (Machine Learning)، یادگیری عمیق (Deep Learning)، بینایی ماشین (Machine Vision) و پردازش زبان طبیعی، از آموزش مدل تا تبدیل آن به سرویس واقعی.", tags: ["LLM", "Machine Learning", "Deep Learning", "Machine Vision", "NLP", "RAG & Agents"] },
];

import Spot from "./Spot";

const roles = ["موشن دیزاینر", "طراح لوگو و هویت بصری", "توسعه‌دهنده جنگو", "مهندس هوش مصنوعی"];
const inner = ["Ae", "Pr", "Ai", "Ps"];
const outer = ["Dj", "Py", "Dk", "Git", "AI"];
const words = ["After Effects", "Premiere Pro", "Illustrator", "Photoshop", "Django", "Python", "Docker", "Git", "LLM", "Machine Learning", "Deep Learning", "Machine Vision"];

function Card({ item, cls = "" }) {
  return (
    <article className={"card " + cls}>
      <div className="icon">{item.icon}</div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
      <ul>{item.tags.map((t) => <li key={t} dir="ltr">{t}</li>)}</ul>
    </article>
  );
}

function Ring({ list, r, cls }) {
  return (
    <div className={"ring " + cls} style={{ "--r": r }}>
      {list.map((t, i) => (
        <div className="node" key={t} style={{ "--a": (360 / list.length) * i + "deg" }}>
          <span>{t}</span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const loop = [...words, ...words];
  return (
    <main>
      <div className="bg" />
      <div className="aurora" />
      <header className="hero">
        <div className="hero-text">
          <span className="badge"><i /> آماده همکاری روی پروژه‌های جدید</span>
          <h1>حسین<br />سیدزاده</h1>
          <div className="roles">{roles.map((r) => <span key={r}>{r}</span>)}</div>
          <p className="sub">طراحی و کد را کنار هم می‌گذارم تا ایده‌ها هم دیده شوند و هم کار کنند.</p>
          <div className="actions">
            <a className="btn primary" href="mailto:hosseinseyedzadeh93@gmail.com">ارسال ایمیل</a>
            <a className="btn" href="https://github.com/niessohdfgs" target="_blank" rel="noopener noreferrer">گیت‌هاب</a>
          </div>
        </div>
        <div className="orbit" aria-hidden="true">
          <Ring list={outer} r=".46" cls="rb" />
          <Ring list={inner} r=".27" cls="ra" />
          <div className="core"><b>HS</b></div>
        </div>
      </header>

      <div className="marq" aria-hidden="true">
        <div>{loop.map((w, i) => <span key={i}>{w}<em>✦</em></span>)}</div>
      </div>

      <section>
        <h2>ادیت و طراحی</h2>
        <p className="lead">ایده را به تصویر و حرکت تبدیل می‌کنم.</p>
        <Spot className="bento">{design.map((i) => <Card key={i.title} item={i} cls="s3" />)}</Spot>
      </section>

      <section>
        <h2>برنامه‌نویسی و هوش مصنوعی</h2>
        <p className="lead">محصول را از دیتابیس تا مدل هوشمند می‌سازم و منتشر می‌کنم.</p>
        <Spot className="bento">
          {dev.slice(0, 3).map((i) => <Card key={i.title} item={i} cls="s2" />)}
          <Card item={dev[3]} cls="s2" />
          <Card item={dev[4]} cls="s4 hot" />
        </Spot>
      </section>

      <footer>
        <h2>بیایید با هم کار کنیم</h2>
        <a className="mail" dir="ltr" href="mailto:hosseinseyedzadeh93@gmail.com">hosseinseyedzadeh93@gmail.com</a>
        <div className="actions">
          <a className="btn primary" href="mailto:hosseinseyedzadeh93@gmail.com">ارسال پیام</a>
          <a className="btn" dir="ltr" href="https://github.com/niessohdfgs" target="_blank" rel="noopener noreferrer">github.com/niessohdfgs</a>
        </div>
        <small>© حسین سیدزاده</small>
      </footer>
    </main>
  );
}
