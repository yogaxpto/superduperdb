"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5885],{3457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var r=t(4848),a=t(8453),o=t(9489),l=t(7227),s=t(94);const i={sidebar_label:"Build text embedding model",filename:"build_text_embedding_model.md"},d="Build text embedding model",u={id:"reusable_snippets/build_text_embedding_model",title:"build_text_embedding_model",description:"",source:"@site/content/reusable_snippets/build_text_embedding_model.md",sourceDirName:"reusable_snippets",slug:"/reusable_snippets/build_text_embedding_model",permalink:"/docs/reusable_snippets/build_text_embedding_model",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/reusable_snippets/build_text_embedding_model.md",tags:[],version:"current",frontMatter:{sidebar_label:"Build text embedding model",filename:"build_text_embedding_model.md"},sidebar:"tutorialSidebar",previous:{title:"Compute features",permalink:"/docs/reusable_snippets/compute_features"},next:{title:"Build image embedding model",permalink:"/docs/reusable_snippets/build_image_embedding_model"}},c={},m=[];function p(e){const n={code:"code",h1:"h1",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"build-text-embedding-model",children:"Build text embedding model"}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(l.A,{value:"OpenAI",label:"OpenAI",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"!pip install openai\nfrom superduperdb.ext.openai import OpenAIEmbedding\n\nembedding_model = OpenAIEmbedding(identifier='text-embedding-ada-002')        \n"})})}),(0,r.jsx)(l.A,{value:"JinaAI",label:"JinaAI",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import os\nfrom superduperdb.ext.jina import JinaEmbedding\n\nos.environ["JINA_API_KEY"] = "jina_xxxx"\n \n# define the model\nembedding_model = JinaEmbedding(identifier=\'jina-embeddings-v2-base-en\')        \n'})})}),(0,r.jsx)(l.A,{value:"Sentence-Transformers",label:"Sentence-Transformers",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'!pip install sentence-transformers\nfrom superduperdb import vector\nimport sentence_transformers\nfrom superduperdb.ext.sentence_transformers import SentenceTransformer\n\nembedding_model = SentenceTransformer(\n    identifier="embedding",\n    object=sentence_transformers.SentenceTransformer("BAAI/bge-small-en"),\n    datatype=vector(shape=(1024,)),\n    postprocess=lambda x: x.tolist(),\n    predict_kwargs={"show_progress_bar": True},\n)        \n'})})}),(0,r.jsx)(l.A,{value:"Transformers",label:"Transformers",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduperdb import vector\nfrom superduperdb.components.model import Model, ensure_initialized, Signature\nfrom transformers import AutoTokenizer, AutoModel\nimport torch\n\nclass TransformerEmbedding(Model):\n    signature: Signature = 'singleton'\n    pretrained_model_name_or_path : str\n\n    def init(self):\n        self.tokenizer = AutoTokenizer.from_pretrained(self.pretrained_model_name_or_path)\n        self.model = AutoModel.from_pretrained(self.pretrained_model_name_or_path)\n        self.model.eval()\n\n    @ensure_initialized\n    def predict(self, x):\n        return self.predict([x])[0]\n        \n    @ensure_initialized\n    def predict(self, dataset):\n        encoded_input = self.tokenizer(dataset, padding=True, truncation=True, return_tensors='pt')\n        # Compute token embeddings\n        with torch.no_grad():\n            model_output = self.model(**encoded_input)\n            # Perform pooling. In this case, cls pooling.\n            sentence_embeddings = model_output[0][:, 0]\n        # normalize embeddings\n        sentence_embeddings = torch.nn.functional.normalize(sentence_embeddings, p=2, dim=1)\n        return sentence_embeddings.tolist()\n\n\nembedding_model = TransformerEmbedding(identifier=\"embedding\", pretrained_model_name_or_path=\"BAAI/bge-small-en\", datatype=vector(shape=(384, )))        \n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'print(len(embedding_model.predict("What is SuperDuperDB")))\n'})}),"\n",(0,r.jsx)(s.A,{filename:"build_text_embedding_model.md"})]})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},94:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(6540);const a=e=>{const n=Array.from(document.querySelectorAll('.tabs > li[role="tab"]')).filter((e=>"true"===e.getAttribute("aria-selected"))).map((e=>e.textContent.trim()));console.log("About to process filename:",e),console.log("Selected tabs:",n);const t=`_${e.replace(/\.md$/,".ipynb")}`,r=encodeURIComponent(t);fetch(`https://build-use-cases-sddb.replit.app/build_notebook?usecase_path=.%2Fuse_cases%2F${r}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)}).then((e=>e.blob())).then((e=>{const n=window.URL.createObjectURL(e),r=document.createElement("a");r.style.display="none",r.href=n,r.download=t,document.body.appendChild(r),r.click(),window.URL.revokeObjectURL(n),alert("Your file has downloaded!")})).catch((()=>alert("There was an error."))),console.log("Sending JSON payload:",JSON.stringify(n))};var o=t(4848);const l=e=>{let{filename:n}=e;if(!n)return console.error("Filename is not provided or invalid."),null;const[t,l]=(0,r.useState)(!1),s={padding:"10px",borderRadius:"10px",border:"0",color:"#000",backgroundColor:"#C4F800",fontWeight:"bold",cursor:"pointer"};return(0,o.jsx)("button",{style:t?{...s,backgroundColor:"#B0E000"}:s,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),onClick:()=>a(n),children:"Generate notebook from all selected tabs"})}},7227:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var r=t(870);const a={tabItem:"tabItem_Ymn6"};var o=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},9489:(e,n,t)=>{t.d(n,{A:()=>A});var r=t(6540),a=t(870),o=t(4245),l=t(6347),s=t(6494),i=t(2814),d=t(5167),u=t(1269);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[d,c]=b({queryString:t,groupId:a}),[f,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),g=(()=>{const e=d??f;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var h=t(1062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=t(4848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),a=s[t].value;a!==r&&(d(n),l(a))},c=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:c,onClick:u,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,_.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,_.jsx)(x,{...e,...n}),(0,_.jsx)(v,{...e,...n})]})}function A(e){const n=(0,h.A)();return(0,_.jsx)(y,{...e,children:c(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var r=t(6540);const a={},o=r.createContext(a);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);