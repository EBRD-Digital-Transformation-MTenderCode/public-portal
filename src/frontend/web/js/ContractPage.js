(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ContractPage","Error"],{a2ae:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"entity-wp"},[t.loaded?t.loaded&&Object.keys(t.contract).length?n("el-container",{attrs:{direction:"vertical"}},[n("contract-card",{attrs:{entity:t.entity}}),n("div",{staticClass:"old-info"},[n("div",{staticClass:"old-info__title"},[t._v(t._s(t.$t("contract.procuring_entity")))]),n("div",{staticClass:"old-info__text"},[n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{xs:24,sm:10}},[n("div",{staticClass:"old-info__name"},[t._v(t._s(t.$t("contract.procuring_entity_full_name")))])]),n("el-col",{attrs:{xs:24,sm:14}},[n("div",{staticClass:"old-info__value"},[t._v(t._s(t.procuringEntity.fullName))])])],1)],1),n("div",{staticClass:"old-info__text"},[n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{xs:24,sm:10}},[n("div",{staticClass:"old-info__name"},[t._v(t._s(t.$t("contract.procuring_entity_identifier")))])]),n("el-col",{attrs:{xs:24,sm:14}},[n("div",{staticClass:"old-info__value"},[t._v(t._s(t.procuringEntity.identifier))])])],1)],1),n("div",{staticClass:"old-info__text"},[n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{xs:24,sm:10}},[n("div",{staticClass:"old-info__name"},[t._v(t._s(t.$t("contract.procuring_entity_address")))])]),n("el-col",{attrs:{xs:24,sm:14}},[n("div",{staticClass:"old-info__value"},[t._v(t._s(t.procuringEntity.address))])])],1)],1),n("div",{staticClass:"old-info__text"},[n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{xs:24,sm:10}},[n("div",{staticClass:"old-info__name"},[t._v(t._s(t.$t("contract.procuring_entity_responsible_person")))])]),n("el-col",{attrs:{xs:24,sm:14}},[n("div",{staticClass:"old-info__value"},[t._v(t._s(t.procuringEntity.responsiblePerson))])])],1)],1)]),n("div",{staticClass:"old-info"},[n("div",{staticClass:"old-info__title"},[t._v(t._s(t.$t("contract.suppliers")))]),t._l(t.suppliers,function(e,r){return n("div",{key:e.identifier},[n("div",{staticClass:"old-info__text"},[n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{xs:24,sm:10}},[n("div",{staticClass:"old-info__name"},[t._v(t._s(t.$t("contract.suppliers_full_name")))])]),n("el-col",{attrs:{xs:24,sm:14}},[n("div",{staticClass:"old-info__value"},[t._v(t._s(e.fullName))])])],1)],1),n("div",{staticClass:"old-info__text"},[n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{xs:24,sm:10}},[n("div",{staticClass:"old-info__name"},[t._v(t._s(t.$t("contract.suppliers_identifier")))])]),n("el-col",{attrs:{xs:24,sm:14}},[n("div",{staticClass:"old-info__value"},[t._v(t._s(e.identifier))])])],1)],1),n("div",{staticClass:"old-info__text"},[n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{xs:24,sm:10}},[n("div",{staticClass:"old-info__name"},[t._v(t._s(t.$t("contract.suppliers_address")))])]),n("el-col",{attrs:{xs:24,sm:14}},[n("div",{staticClass:"old-info__value"},[t._v(t._s(e.address))])])],1)],1),n("div",{staticClass:"old-info__text"},[n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{xs:24,sm:10}},[n("div",{staticClass:"old-info__name"},[t._v(t._s(t.$t("contract.suppliers_responsible_person")))])]),n("el-col",{attrs:{xs:24,sm:14}},[n("div",{staticClass:"old-info__value"},[t._v(t._s(e.responsiblePerson))])])],1)],1),0!==r?n("div",{staticClass:"old-info__text"},[n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{xs:24,sm:10}},[n("div",{staticClass:"old-info__name"})]),n("el-col",{attrs:{xs:24,sm:14}},[n("div",{staticClass:"old-info__value"})])],1)],1):t._e()])})],2),n("div",{staticClass:"old-info"},[n("div",{staticClass:"old-info__title"},[t._v(t._s(t.$t("contract.procuring_info")))]),n("div",{staticClass:"old-info__text"},[n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{xs:24,sm:10}},[n("div",{staticClass:"old-info__name"},[t._v("\n              "+t._s(t.$t("contract.procuring_info_value"))+" ("+t._s(t.procurementInfo.currency)+")\n            ")])]),n("el-col",{attrs:{xs:24,sm:14}},[n("div",{staticClass:"old-info__value info__value_accent"},[t._v(t._s(t.procurementInfo.amount))])])],1)],1)]),t.documents.length?n("div",{staticClass:"old-info"},[n("div",{staticClass:"old-info__title"},[t._v(t._s(t.$t("contract.documents")))]),t._l(t.documents,function(e,r){return n("div",{key:e.id+r,staticClass:"old-info__text"},[n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{xs:24,sm:10}},[n("div",{staticClass:"old-info-document_name"},[n("div",[n("a",{attrs:{href:e.url,title:e.name}},[t._v(t._s(e.name))])])])]),n("el-col",{attrs:{xs:24,sm:14}},[n("div",{staticClass:"old-info-document_date-published"},[t._v("\n              "+t._s(t.$t("contract.documents_published"))+" "+t._s(e.datePublished)+"\n            ")]),n("div",{staticClass:"old-info-document_id"},[t._v(t._s(t.$t("contract.documents_id"))+": "+t._s(e.id))])])],1),t._l(e.oldVersions,function(e,r){return n("el-row",{key:e.id+r,staticClass:"old-info-old-document",attrs:{gutter:30}},[n("el-col",{attrs:{xs:24,sm:10}},[n("div",{staticClass:"old-info-document_name"},[n("div",[n("a",{attrs:{href:e.url,title:e.name}},[t._v(t._s(e.name))])])])]),n("el-col",{attrs:{xs:24,sm:14}},[n("div",{staticClass:"old-info-document_date-published"},[t._v("\n              "+t._s(t.$t("contract.documents_published"))+" "+t._s(e.datePublished)+"\n            ")]),n("div",{staticClass:"old-info-document_id"},[t._v(t._s(t.$t("contract.documents_id"))+": "+t._s(e.id))])])],1)})],2)})],2):t._e(),n("div",{staticClass:"old-info"},[n("div",{staticClass:"old-info__title"},[t._v(t._s(t.$t("contract.items")))]),t._l(t.items,function(e){return[n("div",{key:e.id,staticClass:"old-info__text"},[n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{xs:24,sm:10}},[n("div",{staticClass:"old-info__name",attrs:{title:e.description}},[t._v(t._s(e.description))])]),n("el-col",{attrs:{xs:24,sm:14}},[n("div",{staticClass:"old-info__value_accent"},[t._v(t._s(e.quantityAndUnit))])])],1)],1),n("div",{key:e.id+1,staticClass:"old-info__text"},[n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{xs:24,sm:10}}),n("el-col",{attrs:{xs:24,sm:14}},[n("div",{staticClass:"old-info__value info__value_muted"},[t._v(t._s(t.$t("contract.items_cpv"))+": "+t._s(e.cpv))]),n("div",{staticClass:"old-info__value info__value_muted"},[t._v("\n                "+t._s(t.$t("contract.items_delivery_address"))+": "+t._s(e.deliveryAddress)+"\n              ")])])],1)],1)]})],2)],1):n("el-container",{key:"error"},[n("error",{attrs:{message:t.error.message}})],1):n("el-container",{key:"loading"},[n("div",{staticClass:"loading"})])],1)},s=[],i=(n("8e6e"),n("456d"),n("ac4d"),n("8a81"),n("75fc")),c=(n("55dd"),n("ac6a"),n("8615"),n("7f7f"),n("bd86")),o=n("2f62"),a=n("4df7"),l=n("4033"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{visible:t.open,"append-to-body":"",title:"Documents",width:"75%"},on:{"update:visible":function(e){t.open=e}}},[t._t("default",t._l(t.documents,function(e){return n("div",{key:e.id,staticClass:"old-info__text"},[n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{xs:24,sm:10}},[n("div",{staticClass:"old-info-document_name"},[n("div",[n("a",{attrs:{href:e.url,title:e.name}},[t._v(t._s(e.name))])])])]),n("el-col",{attrs:{xs:24,sm:14}},[n("div",{staticClass:"old-info-document_date-published"},[t._v("\n            "+t._s(t.$t("tender.documents_published"))+t._s(e.datePublished)+"\n          ")]),n("div",{staticClass:"old-info-document_id"},[t._v("ID: "+t._s(e.id))])])],1)],1)}))],2)},u=[],f={name:"DocumentsModal",props:{open:{type:Boolean,required:!0,default:!1},documents:{type:Array,required:!0}}},_=f,v=n("2877"),m=Object(v["a"])(_,d,u,!1,null,null,null),p=m.exports,b=n("dda8"),y=n("b63b"),O=n("025e");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(n,!0).forEach(function(e){Object(c["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var j={name:"ContractPage",components:{"contract-card":l["a"],"documents-modal":p,error:b["default"]},created:function(){this.getContract()},methods:{getContract:function(){var t=/^ocds-([a-z]|[0-9]){6}-[A-Z]{2,}-[0-9]{13}$/,e=this.$route.params.id,n=t.test(e)?y["b"]:y["a"];this.$store.dispatch(a["c"],{cdb:n,id:e})}},computed:C({},Object(o["b"])({cdb:function(t){return t.entities.contracts.currentEntity.cdb},contract:function(t){return t.entities.contracts.currentEntity.entityData},loaded:function(t){return t.entities.contracts.loaded},error:function(t){return t.entities.contracts.error}}),{entity:function(){if(this.cdb===y["a"]){var t=this.contract;return{procedureStatus:Object(O["f"])(t,function(t){return t.status}),modifiedDate:Object(O["f"])(t,function(t){return t.dateModified}),title:Object(O["f"])(t,function(t){return t.title}),description:Object(O["f"])(t,function(t){return t.description}),currency:Object(O["f"])(t,function(t){return t.value.currency}),amount:Object(O["f"])(t,function(t){return t.value.amount}),buyerName:Object(O["f"])(t,function(t){return t.procuringEntity.name}),buyerRegion:Object(O["f"])(t,function(t){return t.procuringEntity.address.region}),entityId:Object(O["f"])(t,function(t){return t.contractID})}}return{}},procuringEntity:function(){if(this.cdb===y["a"]){var t=this.contract;return{fullName:Object(O["f"])(t,function(t){return t.procuringEntity.name}),identifier:"".concat(Object(O["f"])(t,function(t){return t.procuringEntity.identifier.scheme}),"\n                         ").concat(Object(O["f"])(t,function(t){return t.procuringEntity.identifier.id})," -\n                         ").concat(Object(O["f"])(t,function(t){return t.procuringEntity.identifier.legalName})),address:"".concat(Object(O["f"])(t,function(t){return t.procuringEntity.address.postalCode}),",\n                      ").concat(Object(O["f"])(t,function(t){return t.procuringEntity.address.countryName}),",\n                      ").concat(Object(O["f"])(t,function(t){return t.procuringEntity.address.region}),",\n                      ").concat(Object(O["f"])(t,function(t){return t.procuringEntity.address.locality}),",\n                      ").concat(Object(O["f"])(t,function(t){return t.procuringEntity.address.streetAddress})),responsiblePerson:"".concat(Object(O["f"])(t,function(t){return t.procuringEntity.contactPoint.name})," /\n                                ").concat(Object(O["f"])(t,function(t){return t.procuringEntity.contactPoint.email})," /\n                                ").concat(Object(O["f"])(t,function(t){return t.procuringEntity.contactPoint.telephone}))}}return{}},suppliers:function(){if(this.cdb===y["a"]){var t=this.contract;return Object(O["f"])(t,function(t){return t.suppliers},[]).map(function(t){return{fullName:Object(O["f"])(t,function(t){return t.name}),identifier:"".concat(Object(O["f"])(t,function(t){return t.identifier.scheme}),"\n                         ").concat(Object(O["f"])(t,function(t){return t.identifier.id})," -\n                         ").concat(Object(O["f"])(t,function(t){return t.identifier.legalName})),address:"".concat(Object(O["f"])(t,function(t){return t.address.postalCode}),",\n                      ").concat(Object(O["f"])(t,function(t){return t.address.countryName}),",\n                      ").concat(Object(O["f"])(t,function(t){return t.address.region}),",\n                      ").concat(Object(O["f"])(t,function(t){return t.address.locality}),",\n                      ").concat(Object(O["f"])(t,function(t){return t.address.streetAddress})),responsiblePerson:"".concat(Object(O["f"])(t,function(t){return t.contactPoint.name})," /\n                                ").concat(Object(O["f"])(t,function(t){return t.contactPoint.email})," /\n                                ").concat(Object(O["f"])(t,function(t){return t.contactPoint.telephone}))}})}return{}},procurementInfo:function(){if(this.cdb===y["a"]){var t=this.contract;return{currency:Object(O["f"])(t,function(t){return t.value.currency}),amount:Object(O["f"])(t,function(t){return t.value.amount})}}return{}},items:function(){if(this.cdb===y["a"]){var t=this.contract;return Object(O["f"])(t,function(t){return t.items},[]).map(function(t){return{id:Object(O["f"])(t,function(t){return t.id}),description:Object(O["f"])(t,function(t){return t.description}),quantityAndUnit:"".concat(Object(O["f"])(t,function(t){return t.quantity}),"\n                                ").concat(Object(O["f"])(t,function(t){return t.unit.name})),cpv:"".concat(Object(O["f"])(t,function(t){return t.classification.id}),"\n                    ").concat(Object(O["f"])(t,function(t){return t.classification.description})),deliveryAddress:"".concat(Object(O["f"])(t,function(t){return t.deliveryAddress.postalCode}),",\n                                ").concat(Object(O["f"])(t,function(t){return t.deliveryAddress.countryName}),",\n                                ").concat(Object(O["f"])(t,function(t){return t.deliveryAddress.region}),",\n                                ").concat(Object(O["f"])(t,function(t){return t.deliveryAddress.locality}),",\n                                ").concat(Object(O["f"])(t,function(t){return t.deliveryAddress.streetAddress}))}})}return[]},documents:function(){if(this.cdb===y["a"]){var t=this.contract,e={},n=!0,r=!1,s=void 0;try{for(var c,o=Object(i["a"])(Object(O["f"])(t,function(t){return t.documents},[])).sort(function(t,e){return new Date(e.dateModified)-new Date(t.dateModified)})[Symbol.iterator]();!(n=(c=o.next()).done);n=!0){var a=c.value;e.hasOwnProperty(a.id)?e[a.id].oldVersions.push({name:a.title,url:a.url,datePublished:Object(O["e"])(a.datePublished),id:a.id}):(e[a.id]={name:a.title,url:a.url,datePublished:Object(O["e"])(a.datePublished),id:a.id},e[a.id].oldVersions=[])}}catch(l){r=!0,s=l}finally{try{n||null==o.return||o.return()}finally{if(r)throw s}}return Object.values(e)}return[]}})},h=j,x=Object(v["a"])(h,r,s,!1,null,null,null);e["default"]=x.exports},dda8:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error"},[n("div",{staticClass:"error-message"},[t._v(t._s(t.message))]),n("button",{staticClass:"back-btn",on:{click:function(e){return t.$router.go(-1)}}},[t._v(t._s(t.$t("back")))])])},s=[],i={name:"Error",props:{message:{type:String,default:function(){return"404 Page not found"}}}},c=i,o=n("2877"),a=Object(o["a"])(c,r,s,!1,null,null,null);e["default"]=a.exports}}]);