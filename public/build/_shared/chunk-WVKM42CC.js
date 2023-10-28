import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs
var import_react10 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/core/MantineProvider/suppress-nextjs-warning.mjs
function suppressNextjsWarning() {
  const originalError = console.error;
  console.error = (...args) => {
    if (args.length > 1 && typeof args[0] === "string" && args[0].toLowerCase().includes("extra attributes from the server") && typeof args[1] === "string" && args[1].toLowerCase().includes("data-mantine-color-scheme"))
      ;
    else {
      originalError(...args);
    }
  };
}

// node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs
var import_react = __toESM(require_react(), 1);
var MantineContext = (0, import_react.createContext)(null);
function useMantineContext() {
  const ctx = (0, import_react.useContext)(MantineContext);
  if (!ctx) {
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  }
  return ctx;
}
function useMantineCssVariablesResolver() {
  return useMantineContext().cssVariablesResolver;
}
function useMantineClassNamesPrefix() {
  return useMantineContext().classNamesPrefix;
}
function useMantineStyleNonce() {
  return useMantineContext().getStyleNonce;
}

// node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/is-mantine-color-scheme.mjs
function isMantineColorScheme(value) {
  return value === "auto" || value === "dark" || value === "light";
}

// node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/local-storage-manager.mjs
function localStorageColorSchemeManager({
  key = "mantine-color-scheme-value"
} = {}) {
  let handleStorageEvent;
  return {
    get: (defaultValue) => {
      if (typeof window === "undefined") {
        return defaultValue;
      }
      try {
        const storedColorScheme = window.localStorage.getItem(key);
        return isMantineColorScheme(storedColorScheme) ? storedColorScheme : defaultValue;
      } catch (e) {
        return defaultValue;
      }
    },
    set: (value) => {
      try {
        window.localStorage.setItem(key, value);
      } catch (error) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          error
        );
      }
    },
    subscribe: (onUpdate) => {
      handleStorageEvent = (event) => {
        if (event.storageArea === window.localStorage && event.key === key) {
          isMantineColorScheme(event.newValue) && onUpdate(event.newValue);
        }
      };
      window.addEventListener("storage", handleStorageEvent);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", handleStorageEvent);
    },
    clear: () => {
      window.localStorage.removeItem(key);
    }
  };
}

// node_modules/@mantine/core/esm/core/MantineProvider/use-mantine-color-scheme/use-provider-color-scheme.mjs
var import_react6 = __toESM(require_react(), 1);

// node_modules/@mantine/hooks/esm/use-media-query/use-media-query.mjs
var import_react2 = __toESM(require_react(), 1);
function attachMediaListener(query, callback) {
  try {
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
}
function getInitialValue(query, initialValue) {
  if (typeof initialValue === "boolean") {
    return initialValue;
  }
  if (typeof window !== "undefined" && "matchMedia" in window) {
    return window.matchMedia(query).matches;
  }
  return false;
}
function useMediaQuery(query, initialValue, { getInitialValueInEffect } = {
  getInitialValueInEffect: true
}) {
  const [matches, setMatches] = (0, import_react2.useState)(
    getInitialValueInEffect ? initialValue : getInitialValue(query, initialValue)
  );
  const queryRef = (0, import_react2.useRef)();
  (0, import_react2.useEffect)(() => {
    if ("matchMedia" in window) {
      queryRef.current = window.matchMedia(query);
      setMatches(queryRef.current.matches);
      return attachMediaListener(queryRef.current, (event) => setMatches(event.matches));
    }
    return void 0;
  }, [query]);
  return matches;
}

// node_modules/@mantine/hooks/esm/use-color-scheme/use-color-scheme.mjs
function useColorScheme(initialValue, options) {
  return useMediaQuery("(prefers-color-scheme: dark)", initialValue === "dark", options) ? "dark" : "light";
}

// node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs
var import_react3 = __toESM(require_react(), 1);
var useIsomorphicEffect = typeof document !== "undefined" ? import_react3.useLayoutEffect : import_react3.useEffect;

// node_modules/@mantine/hooks/esm/use-window-event/use-window-event.mjs
var import_react4 = __toESM(require_react(), 1);
function useWindowEvent(type, listener, options) {
  (0, import_react4.useEffect)(() => {
    window.addEventListener(type, listener, options);
    return () => window.removeEventListener(type, listener, options);
  }, [type, listener]);
}

// node_modules/@mantine/hooks/esm/use-disclosure/use-disclosure.mjs
var import_react5 = __toESM(require_react(), 1);
function useDisclosure(initialState = false, callbacks) {
  const { onOpen, onClose } = callbacks || {};
  const [opened, setOpened] = (0, import_react5.useState)(initialState);
  const open = (0, import_react5.useCallback)(() => {
    setOpened((isOpened) => {
      if (!isOpened) {
        onOpen == null ? void 0 : onOpen();
        return true;
      }
      return isOpened;
    });
  }, [onOpen]);
  const close = (0, import_react5.useCallback)(() => {
    setOpened((isOpened) => {
      if (isOpened) {
        onClose == null ? void 0 : onClose();
        return false;
      }
      return isOpened;
    });
  }, [onClose]);
  const toggle = (0, import_react5.useCallback)(() => {
    opened ? close() : open();
  }, [close, open, opened]);
  return [opened, { open, close, toggle }];
}

// node_modules/@mantine/hooks/esm/index.mjs
"use client";

// node_modules/@mantine/core/esm/core/MantineProvider/use-mantine-color-scheme/use-provider-color-scheme.mjs
function setColorSchemeAttribute(colorScheme, getRootElement) {
  var _a;
  const computedColorScheme = colorScheme !== "auto" ? colorScheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (_a = getRootElement()) == null ? void 0 : _a.setAttribute("data-mantine-color-scheme", computedColorScheme);
}
function useProviderColorScheme({
  manager,
  defaultColorScheme,
  getRootElement,
  forceColorScheme
}) {
  const media = (0, import_react6.useRef)();
  const [value, setValue] = (0, import_react6.useState)(() => manager.get(defaultColorScheme));
  const colorSchemeValue = forceColorScheme || value;
  const setColorScheme = (0, import_react6.useCallback)(
    (colorScheme) => {
      if (!forceColorScheme) {
        setColorSchemeAttribute(colorScheme, getRootElement);
        setValue(colorScheme);
        manager.set(colorScheme);
      }
    },
    [manager.set, colorSchemeValue, forceColorScheme]
  );
  const clearColorScheme = (0, import_react6.useCallback)(() => {
    setValue(defaultColorScheme);
    setColorSchemeAttribute(defaultColorScheme, getRootElement);
    manager.clear();
  }, [manager.clear, defaultColorScheme]);
  (0, import_react6.useEffect)(() => {
    manager.subscribe(setColorScheme);
    return manager.unsubscribe;
  }, [manager.subscribe, manager.unsubscribe]);
  useIsomorphicEffect(() => {
    setColorSchemeAttribute(manager.get(defaultColorScheme), getRootElement);
  }, []);
  (0, import_react6.useEffect)(() => {
    var _a;
    if (forceColorScheme) {
      setColorSchemeAttribute(forceColorScheme, getRootElement);
      return () => {
      };
    }
    media.current = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (event) => {
      if (value === "auto") {
        setColorSchemeAttribute(event.matches ? "dark" : "light", getRootElement);
      }
    };
    (_a = media.current) == null ? void 0 : _a.addEventListener("change", listener);
    return () => {
      var _a2;
      return (_a2 = media.current) == null ? void 0 : _a2.removeEventListener("change", listener);
    };
  }, [value, forceColorScheme]);
  return { colorScheme: colorSchemeValue, setColorScheme, clearColorScheme };
}

// node_modules/@mantine/core/esm/core/MantineProvider/use-respect-reduce-motion/use-respect-reduce-motion.mjs
function useRespectReduceMotion({
  respectReducedMotion,
  getRootElement
}) {
  useIsomorphicEffect(() => {
    var _a;
    if (respectReducedMotion) {
      (_a = getRootElement()) == null ? void 0 : _a.setAttribute("data-respect-reduced-motion", "true");
    }
  }, [respectReducedMotion]);
}

// node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs
var import_react7 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/core/MantineProvider/default-colors.mjs
var DEFAULT_COLORS = {
  dark: [
    "#C1C2C5",
    "#A6A7AB",
    "#909296",
    "#5c5f66",
    "#373A40",
    "#2C2E33",
    "#25262b",
    "#1A1B1E",
    "#141517",
    "#101113"
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529"
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a"
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d"
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c"
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285"
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b"
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e"
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d"
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f"
  ]
};

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs
function getPrimaryShade(theme, colorScheme) {
  if (typeof theme.primaryShade === "number") {
    return theme.primaryShade;
  }
  if (colorScheme === "dark") {
    return theme.primaryShade.dark;
  }
  return theme.primaryShade.light;
}

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs
function parseThemeColor({
  color,
  theme,
  colorScheme
}) {
  if (typeof color !== "string") {
    throw new Error(`[@mantine/core] Failed to parse color. Instead got ${typeof color}`);
  }
  if (color === "white" || color === "black") {
    return {
      color,
      value: color === "white" ? theme.white : theme.black,
      shade: void 0,
      isThemeColor: false,
      variable: `--mantine-color-${color}`
    };
  }
  const [_color, shade] = color.split(".");
  const colorShade = shade ? Number(shade) : void 0;
  const isThemeColor = _color in theme.colors;
  if (isThemeColor) {
    return {
      color: _color,
      value: colorShade !== void 0 ? theme.colors[_color][colorShade] : theme.colors[_color][getPrimaryShade(theme, colorScheme || "light")],
      shade: colorShade,
      isThemeColor,
      variable: shade ? `--mantine-color-${_color}-${colorShade}` : `--mantine-color-${_color}-filled`
    };
  }
  return {
    color,
    value: color,
    isThemeColor,
    shade: colorShade,
    variable: void 0
  };
}

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs
function getThemeColor(color, theme) {
  const parsed = parseThemeColor({ color: color || theme.primaryColor, theme });
  return parsed.variable ? `var(${parsed.variable})` : color;
}

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-gradient/get-gradient.mjs
function getGradient(gradient, theme) {
  const merged = {
    from: (gradient == null ? void 0 : gradient.from) || theme.defaultGradient.from,
    to: (gradient == null ? void 0 : gradient.to) || theme.defaultGradient.to,
    deg: (gradient == null ? void 0 : gradient.deg) || theme.defaultGradient.deg || 0
  };
  const fromColor = getThemeColor(merged.from, theme);
  const toColor = getThemeColor(merged.to, theme);
  return `linear-gradient(${merged.deg}deg, ${fromColor} 0%, ${toColor} 100%)`;
}

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs
function isHexColor(hex) {
  const HEX_REGEXP = /^#?([0-9A-F]{3}){1,2}$/i;
  return HEX_REGEXP.test(hex);
}
function hexToRgba(color) {
  let hexString = color.replace("#", "");
  if (hexString.length === 3) {
    const shorthandHex = hexString.split("");
    hexString = [
      shorthandHex[0],
      shorthandHex[0],
      shorthandHex[1],
      shorthandHex[1],
      shorthandHex[2],
      shorthandHex[2]
    ].join("");
  }
  const parsed = parseInt(hexString, 16);
  const r2 = parsed >> 16 & 255;
  const g = parsed >> 8 & 255;
  const b = parsed & 255;
  return {
    r: r2,
    g,
    b,
    a: 1
  };
}
function rgbStringToRgba(color) {
  const [r2, g, b, a] = color.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: r2, g, b, a: a || 1 };
}
function hslStringToRgba(hslaString) {
  const hslaRegex = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i;
  const matches = hslaString.match(hslaRegex);
  if (!matches) {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  }
  const h = parseInt(matches[1], 10);
  const s = parseInt(matches[2], 10) / 100;
  const l = parseInt(matches[3], 10) / 100;
  const a = matches[5] ? parseFloat(matches[5]) : void 0;
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const huePrime = h / 60;
  const x = chroma * (1 - Math.abs(huePrime % 2 - 1));
  const m = l - chroma / 2;
  let r2;
  let g;
  let b;
  if (huePrime >= 0 && huePrime < 1) {
    r2 = chroma;
    g = x;
    b = 0;
  } else if (huePrime >= 1 && huePrime < 2) {
    r2 = x;
    g = chroma;
    b = 0;
  } else if (huePrime >= 2 && huePrime < 3) {
    r2 = 0;
    g = chroma;
    b = x;
  } else if (huePrime >= 3 && huePrime < 4) {
    r2 = 0;
    g = x;
    b = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    r2 = x;
    g = 0;
    b = chroma;
  } else {
    r2 = chroma;
    g = 0;
    b = x;
  }
  return {
    r: Math.round((r2 + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
    a: a || 1
  };
}
function toRgba(color) {
  if (isHexColor(color)) {
    return hexToRgba(color);
  }
  if (color.startsWith("rgb")) {
    return rgbStringToRgba(color);
  }
  if (color.startsWith("hsl")) {
    return hslStringToRgba(color);
  }
  return {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/darken/darken.mjs
function darken(color, alpha) {
  if (color.startsWith("var(")) {
    return color;
  }
  const { r: r2, g, b, a } = toRgba(color);
  const f = 1 - alpha;
  const dark = (input) => Math.round(input * f);
  return `rgba(${dark(r2)}, ${dark(g)}, ${dark(b)}, ${a})`;
}

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs
function rgba(color, alpha) {
  if (typeof color !== "string" || alpha > 1 || alpha < 0) {
    return "rgba(0, 0, 0, 1)";
  }
  const { r: r2, g, b } = toRgba(color);
  return `rgba(${r2}, ${g}, ${b}, ${alpha})`;
}

// node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs
function scaleRem(remValue) {
  return `calc(${remValue} * var(--mantine-scale))`;
}
function createConverter(units, { shouldScale = false } = {}) {
  return (value) => {
    if (value === 0 || value === "0") {
      return "0";
    }
    if (typeof value === "number") {
      const val = `${value / 16}${units}`;
      return shouldScale ? scaleRem(val) : val;
    }
    if (typeof value === "string") {
      if (value.includes("calc(") || value.includes("var(")) {
        return value;
      }
      if (value.includes(units)) {
        return shouldScale ? scaleRem(value) : value;
      }
      const replaced = value.replace("px", "");
      if (!Number.isNaN(Number(replaced))) {
        const val = `${Number(replaced) / 16}${units}`;
        return shouldScale ? scaleRem(val) : val;
      }
    }
    return value;
  };
}
var rem = createConverter("rem", { shouldScale: true });
var em = createConverter("em");

// node_modules/@mantine/core/esm/core/MantineProvider/color-functions/default-variant-colors-resolver/default-variant-colors-resolver.mjs
var defaultVariantColorsResolver = ({
  color,
  theme,
  variant,
  gradient
}) => {
  const parsed = parseThemeColor({ color, theme });
  if (variant === "filled") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--mantine-color-${color}-filled)`,
          hover: `var(--mantine-color-${color}-filled-hover)`,
          color: "var(--mantine-color-white)",
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        hover: `var(--mantine-color-${parsed.color}-${parsed.shade === 9 ? 8 : parsed.shade + 1})`,
        color: "var(--mantine-color-white)",
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: color,
      hover: darken(color, 0.1),
      color: "var(--mantine-color-white)",
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "light") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--mantine-color-${color}-light)`,
          hover: `var(--mantine-color-${color}-light-hover)`,
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      const parsedColor = theme.colors[parsed.color][parsed.shade];
      return {
        background: rgba(parsedColor, 0.1),
        hover: rgba(parsedColor, 0.12),
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: rgba(color, 0.1),
      hover: rgba(color, 0.12),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "outline") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--mantine-color-${color}-outline-hover)`,
          color: `var(--mantine-color-${color}-outline)`,
          border: `${rem(1)} solid var(--mantine-color-${color}-outline)`
        };
      }
      return {
        background: "transparent",
        hover: rgba(theme.colors[parsed.color][parsed.shade], 0.05),
        color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        border: `${rem(1)} solid var(--mantine-color-${parsed.color}-${parsed.shade})`
      };
    }
    return {
      background: "transparent",
      hover: rgba(color, 0.05),
      color,
      border: `${rem(1)} solid ${color}`
    };
  }
  if (variant === "subtle") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--mantine-color-${color}-light-hover)`,
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      const parsedColor = theme.colors[parsed.color][parsed.shade];
      return {
        background: "transparent",
        hover: rgba(parsedColor, 0.12),
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: rgba(color, 0.12),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "transparent") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: "transparent",
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: "transparent",
        hover: "transparent",
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: "transparent",
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "white") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "var(--mantine-color-white)",
          hover: darken(theme.white, 0.01),
          color: `var(--mantine-color-${color}-filled)`,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: "var(--mantine-color-white)",
        hover: darken(theme.white, 0.01),
        color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        border: `${rem(1)} solid transparent`
      };
    }
    return {
      background: "var(--mantine-color-white)",
      hover: darken(theme.white, 0.01),
      color,
      border: `${rem(1)} solid transparent`
    };
  }
  if (variant === "gradient") {
    return {
      background: getGradient(gradient, theme),
      hover: getGradient(gradient, theme),
      color: "var(--mantine-color-white)",
      border: "none"
    };
  }
  if (variant === "default") {
    return {
      background: "var(--mantine-color-default)",
      hover: "var(--mantine-color-default-hover)",
      color: "var(--mantine-color-default-color)",
      border: `${rem(1)} solid var(--mantine-color-default-border)`
    };
  }
  return {};
};

