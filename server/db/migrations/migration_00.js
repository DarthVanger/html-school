import { db } from '../db.js';

export const migration_00 = async () => {
  const skills = {
    html: [
      [
        { id: 'html-h1', text: '<h1>' },
        { id: 'html-p', text: '<p>' },
        { id: 'html-img', text: '<img>' },
        { text: '<br>' },
        { text: '<hr>' },
      ],
      [
        { id: 'html-a', text: '<a>'  },
        { id: 'html-video', text: '<video>'  },
      ],
    ],
    css: [
      [
        { id: 'css-h1-p', text: 'h1, p'  },
        { id: 'css-color', text: 'color' },
        { id: 'css-font-size', text: 'font\nsize'  },
        { id: 'css-font-family', text: 'font\nfamily' },
      ],
      [
        { id: 'css-padding', text: 'padding' },
        { id: 'css-margin', text: 'margin' },
        { id: 'css-border', text: 'border' },
        { id: 'css-width', text: 'width' },
        { id: 'css-height', text: 'height' },
        { id: 'css-position-absolute', text: 'position\nasbolute' },
      ],
    ],
    js: [
      [
        { id: 'alert', text: 'alert'  },
        { id: 'on click', text: 'on\nclick'  },
        { id: 'style', text: 'style'  },
        { id: 'innerHTML', text: 'inner\nHTML'  },
        { id: 'querySelector', text: 'query\nSelector'  },
        { id: 'console', text: 'console\log()'  },
      ],
      [
        { id: 'variables', text: 'var\niables'  },
        { id: 'functions', text: 'func\ntions'  },
        { id: '+=', text: '+='  },
        { id: 'event', text: 'event'  },
        { id: 'click-event', text: 'click\nevent x/y'  },
        { id: 'key-event', text: 'keydown\nkeyup'  },
        { id: 'if-else', text: 'if () {}\nelse {}'  },
      ],
    ]
  };

  db.data.skills = skills;

  console.log('Applying migration for skills: ', skills);
  await db.write();
};
