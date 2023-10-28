import {
  Anchor,
  Button,
  Flex,
  Group,
  Text,
  Title,
  useMantineColorScheme
} from "/build/_shared/chunk-WVKM42CC.js";
import {
  Link
} from "/build/_shared/chunk-5WV32V2F.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-EAMXQZ2Q.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Welcome/Welcome.module.css
var Welcome_module_default = { "title": "Welcome-module__title__c0U9n" };

// app/components/Welcome/Welcome.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Welcome/Welcome.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Welcome/Welcome.tsx"
  );
}
function Welcome() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { className: Welcome_module_default.title, ta: "center", mt: 100, children: [
      "Welcome to",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { inherit: true, variant: "gradient", component: "span", gradient: {
        from: "pink",
        to: "yellow"
      }, children: "Mantine" }, void 0, false, {
        fileName: "app/components/Welcome/Welcome.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Welcome/Welcome.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { color: "dimmed", ta: "center", size: "lg", maw: 580, mx: "auto", mt: "xl", children: [
      "This starter Remix project includes a minimal setup for server side rendering, if you want to learn more on Mantine + Remix integration follow",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, { href: "https://mantine.dev/guides/remix/", size: "lg", children: "this guide" }, void 0, false, {
        fileName: "app/components/Welcome/Welcome.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      ". To get started edit index.tsx file."
    ] }, void 0, true, {
      fileName: "app/components/Welcome/Welcome.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Welcome/Welcome.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = Welcome;
var _c;
$RefreshReg$(_c, "Welcome");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ColorSchemeToggle/ColorSchemeToggle.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ColorSchemeToggle/ColorSchemeToggle.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ColorSchemeToggle/ColorSchemeToggle.tsx"
  );
  import.meta.hot.lastModified = "1698320871000";
}
function ColorSchemeToggle() {
  _s();
  const {
    setColorScheme
  } = useMantineColorScheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Group, { justify: "center", mt: "xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { onClick: () => setColorScheme("light"), children: "Light" }, void 0, false, {
      fileName: "app/components/ColorSchemeToggle/ColorSchemeToggle.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { onClick: () => setColorScheme("dark"), children: "Dark" }, void 0, false, {
      fileName: "app/components/ColorSchemeToggle/ColorSchemeToggle.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { onClick: () => setColorScheme("auto"), children: "Auto" }, void 0, false, {
      fileName: "app/components/ColorSchemeToggle/ColorSchemeToggle.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ColorSchemeToggle/ColorSchemeToggle.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_s(ColorSchemeToggle, "CkdG1xG85P/RIjBDC1XlYPQzk8c=", false, function() {
  return [useMantineColorScheme];
});
_c2 = ColorSchemeToggle;
var _c2;
$RefreshReg$(_c2, "ColorSchemeToggle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1698523069911.213";
}
var meta = () => {
  return [{
    title: "Mantine Remix App"
  }, {
    name: "description",
    content: "Welcome to Mantine!"
  }];
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Welcome, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ColorSchemeToggle, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { justify: "center", mt: "20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/admin/dashboard", children: "Dashboard" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c3 = Index;
var _c3;
$RefreshReg$(_c3, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-A2QSDZRD.js.map
