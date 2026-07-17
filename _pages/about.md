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
  <button class="section-tab" id="tab-experience" type="button" role="tab" aria-selected="false" aria-controls="panel-experience" tabindex="-1" data-tab-target="panel-experience" data-tab-hash="education">Experience</button>
  <button class="section-tab" id="tab-honors" type="button" role="tab" aria-selected="false" aria-controls="panel-honors" tabindex="-1" data-tab-target="panel-honors" data-tab-hash="honors-awards">Honors</button>
</div>

{% include_relative includes/intro.md %}

{% include_relative includes/pub.md %}

{% include_relative includes/others.md %}

{% include_relative includes/honors.md %}
