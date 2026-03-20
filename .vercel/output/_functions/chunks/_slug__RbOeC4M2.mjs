import { c as createComponent } from './consts_Byw_xXZq.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_gk7PdndW.mjs';
import { g as getCollection, r as renderEntry, $ as $$Layout } from './_astro_content_D2io-mnJ.mjs';

const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const allWork = await getCollection("work");
  const entry = allWork.find((e) => e.id === slug);
  if (!entry) {
    return Astro2.redirect("/");
  }
  const { Content } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${entry.data.title} — Suneel Armstrong`, "description": entry.data.description, "data-astro-cid-by4zwojz": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="max-width: 64rem; margin: 0 auto; padding-left: 1.5rem; padding-right: 1.5rem; padding-top: 5rem; padding-bottom: 5rem;" data-astro-cid-by4zwojz> <!-- Back link --> <a href="/" style="font-family: 'Noto Sans', sans-serif; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C9503A; text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 3rem;" data-astro-cid-by4zwojz>
&larr; Back to work
</a> <!-- Category tag --> <div style="margin-bottom: 1rem;" data-astro-cid-by4zwojz> <span style="font-family: 'Noto Sans', sans-serif; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #C9503A; background-color: rgba(193, 123, 58, 0.1); padding: 0.25rem 0.75rem; border-radius: 2px;" data-astro-cid-by4zwojz> ${entry.data.category} </span> </div> <!-- Title --> <h1 style="font-family: 'Black Han Sans', sans-serif; font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 600; line-height: 1.05; color: #1C1A17; margin: 0 0 1.5rem 0;" data-astro-cid-by4zwojz> ${entry.data.title} </h1> <!-- Description --> <p style="font-family: 'Noto Sans', sans-serif; font-size: 1rem; color: rgba(28,26,23,0.65); margin: 0 0 3rem 0; line-height: 1.7; max-width: 42rem;" data-astro-cid-by4zwojz> ${entry.data.description} </p> <!-- Video embed placeholder --> <div style="width: 100%; aspect-ratio: 16/9; background-color: #1C1A17; display: flex; align-items: center; justify-content: center; margin-bottom: 4rem; border-radius: 2px;" data-astro-cid-by4zwojz> <p style="font-family: 'Noto Sans', sans-serif; font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(244, 241, 236, 0.4);" data-astro-cid-by4zwojz>
Video embed — Suneel to provide
</p> </div> <!-- Markdown content --> <div class="prose-content" data-astro-cid-by4zwojz> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-by4zwojz": true })} </div> </div> ` })}`;
}, "/Users/thesuneelvarma/one-more-dot/cdportfolio/src/pages/work/[slug].astro", void 0);

const $$file = "/Users/thesuneelvarma/one-more-dot/cdportfolio/src/pages/work/[slug].astro";
const $$url = "/work/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
