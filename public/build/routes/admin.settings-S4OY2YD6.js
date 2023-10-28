import {
  Layout
} from "/build/_shared/chunk-Q4I54LMW.js";
import "/build/_shared/chunk-WVKM42CC.js";
import {
  Outlet
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

// app/routes/admin.settings.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.settings.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.settings.tsx"
  );
  import.meta.hot.lastModified = "1698522322433.6626";
}
function Settings() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/routes/admin.settings.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.settings.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = Settings;
var _c;
$RefreshReg$(_c, "Settings");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Settings as default
};
//# sourceMappingURL=/build/routes/admin.settings-S4OY2YD6.js.map
