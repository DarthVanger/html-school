export const QuestCardBorder = () => `
<svg class="quest-card-border" viewBox="0 0 100 100">
  <defs>

    <!-- GLOW: https://stackoverflow.com/a/19704735 -->
    <!-- a transparent glow that takes on the colour of the object it's applied to -->
    <filter id="glow">
        <feGaussianBlur stdDeviation="0.1" result="coloredBlur"/>
        <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
    </filter>

    <filter id="shadow" width="1.5" height="1.5" x="-.25" y="-.25">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" result="blur"/>
        <feColorMatrix result="bluralpha" type="matrix" values=
                "1 0 0 0   0
                 0 1 0 0   0
                 0 0 1 0   0
                 0 0 0 0.8 0 "/>
        <feOffset in="bluralpha" dx="3" dy="3" result="offsetBlur"/>
        <feMerge>
            <feMergeNode in="offsetBlur"/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
    </filter>

    <!-- a transparent grey glow with no offset -->
    <filter id="black-glow">
        <feColorMatrix type="matrix" values=
                    "0 0 0 0   0
                     0 0 0 0   0
                     0 0 0 0   0
                     0 0 0 0.7 0"/>
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
        <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
    </filter>

  </defs>

  <path
    d="M 0 0 l 100 0 v 80 l -20 20 h -80 v -100"
  />
</svg>
`;
