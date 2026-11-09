import{aQ as e,aR as r,N as o,g as a,aS as t,r as n,s,j as i,aT as l,u as c,an as d,t as u,B as h}from"shared";const f="HC_FLASH_NOTIFICATIONS",m=2147483647;let g=[],p=[];function b(e){g.push(e),p.length&&(p.forEach(e),p=[])}function x(e){g=g.filter((r=>r!==e))}function v(e){!function(e){0===g.length?p.push(e):g.forEach((r=>r(e)))}(e)}async function _(r,o){try{(await Promise.all(o.map((e=>e())))).forEach((({default:o})=>{e.addResourceBundle(r,"translation",o)}))}catch(e){console.error(`Cannot load translations for ${r}`,e)}}function $(o){e.use(r).init({resources:{[`${o}`]:{}},lng:o,lowerCaseLng:!0,interpolation:{escapeValue:!1},keySeparator:!1,pluralSeparator:"."})}const k=e=>{const r=e?':has(input[aria-invalid="true"])':'[aria-invalid="true"]';return o`
    /* Boost default border contrast - use :not() to preserve validation colors */
    &:not(${r}) {
      border-color: ${e=>a({theme:e.theme,variable:"border.default",dark:{offset:-100},light:{offset:300}})};
    }

    /* Enhanced hover state */
    &:hover:not(${r}) {
      border-color: ${e=>a({theme:e.theme,variable:"border.primaryEmphasis",dark:{offset:-100},light:{offset:100}})};
    }
  `},y=k(!1),j=k(!0);function w(e){return{...t,rtl:"rtl"===document.dir,colors:{...t.colors,primaryHue:e.brand_color,variables:{...t.colors.variables,light:{...t.colors.variables.light,background:{...t.colors.variables.light.background,default:e.background_color,raised:e.background_color,recessed:e.background_color,subtle:e.background_color},foreground:{...t.colors.variables.light.foreground,default:e.text_color}}}},components:{"buttons.anchor":o`
        color: ${e.link_color};

        :hover,
        :active,
        :focus {
          color: ${e.hover_link_color};
        }

        &:visited {
          color: ${e.visited_link_color};
        }
      `,"buttons.button":o`
        ${r=>r.isPrimary&&o`
            color: ${e.brand_text_color};
          `}
      `,"forms.input":y,"forms.textarea":y,"forms.faux_input":y,"dropdowns.combobox.trigger":j}}}const C=n.createContext(null),S=s.div`
  z-index: ${m};
  position: fixed;
`;function E({children:e}){const[r,o]=n.useState();return i.jsxs(i.Fragment,{children:[i.jsx(S,{ref:e=>{o(e)}}),r&&i.jsx(C.Provider,{value:r,children:e})]})}function P({theme:e,children:r}){return i.jsx(l,{theme:e,children:i.jsx(E,{children:r})})}const F=s.div`
  padding: ${e=>e.theme.space.xl} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${e=>e.theme.space.md};
`,T=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${e=>e.theme.space.xxs};
`,B=({helpCenterPath:e})=>{const{t:r}=c();return i.jsxs(F,{children:[i.jsxs(T,{children:[i.jsx(d,{children:r("cph-theme-error-boundary.title","Something went wrong.")}),i.jsx(u,{children:r("cph-theme-error-boundary.message","Give it a moment and try again later")})]}),e&&i.jsx(h,{isPrimary:!0,onClick:()=>{e&&(window.location.href=e)},children:r("cph-theme-error-boundary.go-to-homepage","Go to the homepage")})]})};export{B as E,f as F,C as M,P as T,m as Z,w as c,$ as i,_ as l,v as n,b as s,x as u};
