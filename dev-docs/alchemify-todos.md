# Alchemify Space: next website and brand tasks

Started 11 Nov 2026. Priority order: testimonials first, then the founder video, then the team section. Launch tasks live in [website-launch-todos.md](website-launch-todos.md).

**Owner key:** **You** = Javeed supplies or does it. **Claude** = code change on the site.

## 1. Testimonials (highest impact)

For agencies, proof from real clients matters more than anything else on the site. The Home page section is already built and stays hidden until real quotes are added.

- [ ] **You:** Pick 3–5 past remote clients to ask.
- [ ] **You:** Send each a short request suggesting what to cover, in their own words. Never write the testimonial for them or change their wording without asking.
- [ ] **You:** Ask for specifics ("delivered the app 2 weeks early" beats "great developer").
- [ ] **You:** Collect for each one:
    - [ ] full name
    - [ ] role and company
    - [ ] a photo
    - [ ] LinkedIn link, if they agree
- [ ] **You:** Ask the same clients to post their review on Clutch.
- [ ] **Claude:** Add the approved quotes to `testimonials` in `app/(marketing)/page.tsx` (the section then appears automatically).

## 2. Founder video (strong trust signal)

A 60–90 second video of Javeed explaining the offer shows agencies a real, capable person.

- [ ] **Claude + You:** Write the script together, following this outline:
    1. Who you are
    2. Who you help (agencies, app owners)
    3. The three offers
    4. One proof point (Glamio, years of experience)
    5. Call to action: "Book a 20-minute call"
- [ ] **You:** Record it with good light and a clear mic. Speak naturally rather than reading word for word.
- [ ] **You:** Add captions (many people watch muted).
- [ ] **You:** Upload it to the Alchemify Space YouTube channel and send the link.
- [ ] **Claude:** Embed it without slowing the site:
    - [ ] Home, "Who you work with" section
    - [ ] For Agencies page

## 3. Team section (only if it's honest)

Helps with the "what if you get sick?" worry about one-person shops, but backfires if anyone listed isn't really involved: agencies check LinkedIn.

- [ ] **You:** Decide who to list: only people who will actually work on projects.
- [ ] **You:** Get each person's permission for name, photo and LinkedIn link.
- [ ] **You:** Choose the label:
    - "Our team": they work with you regularly
    - "Specialists we work with": available as subcontractors (common, respected and safe)
- [ ] **You:** Have each collaborator sign your NDA, and check that client NDAs allow subcontractors before they touch a project.
- [ ] **Claude:** Build the team section, hidden until people are added.

## 4. Brand building beyond the website

| Area | Task |
| --- | --- |
| Consistency | Same logo, colours, headshot and one-line pitch on the site, LinkedIn, YouTube, Clutch, email signatures and the Play Store developer page |
| LinkedIn | Company page, plus 2 posts a week from your personal profile (build updates, Glamio progress, AI tips). For agencies, your personal profile matters more |
| YouTube | Turn each build video into a short LinkedIn post and a blog article |
| Proof | After each finished project: a testimonial, a Clutch review and a short case study on the site |
| Glamio launch | Treat it as a brand moment: launch video, LinkedIn post, a blog article on how you built it |

- [ ] **You:** Update every profile listed under "Consistency" to match the site.
- [ ] **You:** Create the LinkedIn company page.
- [ ] **You:** Start posting twice a week on your personal LinkedIn.
- [ ] **You:** Set up a routine: each YouTube video also becomes a LinkedIn post and a blog article.
- [ ] **You:** After each project, request a testimonial and Clutch review, and write a short case study.
- [ ] **You + Claude:** Plan the Glamio launch content (video, LinkedIn post, blog article).

## 5. Ready to build now (waiting on your go-ahead)

- [ ] **Claude:** Team section, hidden until filled, with your chosen heading.
- [ ] **Claude:** Video slot on Home and For Agencies, ready for the YouTube link.
- [ ] Testimonials need no build work, only the quotes.