// node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs
var DEFAULT_FONT_FAMILY = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji";
var DEFAULT_THEME = {
  scale: 1,
  fontSmoothing: true,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: DEFAULT_COLORS,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: defaultVariantColorsResolver,
  fontFamily: DEFAULT_FONT_FAMILY,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: false,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontWeight: "700",
    sizes: {
      h1: { fontSize: rem(34), lineHeight: "1.3" },
      h2: { fontSize: rem(26), lineHeight: "1.35" },
      h3: { fontSize: rem(22), lineHeight: "1.4" },
      h4: { fontSize: rem(18), lineHeight: "1.45" },
      h5: { fontSize: rem(16), lineHeight: "1.5" },
      h6: { fontSize: rem(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: rem(2),
    sm: rem(4),
    md: rem(8),
    lg: rem(16),
    xl: rem(32)
  },
  spacing: {
    xs: rem(10),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), 0 ${rem(1)} ${rem(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(10)} ${rem(
      15
    )} ${rem(-5)}, rgba(0, 0, 0, 0.04) 0 ${rem(7)} ${rem(7)} ${rem(-5)}`,
    md: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(20)} ${rem(
      25
    )} ${rem(-5)}, rgba(0, 0, 0, 0.04) 0 ${rem(10)} ${rem(10)} ${rem(-5)}`,
    lg: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(28)} ${rem(
      23
    )} ${rem(-7)}, rgba(0, 0, 0, 0.04) 0 ${rem(12)} ${rem(12)} ${rem(-7)}`,
    xl: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(36)} ${rem(
      28
    )} ${rem(-7)}, rgba(0, 0, 0, 0.04) 0 ${rem(17)} ${rem(17)} ${rem(-7)}`
  },
  other: {},
  components: {}
};

// node_modules/@mantine/core/esm/core/utils/deep-merge/deep-merge.mjs
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function deepMerge(target, source) {
  const result = __spreadValues({}, target);
  const _source = source;
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(_source[key])) {
        if (!(key in target)) {
          result[key] = _source[key];
        } else {
          result[key] = deepMerge(result[key], _source[key]);
        }
      } else {
        result[key] = _source[key];
      }
    });
  }
  return result;
}

// node_modules/@mantine/core/esm/core/MantineProvider/merge-mantine-theme/merge-mantine-theme.mjs
var INVALID_PRIMARY_COLOR_ERROR = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more \u2013 https://mantine.dev/theming/colors/#primary-color";
var INVALID_PRIMARY_SHADE_ERROR = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function isValidPrimaryShade(shade) {
  if (shade < 0 || shade > 9) {
    return false;
  }
  return parseInt(shade.toString(), 10) === shade;
}
function validateMantineTheme(theme) {
  if (!(theme.primaryColor in theme.colors)) {
    throw new Error(INVALID_PRIMARY_COLOR_ERROR);
  }
  if (typeof theme.primaryShade === "object") {
    if (!isValidPrimaryShade(theme.primaryShade.dark) || !isValidPrimaryShade(theme.primaryShade.light)) {
      throw new Error(INVALID_PRIMARY_SHADE_ERROR);
    }
  }
  if (typeof theme.primaryShade === "number" && !isValidPrimaryShade(theme.primaryShade)) {
    throw new Error(INVALID_PRIMARY_SHADE_ERROR);
  }
}
function mergeMantineTheme(currentTheme, themeOverride) {
  var _a;
  if (!themeOverride) {
    validateMantineTheme(currentTheme);
    return currentTheme;
  }
  const result = deepMerge(currentTheme, themeOverride);
  if (themeOverride.fontFamily && !((_a = themeOverride.headings) == null ? void 0 : _a.fontFamily)) {
    result.headings.fontFamily = themeOverride.fontFamily;
  }
  validateMantineTheme(result);
  return result;
}

// node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs
var MantineThemeContext = (0, import_react7.createContext)(null);
var useSafeMantineTheme = () => (0, import_react7.useContext)(MantineThemeContext) || DEFAULT_THEME;
function useMantineTheme() {
  const ctx = (0, import_react7.useContext)(MantineThemeContext);
  if (!ctx) {
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  }
  return ctx;
}
function MantineThemeProvider({
  theme,
  children,
  inherit = true
}) {
  const parentTheme = useSafeMantineTheme();
  const mergedTheme = (0, import_react7.useMemo)(
    () => mergeMantineTheme(inherit ? parentTheme : DEFAULT_THEME, theme),
    [theme, parentTheme, inherit]
  );
  return /* @__PURE__ */ import_react7.default.createElement(MantineThemeContext.Provider, { value: mergedTheme }, children);
}
MantineThemeProvider.displayName = "@mantine/core/MantineThemeProvider";

// node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/MantineCssVariables.mjs
var import_react8 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/css-variables-object-to-string.mjs
function cssVariablesObjectToString(variables) {
  return Object.entries(variables).map(([name, value]) => `${name}: ${value};`).join("");
}

// node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/wrap-with-selector.mjs
function wrapWithSelector(selectors, code) {
  const _selectors = Array.isArray(selectors) ? selectors : [selectors];
  return _selectors.reduce((acc, selector) => `${selector}{${acc}}`, code);
}

// node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/convert-css-variables.mjs
function convertCssVariables(input, selector) {
  const sharedVariables = cssVariablesObjectToString(input.variables);
  const shared = sharedVariables ? wrapWithSelector(selector, sharedVariables) : "";
  const dark = cssVariablesObjectToString(input.dark);
  const darkForced = dark ? wrapWithSelector(`${selector}[data-mantine-color-scheme="dark"]`, dark) : "";
  const light = cssVariablesObjectToString(input.light);
  const lightForced = light ? wrapWithSelector(`${selector}[data-mantine-color-scheme="light"]`, light) : "";
  return `${shared}${darkForced}${lightForced}`;
}

// node_modules/@mantine/core/esm/core/utils/keys/keys.mjs
function keys(object) {
  return Object.keys(object);
}

