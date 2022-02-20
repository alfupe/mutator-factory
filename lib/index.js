function c(t,n=[],i={direction:"ltr"}){let o=i?.direction==="rtl"?"reduceRight":"reduce";return n[o]((r,e)=>Array.isArray(t)?r.map(e):e(r),t)}export{c as mutatorFactory};
//# sourceMappingURL=index.js.map
