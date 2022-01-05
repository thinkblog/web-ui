const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-726f44ff.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "pages/admin/editor.vue",
      "pages/admin/post-list.vue",
      "pages/admin.vue",
      "pages/index.vue",
      "pages/page/[pageIndex].vue",
      "pages/post/[cid].vue"
    ],
    "css": [
      "assets/entry.76693088.css"
    ]
  },
  "pages/admin/editor.vue": {
    "file": "editor-1b9b6682.mjs",
    "src": "pages/admin/editor.vue",
    "isDynamicEntry": true,
    "imports": [
      "_marked.esm-e786a0da.mjs",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/editor.f4ff953b.css"
    ]
  },
  "_marked.esm-e786a0da.mjs": {
    "file": "marked.esm-e786a0da.mjs"
  },
  "pages/admin/post-list.vue": {
    "file": "post-list-5f80b46a.mjs",
    "src": "pages/admin/post-list.vue",
    "isDynamicEntry": true,
    "imports": [
      "_Post-56c8cbfe.mjs",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "_Post-56c8cbfe.mjs": {
    "file": "Post-56c8cbfe.mjs"
  },
  "pages/admin.vue": {
    "file": "admin-f7650719.mjs",
    "src": "pages/admin.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/admin.87f2a328.css"
    ]
  },
  "pages/index.vue": {
    "file": "index-a502c98a.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "pages/page/[pageIndex].vue": {
    "file": "_pageIndex_-896c3467.mjs",
    "src": "pages/page/[pageIndex].vue",
    "isDynamicEntry": true,
    "imports": [
      "_Post-56c8cbfe.mjs",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/_pageIndex_.8e548ad6.css"
    ]
  },
  "pages/post/[cid].vue": {
    "file": "_cid_-dc915889.mjs",
    "src": "pages/post/[cid].vue",
    "isDynamicEntry": true,
    "imports": [
      "_Post-56c8cbfe.mjs",
      "_marked.esm-e786a0da.mjs",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  }
};

export { client_manifest as default };