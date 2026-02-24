import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="about">
      <h1>About DevBlog</h1>
      <p>This blog is built with Angular 21 and consumes data from JSONPlaceholder, demonstrating external CMS integration with reactive patterns.</p>
      <div class="tech">
        <h2>Tech Stack</h2>
        <ul>
          <li>Angular 21 Standalone Components</li>
          <li>Angular Signals for state</li>
          <li>JSONPlaceholder as headless CMS</li>
          <li>Lazy-loaded routes</li>
          <li>RxJS for HTTP calls</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .about { max-width: 760px; margin: 3rem auto; padding: 0 1.5rem; }
    h1 { font-size: 2rem; margin-bottom: 1rem; }
    p { color: #6b7280; line-height: 1.8; margin-bottom: 2rem; }
    h2 { font-size: 1.2rem; margin-bottom: 0.75rem; }
    ul { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
    li::before { content: '✓ '; color: #6366f1; font-weight: 700; }
  `]
})
export class About {}
