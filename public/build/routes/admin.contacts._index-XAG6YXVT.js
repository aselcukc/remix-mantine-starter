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

// app/routes/admin.contacts._index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.contacts._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.contacts._index.tsx"
  );
  import.meta.hot.lastModified = "1698522334382.8486";
}
function ContactsIndex() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Contacts Index" }, void 0, false, {
    fileName: "app/routes/admin.contacts._index.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = ContactsIndex;
var _c;
$RefreshReg$(_c, "ContactsIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ContactsIndex as default
};
//# sourceMappingURL=/build/routes/admin.contacts._index-XAG6YXVT.js.map
