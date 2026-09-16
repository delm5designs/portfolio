/* @ds-bundle: {"format":4,"namespace":"MoranaDesignSystem_7dc002","components":[{"name":"ProgramCard","sourcePath":"components/content/ProgramCard.jsx"},{"name":"ResearchCallout","sourcePath":"components/content/ResearchCallout.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"RingMark","sourcePath":"components/core/RingMark.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"ContactForm","sourcePath":"components/forms/ContactForm.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"LanguageToggle","sourcePath":"components/navigation/LanguageToggle.jsx"},{"name":"NavHeader","sourcePath":"components/navigation/NavHeader.jsx"}],"sourceHashes":{"components/content/ProgramCard.jsx":"6aedcf3ae515","components/content/ResearchCallout.jsx":"5745809f9f75","components/core/Badge.jsx":"a089e8c34114","components/core/Button.jsx":"d6b9fa3eb3c7","components/core/RingMark.jsx":"821d00c91da0","components/core/SectionHeading.jsx":"860dc85f32ea","components/forms/ContactForm.jsx":"cba20f0f0bfb","components/forms/Input.jsx":"971c09745e4e","components/navigation/Footer.jsx":"c865865aae72","components/navigation/LanguageToggle.jsx":"5e5b471f3f65","components/navigation/NavHeader.jsx":"0f0ddaee1272","ui_kits/website/About.jsx":"b34375138dbc","ui_kits/website/App.jsx":"a7754cc415e8","ui_kits/website/Approach.jsx":"5914faed00f9","ui_kits/website/Contact.jsx":"c51d599ab66f","ui_kits/website/Home.jsx":"d555924b12fa","ui_kits/website/Programs.jsx":"7563b8ab74d3","ui_kits/website/copy.js":"f01975db5ad4","ui_kits/website/parts.jsx":"7e9ebb20325a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MoranaDesignSystem_7dc002 = window.MoranaDesignSystem_7dc002 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/ResearchCallout.jsx
try { (() => {
function ResearchCallout({
  finding,
  citation,
  source,
  note,
  inverse = false,
  style
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: Object.assign({
      fontFamily: "var(--font-sans)",
      background: inverse ? "var(--surface-inverse-raised)" : "var(--surface-sunken)",
      borderLeft: "none",
      borderRadius: "var(--radius-sm)",
      boxShadow: inverse ? "none" : "inset 0 0 0 1px var(--border-subtle)",
      padding: "var(--space-9)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-7)"
    }, style)
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: "var(--text-md)",
      lineHeight: 1.44,
      color: inverse ? "var(--text-on-dark)" : "var(--text-strong)",
      margin: 0,
      maxWidth: "46ch"
    }
  }, finding), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-4)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xs)",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: inverse ? "var(--olive-300)" : "var(--text-accent)"
    }
  }, citation), source && /*#__PURE__*/React.createElement("a", {
    href: source,
    style: {
      fontSize: "var(--text-xs)",
      color: inverse ? "var(--text-on-dark-muted)" : "var(--text-muted)",
      textDecoration: "underline",
      textUnderlineOffset: "3px"
    }
  }, "Source")), note && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-xs)",
      lineHeight: "var(--leading-body)",
      color: inverse ? "var(--text-on-dark-muted)" : "var(--text-muted)",
      margin: 0
    }
  }, note));
}
Object.assign(__ds_scope, { ResearchCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ResearchCallout.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  company: {
    background: "var(--accent-quiet)",
    color: "var(--olive-700)"
  },
  individual: {
    background: "rgba(86,70,107,.12)",
    color: "var(--plum-500)"
  },
  sage: {
    background: "rgba(78,122,85,.14)",
    color: "var(--sage-600)"
  },
  neutral: {
    background: "var(--surface-sunken)",
    color: "var(--text-muted)"
  },
  deferred: {
    background: "transparent",
    color: "var(--text-muted)",
    boxShadow: "inset 0 0 0 1px var(--border-subtle)"
  }
};
function Badge({
  children,
  tone = "neutral",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: Object.assign({
      display: "inline-block",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      padding: "var(--space-2) var(--space-3)",
      borderRadius: "var(--radius-sm)"
    }, tones[tone] || tones.neutral, style)
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-3)",
  fontFamily: "var(--font-sans)",
  fontWeight: "var(--weight-medium)",
  borderRadius: "var(--radius-sm)",
  border: "1px solid transparent",
  textDecoration: "none",
  cursor: "pointer",
  transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-press) var(--ease-standard)",
  whiteSpace: "nowrap"
};
const sizes = {
  sm: {
    fontSize: "var(--text-sm)",
    padding: "var(--space-5) var(--space-9)"
  },
  md: {
    fontSize: "15px",
    padding: "var(--space-6) var(--space-10)"
  }
};
const tones = {
  primary: {
    rest: {
      background: "var(--ink-700)",
      color: "var(--cream-200)"
    },
    hover: {
      background: "var(--accent)"
    }
  },
  accent: {
    rest: {
      background: "var(--accent)",
      color: "var(--text-on-accent)"
    },
    hover: {
      background: "var(--accent-hover)"
    }
  },
  secondary: {
    rest: {
      background: "transparent",
      color: "var(--text-strong)",
      borderColor: "var(--border-strong)"
    },
    hover: {
      background: "var(--accent-quiet)",
      borderColor: "var(--accent)"
    }
  },
  ghost: {
    rest: {
      background: "transparent",
      color: "var(--text-accent)",
      padding: "0"
    },
    hover: {
      color: "var(--text-link-hover)"
    }
  },
  inverse: {
    rest: {
      background: "var(--cream-400)",
      color: "var(--ink-700)"
    },
    hover: {
      background: "var(--olive-500)",
      color: "var(--cream-100)"
    }
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  type = "button",
  fullWidth = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const tone = tones[variant] || tones.primary;
  const composed = Object.assign({}, base, sizes[size], tone.rest, hover && !disabled ? tone.hover : null, {
    width: fullWidth ? "100%" : undefined,
    transform: press && !disabled ? "scale(var(--press-scale))" : "none",
    opacity: disabled ? 0.42 : 1,
    pointerEvents: disabled ? "none" : undefined
  }, style);
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: composed
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick
  }, handlers, rest), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    onClick: onClick,
    disabled: disabled
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/ProgramCard.jsx
try { (() => {
function ProgramCard({
  track = "company",
  name,
  duration,
  description,
  cta = "Get in touch",
  href = "#contact",
  deferred = false,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: Object.assign({
      background: "var(--surface-card)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "inset 0 0 0 1px " + (hover && !deferred ? "var(--accent)" : "var(--border-subtle)"),
      padding: "var(--space-9)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-7)",
      opacity: deferred ? 0.64 : 1,
      transition: "box-shadow var(--dur-fast) var(--ease-standard)",
      fontFamily: "var(--font-sans)"
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: deferred ? "deferred" : track
  }, track === "company" ? "Company" : "Individual"), deferred && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "deferred"
  }, "Coming later")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display)",
      fontSize: "var(--text-lg)",
      lineHeight: 1.16,
      letterSpacing: "var(--tracking-title)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, name), duration && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-2)",
      fontSize: "var(--text-xs)",
      letterSpacing: "0.04em",
      color: "var(--text-muted)"
    }
  }, duration)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      margin: 0,
      flex: 1
    }
  }, description), !deferred && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    href: href
  }, cta)));
}
Object.assign(__ds_scope, { ProgramCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProgramCard.jsx", error: String((e && e.message) || e) }); }

// components/core/RingMark.jsx
try { (() => {
/* The only proprietary glyph in the system: concentric 2px circles.
   Static by default (favicon, step indicator); animated=true starts the orbit field. */
function RingMark({
  size = 64,
  rings = 3,
  completed = 0,
  animated = false,
  weight = 2,
  nodes = false,
  inverse = false,
  style
}) {
  const palette = inverse ? ["var(--sage-300)", "var(--olive-300)", "var(--plum-300)", "var(--border-on-dark)"] : ["var(--ring-1)", "var(--ring-2)", "var(--ring-3)", "var(--ring-4)"];
  const idle = inverse ? "var(--border-on-dark)" : "var(--ring-idle)";
  const speeds = ["var(--orbit-1)", "var(--orbit-2)", "var(--orbit-3)", "var(--orbit-4)"];
  const items = [];
  for (let i = 0; i < rings; i++) {
    const pct = Math.round((i + 1) / rings * 100);
    const done = i < completed;
    const colour = completed > 0 ? done ? "var(--ring-done)" : idle : palette[i % palette.length];
    items.push(/*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        position: "absolute",
        width: pct + "%",
        aspectRatio: "1",
        borderRadius: "50%",
        border: (i === rings - 1 ? weight * 0.75 : weight) + "px solid " + colour,
        display: "grid",
        placeItems: "center",
        animation: animated ? "morana-spin " + speeds[i % speeds.length] + " linear infinite" + (i % 2 ? " reverse" : "") : undefined,
        transition: "border-color var(--dur-slow) var(--ease-standard)"
      }
    }, nodes && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: -(weight * 2.6) + "px",
        width: weight * 5 + "px",
        height: weight * 5 + "px",
        borderRadius: "50%",
        background: colour
      }
    })));
  }
  return /*#__PURE__*/React.createElement("span", {
    style: Object.assign({
      position: "relative",
      display: "grid",
      placeItems: "center",
      width: size,
      height: size,
      flex: "none"
    }, style)
  }, animated && /*#__PURE__*/React.createElement("style", null, "@keyframes morana-spin{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){[data-morana-ring] span{animation:none!important}}"), /*#__PURE__*/React.createElement("span", {
    "data-morana-ring": true,
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center"
    }
  }, items));
}
Object.assign(__ds_scope, { RingMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/RingMark.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  accent,
  lead,
  mark = false,
  align = "left",
  level = 2,
  inverse = false,
  style
}) {
  const Tag = "h" + level;
  const strong = inverse ? "var(--text-on-dark)" : "var(--text-strong)";
  const body = inverse ? "var(--text-on-dark-muted)" : "var(--text-body)";
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      textAlign: align,
      maxWidth: align === "center" ? "34ch" : undefined,
      marginInline: align === "center" ? "auto" : undefined
    }, style)
  }, (eyebrow || mark) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      justifyContent: align === "center" ? "center" : "flex-start",
      marginBottom: "var(--space-8)"
    }
  }, mark && /*#__PURE__*/React.createElement(__ds_scope.RingMark, {
    size: 22,
    rings: 3,
    completed: 0,
    weight: 1.5
  }), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--type-eyebrow-size)",
      letterSpacing: "var(--type-eyebrow-tracking)",
      textTransform: "uppercase",
      color: inverse ? "var(--olive-300)" : "var(--text-accent)"
    }
  }, eyebrow)), /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display)",
      fontSize: "var(--type-section-size)",
      lineHeight: 1.12,
      letterSpacing: "var(--tracking-title)",
      color: strong,
      margin: 0,
      textWrap: "pretty"
    }
  }, title, accent ? /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      color: inverse ? "var(--plum-300)" : "var(--text-reflective)"
    }
  }, " " + accent) : null), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-8)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-body)",
      color: body,
      maxWidth: "var(--measure-body)",
      marginInline: align === "center" ? "auto" : undefined
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const fieldBase = {
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-base)",
  color: "var(--text-strong)",
  background: "var(--surface-card)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "var(--radius-md)",
  padding: "var(--space-5) var(--space-6)",
  width: "100%",
  outline: "none",
  transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)"
};
const REQUIRED = {
  en: " (required)",
  bg: " (\u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E)"
};
function Input({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  hint,
  error,
  multiline = false,
  rows = 5,
  lang = "en",
  requiredLabel,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? label.toLowerCase().replace(/[^a-z0-9]+/g, "-") : undefined);
  const Field = multiline ? "textarea" : "input";
  const composed = Object.assign({}, fieldBase, {
    borderColor: error ? "var(--state-critical)" : focus ? "var(--focus-ring)" : "var(--border-subtle)",
    boxShadow: focus ? "0 0 0 2px rgba(86,70,107,.18)" : "none",
    resize: multiline ? "vertical" : undefined,
    lineHeight: multiline ? "var(--leading-body)" : undefined
  }, style);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      fontFamily: "var(--font-sans)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "var(--text-2xs)",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, requiredLabel || REQUIRED[lang] || REQUIRED.en)), /*#__PURE__*/React.createElement(Field, {
    id: fieldId,
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: composed
  }), (hint || error) && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-xs)",
      lineHeight: 1.5,
      color: error ? "var(--state-critical)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/ContactForm.jsx
