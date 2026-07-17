---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="section-tabs" role="tablist" aria-label="Profile sections">
  <button class="section-tab" id="tab-overview" type="button" role="tab" aria-selected="true" aria-controls="panel-overview" tabindex="0" data-tab-target="panel-overview" data-tab-hash="about-me">Overview</button>
  <button class="section-tab" id="tab-publications" type="button" role="tab" aria-selected="false" aria-controls="panel-publications" tabindex="-1" data-tab-target="panel-publications" data-tab-hash="publications">Publications</button>
  <button class="section-tab" id="tab-education" type="button" role="tab" aria-selected="false" aria-controls="panel-education" tabindex="-1" data-tab-target="panel-education" data-tab-hash="education">Education</button>
  <button class="section-tab" id="tab-professional" type="button" role="tab" aria-selected="false" aria-controls="panel-professional" tabindex="-1" data-tab-target="panel-professional" data-tab-hash="professional">Professional</button>
  <button class="section-tab" id="tab-honors" type="button" role="tab" aria-selected="false" aria-controls="panel-honors" tabindex="-1" data-tab-target="panel-honors" data-tab-hash="honors-awards">Honors</button>
</div>

{% include_relative includes/overview.md %}

{% include_relative includes/publications.md %}

{% include_relative includes/education.md %}

{% include_relative includes/professional.md %}

{% include_relative includes/honors.md %}
