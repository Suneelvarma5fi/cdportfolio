import { c as createComponent } from './consts_Byw_xXZq.mjs';
import 'piccolore';
import { d as createRenderInstruction, r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_gk7PdndW.mjs';
import { g as getCollection, $ as $$Layout } from './_astro_content_D2io-mnJ.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allWork = await getCollection("work");
  const projects = allWork.sort((a, b) => a.data.order - b.data.order);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Suneel Armstrong — Creative Director & Technologist", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page" data-astro-cid-j7pv25f6> <!-- ======================================================
         HERO
    ====================================================== --> <section class="hero" data-astro-cid-j7pv25f6> <div class="hero-left" data-astro-cid-j7pv25f6> <h1 class="name" data-astro-cid-j7pv25f6>SUNEEL ARMSTRONG</h1> <p class="tagline" data-astro-cid-j7pv25f6>Creative Director &amp; Technologist</p> <p class="hero-intro" data-astro-cid-j7pv25f6>
Placeholder description. Suneel to provide a one or two sentence
          summary about who he is and what he does.
</p> <div class="quests-block" data-astro-cid-j7pv25f6> <h2 class="quests-heading" data-astro-cid-j7pv25f6>Main quests</h2> <ul class="quest-list" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>&rarr; Placeholder main quest. Suneel to provide.</li> <li data-astro-cid-j7pv25f6>&rarr; Placeholder main quest. Suneel to provide.</li> <li data-astro-cid-j7pv25f6>&rarr; Placeholder main quest. Suneel to provide.</li> </ul> </div> <div class="quests-block" data-astro-cid-j7pv25f6> <h2 class="quests-heading" data-astro-cid-j7pv25f6>Side and past quests</h2> <ul class="quest-list" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>&rarr; Placeholder past quest. Suneel to provide.</li> <li data-astro-cid-j7pv25f6>&rarr; Placeholder past quest. Suneel to provide.</li> <li data-astro-cid-j7pv25f6>&rarr; Placeholder past quest. Suneel to provide.</li> </ul> </div> </div> <div class="hero-right" data-astro-cid-j7pv25f6> <!-- Video / Photo area --> <div class="video-frame" data-astro-cid-j7pv25f6> <!-- Fallback image shown until video loads --> <img src="https://res.cloudinary.com/de0frkjm7/image/upload/w_600,h_800,c_fill,g_face/v1773947883/designer_jteewz.jpg" alt="Suneel Armstrong" class="video-el hero-img" style="opacity:1" data-astro-cid-j7pv25f6> <video id="loop-vid" src="https://res.cloudinary.com/de0frkjm7/video/upload/v1773947799/rest-suneel_ohxtgq.mp4" autoplay loop muted playsinline class="video-el" style="opacity:0" data-astro-cid-j7pv25f6></video> <video id="backflip-vid" src="https://res.cloudinary.com/de0frkjm7/video/upload/v1773947799/backflip-suneel_lalng5.mp4" muted playsinline preload="auto" class="video-el" style="opacity:0" data-astro-cid-j7pv25f6></video> </div> <div class="btn-wrap" data-astro-cid-j7pv25f6> <button id="backflip-btn" class="pill-btn" data-astro-cid-j7pv25f6>Backflip</button> </div> </div> </section> <!-- ======================================================
         FEATURED WORK
    ====================================================== --> <section class="section" data-astro-cid-j7pv25f6> <div class="section-head" data-astro-cid-j7pv25f6> <h2 class="section-title" data-astro-cid-j7pv25f6>Featured Work</h2> <a href="/work" class="pill-outline" data-astro-cid-j7pv25f6>see all &rarr;</a> </div> <div class="work-list" data-astro-cid-j7pv25f6> ${projects.map((project) => renderTemplate`<article class="work-card" data-astro-cid-j7pv25f6>  <a${addAttribute(`/work/${project.id}`, "href")} class="card-cover-link"${addAttribute(project.data.title, "aria-label")} data-astro-cid-j7pv25f6></a> <div class="work-thumb" data-astro-cid-j7pv25f6> ${project.data.thumbnail ? renderTemplate`<img${addAttribute(project.data.thumbnail, "src")}${addAttribute(project.data.title, "alt")} data-astro-cid-j7pv25f6>` : renderTemplate`<span class="ph-label" data-astro-cid-j7pv25f6>Image</span>`} </div> <div class="work-info" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <h3 class="work-title" data-astro-cid-j7pv25f6>${project.data.title}</h3> <p class="work-desc" data-astro-cid-j7pv25f6>${project.data.description}</p> </div> <div class="work-actions" data-astro-cid-j7pv25f6> ${project.data.watchLink && renderTemplate`<a${addAttribute(project.data.watchLink, "href")} target="_blank" rel="noopener noreferrer" class="ext-icon" title="Watch" data-astro-cid-j7pv25f6> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-astro-cid-j7pv25f6></path> <polyline points="15 3 21 3 21 9" data-astro-cid-j7pv25f6></polyline> <line x1="10" y1="14" x2="21" y2="3" data-astro-cid-j7pv25f6></line> </svg> </a>`} <a${addAttribute(`/work/${project.id}`, "href")} class="deep-dive-link" data-astro-cid-j7pv25f6>Deep Dive &rarr;</a> </div> </div> </article>`)} </div> </section> <!-- ======================================================
         I WRITE (Thoughts)
    ====================================================== --> <section class="section" data-astro-cid-j7pv25f6> <div class="section-head" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <h2 class="section-title" data-astro-cid-j7pv25f6>I write</h2> <p class="section-sub" data-astro-cid-j7pv25f6>Notes on creativity, technology, and making things.</p> </div> <a href="#" class="pill-outline" data-astro-cid-j7pv25f6>read more &rarr;</a> </div> <div class="writing-list" data-astro-cid-j7pv25f6> ${[
    { title: "Why Creative Directors Should Learn to Code", date: "03 Jan 2025", url: "#" },
    { title: "The Death of the Mood Board", date: "04 Nov 2024", url: "#" },
    { title: "What Hackathons Taught Me About Storytelling", date: "01 Sep 2024", url: "#" }
  ].map((a) => renderTemplate`<a${addAttribute(a.url, "href")} target="_blank" rel="noopener noreferrer" class="article-row" data-astro-cid-j7pv25f6> <span class="article-title" data-astro-cid-j7pv25f6>${a.title}</span> <span class="article-date" data-astro-cid-j7pv25f6>${a.date}</span> </a>`)} </div> <div class="show-more" data-astro-cid-j7pv25f6> <a href="#" class="muted-link" data-astro-cid-j7pv25f6>show all posts &darr;</a> </div> </section> <!-- ======================================================
         PROUD SIDE QUESTS
    ====================================================== --> <section class="section" data-astro-cid-j7pv25f6> <h2 class="section-title" style="margin-bottom:0.5rem;" data-astro-cid-j7pv25f6>Proud Side Quests</h2> <p class="section-sub" style="margin-bottom:1.5rem;" data-astro-cid-j7pv25f6>
Things I built, won, or showed up to that I'm quietly proud of.
</p> <div class="photo-scroll" data-astro-cid-j7pv25f6> ${[
    { label: "N8N Japan Hackathon", sub: "Tokyo, 2024" },
    { label: "LeetCode Top 10%", sub: "Globally" },
    { label: "Events I've Hosted", sub: "200+ people" },
    { label: "N8N Japan Hackathon", sub: "Tokyo, 2024" },
    { label: "LeetCode Top 10%", sub: "Globally" },
    { label: "Events I've Hosted", sub: "200+ people" }
  ].map((card) => renderTemplate`<div class="photo-card" data-astro-cid-j7pv25f6> <div class="photo-img" data-astro-cid-j7pv25f6> <span class="ph-label" style="color:rgba(255,255,255,0.4);" data-astro-cid-j7pv25f6>Photo</span> </div> <div class="photo-caption" data-astro-cid-j7pv25f6> <span class="photo-label" data-astro-cid-j7pv25f6>${card.label}</span> <span class="photo-sub" data-astro-cid-j7pv25f6>${card.sub}</span> </div> </div>`)} </div> </section> <!-- ======================================================
         SAY HI / FOOTER
    ====================================================== --> <section class="section" data-astro-cid-j7pv25f6> <h2 class="section-title" style="margin-bottom:1.5rem;" data-astro-cid-j7pv25f6>Say hi!</h2> <div class="contact-box" data-astro-cid-j7pv25f6> <p class="contact-msg" data-astro-cid-j7pv25f6>
Whether you're a brand looking for creative direction, a founder with a
          story worth telling, or you just want to talk — I'm genuinely happy to
          hear from you.
</p> <ul class="contact-list" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>&bull; <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="contact-link" data-astro-cid-j7pv25f6>Twitter / X DMs</a> are open (I actually check them)</li> <li data-astro-cid-j7pv25f6>&bull; <a href="mailto:suneel@example.com" class="contact-link" data-astro-cid-j7pv25f6>Drop me an email</a> if you've got something longer to say</li> </ul> <p class="contact-sign" data-astro-cid-j7pv25f6>See you around!</p> </div> </section> </main> ` })} ${renderScript($$result, "/Users/thesuneelvarma/one-more-dot/cdportfolio/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/thesuneelvarma/one-more-dot/cdportfolio/src/pages/index.astro", void 0);

const $$file = "/Users/thesuneelvarma/one-more-dot/cdportfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
