(function(e){function t(t){for(var a,o,n=t[0],l=t[1],u=t[2],m=0,d=[];m<n.length;m++)o=n[m],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,n=1;n<r.length;n++){var l=r[n];0!==i[l]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},i={app:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Vue-registration-form/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var u=0;u<n.length;u++)t(n[u]);var c=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0b77":function(e,t,r){"use strict";r("8b13")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("newForm")],1)},s=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-container"},[r("h1",{staticClass:"sign-up-title"},[e._v("Регистрация")]),e.registrationPassed?r("div",[r("h1",[e._v(" "+e._s(e.form.name+", поздравляем вы успешно зарегистрированы!")+" ")])]):r("form",{on:{submit:function(t){return t.preventDefault(),e.checkForm(t)}}},[r("h2",{staticClass:"sign-up-subtitle"},[e._v("Личные данные")]),r("div",{staticClass:"group"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.surname,expression:"form.surname",modifiers:{trim:!0}}],staticClass:"text-input",class:{invalid:e.$v.form.surname.$dirty&&!e.$v.form.surname.required||e.$v.form.surname.$dirty&&!e.$v.form.surname.minLength},attrs:{type:"text",placeholder:"1"},domProps:{value:e.form.surname},on:{input:function(t){t.target.composing||e.$set(e.form,"surname",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("span",{staticClass:"bar"}),r("label",{staticClass:"label-name"},[e._v("Фамилия*")]),e.$v.form.surname.$dirty&&!e.$v.form.surname.required?r("p",{staticClass:"error"},[e._v("Поле должно быть заполнено")]):e.$v.form.surname.$dirty&&!e.$v.form.surname.minLength?r("p",{staticClass:"error"},[e._v("Введите не меньше 2-х символов")]):e._e()]),r("div",{staticClass:"group"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.name,expression:"form.name",modifiers:{trim:!0}}],staticClass:"text-input",class:{invalid:e.$v.form.name.$dirty&&!e.$v.form.name.required||e.$v.form.name.$dirty&&!e.$v.form.name.minLength},attrs:{type:"text",placeholder:"1"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("span",{staticClass:"bar"}),r("label",{staticClass:"label-name"},[e._v("Имя*")]),e.$v.form.name.$dirty&&!e.$v.form.name.required?r("p",{staticClass:"error"},[e._v("Поле должно быть заполнено")]):e.$v.form.name.$dirty&&!e.$v.form.name.minLength?r("p",{staticClass:"error"},[e._v("Введите не меньше 2-х символов")]):e._e()]),r("div",{staticClass:"group"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.patronymic,expression:"patronymic",modifiers:{trim:!0}}],staticClass:"text-input",attrs:{type:"text",placeholder:"1"},domProps:{value:e.patronymic},on:{input:function(t){t.target.composing||(e.patronymic=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("span",{staticClass:"bar"}),r("label",{staticClass:"label-name"},[e._v("Отчество")])]),r("div",{staticClass:"group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.birthDate,expression:"form.birthDate"}],staticClass:"text-input",class:{invalid:e.$v.form.birthDate.$dirty&&!e.$v.form.birthDate.required},attrs:{placeholder:"1",name:"date",type:"text",onfocus:"(this.type='date')",onblur:"if(!this.value)this.type='text'"},domProps:{value:e.form.birthDate},on:{input:function(t){t.target.composing||e.$set(e.form,"birthDate",t.target.value)}}}),r("span",{staticClass:"bar"}),r("label",{staticClass:"label-name"},[e._v("Дата рождения*")]),e.$v.form.birthDate.$dirty&&!e.$v.form.birthDate.required?r("p",{staticClass:"error"},[e._v("Поле должно быть заполнено")]):e._e()]),r("div",{staticClass:"group"},[r("input",{directives:[{name:"phone",rawName:"v-phone"},{name:"model",rawName:"v-model",value:e.form.telNumber,expression:"form.telNumber"}],staticClass:"text-input num",class:{invalid:e.$v.form.telNumber.$dirty&&!e.$v.form.telNumber.required},attrs:{type:"text",placeholder:"1"},domProps:{value:e.form.telNumber},on:{input:function(t){t.target.composing||e.$set(e.form,"telNumber",t.target.value)}}}),r("label",{staticClass:"label-name"},[e._v("Номер телефона*")]),r("span",{staticClass:"bar"}),e.$v.form.telNumber.$dirty&&!e.$v.form.telNumber.required?r("p",{staticClass:"error"},[e._v("Поле должно быть заполнено")]):e.$v.form.telNumber.$dirty&&!e.$v.form.telNumber.minLength?r("p",{staticClass:"error"},[e._v("Номер должен содержать 11 символов")]):e._e()]),r("div",{staticClass:"form-check-group"},[r("h3",{staticClass:"form-title"},[e._v("Пол")]),r("div",{staticClass:"form--flex"},[r("div",{staticClass:"form-check"},[r("label",{staticClass:"form-check-label",attrs:{for:"male"}},[e._v("мужской")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.gendere,expression:"gendere"}],attrs:{type:"radio",value:"male",name:"gendere",id:"male"},domProps:{checked:e._q(e.gendere,"male")},on:{change:function(t){e.gendere="male"}}})]),r("div",{staticClass:"form-check"},[r("label",{staticClass:"form-check-label",attrs:{for:"female"}},[e._v("женский")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.gendere,expression:"gendere"}],attrs:{type:"radio",value:"female",name:"gendere",id:"female"},domProps:{checked:e._q(e.gendere,"female")},on:{change:function(t){e.gendere="female"}}})])])]),r("div",{staticClass:"form-select-group"},[r("h3",{staticClass:"form-title"},[e._v("Группа клиентов*")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.selectedClientGroup,expression:"form.selectedClientGroup"}],staticClass:"multi-select",class:{invalid:e.$v.form.selectedClientGroup.$dirty&&!e.$v.form.selectedClientGroup.required},attrs:{id:"clientGroup",multiple:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"selectedClientGroup",t.target.multiple?r:r[0])}}},e._l(e.clientGroup,(function(t,a){return r("option",{key:a,domProps:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])})),0),e.$v.form.selectedClientGroup.$dirty&&!e.$v.form.selectedClientGroup.required?r("p",{staticClass:"error"},[e._v("Поле должно быть заполнено")]):e._e()]),r("div",{staticClass:"form-select-group"},[r("h3",{staticClass:"form-title"},[e._v("Лечащий врач")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedDoctor,expression:"selectedDoctor"}],staticClass:"select",attrs:{id:"clientGroup"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedDoctor=t.target.multiple?r:r[0]}}},e._l(e.doctors,(function(t,a){return r("option",{key:a,domProps:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])})),0)]),r("div",{staticClass:"checkbox-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.noNotifications,expression:"noNotifications"}],staticClass:"checkbox",attrs:{type:"checkbox",id:"noNotifications"},domProps:{checked:Array.isArray(e.noNotifications)?e._i(e.noNotifications,null)>-1:e.noNotifications},on:{change:function(t){var r=e.noNotifications,a=t.target,i=!!a.checked;if(Array.isArray(r)){var s=null,o=e._i(r,s);a.checked?o<0&&(e.noNotifications=r.concat([s])):o>-1&&(e.noNotifications=r.slice(0,o).concat(r.slice(o+1)))}else e.noNotifications=i}}}),r("label",{staticClass:"form-title",attrs:{for:"noNotifications"}},[e._v("Не отправлять СМС")])]),r("h2",{staticClass:"sign-up-subtitle"},[e._v("Адрес")]),r("div",{staticClass:"group"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.postcode,expression:"postcode",modifiers:{trim:!0}}],staticClass:"text-input",attrs:{type:"text",placeholder:"1"},domProps:{value:e.postcode},on:{input:function(t){t.target.composing||(e.postcode=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("span",{staticClass:"bar"}),r("label",{staticClass:"label-name"},[e._v("Индекс")])]),r("div",{staticClass:"group"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.country,expression:"country",modifiers:{trim:!0}}],staticClass:"text-input",attrs:{type:"text",placeholder:"1"},domProps:{value:e.country},on:{input:function(t){t.target.composing||(e.country=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("span",{staticClass:"bar"}),r("label",{staticClass:"label-name"},[e._v("Страна")])]),r("div",{staticClass:"group"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.region,expression:"region",modifiers:{trim:!0}}],staticClass:"text-input",attrs:{type:"text",placeholder:"1"},domProps:{value:e.region},on:{input:function(t){t.target.composing||(e.region=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("span",{staticClass:"bar"}),r("label",{staticClass:"label-name"},[e._v("Область")])]),r("div",{staticClass:"group"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.city,expression:"form.city",modifiers:{trim:!0}}],staticClass:"text-input",class:{invalid:e.$v.form.city.$dirty&&!e.$v.form.city.required},attrs:{type:"text",placeholder:"1"},domProps:{value:e.form.city},on:{input:function(t){t.target.composing||e.$set(e.form,"city",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("span",{staticClass:"bar"}),r("label",{staticClass:"label-name"},[e._v("Город*")]),e.$v.form.city.$dirty&&!e.$v.form.city.required?r("p",{staticClass:"error"},[e._v("Поле должно быть заполнено")]):e._e()]),r("div",{staticClass:"group"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.street,expression:"street",modifiers:{trim:!0}}],staticClass:"text-input",attrs:{type:"text",placeholder:"1"},domProps:{value:e.street},on:{input:function(t){t.target.composing||(e.street=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("span",{staticClass:"bar"}),r("label",{staticClass:"label-name"},[e._v("Улица")])]),r("div",{staticClass:"group"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.houseNumber,expression:"houseNumber",modifiers:{trim:!0}}],staticClass:"text-input",attrs:{type:"text",placeholder:"1"},domProps:{value:e.houseNumber},on:{input:function(t){t.target.composing||(e.houseNumber=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("span",{staticClass:"bar"}),r("label",{staticClass:"label-name"},[e._v("Дом")])]),r("h2",{staticClass:"sign-up-subtitle"},[e._v("Данные документа")]),r("div",{staticClass:"form-select-group"},[r("h3",{staticClass:"form-title"},[e._v("Тип документа*")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.documentType,expression:"form.documentType"}],staticClass:"select",class:{invalid:e.$v.form.documentType.$dirty&&!e.$v.form.documentType.required},attrs:{id:"documentType"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"documentType",t.target.multiple?r:r[0])}}},e._l(e.typesOfDocuments,(function(t,a){return r("option",{key:a,domProps:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])})),0),e.$v.form.documentType.$dirty&&!e.$v.form.documentType.required?r("p",{staticClass:"error"},[e._v("Поле должно быть заполнено")]):e._e()]),r("div",{staticClass:"group"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.documentSerial,expression:"documentSerial",modifiers:{trim:!0}}],staticClass:"text-input",attrs:{type:"text",placeholder:"1"},domProps:{value:e.documentSerial},on:{input:function(t){t.target.composing||(e.documentSerial=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("span",{staticClass:"bar"}),r("label",{staticClass:"label-name"},[e._v("Серия")])]),r("div",{staticClass:"group"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.documentNumber,expression:"documentNumber",modifiers:{trim:!0}}],staticClass:"text-input",attrs:{type:"text",placeholder:"1"},domProps:{value:e.documentNumber},on:{input:function(t){t.target.composing||(e.documentNumber=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("span",{staticClass:"bar"}),r("label",{staticClass:"label-name"},[e._v("Номер")])]),r("div",{staticClass:"group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.documentIssuedBy,expression:"documentIssuedBy"}],staticClass:"text-input",attrs:{type:"text",placeholder:"1"},domProps:{value:e.documentIssuedBy},on:{input:function(t){t.target.composing||(e.documentIssuedBy=t.target.value)}}}),r("span",{staticClass:"bar"}),r("label",{staticClass:"label-name"},[e._v("Кем выдан")])]),r("div",{staticClass:"group"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.documentDateIssuedby,expression:"form.documentDateIssuedby",modifiers:{trim:!0}}],staticClass:"text-input",class:{invalid:e.$v.form.documentDateIssuedby.$dirty&&!e.$v.form.documentDateIssuedby.required},attrs:{placeholder:"1",name:"date",type:"text",onfocus:"(this.type='date')",onblur:"if(!this.value)this.type='text'"},domProps:{value:e.form.documentDateIssuedby},on:{input:function(t){t.target.composing||e.$set(e.form,"documentDateIssuedby",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("span",{staticClass:"bar"}),r("label",{staticClass:"label-name"},[e._v("Дата выдачи*")]),e.$v.form.documentDateIssuedby.$dirty&&!e.$v.form.documentDateIssuedby.required?r("p",{staticClass:"error"},[e._v("Поле должно быть заполнено")]):e._e()]),r("h2",{staticClass:"sign-up-subtitle"},[e._v("*Поле обязательное для заполнения.")]),r("button",{staticClass:"form-button",attrs:{type:"submit"}},[e._v("Регистрация")])])])},n=[],l=(r("ac1f"),r("466d"),r("5319"),r("8c0a")),u=r("4126"),c={mixins:[l["validationMixin"]],name:"newForm",data:function(){return{registrationPassed:!1,form:{surname:"",name:"",city:"",birthDate:"",telNumber:"7",selectedClientGroup:[],documentDateIssuedby:""},patronymic:"",gendere:"male",selectedDoctor:"Ivanov",noNotifications:!1,postcode:"",country:"",region:"",street:"",houseNumber:"",documentType:"",documentSerial:"",documentIssuedBy:"",documentNumber:"",clientGroup:[{label:"VIP",value:"VIP"},{label:"Проблемные",value:"problematic"},{label:"ОМС",value:"healthInsurance"}],doctors:[{label:"Иванов",value:"Ivanov"},{label:"Захаров",value:"Zakharov"},{label:"Чернышева",value:"Cheryheva"}],typesOfDocuments:[{label:"Паспорт",value:"Passport"},{label:"Свидетельство о рождении",value:"birthСertificate"},{label:"Вод. удостоверение",value:"driversLicence"}]}},validations:{form:{surname:{required:u["required"],minLength:Object(u["minLength"])(2)},name:{required:u["required"],minLength:Object(u["minLength"])(2)},birthDate:{required:u["required"]},city:{required:u["required"]},selectedClientGroup:{required:u["required"]},documentType:{required:u["required"]},documentDateIssuedby:{required:u["required"]},telNumber:{required:u["required"],minLength:Object(u["minLength"])(11)}}},methods:{checkForm:function(){this.$v.form.$touch(),this.$v.form.$error||(this.registrationPassed=!0)}},directives:{phone:{bind:function(e){e.oninput=function(t){if(t.isTrusted){var r=this.value.replace(/\D/g,"").match(/(\d{0,4})(\d{0,3})(\d{0,4})/);this.value=r[2]?" "+r[1]+" "+r[2]+(r[3]?" "+r[3]:""):r[1],e.dispatchEvent(new Event("input"))}}}}}},m=c,d=(r("0b77"),r("2877")),p=Object(d["a"])(m,o,n,!1,null,null,null),v=p.exports,f={name:"App",components:{newForm:v}},b=f,g=Object(d["a"])(b,i,s,!1,null,null,null),y=g.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(y)}}).$mount("#app")},"8b13":function(e,t,r){}});
//# sourceMappingURL=app.3a923e92.js.map