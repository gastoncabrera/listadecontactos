(this.webpackJsonpcrud=this.webpackJsonpcrud||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(9),r=a.n(s),l=a(8),i=a(2),o=a(5),b=a(7),d=a(0),u={name:"",lastName:"",celNumber:"",id:null},m=function(e){var t=e.Create,a=e.Update,n=e.dataToEdit,s=e.setDataToEdit,r=Object(c.useState)(u),l=Object(i.a)(r,2),m=l[0],j=l[1];Object(c.useEffect)((function(){j(n||u)}),[n]);var O=function(e){j(Object(b.a)(Object(b.a)({},m),{},Object(o.a)({},e.target.name,e.target.value)))},N=function(e){j(u),s(null)};return Object(d.jsx)("div",{className:"create__container",children:Object(d.jsx)("div",{className:"container__form",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m.name&&m.lastName&&m.celNumber?(null===m.id?t(m):a(m),N()):alert("Debes rellenar los datos")},className:"create__form",children:[Object(d.jsx)("div",{className:"form__firstName formTitle",children:Object(d.jsxs)("label",{htmlFor:"firstName",children:["Nombre:",Object(d.jsx)("input",{id:"firstName",type:"text",value:m.name,name:"name",onChange:O})]})}),Object(d.jsx)("div",{className:"form__lastName formTitle",children:Object(d.jsxs)("label",{htmlFor:"lastName",children:["Apellido:",Object(d.jsx)("input",{id:"lastName",type:"text",value:m.lastName,name:"lastName",onChange:O})]})}),Object(d.jsx)("div",{className:"form__celNumber formTitle",children:Object(d.jsxs)("label",{htmlFor:"celNumber",children:["Telefono:",Object(d.jsx)("input",{id:"celNumber",type:"text",value:m.celNumber,name:"celNumber",onChange:O})]})}),Object(d.jsx)("input",{className:"form__btn",type:"submit",value:null!==n?"Editar":"Crear"})]})})})},j=function(e){var t=e.el,a=e.setDataToEdit,c=e.Delete;return Object(d.jsxs)("div",{className:"card__container",children:[Object(d.jsx)("div",{className:"card__containerNameLastName",children:Object(d.jsxs)("div",{className:"card__NameLastName",children:[t.name," ",t.lastName]})}),Object(d.jsx)("div",{className:"card__containerCelNumber",children:Object(d.jsx)("div",{className:"card__celNumber",children:t.celNumber})}),Object(d.jsxs)("div",{className:"card__buttonContainer",children:[Object(d.jsx)("button",{className:"card__buttonEdit",onClick:function(){return a(t)},children:"Editar"}),Object(d.jsx)("button",{className:"card__buttonDelete",onClick:function(){return c(t.id)},children:"Eliminar"})]})]})},O=[],N=function(e){e.db;var t=e.setDb,a=e.tabledb,n=(e.setTabledb,Object(c.useState)(O)),s=Object(i.a)(n,2),r=s[0],l=s[1],o=function(e){var c=a.filter((function(t){if(t.name.toString().toLowerCase().includes(e.toLowerCase())||t.lastName.toString().toLowerCase().includes(e.toLowerCase()))return t}));t(c)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(d.jsxs)("div",{className:"input__search",children:[Object(d.jsx)("input",{type:"text",className:"card__search",placeholder:"Buscar por nombre o apellido...",onChange:function(e){l(e.target.value),o(e.target.value)},value:r}),Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"btn__search",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})]})})})},f=function(e){var t=e.db,a=e.setDataToEdit,c=e.Delete,n=e.setDb,s=e.tabledb,r=e.setTabledb;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(N,{setDb:n,db:t,tabledb:s,setTabledb:r}),Object(d.jsx)("div",{className:"card__list",children:t.length>0?t&&t.map((function(e){return Object(d.jsx)(j,{el:e,setDataToEdit:a,Delete:c},e.id)})):Object(d.jsx)("div",{children:Object(d.jsx)("div",{colSpan:"3",children:" Sin Datos"})})})]})},h=(a(15),function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([]),r=Object(i.a)(s,2),o=r[0],b=r[1],u=Object(c.useState)(null),j=Object(i.a)(u,2),O=j[0],N=j[1];Object(c.useEffect)((function(){var e=localStorage.getItem("todo list");null!=a?(n(JSON.parse(e)),b(JSON.parse(e))):(n({name:"Priscila nuevo",id:2,lastName:"Espinoza",celNumber:3794863561},{name:"Gaston nuevo",id:1,lastName:"Cabrera",celNumber:3794562359}),b([{name:"Priscila nuevo",id:2,lastName:"Espinoza",celNumber:3794863561},{name:"Gaston nuevo",id:1,lastName:"Cabrera",celNumber:3794562359}]))}),[]),console.log(a),Object(c.useEffect)((function(){var e=JSON.stringify(a);localStorage.setItem("todo list",e)}),[a]);return Object(d.jsxs)("div",{className:"container__background",children:[Object(d.jsx)("h1",{className:"create__title",children:null!==O?"Editar contacto":"Crear contacto"}),Object(d.jsx)(m,{Create:function(e){e.id=Date.now(),n([].concat(Object(l.a)(a),[e])),b([].concat(Object(l.a)(o),[e]))},Update:function(e){var t=a.map((function(t){return t.id===e.id?e:t}));n(t),b(t)},dataToEdit:O,setDataToEdit:N}),Object(d.jsx)("h2",{className:"list__title",children:"Lista de Contactos"}),Object(d.jsx)(f,{tabledb:o,setTabledb:b,db:a,setDb:n,setDataToEdit:N,Delete:function(e){if(window.confirm("Desea eliminar este usuario")){var t=a.filter((function(t){return t.id!==e}));n(t),b(t)}}})]})}),v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.60a932dd.chunk.js.map