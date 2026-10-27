import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import CTA from '../components/CTA.jsx';
import { blogListingSeo } from '../data/pageSeo.js';
import { blogPosts, formatBlogDate } from '../data/blog.js';

export default function Blog() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      <Seo {...blogListingSeo} />

      <main className="px-4 pt-[8.5rem] pb-[2.5rem] md:px-6 md:pt-[8.5rem] md:pb-[3.5rem]">
        <section className="reveal mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.24em] text-goldSoft">Insights &amp; Guides</p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">Luxury Travel Blog</h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Practical advice on NYC airport transfers, corporate chauffeur service, events, and choosing a
            professional black car provider.
          </p>
        </section>

        <section className="reveal mx-auto mt-12 grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gold/20 bg-ink/80 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-gold/45"
            >
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={450}
                  className="h-52 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                  <span className="rounded-full border border-gold/25 px-2.5 py-0.5 font-medium text-goldSoft">
                    {post.category}
                  </span>
                  <span>{formatBlogDate(post.date)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-white md:text-2xl">
                  <Link to={`/blog/${post.slug}`} className="transition hover:text-goldSoft">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-5 inline-flex min-h-11 w-fit items-center rounded-full border border-gold/40 px-5 text-sm font-semibold text-white transition group-hover:bg-gold group-hover:text-charcoal"
                >
                  Read Article
                </Link>
              </div>
            </article>
          ))}
        </section>

        <CTA compact />
      </main>
    </>
  );
}
