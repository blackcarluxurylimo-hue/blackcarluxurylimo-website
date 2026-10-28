import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import CTA from '../components/CTA.jsx';
import NotFound from './NotFound.jsx';
import { getBlogPostSeo } from '../data/pageSeo.js';
import { formatBlogDate, getPostBySlug } from '../data/blog.js';

function BlogLink({ href, children }) {
  const className =
    'font-medium text-goldSoft underline decoration-gold/40 underline-offset-2 transition hover:text-gold';

  let internalTo = null;
  if (href.startsWith('/') && !href.startsWith('//')) {
    internalTo = href;
  } else {
    try {
      const url = new URL(href);
      if (url.hostname.replace(/^www\./, '') === 'blackcarluxurylimo.com') {
        internalTo = url.pathname || '/';
      }
    } catch {
      internalTo = null;
    }
  }

  if (internalTo) {
    return (
      <Link to={internalTo} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function InlineContent({ parts }) {
  return parts.map((part, index) => {
    if (part.type === 'link') {
      return (
        <BlogLink key={index} href={part.href}>
          {part.text}
        </BlogLink>
      );
    }
    return <span key={index}>{part.value}</span>;
  });
}

function ArticleBody({ blocks }) {
  return (
    <div className="space-y-5 text-base leading-relaxed text-white/80">
      {blocks.map((block, index) => {
        if (block.type === 'h2') {
          return (
            <h2 key={index} className="pt-2 text-2xl font-bold text-white">
              {block.text}
            </h2>
          );
        }
        if (block.type === 'h3') {
          return (
            <h3 key={index} className="pt-3 text-lg font-semibold text-goldSoft">
              {block.text}
            </h3>
          );
        }
        if (block.type === 'ul') {
          return (
            <ul key={index} className="list-disc space-y-2 pl-5 marker:text-gold">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.parts) {
          return (
            <p key={index}>
              <InlineContent parts={block.parts} />
            </p>
          );
        }
        return <p key={index}>{block.text}</p>;
      })}
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      <Seo {...getBlogPostSeo(post)} />

      <main className="px-4 pt-[8.5rem] pb-[2.5rem] md:px-6 md:pt-[8.5rem] md:pb-[3.5rem]">
        <article className="reveal mx-auto w-full max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex min-h-11 items-center text-sm font-medium text-goldSoft transition hover:text-gold"
          >
            ← Back to Blog
          </Link>

          <header className="mt-6">
            <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
              <span className="rounded-full border border-gold/25 px-2.5 py-0.5 font-medium text-goldSoft">
                {post.category}
              </span>
              <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">{post.title}</h1>
            <p className="mt-4 text-lg text-white/75">{post.excerpt}</p>
          </header>

          <div className="mt-8 overflow-hidden rounded-2xl border border-gold/20">
            <img
              src={post.image}
              alt={post.title}
              width={1200}
              height={675}
              className="w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="mt-10">
            <ArticleBody blocks={post.blocks} />
          </div>
        </article>

        <div className="reveal mx-auto mt-14 w-full max-w-3xl">
          <CTA compact />
        </div>
      </main>
    </>
  );
}
