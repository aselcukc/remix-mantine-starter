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

// app/routes/admin.products_.edit.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.products_.edit.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.products_.edit.tsx"
  );
  import.meta.hot.lastModified = "1698522345722.2876";
}
function ProductsEdit() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Edit" }, void 0, false, {
    fileName: "app/routes/admin.products_.edit.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = ProductsEdit;
var _c;
$RefreshReg$(_c, "ProductsEdit");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProductsEdit as default
};
//# sourceMappingURL=/build/routes/admin.products_.edit-OKZKLUO5.js.map