// node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/default-css-variables-resolver.mjs
function assignSizeVariables(variables, sizes, name) {
  keys(sizes).forEach(
    (size) => Object.assign(variables, { [`--mantine-${name}-${size}`]: sizes[size] })
  );
}
var defaultCssVariablesResolver = (theme) => {
  const darkPrimaryShade = getPrimaryShade(theme, "dark");
  const lightPrimaryShade = getPrimaryShade(theme, "light");
  const defaultRadius = theme.defaultRadius in theme.radius ? theme.radius[theme.defaultRadius] : rem(theme.defaultRadius);
  const result = {
    variables: {
      "--mantine-scale": theme.scale.toString(),
      "--mantine-cursor-type": theme.cursorType,
      "--mantine-webkit-font-smoothing": theme.fontSmoothing ? "antialiased" : "unset",
      "--mantine-color-scheme": "light dark",
      "--mantine-moz-font-smoothing": theme.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": theme.white,
      "--mantine-color-black": theme.black,
      "--mantine-line-height": theme.lineHeights.md,
      "--mantine-font-family": theme.fontFamily,
      "--mantine-font-family-monospace": theme.fontFamilyMonospace,
      "--mantine-font-family-headings": theme.headings.fontFamily,
      "--mantine-heading-font-weight": theme.headings.fontWeight,
      "--mantine-radius-default": defaultRadius,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${theme.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${theme.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${theme.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${theme.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${theme.primaryColor}-light-color)`
    },
    light: {
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": theme.black,
      "--mantine-color-body": theme.white,
      "--mantine-color-error": theme.colors.red[6],
      "--mantine-color-placeholder": theme.colors.gray[5],
      "--mantine-color-anchor": theme.colors[theme.primaryColor][lightPrimaryShade],
      "--mantine-color-default": theme.white,
      "--mantine-color-default-hover": theme.colors.gray[0],
      "--mantine-color-default-color": theme.black,
      "--mantine-color-default-border": theme.colors.gray[4]
    },
    dark: {
      "--mantine-color-bright": "var(--mantine-color-white)",
      "--mantine-color-text": "var(--mantine-color-dark-0)",
      "--mantine-color-body": theme.colors.dark[7],
      "--mantine-color-error": theme.colors.red[9],
      "--mantine-color-placeholder": theme.colors.dark[3],
      "--mantine-color-anchor": theme.colors[theme.primaryColor][4],
      "--mantine-color-default": theme.colors.dark[6],
      "--mantine-color-default-hover": theme.colors.dark[5],
      "--mantine-color-default-color": theme.white,
      "--mantine-color-default-border": theme.colors.dark[4]
    }
  };
  assignSizeVariables(result.variables, theme.breakpoints, "breakpoint");
  assignSizeVariables(result.variables, theme.spacing, "spacing");
  assignSizeVariables(result.variables, theme.fontSizes, "font-size");
  assignSizeVariables(result.variables, theme.lineHeights, "line-height");
  assignSizeVariables(result.variables, theme.shadows, "shadow");
  assignSizeVariables(result.variables, theme.radius, "radius");
  keys(theme.colors).forEach((color) => {
    theme.colors[color].forEach((shade, index) => {
      result.variables[`--mantine-color-${color}-${index}`] = shade;
    });
    const lightFilledHover = lightPrimaryShade === 9 ? theme.colors[color][8] : theme.colors[color][lightPrimaryShade + 1];
    const darkFilledHover = darkPrimaryShade === 9 ? theme.colors[color][8] : theme.colors[color][darkPrimaryShade + 1];
    result.light["--mantine-color-dimmed"] = "var(--mantine-color-gray-6)";
    result.light[`--mantine-color-${color}-filled`] = theme.colors[color][lightPrimaryShade];
    result.light[`--mantine-color-${color}-filled-hover`] = lightFilledHover;
    result.light[`--mantine-color-${color}-light`] = rgba(
      theme.colors[color][lightPrimaryShade],
      0.1
    );
    result.light[`--mantine-color-${color}-light-hover`] = rgba(
      theme.colors[color][lightPrimaryShade],
      0.12
    );
    result.light[`--mantine-color-${color}-light-color`] = theme.colors[color][lightPrimaryShade];
    result.light[`--mantine-color-${color}-outline`] = theme.colors[color][lightPrimaryShade];
    result.light[`--mantine-color-${color}-outline-hover`] = rgba(
      theme.colors[color][lightPrimaryShade],
      0.05
    );
    result.dark["--mantine-color-dimmed"] = "var(--mantine-color-dark-2)";
    result.dark[`--mantine-color-${color}-filled`] = theme.colors[color][darkPrimaryShade];
    result.dark[`--mantine-color-${color}-filled-hover`] = darkFilledHover;
    result.dark[`--mantine-color-${color}-light`] = rgba(
      theme.colors[color][Math.max(0, darkPrimaryShade - 2)],
      0.15
    );
    result.dark[`--mantine-color-${color}-light-hover`] = rgba(
      theme.colors[color][Math.max(0, darkPrimaryShade - 2)],
      0.2
    );
    result.dark[`--mantine-color-${color}-light-color`] = theme.colors[color][Math.max(darkPrimaryShade - 5, 0)];
    result.dark[`--mantine-color-${color}-outline`] = theme.colors[color][Math.max(darkPrimaryShade - 4, 0)];
    result.dark[`--mantine-color-${color}-outline-hover`] = rgba(
      theme.colors[color][Math.max(darkPrimaryShade - 4, 0)],
      0.05
    );
  });
  const headings2 = theme.headings.sizes;
  keys(headings2).forEach((heading) => {
    result.variables[`--mantine-${heading}-font-size`] = headings2[heading].fontSize;
    result.variables[`--mantine-${heading}-line-height`] = headings2[heading].lineHeight;
    result.variables[`--mantine-${heading}-font-weight`] = headings2[heading].fontWeight || theme.headings.fontWeight;
  });
  return result;
};

// node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-merged-variables.mjs
function getMergedVariables({ theme, generator }) {
  const defaultResolver = defaultCssVariablesResolver(theme);
  const providerGenerator = generator == null ? void 0 : generator(theme);
  return providerGenerator ? deepMerge(defaultResolver, providerGenerator) : defaultResolver;
}

// node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/remove-default-variables.mjs
var defaultCssVariables = defaultCssVariablesResolver(DEFAULT_THEME);
function removeDefaultVariables(input) {
  const cleaned = {
    variables: {},
    light: {},
    dark: {}
  };
  keys(input.variables).forEach((key) => {
    if (defaultCssVariables.variables[key] !== input.variables[key]) {
      cleaned.variables[key] = input.variables[key];
    }
  });
  keys(input.light).forEach((key) => {
    if (defaultCssVariables.light[key] !== input.light[key]) {
      cleaned.light[key] = input.light[key];
    }
  });
  keys(input.dark).forEach((key) => {
    if (defaultCssVariables.dark[key] !== input.dark[key]) {
      cleaned.dark[key] = input.dark[key];
    }
  });
  return cleaned;
}

// node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/MantineCssVariables.mjs
function getColorSchemeCssVariables(selector) {
  return `
  ${selector}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${selector}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function MantineCssVariables({ cssVariablesSelector }) {
  const theme = useMantineTheme();
  const nonce = useMantineStyleNonce();
  const generator = useMantineCssVariablesResolver();
  const mergedVariables = getMergedVariables({ theme, generator });
  const shouldCleanVariables = cssVariablesSelector === ":root";
  const cleanedVariables = shouldCleanVariables ? removeDefaultVariables(mergedVariables) : mergedVariables;
  const css = convertCssVariables(cleanedVariables, cssVariablesSelector);
  if (css) {
    return /* @__PURE__ */ import_react8.default.createElement(
      "style",
      {
        "data-mantine-styles": true,
        nonce: nonce == null ? void 0 : nonce(),
        dangerouslySetInnerHTML: {
          __html: `${css}${shouldCleanVariables ? "" : getColorSchemeCssVariables(cssVariablesSelector)}`
        }
      }
    );
  }
  return null;
}
MantineCssVariables.displayName = "@mantine/CssVariables";

// node_modules/@mantine/core/esm/core/MantineProvider/MantineClasses/MantineClasses.mjs
var import_react9 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/core/utils/units-converters/px.mjs
function getTransformedScaledValue(value) {
  var _a;
  if (typeof value !== "string" || !value.includes("var(--mantine-scale)")) {
    return value;
  }
  return (_a = value.match(/^calc\((.*?)\)$/)) == null ? void 0 : _a[1].split("*")[0].trim();
}
function px(value) {
  const transformedValue = getTransformedScaledValue(value);
  if (typeof transformedValue === "number") {
    return transformedValue;
  }
  if (typeof transformedValue === "string") {
    if (transformedValue.includes("calc") || transformedValue.includes("var")) {
      return transformedValue;
    }
    if (transformedValue.includes("px")) {
      return Number(transformedValue.replace("px", ""));
    }
    if (transformedValue.includes("rem")) {
      return Number(transformedValue.replace("rem", "")) * 16;
    }
    if (transformedValue.includes("em")) {
      return Number(transformedValue.replace("em", "")) * 16;
    }
    return Number(transformedValue);
  }
  return NaN;
}

// node_modules/@mantine/core/esm/core/MantineProvider/MantineClasses/MantineClasses.mjs
function MantineClasses() {
  const theme = useMantineTheme();
  const nonce = useMantineStyleNonce();
  const classes11 = keys(theme.breakpoints).reduce((acc, breakpoint) => {
    const pxValue = px(theme.breakpoints[breakpoint]);
    return `${acc}@media (max-width: ${em(
      pxValue - 0.1
    )}) {.mantine-visible-from-${breakpoint} {display: none !important;}}@media (min-width: ${em(
      pxValue
    )}) {.mantine-hidden-from-${breakpoint} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ import_react9.default.createElement(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: nonce == null ? void 0 : nonce(),
      dangerouslySetInnerHTML: { __html: classes11 }
    }
  );
}

// node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs
suppressNextjsWarning();
function MantineProvider({
  theme,
  children,
  getStyleNonce,
  withCssVariables = true,
  cssVariablesSelector = ":root",
  classNamesPrefix = "mantine",
  colorSchemeManager = localStorageColorSchemeManager(),
  defaultColorScheme = "light",
  getRootElement = () => document.documentElement,
  cssVariablesResolver,
  forceColorScheme
}) {
  const { colorScheme, setColorScheme, clearColorScheme } = useProviderColorScheme({
    defaultColorScheme,
    forceColorScheme,
    manager: colorSchemeManager,
    getRootElement
  });
  useRespectReduceMotion({
    respectReducedMotion: (theme == null ? void 0 : theme.respectReducedMotion) || false,
    getRootElement
  });
  return /* @__PURE__ */ import_react10.default.createElement(
    MantineContext.Provider,
    {
      value: {
        colorSchemeManager,
        colorScheme,
        setColorScheme,
        clearColorScheme,
        getRootElement,
        classNamesPrefix,
        getStyleNonce,
        cssVariablesResolver,
        cssVariablesSelector
      }
    },
    /* @__PURE__ */ import_react10.default.createElement(MantineThemeProvider, { theme }, withCssVariables && /* @__PURE__ */ import_react10.default.createElement(MantineCssVariables, { cssVariablesSelector }), /* @__PURE__ */ import_react10.default.createElement(MantineClasses, null), children)
  );
}
MantineProvider.displayName = "@mantine/core/MantineProvider";

// node_modules/@mantine/core/esm/core/MantineProvider/ColorSchemeScript/ColorSchemeScript.mjs
var import_react11 = __toESM(require_react(), 1);
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var getScript = ({
  defaultColorScheme,
  localStorageKey,
  forceColorScheme
}) => forceColorScheme ? `document.documentElement.setAttribute("data-mantine-color-scheme", '${forceColorScheme}');` : `try {
  var _colorScheme = window.localStorage.getItem("${localStorageKey}");
  var colorScheme = _colorScheme === "light" || _colorScheme === "dark" || _colorScheme === "auto" ? _colorScheme : "${defaultColorScheme}";
  var computedColorScheme = colorScheme !== "auto" ? colorScheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.setAttribute("data-mantine-color-scheme", computedColorScheme);
} catch (e) {}
`;
function ColorSchemeScript(_a) {
  var _b = _a, {
    defaultColorScheme = "light",
    localStorageKey = "mantine-color-scheme-value",
    forceColorScheme
  } = _b, others = __objRest(_b, [
    "defaultColorScheme",
    "localStorageKey",
    "forceColorScheme"
  ]);
  const _defaultColorScheme = ["light", "dark", "auto"].includes(defaultColorScheme) ? defaultColorScheme : "light";
  return /* @__PURE__ */ import_react11.default.createElement(
    "script",
    __spreadProps(__spreadValues2({}, others), {
      "data-mantine-script": true,
      dangerouslySetInnerHTML: {
        __html: getScript({
          defaultColorScheme: _defaultColorScheme,
          localStorageKey,
          forceColorScheme
        })
      }
    })
  );
}

// node_modules/@mantine/core/esm/components/Flex/Flex.mjs
var import_react16 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Flex/flex-props.mjs
var FLEX_STYLE_PROPS_DATA = {
  gap: { type: "spacing", property: "gap" },
  rowGap: { type: "spacing", property: "rowGap" },
  columnGap: { type: "spacing", property: "columnGap" },
  align: { type: "identity", property: "alignItems" },
  justify: { type: "identity", property: "justifyContent" },
  wrap: { type: "identity", property: "flexWrap" },
  direction: { type: "identity", property: "flexDirection" }
};

// node_modules/@mantine/core/esm/components/Flex/Flex.module.mjs
var classes = { "root": "m-8bffd616" };
var Flex_module_default = classes;

// node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs
var import_react12 = __toESM(require_react(), 1);
function useRandomClassName() {
  const id = (0, import_react12.useId)().replace(/:/g, "");
  return `__m__-${id}`;
}

// node_modules/@mantine/core/esm/core/Box/style-props/resolvers/color-resolver/color-resolver.mjs
function colorResolver(color, theme) {
  const parsedColor = parseThemeColor({ color, theme });
  if (parsedColor.color === "dimmed") {
    return "var(--mantine-color-dimmed)";
  }
  if (parsedColor.color === "bright") {
    return "var(--mantine-color-bright)";
  }
  return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
}

// node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-size-resolver/font-size-resolver.mjs
function fontSizeResolver(value, theme) {
  if (typeof value === "string" && value in theme.fontSizes) {
    return `var(--mantine-font-size-${value})`;
  }
  if (typeof value === "number") {
    return rem(value);
  }
  if (typeof value === "string") {
    return rem(value);
  }
  return value;
}

// node_modules/@mantine/core/esm/core/Box/style-props/resolvers/spacing-resolver/spacing-resolver.mjs
function spacingResolver(value, theme) {
  if (typeof value === "number") {
    return rem(value);
  }
  if (typeof value === "string") {
    const mod = value.replace("-", "");
    if (!(mod in theme.spacing)) {
      return rem(value);
    }
    const variable = `--mantine-spacing-${mod}`;
    return value.startsWith("-") ? `calc(var(${variable}) * -1)` : `var(${variable})`;
  }
  return value;
}

// node_modules/@mantine/core/esm/core/Box/style-props/resolvers/identity-resolver/identity-resolver.mjs
function identityResolver(value) {
  return value;
}

// node_modules/@mantine/core/esm/core/Box/style-props/resolvers/size-resolver/size-resolver.mjs
function sizeResolver(value) {
  if (typeof value === "number") {
    return rem(value);
  }
  return value;
}

// node_modules/@mantine/core/esm/core/Box/style-props/resolvers/line-height-resolver/line-height-resolver.mjs
function lineHeightResolver(value, theme) {
  if (typeof value === "string" && value in theme.fontSizes) {
    return `var(--mantine-line-height-${value})`;
  }
  return value;
}

// node_modules/@mantine/core/esm/core/Box/style-props/resolvers/index.mjs
var resolvers = {
  color: colorResolver,
  fontSize: fontSizeResolver,
  spacing: spacingResolver,
  identity: identityResolver,
  size: sizeResolver,
  lineHeight: lineHeightResolver
};

// node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/sort-media-queries.mjs
var __defProp3 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols3 = Object.getOwnPropertySymbols;
var __hasOwnProp3 = Object.prototype.hasOwnProperty;
var __propIsEnum3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp3.call(b, prop))
      __defNormalProp3(a, prop, b[prop]);
  if (__getOwnPropSymbols3)
    for (var prop of __getOwnPropSymbols3(b)) {
      if (__propIsEnum3.call(b, prop))
        __defNormalProp3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
var __objRest2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp3.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols3)
    for (var prop of __getOwnPropSymbols3(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum3.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function replaceMediaQuery(query) {
  return query.replace("(min-width: ", "").replace("em)", "");
}
function sortMediaQueries(_a) {
  var _b = _a, {
    media
  } = _b, props = __objRest2(_b, [
    "media"
  ]);
  const breakpoints = Object.keys(media);
  const sortedMedia = breakpoints.sort((a, b) => Number(replaceMediaQuery(a)) - Number(replaceMediaQuery(b))).map((query) => ({ query, styles: media[query] }));
  return __spreadProps2(__spreadValues3({}, props), { media: sortedMedia });
}

// node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs
var __defProp4 = Object.defineProperty;
var __defProps3 = Object.defineProperties;
var __getOwnPropDescs3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols4 = Object.getOwnPropertySymbols;
var __hasOwnProp4 = Object.prototype.hasOwnProperty;
var __propIsEnum4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp4 = (obj, key, value) => key in obj ? __defProp4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp4.call(b, prop))
      __defNormalProp4(a, prop, b[prop]);
  if (__getOwnPropSymbols4)
    for (var prop of __getOwnPropSymbols4(b)) {
      if (__propIsEnum4.call(b, prop))
        __defNormalProp4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps3 = (a, b) => __defProps3(a, __getOwnPropDescs3(b));
function hasResponsiveStyles(styleProp) {
  if (typeof styleProp !== "object" || styleProp === null) {
    return false;
  }
  const breakpoints = Object.keys(styleProp);
  if (breakpoints.length === 1 && breakpoints[0] === "base") {
    return false;
  }
  return true;
}
function getBaseValue(value) {
  if (typeof value === "object" && value !== null) {
    if ("base" in value) {
      return value.base;
    }
    return void 0;
  }
  return value;
}
function getBreakpointKeys(value) {
  if (typeof value === "object" && value !== null) {
    return keys(value).filter((key) => key !== "base");
  }
  return [];
}
function getBreakpointValue(value, breakpoint) {
  if (typeof value === "object" && value !== null && breakpoint in value) {
    return value[breakpoint];
  }
  return value;
}
function parseStyleProps({
  styleProps,
  data,
  theme
}) {
  return sortMediaQueries(
    keys(styleProps).reduce(
      (acc, styleProp) => {
        if (styleProp === "hiddenFrom" || styleProp === "visibleFrom") {
          return acc;
        }
        const propertyData = data[styleProp];
        const properties = Array.isArray(propertyData.property) ? propertyData.property : [propertyData.property];
        const baseValue = getBaseValue(styleProps[styleProp]);
        if (!hasResponsiveStyles(styleProps[styleProp])) {
          properties.forEach((property) => {
            acc.inlineStyles[property] = resolvers[propertyData.type](baseValue, theme);
          });
          return acc;
        }
        acc.hasResponsiveStyles = true;
        const breakpoints = getBreakpointKeys(styleProps[styleProp]);
        properties.forEach((property) => {
          if (baseValue) {
            acc.styles[property] = resolvers[propertyData.type](baseValue, theme);
          }
          breakpoints.forEach((breakpoint) => {
            const bp = `(min-width: ${theme.breakpoints[breakpoint]})`;
            acc.media[bp] = __spreadProps3(__spreadValues4({}, acc.media[bp]), {
              [property]: resolvers[propertyData.type](
                getBreakpointValue(styleProps[styleProp], breakpoint),
                theme
              )
            });
          });
        });
        return acc;
      },
      {
        hasResponsiveStyles: false,
        styles: {},
        inlineStyles: {},
        media: {}
      }
    )
  );
}

// node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs
var import_react13 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/core/utils/camel-to-kebab-case/camel-to-kebab-case.mjs
function camelToKebabCase(value) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

// node_modules/@mantine/core/esm/core/InlineStyles/css-object-to-string/css-object-to-string.mjs
function cssObjectToString(css) {
  return keys(css).reduce(
    (acc, rule) => css[rule] !== void 0 ? `${acc}${camelToKebabCase(rule)}:${css[rule]};` : acc,
    ""
  ).trim();
}

// node_modules/@mantine/core/esm/core/InlineStyles/styles-to-string/styles-to-string.mjs
function stylesToString({ selector, styles, media }) {
  const baseStyles = styles ? cssObjectToString(styles) : "";
  const mediaQueryStyles = !Array.isArray(media) ? [] : media.map((item) => `@media${item.query}{${selector}{${cssObjectToString(item.styles)}}}`);
  return `${baseStyles ? `${selector}{${baseStyles}}` : ""}${mediaQueryStyles.join("")}`.trim();
}

// node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs
function InlineStyles({ selector, styles, media }) {
  const nonce = useMantineStyleNonce();
  return /* @__PURE__ */ import_react13.default.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: nonce == null ? void 0 : nonce(),
      dangerouslySetInnerHTML: { __html: stylesToString({ selector, styles, media }) }
    }
  );
}

// node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs
function filterProps(props) {
  return Object.keys(props).reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
}

// node_modules/@mantine/core/esm/core/factory/factory.mjs
var import_react14 = __toESM(require_react(), 1);
function identity(value) {
  return value;
}
function factory(ui) {
  const Component = (0, import_react14.forwardRef)(ui);
  Component.extend = identity;
  return Component;
}

// node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var __defProp5 = Object.defineProperty;
var __getOwnPropSymbols5 = Object.getOwnPropertySymbols;
var __hasOwnProp5 = Object.prototype.hasOwnProperty;
var __propIsEnum5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp5 = (obj, key, value) => key in obj ? __defProp5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp5.call(b, prop))
      __defNormalProp5(a, prop, b[prop]);
  if (__getOwnPropSymbols5)
    for (var prop of __getOwnPropSymbols5(b)) {
      if (__propIsEnum5.call(b, prop))
        __defNormalProp5(a, prop, b[prop]);
    }
  return a;
};
function useProps(component, defaultProps18, props) {
  var _a;
  const theme = useMantineTheme();
  const contextPropsPayload = (_a = theme.components[component]) == null ? void 0 : _a.defaultProps;
  const contextProps = typeof contextPropsPayload === "function" ? contextPropsPayload(theme) : contextPropsPayload;
  return __spreadValues5(__spreadValues5(__spreadValues5({}, defaultProps18), contextProps), filterProps(props));
}

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-static-class-names/get-static-class-names.mjs
function getStaticClassNames({
  themeName,
  classNamesPrefix,
  selector
}) {
  return themeName.map((n) => `${classNamesPrefix}-${n}-${selector}`);
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs
var EMPTY_CLASS_NAMES = {};
function mergeClassNames(objects) {
  const merged = {};
  objects.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (merged[key]) {
        merged[key] = clsx_default(merged[key], value);
      } else {
        merged[key] = value;
      }
    });
  });
  return merged;
}
function resolveClassNames({ theme, classNames, props, stylesCtx }) {
  const arrayClassNames = Array.isArray(classNames) ? classNames : [classNames];
  const resolvedClassNames = arrayClassNames.map(
    (item) => typeof item === "function" ? item(theme, props, stylesCtx) : item || EMPTY_CLASS_NAMES
  );
  return mergeClassNames(resolvedClassNames);
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-theme-class-names/get-theme-class-names.mjs
function getThemeClassNames({
  themeName,
  theme,
  selector,
  props,
  stylesCtx
}) {
  return themeName.map(
    (n) => {
      var _a, _b;
      return (_b = resolveClassNames({
        theme,
        classNames: (_a = theme.components[n]) == null ? void 0 : _a.classNames,
        props,
        stylesCtx
      })) == null ? void 0 : _b[selector];
    }
  );
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-global-class-names/get-global-class-names.mjs
var FOCUS_CLASS_NAMES = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function getGlobalClassNames({ theme, options, unstyled }) {
  return clsx_default(
    (options == null ? void 0 : options.focusable) && !unstyled && (theme.focusClassName || FOCUS_CLASS_NAMES[theme.focusRing]),
    (options == null ? void 0 : options.active) && !unstyled && theme.activeClassName
  );
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-variant-class-name/get-variant-class-name.mjs
function getVariantClassName({
  options,
  classes: classes11,
  selector,
  unstyled
}) {
  return (options == null ? void 0 : options.variant) && !unstyled ? classes11[`${selector}--${options.variant}`] : void 0;
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-root-class-name/get-root-class-name.mjs
function getRootClassName({ rootSelector, selector, className }) {
  return rootSelector === selector ? className : void 0;
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-selector-class-name/get-selector-class-name.mjs
function getSelectorClassName({ selector, classes: classes11, unstyled }) {
  return unstyled ? void 0 : classes11[selector];
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-resolved-class-names/get-resolved-class-names.mjs
function getResolvedClassNames({
  selector,
  stylesCtx,
  theme,
  classNames,
  props
}) {
  return resolveClassNames({ theme, classNames, props, stylesCtx })[selector];
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-options-class-names/get-options-class-names.mjs
function getOptionsClassNames({
  selector,
  stylesCtx,
  options,
  props,
  theme
}) {
  return resolveClassNames({
    theme,
    classNames: options == null ? void 0 : options.classNames,
    props: (options == null ? void 0 : options.props) || props,
    stylesCtx
  })[selector];
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-class-name.mjs
function getClassName({
  theme,
  options,
  themeName,
  selector,
  classNamesPrefix,
  classNames,
  classes: classes11,
  unstyled,
  className,
  rootSelector,
  props,
  stylesCtx
}) {
  return clsx_default(
    getGlobalClassNames({ theme, options, unstyled }),
    getThemeClassNames({ theme, themeName, selector, props, stylesCtx }),
    getVariantClassName({ options, classes: classes11, selector, unstyled }),
    getResolvedClassNames({ selector, stylesCtx, theme, classNames, props }),
    getOptionsClassNames({ selector, stylesCtx, options, props, theme }),
    getRootClassName({ rootSelector, selector, className }),
    getSelectorClassName({ selector, classes: classes11, unstyled }),
    getStaticClassNames({ themeName, classNamesPrefix, selector }),
    options == null ? void 0 : options.className
  );
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs
var __defProp6 = Object.defineProperty;
var __getOwnPropSymbols6 = Object.getOwnPropertySymbols;
var __hasOwnProp6 = Object.prototype.hasOwnProperty;
var __propIsEnum6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp6 = (obj, key, value) => key in obj ? __defProp6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp6.call(b, prop))
      __defNormalProp6(a, prop, b[prop]);
  if (__getOwnPropSymbols6)
    for (var prop of __getOwnPropSymbols6(b)) {
      if (__propIsEnum6.call(b, prop))
        __defNormalProp6(a, prop, b[prop]);
    }
  return a;
};
function resolveStyles({ theme, styles, props, stylesCtx }) {
  const arrayStyles = Array.isArray(styles) ? styles : [styles];
  return arrayStyles.reduce((acc, style) => {
    if (typeof style === "function") {
      return __spreadValues6(__spreadValues6({}, acc), style(theme, props, stylesCtx));
    }
    return __spreadValues6(__spreadValues6({}, acc), style);
  }, {});
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-theme-styles/get-theme-styles.mjs
var __defProp7 = Object.defineProperty;
var __getOwnPropSymbols7 = Object.getOwnPropertySymbols;
var __hasOwnProp7 = Object.prototype.hasOwnProperty;
var __propIsEnum7 = Object.prototype.propertyIsEnumerable;
var __defNormalProp7 = (obj, key, value) => key in obj ? __defProp7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp7.call(b, prop))
      __defNormalProp7(a, prop, b[prop]);
  if (__getOwnPropSymbols7)
    for (var prop of __getOwnPropSymbols7(b)) {
      if (__propIsEnum7.call(b, prop))
        __defNormalProp7(a, prop, b[prop]);
    }
  return a;
};
function getThemeStyles({
  theme,
  themeName,
  props,
  stylesCtx,
  selector
}) {
  return themeName.map(
    (n) => {
      var _a;
      return resolveStyles({
        theme,
        styles: (_a = theme.components[n]) == null ? void 0 : _a.styles,
        props,
        stylesCtx
      })[selector];
    }
  ).reduce((acc, val) => __spreadValues7(__spreadValues7({}, acc), val), {});
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-style/resolve-style.mjs
var __defProp8 = Object.defineProperty;
var __getOwnPropSymbols8 = Object.getOwnPropertySymbols;
var __hasOwnProp8 = Object.prototype.hasOwnProperty;
var __propIsEnum8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp8 = (obj, key, value) => key in obj ? __defProp8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp8.call(b, prop))
      __defNormalProp8(a, prop, b[prop]);
  if (__getOwnPropSymbols8)
    for (var prop of __getOwnPropSymbols8(b)) {
      if (__propIsEnum8.call(b, prop))
        __defNormalProp8(a, prop, b[prop]);
    }
  return a;
};
function resolveStyle({ style, theme }) {
  if (Array.isArray(style)) {
    return [...style].reduce(
      (acc, item) => __spreadValues8(__spreadValues8({}, acc), resolveStyle({ style: item, theme })),
      {}
    );
  }
  if (typeof style === "function") {
    return style(theme);
  }
  if (style == null) {
    return {};
  }
  return style;
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/merge-vars.mjs
var __defProp9 = Object.defineProperty;
var __getOwnPropSymbols9 = Object.getOwnPropertySymbols;
var __hasOwnProp9 = Object.prototype.hasOwnProperty;
var __propIsEnum9 = Object.prototype.propertyIsEnumerable;
var __defNormalProp9 = (obj, key, value) => key in obj ? __defProp9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp9.call(b, prop))
      __defNormalProp9(a, prop, b[prop]);
  if (__getOwnPropSymbols9)
    for (var prop of __getOwnPropSymbols9(b)) {
      if (__propIsEnum9.call(b, prop))
        __defNormalProp9(a, prop, b[prop]);
    }
  return a;
};
function mergeVars(vars) {
  return vars.reduce((acc, current) => {
    if (current) {
      Object.keys(current).forEach((key) => {
        acc[key] = __spreadValues9(__spreadValues9({}, acc[key]), filterProps(current[key]));
      });
    }
    return acc;
  }, {});
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/resolve-vars.mjs
function resolveVars({
  vars,
  varsResolver: varsResolver9,
  theme,
  props,
  stylesCtx,
  selector,
  themeName
}) {
  var _a;
  return (_a = mergeVars([
    varsResolver9 == null ? void 0 : varsResolver9(theme, props, stylesCtx),
    ...themeName.map((name) => {
      var _a2, _b, _c;
      return (_c = (_b = (_a2 = theme.components) == null ? void 0 : _a2[name]) == null ? void 0 : _b.vars) == null ? void 0 : _c.call(_b, theme, props, stylesCtx);
    }),
    vars == null ? void 0 : vars(theme, props, stylesCtx)
  ])) == null ? void 0 : _a[selector];
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-style.mjs
var __defProp10 = Object.defineProperty;
var __getOwnPropSymbols10 = Object.getOwnPropertySymbols;
var __hasOwnProp10 = Object.prototype.hasOwnProperty;
var __propIsEnum10 = Object.prototype.propertyIsEnumerable;
var __defNormalProp10 = (obj, key, value) => key in obj ? __defProp10(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues10 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp10.call(b, prop))
      __defNormalProp10(a, prop, b[prop]);
  if (__getOwnPropSymbols10)
    for (var prop of __getOwnPropSymbols10(b)) {
      if (__propIsEnum10.call(b, prop))
        __defNormalProp10(a, prop, b[prop]);
    }
  return a;
};
function getStyle({
  theme,
  themeName,
  selector,
  options,
  props,
  stylesCtx,
  rootSelector,
  styles,
  style,
  vars,
  varsResolver: varsResolver9
}) {
  return __spreadValues10(__spreadValues10(__spreadValues10(__spreadValues10(__spreadValues10(__spreadValues10({}, getThemeStyles({ theme, themeName, props, stylesCtx, selector })), resolveStyles({ theme, styles, props, stylesCtx })[selector]), resolveStyles({ theme, styles: options == null ? void 0 : options.styles, props: (options == null ? void 0 : options.props) || props, stylesCtx })[selector]), resolveVars({ theme, props, stylesCtx, vars, varsResolver: varsResolver9, selector, themeName })), rootSelector === selector ? resolveStyle({ style, theme }) : null), resolveStyle({ style: options == null ? void 0 : options.style, theme }));
}

// node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs
function useStyles({
  name,
  classes: classes11,
  props,
  stylesCtx,
  className,
  style,
  rootSelector = "root",
  unstyled,
  classNames,
  styles,
  vars,
  varsResolver: varsResolver9
}) {
  const theme = useMantineTheme();
  const classNamesPrefix = useMantineClassNamesPrefix();
  const themeName = (Array.isArray(name) ? name : [name]).filter((n) => n);
  return (selector, options) => ({
    className: getClassName({
      theme,
      options,
      themeName,
      selector,
      classNamesPrefix,
      classNames,
      classes: classes11,
      unstyled,
      className,
      rootSelector,
      props,
      stylesCtx
    }),
    style: getStyle({
      theme,
      themeName,
      selector,
      options,
      props,
      stylesCtx,
      rootSelector,
      styles,
      style,
      vars,
      varsResolver: varsResolver9
    })
  });
}

// node_modules/@mantine/core/esm/core/Box/Box.mjs
var import_react15 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/core/Box/get-box-style/get-box-style.mjs
var __defProp11 = Object.defineProperty;
var __getOwnPropSymbols11 = Object.getOwnPropertySymbols;
var __hasOwnProp11 = Object.prototype.hasOwnProperty;
var __propIsEnum11 = Object.prototype.propertyIsEnumerable;
var __defNormalProp11 = (obj, key, value) => key in obj ? __defProp11(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues11 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp11.call(b, prop))
      __defNormalProp11(a, prop, b[prop]);
  if (__getOwnPropSymbols11)
    for (var prop of __getOwnPropSymbols11(b)) {
      if (__propIsEnum11.call(b, prop))
        __defNormalProp11(a, prop, b[prop]);
    }
  return a;
};
function mergeStyles(styles, theme) {
  if (Array.isArray(styles)) {
    return [...styles].reduce(
      (acc, item) => __spreadValues11(__spreadValues11({}, acc), mergeStyles(item, theme)),
      {}
    );
  }
  if (typeof styles === "function") {
    return styles(theme);
  }
  if (styles == null) {
    return {};
  }
  return styles;
}
function getBoxStyle({
  theme,
  style,
  vars,
  styleProps
}) {
  const _style = mergeStyles(style, theme);
  const _vars = mergeStyles(vars, theme);
  return __spreadValues11(__spreadValues11(__spreadValues11({}, _style), _vars), styleProps);
}

// node_modules/@mantine/core/esm/core/Box/get-box-mod/get-box-mod.mjs
var __defProp12 = Object.defineProperty;
var __getOwnPropSymbols12 = Object.getOwnPropertySymbols;
var __hasOwnProp12 = Object.prototype.hasOwnProperty;
var __propIsEnum12 = Object.prototype.propertyIsEnumerable;
var __defNormalProp12 = (obj, key, value) => key in obj ? __defProp12(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues12 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp12.call(b, prop))
      __defNormalProp12(a, prop, b[prop]);
  if (__getOwnPropSymbols12)
    for (var prop of __getOwnPropSymbols12(b)) {
      if (__propIsEnum12.call(b, prop))
        __defNormalProp12(a, prop, b[prop]);
    }
  return a;
};
function transformModKey(key) {
  return key.startsWith("data-") ? key : `data-${key}`;
}
function getMod(props) {
  return Object.keys(props).reduce((acc, key) => {
    const value = props[key];
    if (value === void 0 || value === "" || value === false || value === null) {
      return acc;
    }
    acc[transformModKey(key)] = props[key];
    return acc;
  }, {});
}
function getBoxMod(mod) {
  if (!mod) {
    return null;
  }
  if (typeof mod === "string") {
    return { [transformModKey(mod)]: true };
  }
  if (Array.isArray(mod)) {
    return [...mod].reduce(
      (acc, value) => __spreadValues12(__spreadValues12({}, acc), getBoxMod(value)),
      {}
    );
  }
  return getMod(mod);
}

// node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs
var __getOwnPropSymbols13 = Object.getOwnPropertySymbols;
var __hasOwnProp13 = Object.prototype.hasOwnProperty;
var __propIsEnum13 = Object.prototype.propertyIsEnumerable;
var __objRest3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp13.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols13)
    for (var prop of __getOwnPropSymbols13(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum13.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function extractStyleProps(others) {
  const _a = others, {
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    p,
    px: px2,
    py,
    pt,
    pb,
    pl,
    pr,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display,
    hiddenFrom,
    visibleFrom
  } = _a, rest = __objRest3(_a, [
    "m",
    "mx",
    "my",
    "mt",
    "mb",
    "ml",
    "mr",
    "p",
    "px",
    "py",
    "pt",
    "pb",
    "pl",
    "pr",
    "bg",
    "c",
    "opacity",
    "ff",
    "fz",
    "fw",
    "lts",
    "ta",
    "lh",
    "fs",
    "tt",
    "td",
    "w",
    "miw",
    "maw",
    "h",
    "mih",
    "mah",
    "bgsz",
    "bgp",
    "bgr",
    "bga",
    "pos",
    "top",
    "left",
    "bottom",
    "right",
    "inset",
    "display",
    "hiddenFrom",
    "visibleFrom"
  ]);
  const styleProps = filterProps({
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    p,
    px: px2,
    py,
    pt,
    pb,
    pl,
    pr,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display,
    hiddenFrom,
    visibleFrom
  });
  return { styleProps, rest };
}

// node_modules/@mantine/core/esm/core/Box/style-props/style-props-data.mjs
var STYlE_PROPS_DATA = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  mx: { type: "spacing", property: ["marginRight", "marginLeft"] },
  my: { type: "spacing", property: ["marginTop", "marginBottom"] },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  px: { type: "spacing", property: ["paddingRight", "paddingLeft"] },
  py: { type: "spacing", property: ["paddingTop", "paddingBottom"] },
  bg: { type: "color", property: "background" },
  c: { type: "color", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "identity", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "identity", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" }
};

// node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs
function isNumberLike(value) {
  if (typeof value === "number") {
    return true;
  }
  if (typeof value === "string") {
    if (value.startsWith("calc(") || value.startsWith("var(")) {
      return true;
    }
    return /[0-9]/.test(value.trim().replace("-", "")[0]);
  }
  return false;
}

// node_modules/@mantine/core/esm/core/factory/create-polymorphic-component.mjs
function createPolymorphicComponent(component) {
  return component;
}

// node_modules/@mantine/core/esm/core/Box/Box.mjs
var __defProp13 = Object.defineProperty;
var __getOwnPropSymbols14 = Object.getOwnPropertySymbols;
var __hasOwnProp14 = Object.prototype.hasOwnProperty;
var __propIsEnum14 = Object.prototype.propertyIsEnumerable;
var __defNormalProp13 = (obj, key, value) => key in obj ? __defProp13(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues13 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp14.call(b, prop))
      __defNormalProp13(a, prop, b[prop]);
  if (__getOwnPropSymbols14)
    for (var prop of __getOwnPropSymbols14(b)) {
      if (__propIsEnum14.call(b, prop))
        __defNormalProp13(a, prop, b[prop]);
    }
  return a;
};
var __objRest4 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp14.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols14)
    for (var prop of __getOwnPropSymbols14(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum14.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var _Box = (0, import_react15.forwardRef)(
  (_a, ref) => {
    var _b = _a, { component, style, __vars, className, variant, mod, size, hiddenFrom, visibleFrom } = _b, others = __objRest4(_b, ["component", "style", "__vars", "className", "variant", "mod", "size", "hiddenFrom", "visibleFrom"]);
    const theme = useMantineTheme();
    const Element = component || "div";
    const { styleProps, rest } = extractStyleProps(others);
    const responsiveClassName = useRandomClassName();
    const parsedStyleProps = parseStyleProps({
      styleProps,
      theme,
      data: STYlE_PROPS_DATA
    });
    return /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, parsedStyleProps.hasResponsiveStyles && /* @__PURE__ */ import_react15.default.createElement(
      InlineStyles,
      {
        selector: `.${responsiveClassName}`,
        styles: parsedStyleProps.styles,
        media: parsedStyleProps.media
      }
    ), /* @__PURE__ */ import_react15.default.createElement(
      Element,
      __spreadValues13(__spreadValues13({
        ref,
        style: getBoxStyle({
          theme,
          style,
          vars: __vars,
          styleProps: parsedStyleProps.inlineStyles
        }),
        className: clsx_default(className, {
          [responsiveClassName]: parsedStyleProps.hasResponsiveStyles,
          [`mantine-hidden-from-${hiddenFrom}`]: hiddenFrom,
          [`mantine-visible-from-${visibleFrom}`]: visibleFrom
        }),
        "data-variant": variant,
        "data-size": isNumberLike(size) ? void 0 : size || void 0
      }, getBoxMod(mod)), rest)
    ));
  }
);
_Box.displayName = "@mantine/core/Box";
var Box = createPolymorphicComponent(_Box);

// node_modules/@mantine/core/esm/components/Flex/Flex.mjs
var __defProp14 = Object.defineProperty;
var __getOwnPropSymbols15 = Object.getOwnPropertySymbols;
var __hasOwnProp15 = Object.prototype.hasOwnProperty;
var __propIsEnum15 = Object.prototype.propertyIsEnumerable;
var __defNormalProp14 = (obj, key, value) => key in obj ? __defProp14(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues14 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp15.call(b, prop))
      __defNormalProp14(a, prop, b[prop]);
  if (__getOwnPropSymbols15)
    for (var prop of __getOwnPropSymbols15(b)) {
      if (__propIsEnum15.call(b, prop))
        __defNormalProp14(a, prop, b[prop]);
    }
  return a;
};
var __objRest5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp15.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols15)
    for (var prop of __getOwnPropSymbols15(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum15.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps = {};
var Flex = factory((_props, ref) => {
  const props = useProps("Flex", defaultProps, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    gap,
    rowGap,
    columnGap,
    align,
    justify,
    wrap,
    direction
  } = _a, others = __objRest5(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "gap",
    "rowGap",
    "columnGap",
    "align",
    "justify",
    "wrap",
    "direction"
  ]);
  const getStyles2 = useStyles({
    name: "Flex",
    classes: Flex_module_default,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars
  });
  const theme = useMantineTheme();
  const responsiveClassName = useRandomClassName();
  const parsedStyleProps = parseStyleProps({
    styleProps: { gap, rowGap, columnGap, align, justify, wrap, direction },
    theme,
    data: FLEX_STYLE_PROPS_DATA
  });
  return /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, parsedStyleProps.hasResponsiveStyles && /* @__PURE__ */ import_react16.default.createElement(
    InlineStyles,
    {
      selector: `.${responsiveClassName}`,
      styles: parsedStyleProps.styles,
      media: parsedStyleProps.media
    }
  ), /* @__PURE__ */ import_react16.default.createElement(
    Box,
    __spreadValues14(__spreadValues14({
      ref
    }, getStyles2("root", {
      className: responsiveClassName,
      style: filterProps(parsedStyleProps.inlineStyles)
    })), others)
  ));
});
Flex.classes = Flex_module_default;
Flex.displayName = "@mantine/core/Flex";

// node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var React14 = __toESM(require_react());

// node_modules/react-remove-scroll/dist/es2015/UI.js
var React10 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react17 = __toESM(require_react());
function useCallbackRef(initialValue, callback) {
  var ref = (0, import_react17.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
function useMergeRefs(refs, defaultValue) {
  return useCallbackRef(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
}

// node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/exports.js
var React9 = __toESM(require_react());
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React9.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React10.forwardRef(function(props, parentRef) {
  var ref = React10.useRef(null);
  var _a = React10.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React10.createElement(
    React10.Fragment,
    null,
    enabled && React10.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React10.cloneElement(React10.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React10.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React13 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React12 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/hook.js
var React11 = __toESM(require_react());

// node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React11.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var RemoveScrollBar = function(props) {
  var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
  var gap = React12.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React12.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React13.useRef([]);
  var touchStartRef = React13.useRef([0, 0]);
  var activeAxis = React13.useRef();
  var id = React13.useState(idCounter++)[0];
  var Style2 = React13.useState(styleSingleton)[0];
  var lastProps = React13.useRef(props);
  React13.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React13.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React13.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React13.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React13.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React13.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React13.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React13.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React13.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React13.createElement(
    React13.Fragment,
    null,
    inert ? React13.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React13.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null
  );
}

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React14.forwardRef(function(props, ref) {
  return React14.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs
var import_react18 = __toESM(require_react(), 1);
function createSafeContext(errorMessage) {
  const Context = (0, import_react18.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0, import_react18.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ import_react18.default.createElement(Context.Provider, { value }, children);
  return [Provider, useSafeContext];
}

// node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs
var elevations = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function getDefaultZIndex(level) {
  return elevations[level];
}

// node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs
function getSize(size, prefix = "size", convertToRem = true) {
  if (size === void 0) {
    return void 0;
  }
  return isNumberLike(size) ? convertToRem ? rem(size) : size : `var(--${prefix}-${size})`;
}
function getSpacing(size) {
  return getSize(size, "mantine-spacing");
}
function getRadius(size) {
  if (size === void 0) {
    return "var(--mantine-radius-default)";
  }
  return getSize(size, "mantine-radius");
}
function getFontSize(size) {
  return getSize(size, "mantine-font-size");
}
function getLineHeight(size) {
  return getSize(size, "mantine-line-height", false);
}

// node_modules/@mantine/core/esm/core/utils/get-breakpoint-value/get-breakpoint-value.mjs
function getBreakpointValue2(breakpoint, theme) {
  if (breakpoint in theme.breakpoints) {
    return px(theme.breakpoints[breakpoint]);
  }
  return px(breakpoint);
}

// node_modules/@mantine/core/esm/core/utils/get-sorted-breakpoints/get-sorted-breakpoints.mjs
function getSortedBreakpoints(breakpoints, theme) {
  const convertedBreakpoints = breakpoints.map((breakpoint) => ({
    value: breakpoint,
    px: getBreakpointValue2(breakpoint, theme)
  }));
  convertedBreakpoints.sort((a, b) => a.px - b.px);
  return convertedBreakpoints;
}

// node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
function createVarsResolver(resolver) {
  return resolver;
}

// node_modules/@mantine/core/esm/core/MantineProvider/use-mantine-color-scheme/use-mantine-color-scheme.mjs
var import_react19 = __toESM(require_react(), 1);
function disableTransition() {
  const style = document.createElement("style");
  style.innerHTML = "*, *::before, *::after {transition: none !important;}";
  style.setAttribute("data-mantine-disable-transition", "true");
  document.head.appendChild(style);
  const clear = () => document.querySelectorAll("[data-mantine-disable-transition]").forEach((element) => element.remove());
  return clear;
}
function useMantineColorScheme() {
  const clearStylesRef = (0, import_react19.useRef)();
  const timeoutRef = (0, import_react19.useRef)();
  const ctx = (0, import_react19.useContext)(MantineContext);
  if (!ctx) {
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  }
  const setColorScheme = (value) => {
    ctx.setColorScheme(value);
    clearStylesRef.current = disableTransition();
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      var _a;
      (_a = clearStylesRef.current) == null ? void 0 : _a.call(clearStylesRef);
    }, 10);
  };
  const clearColorScheme = () => {
    ctx.clearColorScheme();
    clearStylesRef.current = disableTransition();
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      var _a;
      (_a = clearStylesRef.current) == null ? void 0 : _a.call(clearStylesRef);
    }, 10);
  };
  const osColorScheme = useColorScheme("light", { getInitialValueInEffect: false });
  const computedColorScheme = ctx.colorScheme === "auto" ? osColorScheme : ctx.colorScheme;
  const toggleColorScheme = (0, import_react19.useCallback)(
    () => setColorScheme(computedColorScheme === "light" ? "dark" : "light"),
    [setColorScheme, computedColorScheme]
  );
  (0, import_react19.useEffect)(
    () => () => {
      var _a;
      (_a = clearStylesRef.current) == null ? void 0 : _a.call(clearStylesRef);
      window.clearTimeout(timeoutRef.current);
    },
    []
  );
  return {
    colorScheme: ctx.colorScheme,
    setColorScheme,
    clearColorScheme,
    toggleColorScheme
  };
}

// node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs
var import_react20 = __toESM(require_react(), 1);
function polymorphicFactory(ui) {
  const Component = (0, import_react20.forwardRef)(ui);
  Component.extend = identity;
  return Component;
}

// node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs
var import_react21 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.module.mjs
var classes2 = { "root": "m-87cf2631" };
var UnstyledButton_module_default = classes2;

// node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs
var __defProp15 = Object.defineProperty;
var __defProps4 = Object.defineProperties;
var __getOwnPropDescs4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols16 = Object.getOwnPropertySymbols;
var __hasOwnProp16 = Object.prototype.hasOwnProperty;
var __propIsEnum16 = Object.prototype.propertyIsEnumerable;
var __defNormalProp15 = (obj, key, value) => key in obj ? __defProp15(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues15 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp16.call(b, prop))
      __defNormalProp15(a, prop, b[prop]);
  if (__getOwnPropSymbols16)
    for (var prop of __getOwnPropSymbols16(b)) {
      if (__propIsEnum16.call(b, prop))
        __defNormalProp15(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps4 = (a, b) => __defProps4(a, __getOwnPropDescs4(b));
var __objRest6 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp16.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols16)
    for (var prop of __getOwnPropSymbols16(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum16.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps2 = {
  __staticSelector: "UnstyledButton"
};
var UnstyledButton = polymorphicFactory(
  (_props, ref) => {
    const props = useProps("UnstyledButton", defaultProps2, _props);
    const _a = props, {
      className,
      component = "button",
      __staticSelector,
      unstyled,
      classNames,
      styles,
      style
    } = _a, others = __objRest6(_a, [
      "className",
      "component",
      "__staticSelector",
      "unstyled",
      "classNames",
      "styles",
      "style"
    ]);
    const getStyles2 = useStyles({
      name: __staticSelector,
      props,
      classes: UnstyledButton_module_default,
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ import_react21.default.createElement(
      Box,
      __spreadValues15(__spreadProps4(__spreadValues15({}, getStyles2("root", { focusable: true })), {
        component,
        ref,
        type: component === "button" ? "button" : void 0
      }), others)
    );
  }
);
UnstyledButton.classes = UnstyledButton_module_default;
UnstyledButton.displayName = "@mantine/core/UnstyledButton";

// node_modules/@mantine/core/esm/components/Loader/Loader.mjs
var import_react25 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Loader/loaders/Bars.mjs
var import_react22 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Loader/Loader.module.mjs
var classes3 = { "root": "m-5ae2e3c", "barsLoader": "m-7a2bd4cd", "bar": "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", "dotsLoader": "m-4e3f22d7", "dot": "m-870c4af", "loader-dots-animation": "m-aac34a1", "ovalLoader": "m-b34414df", "oval-loader-animation": "m-f8e89c4b" };
var Loader_module_default = classes3;

// node_modules/@mantine/core/esm/components/Loader/loaders/Bars.mjs
var __defProp16 = Object.defineProperty;
var __defProps5 = Object.defineProperties;
var __getOwnPropDescs5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols17 = Object.getOwnPropertySymbols;
var __hasOwnProp17 = Object.prototype.hasOwnProperty;
var __propIsEnum17 = Object.prototype.propertyIsEnumerable;
var __defNormalProp16 = (obj, key, value) => key in obj ? __defProp16(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues16 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp17.call(b, prop))
      __defNormalProp16(a, prop, b[prop]);
  if (__getOwnPropSymbols17)
    for (var prop of __getOwnPropSymbols17(b)) {
      if (__propIsEnum17.call(b, prop))
        __defNormalProp16(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps5 = (a, b) => __defProps5(a, __getOwnPropDescs5(b));
var __objRest7 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp17.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols17)
    for (var prop of __getOwnPropSymbols17(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum17.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Bars = (0, import_react22.forwardRef)((_a, ref) => {
  var _b = _a, { className } = _b, others = __objRest7(_b, ["className"]);
  return /* @__PURE__ */ import_react22.default.createElement(Box, __spreadProps5(__spreadValues16({ component: "span", className: clsx_default(Loader_module_default.barsLoader, className) }, others), { ref }), /* @__PURE__ */ import_react22.default.createElement("span", { className: Loader_module_default.bar }), /* @__PURE__ */ import_react22.default.createElement("span", { className: Loader_module_default.bar }), /* @__PURE__ */ import_react22.default.createElement("span", { className: Loader_module_default.bar }));
});

// node_modules/@mantine/core/esm/components/Loader/loaders/Oval.mjs
var import_react23 = __toESM(require_react(), 1);
var __defProp17 = Object.defineProperty;
var __defProps6 = Object.defineProperties;
var __getOwnPropDescs6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols18 = Object.getOwnPropertySymbols;
var __hasOwnProp18 = Object.prototype.hasOwnProperty;
var __propIsEnum18 = Object.prototype.propertyIsEnumerable;
var __defNormalProp17 = (obj, key, value) => key in obj ? __defProp17(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues17 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp18.call(b, prop))
      __defNormalProp17(a, prop, b[prop]);
  if (__getOwnPropSymbols18)
    for (var prop of __getOwnPropSymbols18(b)) {
      if (__propIsEnum18.call(b, prop))
        __defNormalProp17(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps6 = (a, b) => __defProps6(a, __getOwnPropDescs6(b));
var __objRest8 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp18.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols18)
    for (var prop of __getOwnPropSymbols18(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum18.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Oval = (0, import_react23.forwardRef)((_a, ref) => {
  var _b = _a, { className } = _b, others = __objRest8(_b, ["className"]);
  return /* @__PURE__ */ import_react23.default.createElement(Box, __spreadProps6(__spreadValues17({ component: "span", className: clsx_default(Loader_module_default.ovalLoader, className) }, others), { ref }));
});

// node_modules/@mantine/core/esm/components/Loader/loaders/Dots.mjs
var import_react24 = __toESM(require_react(), 1);
var __defProp18 = Object.defineProperty;
var __defProps7 = Object.defineProperties;
var __getOwnPropDescs7 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols19 = Object.getOwnPropertySymbols;
var __hasOwnProp19 = Object.prototype.hasOwnProperty;
var __propIsEnum19 = Object.prototype.propertyIsEnumerable;
var __defNormalProp18 = (obj, key, value) => key in obj ? __defProp18(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues18 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp19.call(b, prop))
      __defNormalProp18(a, prop, b[prop]);
  if (__getOwnPropSymbols19)
    for (var prop of __getOwnPropSymbols19(b)) {
      if (__propIsEnum19.call(b, prop))
        __defNormalProp18(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps7 = (a, b) => __defProps7(a, __getOwnPropDescs7(b));
var __objRest9 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp19.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols19)
    for (var prop of __getOwnPropSymbols19(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum19.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var Dots = (0, import_react24.forwardRef)((_a, ref) => {
  var _b = _a, { className } = _b, others = __objRest9(_b, ["className"]);
  return /* @__PURE__ */ import_react24.default.createElement(Box, __spreadProps7(__spreadValues18({ component: "span", className: clsx_default(Loader_module_default.dotsLoader, className) }, others), { ref }), /* @__PURE__ */ import_react24.default.createElement("span", { className: Loader_module_default.dot }), /* @__PURE__ */ import_react24.default.createElement("span", { className: Loader_module_default.dot }), /* @__PURE__ */ import_react24.default.createElement("span", { className: Loader_module_default.dot }));
});

// node_modules/@mantine/core/esm/components/Loader/Loader.mjs
var __defProp19 = Object.defineProperty;
var __defProps8 = Object.defineProperties;
var __getOwnPropDescs8 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols20 = Object.getOwnPropertySymbols;
var __hasOwnProp20 = Object.prototype.hasOwnProperty;
var __propIsEnum20 = Object.prototype.propertyIsEnumerable;
var __defNormalProp19 = (obj, key, value) => key in obj ? __defProp19(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues19 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp20.call(b, prop))
      __defNormalProp19(a, prop, b[prop]);
  if (__getOwnPropSymbols20)
    for (var prop of __getOwnPropSymbols20(b)) {
      if (__propIsEnum20.call(b, prop))
        __defNormalProp19(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps8 = (a, b) => __defProps8(a, __getOwnPropDescs8(b));
var __objRest10 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp20.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols20)
    for (var prop of __getOwnPropSymbols20(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum20.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots
};
var defaultProps3 = {
  loaders: defaultLoaders,
  type: "oval"
};
var varsResolver = createVarsResolver((theme, { size, color }) => ({
  root: {
    "--loader-size": getSize(size, "loader-size"),
    "--loader-color": color ? getThemeColor(color, theme) : void 0
  }
}));
var Loader = factory((_props, ref) => {
  const props = useProps("Loader", defaultProps3, _props);
  const _a = props, {
    size,
    color,
    type,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    loaders,
    variant
  } = _a, others = __objRest10(_a, [
    "size",
    "color",
    "type",
    "vars",
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "loaders",
    "variant"
  ]);
  const getStyles2 = useStyles({
    name: "Loader",
    props,
    classes: Loader_module_default,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ import_react25.default.createElement(
    Box,
    __spreadValues19(__spreadProps8(__spreadValues19({}, getStyles2("root")), {
      ref,
      component: loaders[type],
      variant,
      size
    }), others)
  );
});
Loader.classes = Loader_module_default;
Loader.displayName = "@mantine/core/Loader";

// node_modules/@mantine/core/esm/components/Group/Group.mjs
var import_react27 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Group/filter-falsy-children/filter-falsy-children.mjs
var import_react26 = __toESM(require_react(), 1);
function filterFalsyChildren(children) {
  return import_react26.Children.toArray(children).filter(Boolean);
}

// node_modules/@mantine/core/esm/components/Group/Group.module.mjs
var classes4 = { "root": "m-4081bf90" };
var Group_module_default = classes4;

// node_modules/@mantine/core/esm/components/Group/Group.mjs
var __defProp20 = Object.defineProperty;
var __defProps9 = Object.defineProperties;
var __getOwnPropDescs9 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols21 = Object.getOwnPropertySymbols;
var __hasOwnProp21 = Object.prototype.hasOwnProperty;
var __propIsEnum21 = Object.prototype.propertyIsEnumerable;
var __defNormalProp20 = (obj, key, value) => key in obj ? __defProp20(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues20 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp21.call(b, prop))
      __defNormalProp20(a, prop, b[prop]);
  if (__getOwnPropSymbols21)
    for (var prop of __getOwnPropSymbols21(b)) {
      if (__propIsEnum21.call(b, prop))
        __defNormalProp20(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps9 = (a, b) => __defProps9(a, __getOwnPropDescs9(b));
var __objRest11 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp21.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols21)
    for (var prop of __getOwnPropSymbols21(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum21.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps4 = {
  preventGrowOverflow: true,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
};
var varsResolver2 = createVarsResolver(
  (_, { grow, preventGrowOverflow, gap, align, justify, wrap }, { childWidth }) => ({
    root: {
      "--group-child-width": grow && preventGrowOverflow ? childWidth : void 0,
      "--group-gap": getSpacing(gap),
      "--group-align": align,
      "--group-justify": justify,
      "--group-wrap": wrap
    }
  })
);
var Group = factory((_props, ref) => {
  const props = useProps("Group", defaultProps4, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    children,
    gap,
    align,
    justify,
    wrap,
    grow,
    preventGrowOverflow,
    vars,
    variant,
    __size
  } = _a, others = __objRest11(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "children",
    "gap",
    "align",
    "justify",
    "wrap",
    "grow",
    "preventGrowOverflow",
    "vars",
    "variant",
    "__size"
  ]);
  const filteredChildren = filterFalsyChildren(children);
  const childrenCount = filteredChildren.length;
  const resolvedGap = getSpacing(gap != null ? gap : "md");
  const childWidth = `calc(${100 / childrenCount}% - (${resolvedGap} - ${resolvedGap} / ${childrenCount}))`;
  const stylesCtx = { childWidth };
  const getStyles2 = useStyles({
    name: "Group",
    props,
    stylesCtx,
    className,
    style,
    classes: Group_module_default,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2
  });
  return /* @__PURE__ */ import_react27.default.createElement(
    Box,
    __spreadValues20(__spreadProps9(__spreadValues20({}, getStyles2("root")), {
      ref,
      variant,
      mod: { grow },
      size: __size
    }), others),
    filteredChildren
  );
});
Group.classes = Group_module_default;
Group.displayName = "@mantine/core/Group";

// node_modules/@mantine/core/esm/components/Anchor/Anchor.mjs
var import_react29 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Anchor/Anchor.module.mjs
var classes5 = { "root": "m-849cf0da" };
var Anchor_module_default = classes5;

// node_modules/@mantine/core/esm/components/Text/Text.mjs
var import_react28 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Text/Text.module.mjs
var classes6 = { "root": "m-b6d8b162" };
var Text_module_default = classes6;

// node_modules/@mantine/core/esm/components/Text/Text.mjs
var __defProp21 = Object.defineProperty;
var __defProps10 = Object.defineProperties;
var __getOwnPropDescs10 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols22 = Object.getOwnPropertySymbols;
var __hasOwnProp22 = Object.prototype.hasOwnProperty;
var __propIsEnum22 = Object.prototype.propertyIsEnumerable;
var __defNormalProp21 = (obj, key, value) => key in obj ? __defProp21(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues21 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp22.call(b, prop))
      __defNormalProp21(a, prop, b[prop]);
  if (__getOwnPropSymbols22)
    for (var prop of __getOwnPropSymbols22(b)) {
      if (__propIsEnum22.call(b, prop))
        __defNormalProp21(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps10 = (a, b) => __defProps10(a, __getOwnPropDescs10(b));
var __objRest12 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp22.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols22)
    for (var prop of __getOwnPropSymbols22(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum22.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function getTextTruncate(truncate) {
  if (truncate === "start") {
    return "start";
  }
  if (truncate === "end" || truncate) {
    return "end";
  }
  return void 0;
}
var defaultProps5 = {
  inherit: false
};
var varsResolver3 = createVarsResolver(
  (theme, { variant, lineClamp, gradient, size, color }) => ({
    root: {
      "--text-fz": getFontSize(size),
      "--text-lh": getLineHeight(size),
      "--text-gradient": variant === "gradient" ? getGradient(gradient, theme) : void 0,
      "--text-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0,
      "--text-color": color ? getThemeColor(color, theme) : void 0
    }
  })
);
var Text = polymorphicFactory((_props, ref) => {
  const props = useProps("Text", defaultProps5, _props);
  const _a = props, {
    lineClamp,
    truncate,
    inline,
    inherit,
    gradient,
    span,
    __staticSelector,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    variant,
    mod,
    size
  } = _a, others = __objRest12(_a, [
    "lineClamp",
    "truncate",
    "inline",
    "inherit",
    "gradient",
    "span",
    "__staticSelector",
    "vars",
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "variant",
    "mod",
    "size"
  ]);
  const getStyles2 = useStyles({
    name: ["Text", __staticSelector],
    props,
    classes: Text_module_default,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver3
  });
  return /* @__PURE__ */ import_react28.default.createElement(
    Box,
    __spreadValues21(__spreadProps10(__spreadValues21({}, getStyles2("root", { focusable: true })), {
      ref,
      component: span ? "span" : "p",
      variant,
      mod: [
        {
          "data-truncate": getTextTruncate(truncate),
          "data-line-clamp": typeof lineClamp === "number",
          "data-inline": inline,
          "data-inherit": inherit
        },
        mod
      ],
      size
    }), others)
  );
});
Text.classes = Text_module_default;
Text.displayName = "@mantine/core/Text";

// node_modules/@mantine/core/esm/components/Anchor/Anchor.mjs
var __defProp22 = Object.defineProperty;
var __defProps11 = Object.defineProperties;
var __getOwnPropDescs11 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols23 = Object.getOwnPropertySymbols;
var __hasOwnProp23 = Object.prototype.hasOwnProperty;
var __propIsEnum23 = Object.prototype.propertyIsEnumerable;
var __defNormalProp22 = (obj, key, value) => key in obj ? __defProp22(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues22 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp23.call(b, prop))
      __defNormalProp22(a, prop, b[prop]);
  if (__getOwnPropSymbols23)
    for (var prop of __getOwnPropSymbols23(b)) {
      if (__propIsEnum23.call(b, prop))
        __defNormalProp22(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps11 = (a, b) => __defProps11(a, __getOwnPropDescs11(b));
var __objRest13 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp23.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols23)
    for (var prop of __getOwnPropSymbols23(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum23.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps6 = {
  underline: "hover"
};
var Anchor = polymorphicFactory((props, ref) => {
  const _a = useProps("Anchor", defaultProps6, props), { underline, className, unstyled } = _a, others = __objRest13(_a, ["underline", "className", "unstyled"]);
  return /* @__PURE__ */ import_react29.default.createElement(
    Text,
    __spreadProps11(__spreadValues22({
      component: "a",
      ref,
      className: clsx_default({ [Anchor_module_default.root]: !unstyled }, className)
    }, others), {
      mod: { underline },
      __staticSelector: "Anchor",
      unstyled
    })
  );
});
Anchor.classes = Anchor_module_default;
Anchor.displayName = "@mantine/core/Anchor";

// node_modules/@mantine/core/esm/components/AppShell/AppShell.mjs
var import_react38 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/AppShell/AppShellNavbar/AppShellNavbar.mjs
var import_react30 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/AppShell/AppShell.context.mjs
var [AppShellProvider, useAppShellContext] = createSafeContext(
  "AppShell was not found in tree"
);

// node_modules/@mantine/core/esm/components/AppShell/AppShell.module.mjs
var classes7 = { "root": "m-89ab340", "navbar": "m-45252eee", "aside": "m-9cdde9a", "header": "m-3b16f56b", "main": "m-8983817", "footer": "m-3840c879", "section": "m-6dcfc7c7" };
var AppShell_module_default = classes7;

// node_modules/@mantine/core/esm/components/AppShell/AppShellNavbar/AppShellNavbar.mjs
var __defProp23 = Object.defineProperty;
var __defProps12 = Object.defineProperties;
var __getOwnPropDescs12 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols24 = Object.getOwnPropertySymbols;
var __hasOwnProp24 = Object.prototype.hasOwnProperty;
var __propIsEnum24 = Object.prototype.propertyIsEnumerable;
var __defNormalProp23 = (obj, key, value) => key in obj ? __defProp23(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues23 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp24.call(b, prop))
      __defNormalProp23(a, prop, b[prop]);
  if (__getOwnPropSymbols24)
    for (var prop of __getOwnPropSymbols24(b)) {
      if (__propIsEnum24.call(b, prop))
        __defNormalProp23(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps12 = (a, b) => __defProps12(a, __getOwnPropDescs12(b));
var __objRest14 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp24.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols24)
    for (var prop of __getOwnPropSymbols24(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum24.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps7 = {};
var AppShellNavbar = factory((_props, ref) => {
  const props = useProps("AppShellNavbar", defaultProps7, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars, withBorder, zIndex } = _a, others = __objRest14(_a, ["classNames", "className", "style", "styles", "unstyled", "vars", "withBorder", "zIndex"]);
  const ctx = useAppShellContext();
  if (ctx.disabled) {
    return null;
  }
  return /* @__PURE__ */ import_react30.default.createElement(
    Box,
    __spreadProps12(__spreadValues23(__spreadValues23({
      component: "nav",
      ref,
      mod: { "with-border": withBorder != null ? withBorder : ctx.withBorder }
    }, ctx.getStyles("navbar", { className, classNames, styles, style })), others), {
      __vars: {
        "--app-shell-navbar-z-index": `calc(${zIndex != null ? zIndex : ctx.zIndex} + 1)`
      }
    })
  );
});
AppShellNavbar.classes = AppShell_module_default;
AppShellNavbar.displayName = "@mantine/core/AppShellNavbar";

// node_modules/@mantine/core/esm/components/AppShell/AppShellHeader/AppShellHeader.mjs
var import_react31 = __toESM(require_react(), 1);
var __defProp24 = Object.defineProperty;
var __defProps13 = Object.defineProperties;
var __getOwnPropDescs13 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols25 = Object.getOwnPropertySymbols;
var __hasOwnProp25 = Object.prototype.hasOwnProperty;
var __propIsEnum25 = Object.prototype.propertyIsEnumerable;
var __defNormalProp24 = (obj, key, value) => key in obj ? __defProp24(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues24 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp25.call(b, prop))
      __defNormalProp24(a, prop, b[prop]);
  if (__getOwnPropSymbols25)
    for (var prop of __getOwnPropSymbols25(b)) {
      if (__propIsEnum25.call(b, prop))
        __defNormalProp24(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps13 = (a, b) => __defProps13(a, __getOwnPropDescs13(b));
var __objRest15 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp25.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols25)
    for (var prop of __getOwnPropSymbols25(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum25.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps8 = {};
var AppShellHeader = factory((_props, ref) => {
  var _b;
  const props = useProps("AppShellHeader", defaultProps8, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars, withBorder, zIndex } = _a, others = __objRest15(_a, ["classNames", "className", "style", "styles", "unstyled", "vars", "withBorder", "zIndex"]);
  const ctx = useAppShellContext();
  if (ctx.disabled) {
    return null;
  }
  return /* @__PURE__ */ import_react31.default.createElement(
    Box,
    __spreadProps13(__spreadValues24(__spreadValues24({
      component: "header",
      ref,
      mod: { "with-border": withBorder != null ? withBorder : ctx.withBorder }
    }, ctx.getStyles("header", {
      className: clsx_default(Combination_default.classNames.zeroRight, className),
      classNames,
      styles,
      style
    })), others), {
      __vars: { "--app-shell-header-z-index": (_b = zIndex != null ? zIndex : ctx.zIndex) == null ? void 0 : _b.toString() }
    })
  );
});
AppShellHeader.classes = AppShell_module_default;
AppShellHeader.displayName = "@mantine/core/AppShellHeader";

// node_modules/@mantine/core/esm/components/AppShell/AppShellFooter/AppShellFooter.mjs
var import_react32 = __toESM(require_react(), 1);
var __defProp25 = Object.defineProperty;
var __defProps14 = Object.defineProperties;
var __getOwnPropDescs14 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols26 = Object.getOwnPropertySymbols;
var __hasOwnProp26 = Object.prototype.hasOwnProperty;
var __propIsEnum26 = Object.prototype.propertyIsEnumerable;
var __defNormalProp25 = (obj, key, value) => key in obj ? __defProp25(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues25 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp26.call(b, prop))
      __defNormalProp25(a, prop, b[prop]);
  if (__getOwnPropSymbols26)
    for (var prop of __getOwnPropSymbols26(b)) {
      if (__propIsEnum26.call(b, prop))
        __defNormalProp25(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps14 = (a, b) => __defProps14(a, __getOwnPropDescs14(b));
var __objRest16 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp26.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols26)
    for (var prop of __getOwnPropSymbols26(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum26.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps9 = {};
var AppShellFooter = factory((_props, ref) => {
  var _b;
  const props = useProps("AppShellFooter", defaultProps9, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars, withBorder, zIndex } = _a, others = __objRest16(_a, ["classNames", "className", "style", "styles", "unstyled", "vars", "withBorder", "zIndex"]);
  const ctx = useAppShellContext();
  if (ctx.disabled) {
    return null;
  }
  return /* @__PURE__ */ import_react32.default.createElement(
    Box,
    __spreadProps14(__spreadValues25(__spreadValues25({
      component: "footer",
      ref,
      mod: { "with-border": withBorder != null ? withBorder : ctx.withBorder }
    }, ctx.getStyles("footer", {
      className: clsx_default(Combination_default.classNames.zeroRight, className),
      classNames,
      styles,
      style
    })), others), {
      __vars: { "--app-shell-footer-z-index": (_b = zIndex != null ? zIndex : ctx.zIndex) == null ? void 0 : _b.toString() }
    })
  );
});
AppShellFooter.classes = AppShell_module_default;
AppShellFooter.displayName = "@mantine/core/AppShellFooter";

// node_modules/@mantine/core/esm/components/AppShell/AppShellAside/AppShellAside.mjs
var import_react33 = __toESM(require_react(), 1);
var __defProp26 = Object.defineProperty;
var __defProps15 = Object.defineProperties;
var __getOwnPropDescs15 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols27 = Object.getOwnPropertySymbols;
var __hasOwnProp27 = Object.prototype.hasOwnProperty;
var __propIsEnum27 = Object.prototype.propertyIsEnumerable;
var __defNormalProp26 = (obj, key, value) => key in obj ? __defProp26(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues26 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp27.call(b, prop))
      __defNormalProp26(a, prop, b[prop]);
  if (__getOwnPropSymbols27)
    for (var prop of __getOwnPropSymbols27(b)) {
      if (__propIsEnum27.call(b, prop))
        __defNormalProp26(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps15 = (a, b) => __defProps15(a, __getOwnPropDescs15(b));
var __objRest17 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp27.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols27)
    for (var prop of __getOwnPropSymbols27(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum27.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps10 = {};
var AppShellAside = factory((_props, ref) => {
  const props = useProps("AppShellAside", defaultProps10, _props);
  const _a = props, { classNames, className, style, styles, unstyled, vars, withBorder, zIndex } = _a, others = __objRest17(_a, ["classNames", "className", "style", "styles", "unstyled", "vars", "withBorder", "zIndex"]);
  const ctx = useAppShellContext();
  if (ctx.disabled) {
    return null;
  }
  return /* @__PURE__ */ import_react33.default.createElement(
    Box,
    __spreadProps15(__spreadValues26(__spreadValues26({
      component: "aside",
      ref,
      mod: { "with-border": withBorder != null ? withBorder : ctx.withBorder }
    }, ctx.getStyles("aside", { className, classNames, styles, style })), others), {
      __vars: {
        "--app-shell-aside-z-index": `calc(${zIndex != null ? zIndex : ctx.zIndex} + 1)`
      }
    })
  );
});
AppShellAside.classes = AppShell_module_default;
AppShellAside.displayName = "@mantine/core/AppShellAside";

// node_modules/@mantine/core/esm/components/AppShell/AppShellMain/AppShellMain.mjs
var import_react34 = __toESM(require_react(), 1);
var __defProp27 = Object.defineProperty;
var __getOwnPropSymbols28 = Object.getOwnPropertySymbols;
var __hasOwnProp28 = Object.prototype.hasOwnProperty;
var __propIsEnum28 = Object.prototype.propertyIsEnumerable;
var __defNormalProp27 = (obj, key, value) => key in obj ? __defProp27(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues27 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp28.call(b, prop))
      __defNormalProp27(a, prop, b[prop]);
  if (__getOwnPropSymbols28)
    for (var prop of __getOwnPropSymbols28(b)) {
      if (__propIsEnum28.call(b, prop))
        __defNormalProp27(a, prop, b[prop]);
    }
  return a;
};
var __objRest18 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp28.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols28)
    for (var prop of __getOwnPropSymbols28(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum28.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps11 = {};
var AppShellMain = factory((_props, ref) => {
  const props = useProps("AppShellMain", defaultProps11, _props);
  const _a = props, { classNames, className, style, styles, vars } = _a, others = __objRest18(_a, ["classNames", "className", "style", "styles", "vars"]);
  const ctx = useAppShellContext();
  return /* @__PURE__ */ import_react34.default.createElement(
    Box,
    __spreadValues27(__spreadValues27({
      component: "main",
      ref
    }, ctx.getStyles("main", { className, style, classNames, styles })), others)
  );
});
AppShellMain.classes = AppShell_module_default;
AppShellMain.displayName = "@mantine/core/AppShellMain";

// node_modules/@mantine/core/esm/components/AppShell/AppShellSection/AppShellSection.mjs
var import_react35 = __toESM(require_react(), 1);
var __defProp28 = Object.defineProperty;
var __getOwnPropSymbols29 = Object.getOwnPropertySymbols;
var __hasOwnProp29 = Object.prototype.hasOwnProperty;
var __propIsEnum29 = Object.prototype.propertyIsEnumerable;
var __defNormalProp28 = (obj, key, value) => key in obj ? __defProp28(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues28 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp29.call(b, prop))
      __defNormalProp28(a, prop, b[prop]);
  if (__getOwnPropSymbols29)
    for (var prop of __getOwnPropSymbols29(b)) {
      if (__propIsEnum29.call(b, prop))
        __defNormalProp28(a, prop, b[prop]);
    }
  return a;
};
var __objRest19 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp29.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols29)
    for (var prop of __getOwnPropSymbols29(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum29.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps12 = {};
var AppShellSection = polymorphicFactory((_props, ref) => {
  const props = useProps("AppShellSection", defaultProps12, _props);
  const _a = props, { classNames, className, style, styles, vars, grow } = _a, others = __objRest19(_a, ["classNames", "className", "style", "styles", "vars", "grow"]);
  const ctx = useAppShellContext();
  return /* @__PURE__ */ import_react35.default.createElement(
    Box,
    __spreadValues28(__spreadValues28({
      ref,
      mod: { grow }
    }, ctx.getStyles("section", { className, style, classNames, styles })), others)
  );
});
AppShellSection.classes = AppShell_module_default;
AppShellSection.displayName = "@mantine/core/AppShellSection";

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/AppShellMediaStyles.mjs
var import_react36 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/is-responsive-size/is-responsive-size.mjs
function isResponsiveSize(size) {
  if (typeof size !== "object" || size === null) {
    return false;
  }
  if (Object.keys(size).length === 1 && "base" in size) {
    return false;
  }
  return true;
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/is-primitive-size/is-primitive-size.mjs
function isPrimitiveSize(size) {
  const isBaseSize = typeof size === "object" && size !== null && typeof size.base !== "undefined" && Object.keys(size).length === 1;
  return typeof size === "number" || typeof size === "string" || isBaseSize;
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-base-size/get-base-size.mjs
function getBaseSize(size) {
  if (typeof size === "object") {
    return size.base;
  }
  return size;
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-aside-variables/assign-aside-variables.mjs
function assignAsideVariables({
  baseStyles,
  minMediaStyles,
  maxMediaStyles,
  aside,
  theme
}) {
  var _a, _b, _c;
  const asideWidth = aside == null ? void 0 : aside.width;
  const collapsedAsideTransform = "translateX(var(--app-shell-aside-width))";
  const collapsedAsideTransformRtl = "translateX(calc(var(--app-shell-aside-width) * -1))";
  if ((aside == null ? void 0 : aside.breakpoint) && !((_a = aside == null ? void 0 : aside.collapsed) == null ? void 0 : _a.mobile)) {
    maxMediaStyles[aside == null ? void 0 : aside.breakpoint] = maxMediaStyles[aside == null ? void 0 : aside.breakpoint] || {};
    maxMediaStyles[aside == null ? void 0 : aside.breakpoint]["--app-shell-aside-width"] = "100%";
    maxMediaStyles[aside == null ? void 0 : aside.breakpoint]["--app-shell-aside-offset"] = "0px";
  }
  if (isPrimitiveSize(asideWidth)) {
    const baseSize = rem(getBaseSize(asideWidth));
    baseStyles["--app-shell-aside-width"] = baseSize;
    baseStyles["--app-shell-aside-offset"] = baseSize;
  }
  if (isResponsiveSize(asideWidth)) {
    if (typeof asideWidth.base !== "undefined") {
      baseStyles["--app-shell-aside-width"] = rem(asideWidth.base);
      baseStyles["--app-shell-aside-offset"] = rem(asideWidth.base);
    }
    keys(asideWidth).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-aside-width"] = rem(asideWidth[key]);
        minMediaStyles[key]["--app-shell-aside-offset"] = rem(asideWidth[key]);
      }
    });
  }
  if ((_b = aside == null ? void 0 : aside.collapsed) == null ? void 0 : _b.desktop) {
    const breakpointValue = aside.breakpoint;
    minMediaStyles[breakpointValue] = minMediaStyles[breakpointValue] || {};
    minMediaStyles[breakpointValue]["--app-shell-aside-transform"] = collapsedAsideTransform;
    minMediaStyles[breakpointValue]["--app-shell-aside-transform-rtl"] = collapsedAsideTransformRtl;
    minMediaStyles[breakpointValue]["--app-shell-aside-offset"] = "0px !important";
  }
  if ((_c = aside == null ? void 0 : aside.collapsed) == null ? void 0 : _c.mobile) {
    const breakpointValue = getBreakpointValue2(aside.breakpoint, theme) - 0.1;
    maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
    maxMediaStyles[breakpointValue]["--app-shell-aside-width"] = "100%";
    maxMediaStyles[breakpointValue]["--app-shell-aside-offset"] = "0px";
    maxMediaStyles[breakpointValue]["--app-shell-aside-transform"] = collapsedAsideTransform;
    maxMediaStyles[breakpointValue]["--app-shell-aside-transform-rtl"] = collapsedAsideTransformRtl;
  }
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-footer-variables/assign-footer-variables.mjs
function assignFooterVariables({
  baseStyles,
  minMediaStyles,
  footer
}) {
  var _a;
  const footerHeight = footer == null ? void 0 : footer.height;
  const collapsedFooterTransform = "translateY(var(--app-shell-footer-height))";
  const shouldOffset = (_a = footer == null ? void 0 : footer.offset) != null ? _a : true;
  if (isPrimitiveSize(footerHeight)) {
    const baseSize = rem(getBaseSize(footerHeight));
    baseStyles["--app-shell-footer-height"] = baseSize;
    if (shouldOffset) {
      baseStyles["--app-shell-footer-offset"] = baseSize;
    }
  }
  if (isResponsiveSize(footerHeight)) {
    if (typeof footerHeight.base !== "undefined") {
      baseStyles["--app-shell-footer-height"] = rem(footerHeight.base);
      if (shouldOffset) {
        baseStyles["--app-shell-footer-offset"] = rem(footerHeight.base);
      }
    }
    keys(footerHeight).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-footer-height"] = rem(footerHeight[key]);
        if (shouldOffset) {
          minMediaStyles[key]["--app-shell-footer-offset"] = rem(footerHeight[key]);
        }
      }
    });
  }
  if (footer == null ? void 0 : footer.collapsed) {
    baseStyles["--app-shell-footer-transform"] = collapsedFooterTransform;
    baseStyles["--app-shell-footer-offset"] = "0px !important";
  }
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-header-variables/assign-header-variables.mjs
function assignHeaderVariables({
  baseStyles,
  minMediaStyles,
  header
}) {
  var _a;
  const headerHeight = header == null ? void 0 : header.height;
  const collapsedHeaderTransform = "translateY(calc(var(--app-shell-header-height) * -1))";
  const shouldOffset = (_a = header == null ? void 0 : header.offset) != null ? _a : true;
  if (isPrimitiveSize(headerHeight)) {
    const baseSize = rem(getBaseSize(headerHeight));
    baseStyles["--app-shell-header-height"] = baseSize;
    if (shouldOffset) {
      baseStyles["--app-shell-header-offset"] = baseSize;
    }
  }
  if (isResponsiveSize(headerHeight)) {
    if (typeof headerHeight.base !== "undefined") {
      baseStyles["--app-shell-header-height"] = rem(headerHeight.base);
      if (shouldOffset) {
        baseStyles["--app-shell-header-offset"] = rem(headerHeight.base);
      }
    }
    keys(headerHeight).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-header-height"] = rem(headerHeight[key]);
        if (shouldOffset) {
          minMediaStyles[key]["--app-shell-header-offset"] = rem(headerHeight[key]);
        }
      }
    });
  }
  if (header == null ? void 0 : header.collapsed) {
    baseStyles["--app-shell-header-transform"] = collapsedHeaderTransform;
    baseStyles["--app-shell-header-offset"] = "0px !important";
  }
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-navbar-variables/assign-navbar-variables.mjs
function assignNavbarVariables({
  baseStyles,
  minMediaStyles,
  maxMediaStyles,
  navbar,
  theme
}) {
  var _a, _b, _c;
  const navbarWidth = navbar == null ? void 0 : navbar.width;
  const collapsedNavbarTransform = "translateX(calc(var(--app-shell-navbar-width) * -1))";
  const collapsedNavbarTransformRtl = "translateX(var(--app-shell-navbar-width))";
  if ((navbar == null ? void 0 : navbar.breakpoint) && !((_a = navbar == null ? void 0 : navbar.collapsed) == null ? void 0 : _a.mobile)) {
    maxMediaStyles[navbar == null ? void 0 : navbar.breakpoint] = maxMediaStyles[navbar == null ? void 0 : navbar.breakpoint] || {};
    maxMediaStyles[navbar == null ? void 0 : navbar.breakpoint]["--app-shell-navbar-width"] = "100%";
    maxMediaStyles[navbar == null ? void 0 : navbar.breakpoint]["--app-shell-navbar-offset"] = "0px";
  }
  if (isPrimitiveSize(navbarWidth)) {
    const baseSize = rem(getBaseSize(navbarWidth));
    baseStyles["--app-shell-navbar-width"] = baseSize;
    baseStyles["--app-shell-navbar-offset"] = baseSize;
  }
  if (isResponsiveSize(navbarWidth)) {
    if (typeof navbarWidth.base !== "undefined") {
      baseStyles["--app-shell-navbar-width"] = rem(navbarWidth.base);
      baseStyles["--app-shell-navbar-offset"] = rem(navbarWidth.base);
    }
    keys(navbarWidth).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-navbar-width"] = rem(navbarWidth[key]);
        minMediaStyles[key]["--app-shell-navbar-offset"] = rem(navbarWidth[key]);
      }
    });
  }
  if ((_b = navbar == null ? void 0 : navbar.collapsed) == null ? void 0 : _b.desktop) {
    const breakpointValue = navbar.breakpoint;
    minMediaStyles[breakpointValue] = minMediaStyles[breakpointValue] || {};
    minMediaStyles[breakpointValue]["--app-shell-navbar-transform"] = collapsedNavbarTransform;
    minMediaStyles[breakpointValue]["--app-shell-navbar-transform-rtl"] = collapsedNavbarTransformRtl;
    minMediaStyles[breakpointValue]["--app-shell-navbar-offset"] = "0px !important";
  }
  if ((_c = navbar == null ? void 0 : navbar.collapsed) == null ? void 0 : _c.mobile) {
    const breakpointValue = getBreakpointValue2(navbar.breakpoint, theme) - 0.1;
    maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
    maxMediaStyles[breakpointValue]["--app-shell-navbar-width"] = "100%";
    maxMediaStyles[breakpointValue]["--app-shell-navbar-offset"] = "0px";
    maxMediaStyles[breakpointValue]["--app-shell-navbar-transform"] = collapsedNavbarTransform;
    maxMediaStyles[breakpointValue]["--app-shell-navbar-transform-rtl"] = collapsedNavbarTransformRtl;
  }
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-padding-value/get-padding-value.mjs
function getPaddingValue(padding) {
  return Number(padding) === 0 ? "0px" : getSpacing(padding);
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/assign-padding-variables/assign-padding-variables.mjs
function assignPaddingVariables({
  padding,
  baseStyles,
  minMediaStyles
}) {
  if (isPrimitiveSize(padding)) {
    baseStyles["--app-shell-padding"] = getPaddingValue(getBaseSize(padding));
  }
  if (isResponsiveSize(padding)) {
    if (padding.base) {
      baseStyles["--app-shell-padding"] = getPaddingValue(padding.base);
    }
    keys(padding).forEach((key) => {
      if (key !== "base") {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]["--app-shell-padding"] = getPaddingValue(padding[key]);
      }
    });
  }
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/get-variables/get-variables.mjs
function getVariables({ navbar, header, footer, aside, padding, theme }) {
  const minMediaStyles = {};
  const maxMediaStyles = {};
  const baseStyles = {};
  assignNavbarVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    navbar,
    theme
  });
  assignAsideVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    aside,
    theme
  });
  assignHeaderVariables({ baseStyles, minMediaStyles, header });
  assignFooterVariables({ baseStyles, minMediaStyles, footer });
  assignPaddingVariables({ baseStyles, minMediaStyles, padding });
  const minMedia = getSortedBreakpoints(keys(minMediaStyles), theme).map((breakpoint) => ({
    query: `(min-width: ${em(breakpoint.px)})`,
    styles: minMediaStyles[breakpoint.value]
  }));
  const maxMedia = getSortedBreakpoints(keys(maxMediaStyles), theme).map((breakpoint) => ({
    query: `(max-width: ${em(breakpoint.px)})`,
    styles: maxMediaStyles[breakpoint.value]
  }));
  const media = [...minMedia, ...maxMedia];
  return { baseStyles, media };
}

// node_modules/@mantine/core/esm/components/AppShell/AppShellMediaStyles/AppShellMediaStyles.mjs
function AppShellMediaStyles({
  navbar,
  header,
  aside,
  footer,
  padding
}) {
  const theme = useMantineTheme();
  const ctx = useMantineContext();
  const { media, baseStyles } = getVariables({ navbar, header, footer, aside, padding, theme });
  return /* @__PURE__ */ import_react36.default.createElement(InlineStyles, { media, styles: baseStyles, selector: ctx.cssVariablesSelector });
}

// node_modules/@mantine/core/esm/components/AppShell/use-resizing/use-resizing.mjs
var import_react37 = __toESM(require_react(), 1);
function useResizing({ transitionDuration, disabled }) {
  const [resizing, setResizing] = (0, import_react37.useState)(false);
  const resizingTimeout = (0, import_react37.useRef)();
  const disabledTimeout = (0, import_react37.useRef)();
  useWindowEvent("resize", () => {
    setResizing(true);
    clearTimeout(resizingTimeout.current);
    resizingTimeout.current = window.setTimeout(() => setResizing(false), 200);
  });
  useIsomorphicEffect(() => {
    setResizing(true);
    clearTimeout(disabledTimeout.current);
    disabledTimeout.current = window.setTimeout(() => setResizing(false), transitionDuration || 0);
  }, [disabled, transitionDuration]);
  return resizing;
}

// node_modules/@mantine/core/esm/components/AppShell/AppShell.mjs
var __defProp29 = Object.defineProperty;
var __defProps16 = Object.defineProperties;
var __getOwnPropDescs16 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols30 = Object.getOwnPropertySymbols;
var __hasOwnProp30 = Object.prototype.hasOwnProperty;
var __propIsEnum30 = Object.prototype.propertyIsEnumerable;
var __defNormalProp29 = (obj, key, value) => key in obj ? __defProp29(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues29 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp30.call(b, prop))
      __defNormalProp29(a, prop, b[prop]);
  if (__getOwnPropSymbols30)
    for (var prop of __getOwnPropSymbols30(b)) {
      if (__propIsEnum30.call(b, prop))
        __defNormalProp29(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps16 = (a, b) => __defProps16(a, __getOwnPropDescs16(b));
var __objRest20 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp30.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols30)
    for (var prop of __getOwnPropSymbols30(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum30.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps13 = {
  withBorder: true,
  padding: 0,
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  zIndex: getDefaultZIndex("app")
};
var varsResolver4 = createVarsResolver(
  (_, { transitionDuration, transitionTimingFunction }) => ({
    root: {
      "--app-shell-transition-duration": `${transitionDuration}ms`,
      "--app-shell-transition-timing-function": transitionTimingFunction
    }
  })
);
var AppShell = factory((_props, ref) => {
  const props = useProps("AppShell", defaultProps13, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    navbar,
    withBorder,
    padding,
    transitionDuration,
    transitionTimingFunction,
    header,
    zIndex,
    layout,
    disabled,
    aside,
    footer
  } = _a, others = __objRest20(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "navbar",
    "withBorder",
    "padding",
    "transitionDuration",
    "transitionTimingFunction",
    "header",
    "zIndex",
    "layout",
    "disabled",
    "aside",
    "footer"
  ]);
  const getStyles2 = useStyles({
    name: "AppShell",
    classes: AppShell_module_default,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver4
  });
  const resizing = useResizing({ disabled, transitionDuration });
  return /* @__PURE__ */ import_react38.default.createElement(AppShellProvider, { value: { getStyles: getStyles2, withBorder, zIndex, disabled } }, /* @__PURE__ */ import_react38.default.createElement(
    AppShellMediaStyles,
    {
      navbar,
      header,
      aside,
      footer,
      padding
    }
  ), /* @__PURE__ */ import_react38.default.createElement(Box, __spreadValues29(__spreadProps16(__spreadValues29({ ref }, getStyles2("root")), { mod: { resizing, layout, disabled } }), others)));
});
AppShell.classes = AppShell_module_default;
AppShell.displayName = "@mantine/core/AppShell";
AppShell.Navbar = AppShellNavbar;
AppShell.Header = AppShellHeader;
AppShell.Main = AppShellMain;
AppShell.Aside = AppShellAside;
AppShell.Footer = AppShellFooter;
AppShell.Section = AppShellSection;

// node_modules/@mantine/core/esm/components/Burger/Burger.mjs
var import_react39 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Burger/Burger.module.mjs
var classes8 = { "root": "m-fea6bf1a", "burger": "m-d4fb9cad" };
var Burger_module_default = classes8;

// node_modules/@mantine/core/esm/components/Burger/Burger.mjs
var __defProp30 = Object.defineProperty;
var __defProps17 = Object.defineProperties;
var __getOwnPropDescs17 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols31 = Object.getOwnPropertySymbols;
var __hasOwnProp31 = Object.prototype.hasOwnProperty;
var __propIsEnum31 = Object.prototype.propertyIsEnumerable;
var __defNormalProp30 = (obj, key, value) => key in obj ? __defProp30(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues30 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp31.call(b, prop))
      __defNormalProp30(a, prop, b[prop]);
  if (__getOwnPropSymbols31)
    for (var prop of __getOwnPropSymbols31(b)) {
      if (__propIsEnum31.call(b, prop))
        __defNormalProp30(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps17 = (a, b) => __defProps17(a, __getOwnPropDescs17(b));
var __objRest21 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp31.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols31)
    for (var prop of __getOwnPropSymbols31(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum31.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps14 = {};
var varsResolver5 = createVarsResolver(
  (theme, { color, size, transitionDuration, transitionTimingFunction }) => ({
    root: {
      "--burger-color": color ? getThemeColor(color, theme) : void 0,
      "--burger-size": getSize(size, "burger-size"),
      "--burger-transition-duration": transitionDuration === void 0 ? void 0 : `${transitionDuration}ms`,
      "--burger-transition-timing-function": transitionTimingFunction
    }
  })
);
var Burger = factory((_props, ref) => {
  const props = useProps("Burger", defaultProps14, _props);
  const _a = props, {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    opened,
    children,
    transitionDuration,
    transitionTimingFunction
  } = _a, others = __objRest21(_a, [
    "classNames",
    "className",
    "style",
    "styles",
    "unstyled",
    "vars",
    "opened",
    "children",
    "transitionDuration",
    "transitionTimingFunction"
  ]);
  const getStyles2 = useStyles({
    name: "Burger",
    classes: Burger_module_default,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver5
  });
  return /* @__PURE__ */ import_react39.default.createElement(UnstyledButton, __spreadValues30(__spreadProps17(__spreadValues30({}, getStyles2("root")), { ref }), others), /* @__PURE__ */ import_react39.default.createElement(Box, __spreadValues30({ mod: ["reduce-motion", { opened }] }, getStyles2("burger"))), children);
});
Burger.classes = Burger_module_default;
Burger.displayName = "@mantine/core/Burger";

// node_modules/@mantine/core/esm/components/Button/Button.mjs
var import_react41 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Button/ButtonGroup/ButtonGroup.mjs
var import_react40 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Button/Button.module.mjs
var classes9 = { "root": "m-77c9d27d", "inner": "m-80f1301b", "label": "m-811560b9", "section": "m-a74036a", "loader": "m-a25b86ee", "group": "m-80d6d844" };
var Button_module_default = classes9;

// node_modules/@mantine/core/esm/components/Button/ButtonGroup/ButtonGroup.mjs
var __defProp31 = Object.defineProperty;
var __defProps18 = Object.defineProperties;
var __getOwnPropDescs18 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols32 = Object.getOwnPropertySymbols;
var __hasOwnProp32 = Object.prototype.hasOwnProperty;
var __propIsEnum32 = Object.prototype.propertyIsEnumerable;
var __defNormalProp31 = (obj, key, value) => key in obj ? __defProp31(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues31 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp32.call(b, prop))
      __defNormalProp31(a, prop, b[prop]);
  if (__getOwnPropSymbols32)
    for (var prop of __getOwnPropSymbols32(b)) {
      if (__propIsEnum32.call(b, prop))
        __defNormalProp31(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps18 = (a, b) => __defProps18(a, __getOwnPropDescs18(b));
var __objRest22 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp32.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols32)
    for (var prop of __getOwnPropSymbols32(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum32.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps15 = {
  orientation: "horizontal"
};
var varsResolver6 = createVarsResolver((_, { borderWidth }) => ({
  group: { "--button-border-width": rem(borderWidth) }
}));
var ButtonGroup = factory((_props, ref) => {
  const props = useProps("ButtonGroup", defaultProps15, _props);
  const _a = useProps("ButtonGroup", defaultProps15, _props), {
    className,
    style,
    classNames,
    styles,
    unstyled,
    orientation,
    vars,
    borderWidth,
    variant
  } = _a, others = __objRest22(_a, [
    "className",
    "style",
    "classNames",
    "styles",
    "unstyled",
    "orientation",
    "vars",
    "borderWidth",
    "variant"
  ]);
  const getStyles2 = useStyles({
    name: "ButtonGroup",
    props,
    classes: Button_module_default,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver6,
    rootSelector: "group"
  });
  return /* @__PURE__ */ import_react40.default.createElement(
    Box,
    __spreadValues31(__spreadProps18(__spreadValues31({}, getStyles2("group")), {
      ref,
      variant,
      mod: { "data-orientation": orientation },
      role: "group"
    }), others)
  );
});
ButtonGroup.classes = Button_module_default;
ButtonGroup.displayName = "@mantine/core/ButtonGroup";

// node_modules/@mantine/core/esm/components/Button/Button.mjs
var __defProp32 = Object.defineProperty;
var __defProps19 = Object.defineProperties;
var __getOwnPropDescs19 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols33 = Object.getOwnPropertySymbols;
var __hasOwnProp33 = Object.prototype.hasOwnProperty;
var __propIsEnum33 = Object.prototype.propertyIsEnumerable;
var __defNormalProp32 = (obj, key, value) => key in obj ? __defProp32(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues32 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp33.call(b, prop))
      __defNormalProp32(a, prop, b[prop]);
  if (__getOwnPropSymbols33)
    for (var prop of __getOwnPropSymbols33(b)) {
      if (__propIsEnum33.call(b, prop))
        __defNormalProp32(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps19 = (a, b) => __defProps19(a, __getOwnPropDescs19(b));
var __objRest23 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp33.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols33)
    for (var prop of __getOwnPropSymbols33(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum33.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps16 = {};
var varsResolver7 = createVarsResolver(
  (theme, { radius, color, gradient, variant, size, justify }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled"
    });
    return {
      root: {
        "--button-justify": justify,
        "--button-height": getSize(size, "button-height"),
        "--button-padding-x": getSize(size, "button-padding-x"),
        "--button-fz": (size == null ? void 0 : size.includes("compact")) ? getFontSize(size.replace("compact-", "")) : getFontSize(size),
        "--button-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--button-bg": color || variant ? colors.background : void 0,
        "--button-hover": color || variant ? colors.hover : void 0,
        "--button-color": color || variant ? colors.color : void 0,
        "--button-bd": color || variant ? colors.border : void 0
      }
    };
  }
);
var Button = polymorphicFactory((_props, ref) => {
  const props = useProps("Button", defaultProps16, _props);
  const _a = props, {
    style,
    vars,
    className,
    color,
    disabled,
    children,
    leftSection,
    rightSection,
    fullWidth,
    variant,
    radius,
    loading,
    loaderProps,
    gradient,
    classNames,
    styles,
    unstyled,
    "data-disabled": dataDisabled
  } = _a, others = __objRest23(_a, [
    "style",
    "vars",
    "className",
    "color",
    "disabled",
    "children",
    "leftSection",
    "rightSection",
    "fullWidth",
    "variant",
    "radius",
    "loading",
    "loaderProps",
    "gradient",
    "classNames",
    "styles",
    "unstyled",
    "data-disabled"
  ]);
  const getStyles2 = useStyles({
    name: "Button",
    props,
    classes: Button_module_default,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver7
  });
  const hasLeftSection = !!leftSection;
  const hasRightSection = !!rightSection;
  return /* @__PURE__ */ import_react41.default.createElement(
    UnstyledButton,
    __spreadValues32(__spreadProps19(__spreadValues32({
      ref
    }, getStyles2("root", { active: !disabled && !loading && !dataDisabled })), {
      unstyled,
      variant,
      disabled: disabled || loading,
      mod: {
        disabled: disabled || dataDisabled,
        loading,
        block: fullWidth,
        "with-left-section": hasLeftSection,
        "with-right-section": hasRightSection
      }
    }), others),
    /* @__PURE__ */ import_react41.default.createElement("span", __spreadValues32({}, getStyles2("inner")), leftSection && /* @__PURE__ */ import_react41.default.createElement(Box, __spreadProps19(__spreadValues32({ component: "span" }, getStyles2("section")), { mod: { position: "left" } }), leftSection), loading && /* @__PURE__ */ import_react41.default.createElement(Box, __spreadValues32({ component: "span" }, getStyles2("loader")), /* @__PURE__ */ import_react41.default.createElement(
      Loader,
      __spreadValues32({
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)"
      }, loaderProps)
    )), /* @__PURE__ */ import_react41.default.createElement(Box, __spreadValues32({ component: "span", mod: { loading } }, getStyles2("label")), children), rightSection && /* @__PURE__ */ import_react41.default.createElement(Box, __spreadProps19(__spreadValues32({ component: "span" }, getStyles2("section")), { mod: { position: "right" } }), rightSection))
  );
});
Button.classes = Button_module_default;
Button.displayName = "@mantine/core/Button";
Button.Group = ButtonGroup;

// node_modules/@mantine/core/esm/components/Title/Title.mjs
var import_react42 = __toESM(require_react(), 1);

// node_modules/@mantine/core/esm/components/Title/get-title-size.mjs
var headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
function getTitleSize(order, size) {
  const titleSize = size !== void 0 ? size : `h${order}`;
  if (headings.includes(titleSize)) {
    return {
      fontSize: `var(--mantine-${titleSize}-font-size)`,
      fontWeight: `var(--mantine-${titleSize}-font-weight)`,
      lineHeight: `var(--mantine-${titleSize}-line-height)`
    };
  }
  return {
    fontSize: rem(titleSize),
    fontWeight: `var(--mantine-h${order}-font-weight)`,
    lineHeight: `var(--mantine-h${order}-line-height)`
  };
}

// node_modules/@mantine/core/esm/components/Title/Title.module.mjs
var classes10 = { "root": "m-8a5d1357" };
var Title_module_default = classes10;

// node_modules/@mantine/core/esm/components/Title/Title.mjs
var __defProp33 = Object.defineProperty;
var __defProps20 = Object.defineProperties;
var __getOwnPropDescs20 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols34 = Object.getOwnPropertySymbols;
var __hasOwnProp34 = Object.prototype.hasOwnProperty;
var __propIsEnum34 = Object.prototype.propertyIsEnumerable;
var __defNormalProp33 = (obj, key, value) => key in obj ? __defProp33(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues33 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp34.call(b, prop))
      __defNormalProp33(a, prop, b[prop]);
  if (__getOwnPropSymbols34)
    for (var prop of __getOwnPropSymbols34(b)) {
      if (__propIsEnum34.call(b, prop))
        __defNormalProp33(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps20 = (a, b) => __defProps20(a, __getOwnPropDescs20(b));
var __objRest24 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp34.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols34)
    for (var prop of __getOwnPropSymbols34(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum34.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultProps17 = {
  order: 1
};
var varsResolver8 = createVarsResolver((_, { order, size }) => {
  const sizeVariables = getTitleSize(order, size);
  return {
    root: {
      "--title-fw": sizeVariables.fontWeight,
      "--title-lh": sizeVariables.lineHeight,
      "--title-fz": sizeVariables.fontSize
    }
  };
});
var Title = factory((_props, ref) => {
  const props = useProps("Title", defaultProps17, _props);
  const _a = props, { classNames, className, style, styles, unstyled, order, vars, size, variant } = _a, others = __objRest24(_a, ["classNames", "className", "style", "styles", "unstyled", "order", "vars", "size", "variant"]);
  const getStyles2 = useStyles({
    name: "Title",
    props,
    classes: Title_module_default,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver8
  });
  if (![1, 2, 3, 4, 5, 6].includes(order)) {
    return null;
  }
  return /* @__PURE__ */ import_react42.default.createElement(
    Box,
    __spreadValues33(__spreadProps20(__spreadValues33({}, getStyles2("root")), {
      component: `h${order}`,
      variant,
      ref,
      mod: { order },
      size
    }), others)
  );
});
Title.classes = Title_module_default;
Title.displayName = "@mantine/core/Title";

// node_modules/@mantine/core/esm/index.mjs
"use client";

export {
  useDisclosure,
  MantineProvider,
  useMantineColorScheme,
  ColorSchemeScript,
  Group,
  Flex,
  Text,
  Anchor,
  AppShell,
  Burger,
  Button,
  Title
};
//# sourceMappingURL=/build/_shared/chunk-WVKM42CC.js.map
