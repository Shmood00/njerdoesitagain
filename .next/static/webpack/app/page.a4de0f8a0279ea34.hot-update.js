"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projects: function() { return /* binding */ projects; }\n/* harmony export */ });\nconst keyStr = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\";\nconst triplet = (e1, e2, e3)=>keyStr.charAt(e1 >> 2) + keyStr.charAt((e1 & 3) << 4 | e2 >> 4) + keyStr.charAt((e2 & 15) << 2 | e3 >> 6) + keyStr.charAt(e3 & 63);\nconst rgbDataURL = (r, g, b)=>\"data:image/gif;base64,R0lGODlhAQABAPAA\".concat(triplet(0, r, g) + triplet(b, 255, 255), \"/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\");\nconst projects = [\n    {\n        title: \"Africans in the Diaspora\",\n        description: \"Growing up in Kenya, I was always captivated by the sight of the Maasai people, our local nomads, draped in vibrant Shukas as they tended to their livestock and nurtured their community bonds. The inspiration for 'Africans in The Diaspora' stemmed from my admiration for how the Maasai, despite their constant movement, prioritize unity and collective identity. This painting celebrates their unwavering connection to their roots, reminding us that regardless of where we are, we always remember WHO we are.\",\n        src: [\n            \"diaspora.jpg\"\n        ],\n        color: \"#d6fbe4\",\n        rgbColor: \"\".concat(rgbDataURL(214, 251, 228)),\n        carousel: false\n    },\n    {\n        title: \"Bloom\",\n        description: \"'Bloom' was truly inspired by my deep love for sunflowers. There's just something about how they constantly reach for the sun that really speaks to me- that natural warmth penetrating your soul and making it feel like everything's going to be alright. This painting marked the beginning of my year, and I was eager to take on the challenge of capturing every intricate detail.\",\n        src: [\n            \"flower.jpg\"\n        ],\n        color: \"#feff86\",\n        rgbColor: \"\".concat(rgbDataURL(254, 255, 134)),\n        carousel: false\n    },\n    {\n        title: \"Luminescent\",\n        description: \"There's just something about jellyfish – how they're simultaneously ethereal and mesmerizing. I remember the first time I saw a jellyfish gracefully move in an aquarium; it was as if time stood still. Watching them was enchanting, a peaceful escape from the hustle and bustle of life. 'Luminescent' captures not only their glow in the dark, but also how beautiful jellyfish are— from a distance.\",\n        src: [\n            \"jelly-one-carousel.jpg\",\n            \"jelly-two-carousel.jpg\"\n        ],\n        color: \"#FF7779\",\n        rgbColor: \"\".concat(rgbDataURL(255, 119, 121)),\n        carousel: true\n    },\n    {\n        title: \"Tukutane Kenya\",\n        description: \"When I returned home to Kenya, seeing Matatus on the road made me feel like I had truly come back home. Our public transport system can be described as ‘wonderful chaos’, the way they maneuver through the streets. I was inspired to capture that essence in my work.\",\n        src: [\n            \"vehicles.jpg\"\n        ],\n        color: \"#FFDBBB\",\n        rgbColor: \"\".concat(rgbDataURL(255, 219, 187)),\n        carousel: false\n    },\n    {\n        title: \"Lost\",\n        description: \"When I first created this painting, it was a personal challenge for me to capture the essence of water waves and their movement. I found immense joy in experimenting with different layers of colors and carefully adding white highlights to depict how the moonlight danced upon the waves.\",\n        src: [\n            \"water.jpg\"\n        ],\n        color: \"#89CFF0\",\n        rgbColor: \"\".concat(rgbDataURL(137, 207, 240)),\n        carousel: false\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9kYXRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxTQUNGO0FBRUosTUFBTUMsVUFBVSxDQUFDQyxJQUFJQyxJQUFJQyxLQUNyQkosT0FBT0ssTUFBTSxDQUFDSCxNQUFNLEtBQ3BCRixPQUFPSyxNQUFNLENBQUMsQ0FBRUgsS0FBSyxNQUFNLElBQU1DLE1BQU0sS0FDdkNILE9BQU9LLE1BQU0sQ0FBQyxDQUFFRixLQUFLLEVBQUMsS0FBTSxJQUFNQyxNQUFNLEtBQ3hDSixPQUFPSyxNQUFNLENBQUNELEtBQUs7QUFFdkIsTUFBTUUsYUFBYSxDQUFDQyxHQUFHQyxHQUFHQyxJQUN0Qix5Q0FDQyxPQUR3Q1IsUUFBUSxHQUFHTSxHQUFHQyxLQUFLUCxRQUFRUSxHQUFHLEtBQUssTUFDM0U7QUFFRSxNQUFNQyxXQUFXO0lBRXBCO1FBQ0lDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxLQUFLO1lBQUM7U0FBZTtRQUNyQkMsT0FBTztRQUNQQyxVQUFVLEdBQTJCLE9BQXhCVCxXQUFXLEtBQUksS0FBSTtRQUNoQ1UsVUFBVTtJQUNkO0lBRUE7UUFDSUwsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLEtBQUs7WUFBQztTQUFhO1FBQ25CQyxPQUFPO1FBQ1BDLFVBQVUsR0FBMkIsT0FBeEJULFdBQVcsS0FBSSxLQUFJO1FBQ2hDVSxVQUFVO0lBQ2Q7SUFFQTtRQUNJTCxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsS0FBSztZQUFDO1lBQXlCO1NBQXlCO1FBQ3hEQyxPQUFPO1FBQ1BDLFVBQVUsR0FBNkIsT0FBMUJULFdBQVcsS0FBSyxLQUFLO1FBQ2xDVSxVQUFVO0lBQ2Q7SUFHQTtRQUNJTCxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsS0FBSztZQUFDO1NBQWU7UUFDckJDLE9BQU87UUFDUEMsVUFBVSxHQUE2QixPQUExQlQsV0FBVyxLQUFLLEtBQUs7UUFDbENVLFVBQVU7SUFDZDtJQUVBO1FBQ0lMLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxLQUFLO1lBQUM7U0FBWTtRQUNsQkMsT0FBTztRQUNQQyxVQUFVLEdBQTJCLE9BQXhCVCxXQUFXLEtBQUksS0FBSTtRQUNoQ1UsVUFBVTtJQUNkO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RhdGEuanM/MGU1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBrZXlTdHIgPVxuICAgIFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIjtcblxuY29uc3QgdHJpcGxldCA9IChlMSwgZTIsIGUzKSA9PlxuICAgIGtleVN0ci5jaGFyQXQoZTEgPj4gMikgK1xuICAgIGtleVN0ci5jaGFyQXQoKChlMSAmIDMpIDw8IDQpIHwgKGUyID4+IDQpKSArXG4gICAga2V5U3RyLmNoYXJBdCgoKGUyICYgMTUpIDw8IDIpIHwgKGUzID4+IDYpKSArXG4gICAga2V5U3RyLmNoYXJBdChlMyAmIDYzKTtcblxuY29uc3QgcmdiRGF0YVVSTCA9IChyLCBnLCBiKSA9PlxuICAgIGBkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQVBBQSR7dHJpcGxldCgwLCByLCBnKSArIHRyaXBsZXQoYiwgMjU1LCAyNTUpXG4gICAgfS95SDVCQUFBQUFBQUxBQUFBQUFCQUFFQUFBSUNSQUVBT3c9PWA7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAgICBcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkFmcmljYW5zIGluIHRoZSBEaWFzcG9yYVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJHcm93aW5nIHVwIGluIEtlbnlhLCBJIHdhcyBhbHdheXMgY2FwdGl2YXRlZCBieSB0aGUgc2lnaHQgb2YgdGhlIE1hYXNhaSBwZW9wbGUsIG91ciBsb2NhbCBub21hZHMsIGRyYXBlZCBpbiB2aWJyYW50IFNodWthcyBhcyB0aGV5IHRlbmRlZCB0byB0aGVpciBsaXZlc3RvY2sgYW5kIG51cnR1cmVkIHRoZWlyIGNvbW11bml0eSBib25kcy4gVGhlIGluc3BpcmF0aW9uIGZvciAnQWZyaWNhbnMgaW4gVGhlIERpYXNwb3JhJyBzdGVtbWVkIGZyb20gbXkgYWRtaXJhdGlvbiBmb3IgaG93IHRoZSBNYWFzYWksIGRlc3BpdGUgdGhlaXIgY29uc3RhbnQgbW92ZW1lbnQsIHByaW9yaXRpemUgdW5pdHkgYW5kIGNvbGxlY3RpdmUgaWRlbnRpdHkuIFRoaXMgcGFpbnRpbmcgY2VsZWJyYXRlcyB0aGVpciB1bndhdmVyaW5nIGNvbm5lY3Rpb24gdG8gdGhlaXIgcm9vdHMsIHJlbWluZGluZyB1cyB0aGF0IHJlZ2FyZGxlc3Mgb2Ygd2hlcmUgd2UgYXJlLCB3ZSBhbHdheXMgcmVtZW1iZXIgV0hPIHdlIGFyZS5cIixcbiAgICAgICAgc3JjOiBbXCJkaWFzcG9yYS5qcGdcIl0sXG4gICAgICAgIGNvbG9yOiBcIiNkNmZiZTRcIixcbiAgICAgICAgcmdiQ29sb3I6IGAke3JnYkRhdGFVUkwoMjE0LDI1MSwyMjgpfWAsXG4gICAgICAgIGNhcm91c2VsOiBmYWxzZVxuICAgIH0sXG5cbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkJsb29tXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIidCbG9vbScgd2FzIHRydWx5IGluc3BpcmVkIGJ5IG15IGRlZXAgbG92ZSBmb3Igc3VuZmxvd2Vycy4gVGhlcmUncyBqdXN0IHNvbWV0aGluZyBhYm91dCBob3cgdGhleSBjb25zdGFudGx5IHJlYWNoIGZvciB0aGUgc3VuIHRoYXQgcmVhbGx5IHNwZWFrcyB0byBtZS0gdGhhdCBuYXR1cmFsIHdhcm10aCBwZW5ldHJhdGluZyB5b3VyIHNvdWwgYW5kIG1ha2luZyBpdCBmZWVsIGxpa2UgZXZlcnl0aGluZydzIGdvaW5nIHRvIGJlIGFscmlnaHQuIFRoaXMgcGFpbnRpbmcgbWFya2VkIHRoZSBiZWdpbm5pbmcgb2YgbXkgeWVhciwgYW5kIEkgd2FzIGVhZ2VyIHRvIHRha2Ugb24gdGhlIGNoYWxsZW5nZSBvZiBjYXB0dXJpbmcgZXZlcnkgaW50cmljYXRlIGRldGFpbC5cIixcbiAgICAgICAgc3JjOiBbXCJmbG93ZXIuanBnXCJdLFxuICAgICAgICBjb2xvcjogXCIjZmVmZjg2XCIsXG4gICAgICAgIHJnYkNvbG9yOiBgJHtyZ2JEYXRhVVJMKDI1NCwyNTUsMTM0KX1gLFxuICAgICAgICBjYXJvdXNlbDogZmFsc2VcbiAgICB9LFxuXG4gICAge1xuICAgICAgICB0aXRsZTogXCJMdW1pbmVzY2VudFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGVyZSdzIGp1c3Qgc29tZXRoaW5nIGFib3V0IGplbGx5ZmlzaCDigJMgaG93IHRoZXkncmUgc2ltdWx0YW5lb3VzbHkgZXRoZXJlYWwgYW5kIG1lc21lcml6aW5nLiBJIHJlbWVtYmVyIHRoZSBmaXJzdCB0aW1lIEkgc2F3IGEgamVsbHlmaXNoIGdyYWNlZnVsbHkgbW92ZSBpbiBhbiBhcXVhcml1bTsgaXQgd2FzIGFzIGlmIHRpbWUgc3Rvb2Qgc3RpbGwuIFdhdGNoaW5nIHRoZW0gd2FzIGVuY2hhbnRpbmcsIGEgcGVhY2VmdWwgZXNjYXBlIGZyb20gdGhlIGh1c3RsZSBhbmQgYnVzdGxlIG9mIGxpZmUuICdMdW1pbmVzY2VudCcgY2FwdHVyZXMgbm90IG9ubHkgdGhlaXIgZ2xvdyBpbiB0aGUgZGFyaywgYnV0IGFsc28gaG93IGJlYXV0aWZ1bCBqZWxseWZpc2ggYXJl4oCUIGZyb20gYSBkaXN0YW5jZS5cIixcbiAgICAgICAgc3JjOiBbXCJqZWxseS1vbmUtY2Fyb3VzZWwuanBnXCIsXCJqZWxseS10d28tY2Fyb3VzZWwuanBnXCJdLFxuICAgICAgICBjb2xvcjogXCIjRkY3Nzc5XCIsXG4gICAgICAgIHJnYkNvbG9yOiBgJHtyZ2JEYXRhVVJMKDI1NSwgMTE5LCAxMjEpfWAsXG4gICAgICAgIGNhcm91c2VsOiB0cnVlXG4gICAgfSxcbiAgICBcblxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiVHVrdXRhbmUgS2VueWFcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV2hlbiBJIHJldHVybmVkIGhvbWUgdG8gS2VueWEsIHNlZWluZyBNYXRhdHVzIG9uIHRoZSByb2FkIG1hZGUgbWUgZmVlbCBsaWtlIEkgaGFkIHRydWx5IGNvbWUgYmFjayBob21lLiBPdXIgcHVibGljIHRyYW5zcG9ydCBzeXN0ZW0gY2FuIGJlIGRlc2NyaWJlZCBhcyDigJh3b25kZXJmdWwgY2hhb3PigJksIHRoZSB3YXkgdGhleSBtYW5ldXZlciB0aHJvdWdoIHRoZSBzdHJlZXRzLiBJIHdhcyBpbnNwaXJlZCB0byBjYXB0dXJlIHRoYXQgZXNzZW5jZSBpbiBteSB3b3JrLlwiLFxuICAgICAgICBzcmM6IFtcInZlaGljbGVzLmpwZ1wiXSxcbiAgICAgICAgY29sb3I6IFwiI0ZGREJCQlwiLFxuICAgICAgICByZ2JDb2xvcjogYCR7cmdiRGF0YVVSTCgyNTUsIDIxOSwgMTg3KX1gLFxuICAgICAgICBjYXJvdXNlbDogZmFsc2VcbiAgICB9LFxuXG4gICAge1xuICAgICAgICB0aXRsZTogXCJMb3N0XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIldoZW4gSSBmaXJzdCBjcmVhdGVkIHRoaXMgcGFpbnRpbmcsIGl0IHdhcyBhIHBlcnNvbmFsIGNoYWxsZW5nZSBmb3IgbWUgdG8gY2FwdHVyZSB0aGUgZXNzZW5jZSBvZiB3YXRlciB3YXZlcyBhbmQgdGhlaXIgbW92ZW1lbnQuIEkgZm91bmQgaW1tZW5zZSBqb3kgaW4gZXhwZXJpbWVudGluZyB3aXRoIGRpZmZlcmVudCBsYXllcnMgb2YgY29sb3JzIGFuZCBjYXJlZnVsbHkgYWRkaW5nIHdoaXRlIGhpZ2hsaWdodHMgdG8gZGVwaWN0IGhvdyB0aGUgbW9vbmxpZ2h0IGRhbmNlZCB1cG9uIHRoZSB3YXZlcy5cIixcbiAgICAgICAgc3JjOiBbXCJ3YXRlci5qcGdcIl0sXG4gICAgICAgIGNvbG9yOiBcIiM4OUNGRjBcIixcbiAgICAgICAgcmdiQ29sb3I6IGAke3JnYkRhdGFVUkwoMTM3LDIwNywyNDApfWAsXG4gICAgICAgIGNhcm91c2VsOiBmYWxzZVxuICAgIH1cbl0iXSwibmFtZXMiOlsia2V5U3RyIiwidHJpcGxldCIsImUxIiwiZTIiLCJlMyIsImNoYXJBdCIsInJnYkRhdGFVUkwiLCJyIiwiZyIsImIiLCJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzcmMiLCJjb2xvciIsInJnYkNvbG9yIiwiY2Fyb3VzZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/data.js\n"));

/***/ })

});