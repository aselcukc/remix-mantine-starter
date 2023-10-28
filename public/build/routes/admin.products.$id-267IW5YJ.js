import {
  useParams
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

// app/routes/admin.products.$id.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.products.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.products.$id.tsx"
  );
  import.meta.hot.lastModified = "1698522359520.5496";
}
function ProductsDetail() {
  _s();
  const {
    id
  } = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    "Product detail: Product ",
    id
  ] }, void 0, true, {
    fileName: "app/routes/admin.products.$id.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_s(ProductsDetail, "yQgCIz/jJfqV1l9s2yoba81MT5A=", false, function() {
  return [useParams];
});
_c = ProductsDetail;
var _c;
$RefreshReg$(_c, "ProductsDetail");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProductsDetail as default
};
//# sourceMappingURL=/build/routes/admin.products.$id-267IW5YJ.js.map
