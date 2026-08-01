# Mobile Hero Design QA

## Scope

- Surface: homepage hero on mobile and tablet widths.
- Reference: `/Users/sukduoasa/.codex/attachments/b0fa8622-967d-4d82-8a2d-82bf549c6d00/image-1.png`.
- Reference state: broken mobile layout supplied by the user, used to identify collisions rather than as a pixel-match target.
- Implementation screenshot: `/private/tmp/duoasa-mobile-393x747-final.png`.
- Comparison image: `/private/tmp/duoasa-mobile-comparison.png`.
- Focused comparison: `/private/tmp/duoasa-mobile-focused-comparison.png`.

## Viewport and normalization

- Reference pixels: 786 × 1494 at 2× density, normalized to 393 × 747 CSS pixels.
- Implementation viewport and screenshot: 393 × 747 CSS pixels at 1× density.
- Additional responsive checks: 320 × 700, 768 × 1024, and 1200 × 900.
- State: dark theme, hero entrance animation settled, QuotaView media cycle active.

## Findings and fixes

- The mobile profile pills and QuotaView card inherited desktop absolute positioning, causing the pills to overlap the description and making vertical spacing brittle.
- Mobile and tablet hero content now uses an ordered vertical flow: title and description, profile pills, QuotaView card, then marquee.
- The description-to-pills gap is 32px, the pills-to-card gap is 36px at phone widths, and the card retains its 2.5:1 aspect ratio.
- The vertical scroll hint is hidden on mobile because its desktop edge placement conflicted with the responsive content flow.
- The title uses a fluid clamp below 520px to prevent horizontal clipping.
- The stylesheet cache query was updated so deployed clients fetch the responsive fix.

## Verification

- No overlap between description, pills, QuotaView card, or marquee at 393 × 747.
- No horizontal overflow at 320px, 393px, 768px, or 1200px widths.
- Desktop absolute positioning and bottom alignment remain unchanged at 1200 × 900.
- QuotaView card still links directly to `https://github.com/Duoasa/QuotaView`.
- QuotaView GIF loads at its original 846px natural width, uses the declared 6000ms duration, and advanced through repeated media cycles.
- Theme toggle successfully changed dark → light → dark.
- Browser console warnings and errors: none.

## Comparison history

1. Before: profile pills overlapped the hero copy and the fixed card competed for the same mobile vertical space.
2. After: all mobile hero elements participate in a predictable vertical flow with explicit gaps and responsive title sizing.

## Final result

passed
