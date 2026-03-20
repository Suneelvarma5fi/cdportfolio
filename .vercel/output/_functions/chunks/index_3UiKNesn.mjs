import { c as createComponent } from './consts_Byw_xXZq.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_gk7PdndW.mjs';
import { g as getCollection, $ as $$Layout } from './_astro_content_D2io-mnJ.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allWork = await getCollection("work");
  const projects = allWork.sort((a, b) => a.data.order - b.data.order);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Work — Suneel Armstrong", "data-astro-cid-57l5znwr": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page" data-astro-cid-57l5znwr> <a href="/" class="back-link" data-astro-cid-57l5znwr>&larr; Back</a> <h1 class="page-title" data-astro-cid-57l5znwr>Work</h1> <p class="page-sub" data-astro-cid-57l5znwr>A selection of projects across creative direction, film, and technology.</p> <div class="work-list" data-astro-cid-57l5znwr> ${projects.map((project) => renderTemplate`<a${addAttribute(`/work/${project.id}`, "href")} class="work-card" data-astro-cid-57l5znwr> <div class="work-thumb" data-astro-cid-57l5znwr> ${project.data.thumbnail ? renderTemplate`<img${addAttribute(project.data.thumbnail, "src")}${addAttribute(project.data.title, "alt")} data-astro-cid-57l5znwr>` : renderTemplate`<span class="ph-label" data-astro-cid-57l5znwr>Image</span>`} </div> <div class="work-info" data-astro-cid-57l5znwr> <div data-astro-cid-57l5znwr> <span class="work-category" data-astro-cid-57l5znwr>${project.data.category}</span> <h2 class="work-title" data-astro-cid-57l5znwr>${project.data.title}</h2> <p class="work-desc" data-astro-cid-57l5znwr>${project.data.description}</p> </div> <div class="work-links" data-astro-cid-57l5znwr> ${project.data.watchLink && renderTemplate`<a${addAttribute(project.data.watchLink, "href")} target="_blank" rel="noopener noreferrer" class="btn-outline" onclick="event.stopPropagation()" data-astro-cid-57l5znwr>Watch &rarr;</a>`} <span class="btn-outline" data-astro-cid-57l5znwr>Deep Dive &rarr;</span> </div> </div> </a>`)} </div> </main> ` })}`;
}, "/Users/thesuneelvarma/one-more-dot/cdportfolio/src/pages/work/index.astro", void 0);

const $$file = "/Users/thesuneelvarma/one-more-dot/cdportfolio/src/pages/work/index.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