try { (() => {
const COPY = {
  en: {
    name: "Your name",
    email: "Email",
    org: "Company (optional)",
    goal: "What are you trying to learn",
    goalHint: "A sentence or two is plenty. We reply within two working days.",
    submit: "Get in touch",
    sending: "Sending",
    done: "Thank you - we will reply within two working days.",
    or: "Or email us directly:"
  },
  bg: {
    name: "Име",
    email: "Имейл",
    org: "Компания (по избор)",
    goal: "Какво искате да научите",
    goalHint: "Едно-две изречения са достатъчни. Отговаряме в рамките на два работни дни.",
    submit: "Свържете се с нас",
    sending: "Изпраща се",
    done: "Благодарим - ще отговорим в рамките на два работни дни.",
    or: "Или ни пишете директно:"
  }
};
function ContactForm({
  lang = "en",
  email = "hello@morana.studio",
  onSubmit,
  style
}) {
  const copy = COPY[lang] || COPY.en;
  const [state, setState] = React.useState("idle");
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    org: "",
    goal: ""
  });
  const set = k => e => setValues(Object.assign({}, values, {
    [k]: e.target.value
  }));
  function submit(e) {
    e.preventDefault();
    setState("sending");
    if (onSubmit) onSubmit(values);
    setTimeout(() => setState("done"), 700);
  }
  if (state === "done") {
    return /*#__PURE__*/React.createElement("div", {
      style: Object.assign({
        fontFamily: "var(--font-sans)",
        background: "var(--accent-quiet)",
        borderRadius: "var(--radius-sm)",
        padding: "var(--space-11)"
      }, style)
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "var(--text-md)",
        color: "var(--text-strong)",
        margin: 0
      }
    }, copy.done));
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: Object.assign({
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)",
      fontFamily: "var(--font-sans)",
      maxWidth: "520px"
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    lang: lang,
    label: copy.name,
    required: true,
    value: values.name,
    onChange: set("name")
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    lang: lang,
    label: copy.email,
    type: "email",
    required: true,
    value: values.email,
    onChange: set("email")
  })), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    lang: lang,
    label: copy.org,
    value: values.org,
    onChange: set("org")
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    lang: lang,
    label: copy.goal,
    multiline: true,
    rows: 4,
    hint: copy.goalHint,
    value: values.goal,
    onChange: set("goal")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-9)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    disabled: state === "sending"
  }, state === "sending" ? copy.sending : copy.submit), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, copy.or, " ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:" + email,
    style: {
      color: "var(--text-link)",
      textUnderlineOffset: "3px"
    }
  }, email))));
}
Object.assign(__ds_scope, { ContactForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ContactForm.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const COPY = {
  en: {
    items: [["Programs", "#programs"], ["Approach", "#approach"], ["About", "#about"], ["Contact", "#contact"]],
    tagline: "Every spring starts with a winter.",
    legal: [["Privacy", "#privacy"], ["Terms", "#terms"]],
    mark: "Morana"
  },
  bg: {
    items: [["Програми", "#programs"], ["Подход", "#approach"], ["За нас", "#about"], ["Контакт", "#contact"]],
    tagline: "Всяка пролет започва със зима.",
    legal: [["Поверителност", "#privacy"], ["Условия", "#terms"]],
    mark: "Морана"
  }
};
function Footer({
  lang = "en",
  onNavigate,
  style
}) {
  const copy = COPY[lang] || COPY.en;
  const year = new Date().getFullYear();
  return /*#__PURE__*/React.createElement("footer", {
    style: Object.assign({
      background: "var(--surface-inverse)",
      color: "var(--text-on-dark)",
      fontFamily: "var(--font-sans)",
      padding: "var(--space-13) var(--gutter-page) var(--space-9)"
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      marginInline: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "var(--space-12)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-medium)",
      fontSize: "18px",
      letterSpacing: "var(--tracking-wordmark)",
      textTransform: "uppercase"
    }
  }, copy.mark), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "var(--text-md)",
      color: "var(--cream-400)"
    }
  }, copy.tagline)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      fontSize: "var(--text-sm)"
    }
  }, copy.items.map(([label, href]) => /*#__PURE__*/React.createElement(FooterLink, {
    key: href,
    label: label,
    href: href,
    onNavigate: onNavigate
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-13)",
      paddingTop: "var(--space-8)",
      borderTop: "1px solid var(--border-on-dark)",
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      flexWrap: "wrap",
      fontSize: "var(--text-xs)",
      color: "var(--text-on-dark-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u00A9 " + year + " Morana"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-8)"
    }
  }, copy.legal.map(([label, href]) => /*#__PURE__*/React.createElement(FooterLink, {
    key: href,
    label: label,
    href: href,
    onNavigate: onNavigate,
    small: true
  }))))));
}
function FooterLink({
  label,
  href,
  onNavigate,
  small
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(href.slice(1));
      }
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      textDecoration: "none",
      fontSize: small ? "var(--text-xs)" : undefined,
      color: hover ? "var(--olive-300)" : "var(--text-on-dark-muted)",
      transition: "color var(--dur-fast) var(--ease-standard)"
    }
  }, label);
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/LanguageToggle.jsx
try { (() => {
function LanguageToggle({
  value = "en",
  onChange,
  inverse = false,
  style
}) {
  const on = inverse ? "var(--text-on-dark)" : "var(--text-strong)";
  const off = inverse ? "var(--text-on-dark-muted)" : "var(--plum-500)";
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      letterSpacing: "0.04em"
    }, style)
  }, ["en", "bg"].map((code, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: code
  }, i === 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: off,
      opacity: 0.6
    }
  }, "/"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange && onChange(code),
    "aria-pressed": value === code,
    style: {
      background: "none",
      border: "none",
      padding: "2px 3px",
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: "inherit",
      letterSpacing: "inherit",
      fontWeight: value === code ? "var(--weight-semibold)" : "var(--weight-regular)",
      color: value === code ? on : off,
      transition: "color var(--dur-fast) var(--ease-standard)"
    }
  }, code.toUpperCase()))));
}
Object.assign(__ds_scope, { LanguageToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LanguageToggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavHeader.jsx
try { (() => {
const COPY = {
  en: {
    items: [["Programs", "#programs"], ["Approach", "#approach"], ["About", "#about"], ["Contact", "#contact"]],
    mark: "Morana"
  },
  bg: {
    items: [["Програми", "#programs"], ["Подход", "#approach"], ["За нас", "#about"], ["Контакт", "#contact"]],
    mark: "Морана"
  }
};
function NavHeader({
  lang = "en",
  onLangChange,
  active,
  onNavigate,
  inverse = false,
  floating = true,
  style
}) {
  const copy = COPY[lang] || COPY.en;
  const ink = inverse ? "var(--text-on-dark)" : "var(--text-strong)";
  const link = inverse ? "var(--text-on-dark-muted)" : "var(--text-body)";
  return /*#__PURE__*/React.createElement("header", {
    style: Object.assign({
      position: floating ? "absolute" : "relative",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 3,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-9)",
      padding: "var(--space-9) var(--gutter-page)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)"
    }, style)
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate("home");
      }
    },
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-medium)",
      fontSize: "18px",
      letterSpacing: "var(--tracking-wordmark)",
      textTransform: "uppercase",
      color: ink,
      textDecoration: "none"
    }
  }, copy.mark), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-10)"
    }
  }, copy.items.map(([label, href]) => {
    const isActive = active && href === "#" + active;
    return /*#__PURE__*/React.createElement(NavLink, {
      key: href,
      label: label,
      href: href,
      active: isActive,
      colour: link,
      activeColour: inverse ? "var(--olive-300)" : "var(--text-accent)",
      onNavigate: onNavigate
    });
  }), /*#__PURE__*/React.createElement(__ds_scope.LanguageToggle, {
    value: lang,
    onChange: onLangChange,
    inverse: inverse
  })));
}
function NavLink({
  label,
  href,
  active,
  colour,
  activeColour,
  onNavigate
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(href.slice(1));
      }
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      textDecoration: "none",
      color: active || hover ? activeColour : colour,
      transition: "color var(--dur-fast) var(--ease-standard)"
    }
  }, label);
}
Object.assign(__ds_scope, { NavHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
const {
  SectionHeading,
  RingMark,
  Badge
} = window.MoranaDesignSystem_7dc002 || {};
const {
  Section,
  ClosingCta
} = window;
function About({
  copy,
  onNavigate
}) {
  const a = copy.about;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: "var(--space-14)",
      borderTop: "none"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 1,
    mark: true,
    eyebrow: a.eyebrow,
    title: a.title,
    accent: a.accent,
    lead: a.lead
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "var(--space-13)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display)",
      fontSize: "var(--text-xl)",
      letterSpacing: "var(--tracking-title)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, a.nameTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-8)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      maxWidth: "var(--measure-body)"
    }
  }, a.nameBody)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center",
      padding: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement(RingMark, {
    size: 180,
    rings: 4,
    animated: true,
    nodes: true
  })))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-narrow)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display)",
      fontSize: "var(--text-xl)",
      letterSpacing: "var(--tracking-title)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, a.workTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-8)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)"
    }
  }, a.workBody), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-12)",
      padding: "var(--space-9)",
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-sm)",
      display: "flex",
      gap: "var(--space-7)",
      alignItems: "flex-start",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "deferred"
  }, "Not published yet"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-muted)",
      maxWidth: "46ch"
    }
  }, a.teamNote)))), /*#__PURE__*/React.createElement(ClosingCta, {
    copy: copy.closing,
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
const {
  NavHeader,
  Footer
} = window.MoranaDesignSystem_7dc002 || {};
const {
  Home,
  Programs,
  Approach,
  About,
  Contact
} = window;
const SCREENS = {
  home: Home,
  programs: Programs,
  approach: Approach,
  about: About,
  contact: Contact
};
function App() {
  const [screen, setScreen] = React.useState("home");
  const [lang, setLang] = React.useState("en");
  const copy = window.MoranaCopy[lang];
  const Screen = SCREENS[screen] || Home;
  function navigate(slug) {
    if (!SCREENS[slug]) {
      setScreen("contact");
    } else {
      setScreen(slug);
    }
    window.scrollTo(0, 0);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(NavHeader, {
    lang: lang,
    onLangChange: setLang,
    active: screen === "home" ? undefined : screen,
    onNavigate: navigate,
    floating: screen === "home"
  }), /*#__PURE__*/React.createElement("main", {
    key: screen + lang,
    style: {
      animation: "morana-fade var(--dur-slow) var(--ease-brand) both"
    }
  }, /*#__PURE__*/React.createElement(Screen, {
    copy: copy,
    lang: lang,
    onNavigate: navigate
  })), /*#__PURE__*/React.createElement(Footer, {
    lang: lang,
    onNavigate: navigate
  }));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Approach.jsx
try { (() => {
const {
  SectionHeading,
  RingMark,
  ResearchCallout
} = window.MoranaDesignSystem_7dc002 || {};
const {
  Section,
  StepStrip,
  ClosingCta
} = window;
function Approach({
  copy,
  onNavigate
}) {
  const a = copy.approach;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: "var(--space-14)",
      borderTop: "none"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 1,
    mark: true,
    eyebrow: a.eyebrow,
    title: a.title,
    accent: a.accent,
    lead: a.lead
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "inverse",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-12)",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(RingMark, {
    size: 104,
    rings: 4,
    animated: true,
    nodes: true,
    inverse: true
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontWeight: 300,
      fontSize: "var(--type-statement-size)",
      lineHeight: 1.2,
      letterSpacing: "var(--tracking-title)",
      color: "var(--text-on-dark)",
      maxWidth: "24ch"
    }
  }, a.quote))), /*#__PURE__*/React.createElement(Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: "var(--space-12)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display)",
      fontSize: "var(--text-xl)",
      letterSpacing: "var(--tracking-title)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, a.motivationTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-8)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      maxWidth: "var(--measure-body)"
    }
  }, a.motivationBody)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(ResearchCallout, {
    finding: copy.research.finding,
    citation: copy.research.citation,
    note: copy.research.note
  }), /*#__PURE__*/React.createElement(ResearchCallout, {
    finding: copy.research.finding2,
    citation: copy.research.citation2,
    note: copy.research.note2
  })))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: copy.steps.eyebrow,
    title: a.stepsTitle,
    style: {
      marginBottom: "var(--space-13)"
    }
  }), /*#__PURE__*/React.createElement(StepStrip, {
    items: a.detail,
    completedUpTo: 3
  })), /*#__PURE__*/React.createElement(ClosingCta, {
    copy: copy.closing,
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  Approach
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Approach.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  SectionHeading,
  ContactForm,
  RingMark
} = window.MoranaDesignSystem_7dc002 || {};
const {
  Section
} = window;
function Contact({
  copy,
  lang
}) {
  const c = copy.contact;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: "var(--space-14)",
      borderTop: "none"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 1,
    mark: true,
    eyebrow: c.eyebrow,
    title: c.title,
    accent: c.accent,
    lead: c.lead
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "card",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: "var(--space-14)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(ContactForm, {
    lang: lang,
    email: c.email
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-7)",
      marginBottom: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement(RingMark, {
    size: 36,
    rings: 3,
    weight: 2
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display)",
      fontSize: "var(--text-lg)",
      letterSpacing: "var(--tracking-title)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, c.expectTitle)), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)",
      counterReset: "step"
    }
  }, c.expect.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "var(--space-7)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      fontSize: "var(--text-2xs)",
      letterSpacing: "0.16em",
      color: "var(--text-reflective)",
      paddingTop: "3px"
    }
  }, "0" + (i + 1)), /*#__PURE__*/React.createElement("span", null, t))))))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  SectionHeading,
  ProgramCard,
  ResearchCallout
} = window.MoranaDesignSystem_7dc002 || {};
const {
  Container,
  Section,
  RingField,
  StepStrip,
  ClosingCta
} = window;
function Home({
  copy,
  lang,
  onNavigate
}) {
  const p = copy.programs.items;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: "min(86vh,720px)",
      display: "grid",
      placeItems: "center",
      padding: "var(--space-16) var(--gutter-page) var(--space-15)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(RingField, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      textAlign: "center",
      background: "var(--aperture)",
      padding: "8vmin 10vmin"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--type-eyebrow-size)",
      letterSpacing: "var(--type-eyebrow-tracking)",
      textTransform: "uppercase",
      color: "var(--text-accent)",
      marginBottom: "var(--space-9)",
      animation: "morana-rise var(--dur-enter) var(--ease-brand) both"
    }
  }, copy.hero.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--type-hero-weight)",
      fontSize: "var(--type-hero-size)",
      lineHeight: 1,
      letterSpacing: "var(--tracking-display)",
      color: "var(--text-strong)",
      maxWidth: "var(--measure-hero)",
      marginInline: "auto",
      animation: "morana-rise var(--dur-enter) var(--ease-brand) both",
      animationDelay: "250ms"
    }
  }, copy.hero.title[0], /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      color: "var(--text-reflective)"
    }
  }, copy.hero.title[1]), copy.hero.title[2]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-12)",
      display: "flex",
      gap: "var(--space-4)",
      justifyContent: "center",
      flexWrap: "wrap",
      animation: "morana-rise var(--dur-enter) var(--ease-brand) both",
      animationDelay: "500ms"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate("contact")
  }, copy.hero.primary), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate("programs")
  }, copy.hero.secondary)))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    mark: true,
    eyebrow: copy.steps.eyebrow,
    title: copy.steps.title,
    accent: copy.steps.accent,
    lead: copy.steps.lead,
    style: {
      marginBottom: "var(--space-13)"
    }
  }), /*#__PURE__*/React.createElement(StepStrip, {
    items: copy.steps.items
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: copy.tracks.eyebrow,
    title: copy.tracks.title,
    accent: copy.tracks.accent,
    lead: copy.tracks.lead,
    style: {
      marginBottom: "var(--space-13)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(ProgramCard, {
    track: "company",
    name: p.project.name,
    duration: p.project.duration,
    description: p.project.body,
    cta: copy.hero.primary,
    href: "#contact"
  }), /*#__PURE__*/React.createElement(ProgramCard, {
    track: "company",
    name: p.workshop.name,
    duration: p.workshop.duration,
    description: p.workshop.body,
    cta: copy.hero.primary,
    href: "#contact"
  }), /*#__PURE__*/React.createElement(ProgramCard, {
    track: "individual",
    name: p.intensive.name,
    duration: p.intensive.duration,
    description: p.intensive.body,
    cta: copy.hero.primary,
    href: "#contact"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-11)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNavigate("programs")
  }, copy.tracks.cta))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: "var(--space-12)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: copy.research.eyebrow,
    title: copy.research.title,
    accent: copy.research.accent
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(ResearchCallout, {
    finding: copy.research.finding,
    citation: copy.research.citation,
    note: copy.research.note
  }), /*#__PURE__*/React.createElement(ResearchCallout, {
    finding: copy.research.finding2,
    citation: copy.research.citation2,
    note: copy.research.note2
  })))), /*#__PURE__*/React.createElement(ClosingCta, {
    copy: copy.closing,
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Programs.jsx
try { (() => {
const {
  SectionHeading,
  ProgramCard,
  Badge
} = window.MoranaDesignSystem_7dc002 || {};
const {
  Section,
  ClosingCta
} = window;
function TrackBlock({
  title,
  lead,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display)",
      fontSize: "var(--text-xl)",
      letterSpacing: "var(--tracking-title)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      maxWidth: "46ch"
    }
  }, lead)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: "var(--space-8)"
    }
  }, children));
}
function Programs({
  copy,
  onNavigate
}) {
  const c = copy.programs,
    p = c.items;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tight: true,
    style: {
      paddingTop: "var(--space-14)",
      borderTop: "none"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 1,
    mark: true,
    eyebrow: c.eyebrow,
    title: c.title,
    accent: c.accent,
    lead: c.lead
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "card",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-14)"
    }
  }, /*#__PURE__*/React.createElement(TrackBlock, {
    title: c.companyTitle,
    lead: c.companyLead
  }, /*#__PURE__*/React.createElement(ProgramCard, {
    track: "company",
    name: p.project.name,
    duration: p.project.duration,
    description: p.project.body,
    cta: copy.hero.primary,
    href: "#contact"
  }), /*#__PURE__*/React.createElement(ProgramCard, {
    track: "company",
    name: p.workshop.name,
    duration: p.workshop.duration,
    description: p.workshop.body,
    cta: copy.hero.primary,
    href: "#contact"
  }), /*#__PURE__*/React.createElement(ProgramCard, {
    track: "company",
    name: p.retainer.name,
    description: p.retainer.body,
    deferred: true
  })), /*#__PURE__*/React.createElement(TrackBlock, {
    title: c.individualTitle,
    lead: c.individualLead
  }, /*#__PURE__*/React.createElement(ProgramCard, {
    track: "individual",
    name: p.intensive.name,
    duration: p.intensive.duration,
    description: p.intensive.body,
    cta: copy.hero.primary,
    href: "#contact"
  }), /*#__PURE__*/React.createElement(ProgramCard, {
    track: "individual",
    name: p.extensive.name,
    description: p.extensive.body,
    deferred: true
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-13)",
      paddingTop: "var(--space-8)",
      borderTop: "1px solid var(--border-subtle)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-muted)",
      maxWidth: "52ch"
    }
  }, c.pricingNote)), /*#__PURE__*/React.createElement(ClosingCta, {
    copy: copy.closing,
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  Programs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Programs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/copy.js
try { (() => {
/* All website copy, EN and BG at parity. Bulgarian is written natively rather than
   translated word for word; it still needs a native review pass before launch. */
window.MoranaCopy = {
  en: {
    hero: {
      eyebrow: "Metalearning consultancy",
      title: ["Every spring starts with a ", "winter", "."],
      primary: "Get in touch",
      secondary: "Our programs"
    },
    steps: {
      eyebrow: "How it works",
      title: "Three steps, and then you run it",
      accent: "yourselves",
      lead: "Every engagement follows the same arc. It ends when your people can keep going without us in the room.",
      items: [{
        n: "01",
        name: "Audit",
        body: "We map how learning actually happens today - not how the org chart says it does."
      }, {
        n: "02",
        name: "Unlearn",
        body: "Name the habits that stopped paying rent, and retire them on purpose."
      }, {
        n: "03",
        name: "Rebuild",
        body: "Install methods your people can run without us in the room."
      }]
    },
    tracks: {
      eyebrow: "Programs",
      title: "Two ways to work with",
      accent: "us",
      lead: "Companies bring us a goal and a team. Individuals bring us a goal and eight weeks.",
      cta: "See all programs"
    },
    research: {
      eyebrow: "Why it works",
      title: "Learning research, applied without the",
      accent: "mystique",
      finding: "Conditions that make practice feel harder often produce the most durable learning.",
      citation: "Bjork, 2011",
      note: "Desirable difficulties; laboratory and classroom studies.",
      finding2: "People routinely misjudge how well they have learned something, and their confidence tracks familiarity rather than recall.",
      citation2: "Koriat & Bjork, 2005",
      note2: "Metacognitive illusions of competence."
    },
    closing: {
      title: "Tell us what you are trying to learn",
      accent: "",
      lead: "One short conversation is usually enough to tell whether we can help.",
      cta: "Get in touch"
    },
    programs: {
      eyebrow: "Programs",
      title: "What we actually",
      accent: "sell",
      lead: "Two tracks, four offerings, and an honest note about what is not ready yet. We quote per engagement - there is no price list.",
      companyTitle: "Company",
      companyLead: "You have a team and a goal. We design the program around both.",
      individualTitle: "Individual",
      individualLead: "You have a goal and the willingness to change how you work at it.",
      items: {
        project: {
          name: "Project",
          duration: "6-12 weeks, scoped with you",
          body: "A custom program built around one learning or career goal your team already has. Ends with a method your managers own."
        },
        workshop: {
          name: "Workshop",
          duration: "One or two days, on site",
          body: "A short, practical session on how learning works and where your team's current approach leaks time."
        },
        retainer: {
          name: "Retainer",
          duration: "",
          body: "Ongoing advisory once a program is running."
        },
        intensive: {
          name: "Short Intensive",
          duration: "6-8 weeks",
          body: "One-to-one work on how you learn, aimed at a goal you name in the first session. Weekly sessions, work between them."
        },
        extensive: {
          name: "Extensive",
          duration: "",
          body: "Three months or more, for goals that need a longer arc."
        }
      },
      pricingNote: "Pricing is set per engagement and depends on scope. Ask us and we will tell you plainly."
    },
    approach: {
      eyebrow: "Approach",
      title: "Metalearning is a skill, not a",
      accent: "talent",
      lead: "Most people were never taught how to learn - they were taught subjects. Metalearning is the layer above: noticing how you take something in, where it breaks, and what to change.",
      quote: "An ending is the precondition for growth. That is the whole idea, and it is also the name.",
      motivationTitle: "We start with motivation, not method",
      motivationBody: "A method nobody wants to run is a method nobody runs. Before we touch technique we get specific about what you are actually trying to reach and why now - then we build backwards from that.",
      stepsTitle: "What each step looks like",
      detail: [{
        n: "01",
        name: "Audit",
        body: "Interviews, a look at real work, and a short diagnostic. We come back with where learning time goes and where it disappears."
      }, {
        n: "02",
        name: "Unlearn",
        body: "We name the habits and rituals that stopped paying rent - the reread, the recorded session nobody watches, the course bought instead of practised - and retire them deliberately."
      }, {
        n: "03",
        name: "Rebuild",
        body: "We install a small number of methods, practise them with your people, and hand over the documentation. Then we leave."
      }]
    },
    about: {
      eyebrow: "About",
      title: "A small studio for people who have to keep",
      accent: "learning",
      lead: "Morana is a consultancy focused on metalearning: helping people and teams understand how they learn, reach their goals, and see what is actually motivating them.",
      nameTitle: "About the name",
      nameBody: "Morana is the Slavic goddess of winter. In folk tradition her effigy is burned to end winter - death enabling rebirth, not an ending for its own sake. We chose it because the work starts with retiring something that no longer serves you. An ending is the precondition for growth.",
      workTitle: "How we work",
      workBody: "We work in small engagements with a clear end date. We would rather leave you with a method you run yourselves than a dependency on us. We write down what we find, we say when something is not working, and we do not sell certainty we do not have.",
      teamNote: "Team profiles are not published yet. Ask us who you would be working with and we will tell you."
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us what you are trying to",
      accent: "learn",
      lead: "A sentence or two about the goal is enough to start. We reply within two working days.",
      email: "hello@morana.studio",
      expectTitle: "What happens next",
      expect: ["We read what you sent and reply within two working days.", "A 30-minute call to hear the goal and say whether we can help.", "If it fits, a short written scope with timing - and only then a quote."]
    }
  },
  bg: {
    hero: {
      eyebrow: "Консултации по метаучене",
      title: ["Всяка пролет започва със ", "зима", "."],
      primary: "Свържете се с нас",
      secondary: "Нашите програми"
    },
    steps: {
      eyebrow: "Как работим",
      title: "Три стъпки, след което поемате",
      accent: "сами",
      lead: "Всяка съвместна работа следва един и същ път. Приключва, когато екипът ви може да продължи без нас.",
      items: [{
        n: "01",
        name: "Одит",
        body: "Проследяваме как всъщност се случва ученето днес - не както го описва организационната схема."
      }, {
        n: "02",
        name: "Отучване",
        body: "Назоваваме навиците, които вече не се отплащат, и се отказваме от тях съзнателно."
      }, {
        n: "03",
        name: "Изграждане",
        body: "Въвеждаме методи, които хората ви прилагат и без нас в стаята."
      }]
    },
    tracks: {
      eyebrow: "Програми",
      title: "Два начина да работим",
      accent: "заедно",
      lead: "Компаниите идват с цел и екип. Хората идват с цел и осем седмици.",
      cta: "Вижте всички програми"
    },
    research: {
      eyebrow: "Защо работи",
      title: "Изследвания за ученето, приложени без",
      accent: "мистика",
      finding: "Условията, които правят упражняването по-трудно, често водят до най-трайно учене.",
      citation: "Bjork, 2011",
      note: "Полезни затруднения; лабораторни и училищни изследвания.",
      finding2: "Хората системно преценяват погрешно колко добре са усвоили нещо - увереността следва познатостта, не припомнянето.",
      citation2: "Koriat & Bjork, 2005",
      note2: "Метакогнитивни илюзии за компетентност."
    },
    closing: {
      title: "Кажете ни какво искате да научите",
      accent: "",
      lead: "Един кратък разговор обикновено е достатъчен, за да разберем дали можем да помогнем.",
      cta: "Свържете се с нас"
    },
    programs: {
      eyebrow: "Програми",
      title: "Какво всъщност",
      accent: "предлагаме",
      lead: "Две посоки, четири предложения и честна бележка какво още не е готово. Оферираме за всеки проект отделно - няма ценоразпис.",
      companyTitle: "За компании",
      companyLead: "Имате екип и цел. Изграждаме програмата около двете.",
      individualTitle: "За хора",
      individualLead: "Имате цел и готовност да промените начина, по който работите към нея.",
      items: {
        project: {
          name: "Проект",
          duration: "6-12 седмици, по договаряне",
          body: "Програма по мярка около конкретна учебна или кариерна цел, която екипът ви вече има. Завършва с метод, който мениджърите ви владеят."
        },
        workshop: {
          name: "Работилница",
          duration: "Един или два дни, на място",
          body: "Кратка практическа сесия как работи ученето и къде подходът на екипа ви губи време."
        },
        retainer: {
          name: "Абонамент",
          duration: "",
          body: "Текущи консултации, след като програмата вече върви."
        },
        intensive: {
          name: "Кратък интензив",
          duration: "6-8 седмици",
          body: "Индивидуална работа върху това как учите, насочена към цел, която назовавате в първата сесия. Седмични сесии и работа между тях."
        },
        extensive: {
          name: "Разширена програма",
          duration: "",
          body: "Три месеца или повече, за цели с по-дълъг път."
        }
      },
      pricingNote: "Цената се определя за всеки проект според обхвата. Питайте и ще ви кажем направо."
    },
    approach: {
      eyebrow: "Подход",
      title: "Метаученето е умение, не",
      accent: "талант",
      lead: "Повечето хора никога не са учени как да учат - учени са на предмети. Метаученето е слоят отгоре: да забележите как приемате нещо, къде се къса и какво да промените.",
      quote: "Краят е предпоставка за растеж. Това е цялата идея - и същевременно името.",
      motivationTitle: "Започваме с мотивацията, не с метода",
      motivationBody: "Метод, който никой не иска да прилага, е метод, който никой не прилага. Преди техниката изясняваме към какво всъщност се стремите и защо сега - и градим назад оттам.",
      stepsTitle: "Как изглежда всяка стъпка",
      detail: [{
        n: "01",
        name: "Одит",
        body: "Разговори, поглед към реалната работа и кратка диагностика. Връщаме се с това къде отива времето за учене и къде изчезва."
      }, {
        n: "02",
        name: "Отучване",
        body: "Назоваваме навиците и ритуалите, които вече не се отплащат - препрочитането, записаната сесия, която никой не гледа, курсът, купен вместо упражняван - и се отказваме от тях съзнателно."
      }, {
        n: "03",
        name: "Изграждане",
        body: "Въвеждаме малък брой методи, упражняваме ги с хората ви и предаваме документацията. След това си тръгваме."
      }]
    },
    about: {
      eyebrow: "За нас",
      title: "Малко студио за хора, които трябва да продължават да",
      accent: "учат",
      lead: "Морана е консултантско студио, фокусирано върху метаученето: помагаме на хора и екипи да разберат как учат, да стигнат до целите си и да видят какво всъщност ги мотивира.",
      nameTitle: "За името",
      nameBody: "Морана е славянската богиня на зимата. В народната традиция изгарят нейно подобие, за да свърши зимата - смърт, която позволява прераждане, не край сам за себе си. Избрахме го, защото работата започва с отказ от нещо, което вече не ви служи. Краят е предпоставка за растеж.",
      workTitle: "Как работим",
      workBody: "Работим в кратки ангажименти с ясен край. Предпочитаме да ви оставим метод, който прилагате сами, вместо зависимост от нас. Записваме каквото открием, казваме когато нещо не работи, и не продаваме сигурност, която не притежаваме.",
      teamNote: "Профилите на екипа още не са публикувани. Попитайте с кого ще работите и ще ви кажем."
    },
    contact: {
      eyebrow: "Контакт",
      title: "Кажете ни какво искате да",
      accent: "научите",
      lead: "Едно-две изречения за целта са достатъчни за начало. Отговаряме в рамките на два работни дни.",
      email: "hello@morana.studio",
      expectTitle: "Какво следва",
      expect: ["Прочитаме написаното и отговаряме в рамките на два работни дни.", "30-минутен разговор, за да чуем целта и да кажем дали можем да помогнем.", "Ако си пасваме - кратък писмен обхват със срокове, и само тогава оферта."]
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/copy.js", error: String((e && e.message) || e) }); }

// ui_kits/website/parts.jsx
try { (() => {
const {
  RingMark,
  SectionHeading,
  Button
} = window.MoranaDesignSystem_7dc002 || {};

/* Shared page furniture for the Morana website kit. */

function Container({
  children,
  narrow = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      maxWidth: narrow ? "var(--container-narrow)" : "var(--container-max)",
      marginInline: "auto",
      width: "100%"
    }, style)
  }, children);
}
function Section({
  children,
  tone = "page",
  tight = false,
  style
}) {
  const grounds = {
    page: "var(--surface-page)",
    card: "var(--surface-card)",
    sunken: "var(--surface-sunken)",
    inverse: "var(--surface-inverse)"
  };
  return /*#__PURE__*/React.createElement("section", {
    style: Object.assign({
      background: grounds[tone],
      padding: (tight ? "var(--section-y-tight)" : "var(--section-y)") + " var(--gutter-page)",
      borderTop: tone === "page" ? "1px solid var(--border-subtle)" : "none"
    }, style)
  }, /*#__PURE__*/React.createElement(Container, null, children));
}

/* The cropped, always-turning ring field. Sits behind hero type with an aperture. */
function RingField({
  size = "118vmin",
  opacity = 1,
  top = "50%",
  left = "50%"
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      pointerEvents: "none",
      opacity
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top,
      left,
      transform: "translate(-50%,-50%)",
      width: size,
      aspectRatio: "1",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(RingMark, {
    size: "100%",
    rings: 4,
    animated: true,
    nodes: true,
    weight: 2,
    style: {
      width: "100%",
      height: "100%"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      width: "100%",
      aspectRatio: "1",
      borderRadius: "50%",
      border: "2px solid var(--olive-600)",
      opacity: 0,
      animation: "morana-pulse var(--pulse-cycle) var(--ease-expand) infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      width: "100%",
      aspectRatio: "1",
      borderRadius: "50%",
      border: "2px solid var(--olive-600)",
      opacity: 0,
      animation: "morana-pulse var(--pulse-cycle) var(--ease-expand) infinite",
      animationDelay: "3.5s"
    }
  })));
}

/* The three-step strip, used on the homepage and the approach page. */
function StepStrip({
  items,
  completedUpTo = 0,
  inverse = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "1px",
      background: inverse ? "var(--border-on-dark)" : "var(--border-subtle)"
    }
  }, items.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: inverse ? "var(--surface-inverse)" : "var(--surface-page)",
      padding: "var(--space-9) var(--space-9) var(--space-11)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(RingMark, {
    size: 40,
    rings: 3,
    completed: completedUpTo ? Math.min(i + 1, 3) : 0,
    weight: 2,
    inverse: inverse
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "0.16em",
      color: inverse ? "var(--plum-300)" : "var(--text-reflective)"
    }
  }, s.n)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display)",
      fontSize: "var(--text-lg)",
      letterSpacing: "var(--tracking-title)",
      color: inverse ? "var(--text-on-dark)" : "var(--text-strong)",
      margin: 0
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-body)",
      color: inverse ? "var(--text-on-dark-muted)" : "var(--text-body)",
      margin: 0
    }
  }, s.body))));
}

/* Standard closing call to action. */
function ClosingCta({
  copy,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "var(--space-12)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: copy.title,
    lead: copy.lead
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate("contact")
  }, copy.cta)));
}
Object.assign(window, {
  Container,
  Section,
  RingField,
  StepStrip,
  ClosingCta
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ProgramCard = __ds_scope.ProgramCard;

__ds_ns.ResearchCallout = __ds_scope.ResearchCallout;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.RingMark = __ds_scope.RingMark;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ContactForm = __ds_scope.ContactForm;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.LanguageToggle = __ds_scope.LanguageToggle;

__ds_ns.NavHeader = __ds_scope.NavHeader;

})();
