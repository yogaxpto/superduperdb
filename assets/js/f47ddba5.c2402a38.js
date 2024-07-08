"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7752],{4950:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var t=d(4848),i=d(8453);const s={},r=void 0,c={id:"api/components/datatype",title:"datatype",description:"superduperdb.components.datatype",source:"@site/content/api/components/datatype.md",sourceDirName:"api/components",slug:"/api/components/datatype",permalink:"/docs/api/components/datatype",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/api/components/datatype.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dataset",permalink:"/docs/api/components/dataset"},next:{title:"listener",permalink:"/docs/api/components/listener"}},l={},h=[{value:"<code>pickle_decode</code>",id:"pickle_decode",level:2},{value:"<code>pickle_encode</code>",id:"pickle_encode",level:2},{value:"<code>base64_to_bytes</code>",id:"base64_to_bytes",level:2},{value:"<code>bytes_to_base64</code>",id:"bytes_to_base64",level:2},{value:"<code>dill_decode</code>",id:"dill_decode",level:2},{value:"<code>dill_encode</code>",id:"dill_encode",level:2},{value:"<code>encode_torch_state_dict</code>",id:"encode_torch_state_dict",level:2},{value:"<code>file_check</code>",id:"file_check",level:2},{value:"<code>get_serializer</code>",id:"get_serializer",level:2},{value:"<code>json_decode</code>",id:"json_decode",level:2},{value:"<code>json_encode</code>",id:"json_encode",level:2},{value:"<code>torch_decode</code>",id:"torch_decode",level:2},{value:"<code>torch_encode</code>",id:"torch_encode",level:2},{value:"<code>Encoder</code>",id:"encoder",level:2},{value:"<code>Artifact</code>",id:"artifact",level:2},{value:"<code>DecodeTorchStateDict</code>",id:"decodetorchstatedict",level:2},{value:"<code>Encodable</code>",id:"encodable",level:2},{value:"<code>File</code>",id:"file",level:2},{value:"<code>LazyArtifact</code>",id:"lazyartifact",level:2},{value:"<code>LazyFile</code>",id:"lazyfile",level:2},{value:"<code>Native</code>",id:"native",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"superduperdb.components.datatype"})})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/SuperDuperDB/superduperdb/blob/main/superduperdb/components/datatype.py",children:"Source code"})}),"\n",(0,t.jsx)(n.h2,{id:"pickle_decode",children:(0,t.jsx)(n.code,{children:"pickle_decode"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"pickle_decode(b: bytes,\n     info: Optional[Dict] = None) -> Any\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"b"}),(0,t.jsx)(n.td,{children:"The bytes to decode."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"info"}),(0,t.jsx)(n.td,{children:"Optional information."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Decodes bytes using pickle."}),"\n",(0,t.jsx)(n.h2,{id:"pickle_encode",children:(0,t.jsx)(n.code,{children:"pickle_encode"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"pickle_encode(object: Any,\n     info: Optional[Dict] = None) -> bytes\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"The object to encode."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"info"}),(0,t.jsx)(n.td,{children:"Optional information."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Encodes an object using pickle."}),"\n",(0,t.jsx)(n.h2,{id:"base64_to_bytes",children:(0,t.jsx)(n.code,{children:"base64_to_bytes"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"base64_to_bytes(encoded)\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"encoded"}),(0,t.jsx)(n.td,{children:"The base64 encoded string."})]})})]}),"\n",(0,t.jsx)(n.p,{children:"Decodes a base64 encoded string."}),"\n",(0,t.jsx)(n.h2,{id:"bytes_to_base64",children:(0,t.jsx)(n.code,{children:"bytes_to_base64"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"bytes_to_base64(bytes)\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bytes"}),(0,t.jsx)(n.td,{children:"The bytes to convert."})]})})]}),"\n",(0,t.jsx)(n.p,{children:"Converts bytes to base64."}),"\n",(0,t.jsx)(n.h2,{id:"dill_decode",children:(0,t.jsx)(n.code,{children:"dill_decode"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"dill_decode(b: bytes,\n     info: Optional[Dict] = None) -> Any\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"b"}),(0,t.jsx)(n.td,{children:"The bytes to decode."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"info"}),(0,t.jsx)(n.td,{children:"Optional information."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Decodes bytes using dill."}),"\n",(0,t.jsx)(n.h2,{id:"dill_encode",children:(0,t.jsx)(n.code,{children:"dill_encode"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"dill_encode(object: Any,\n     info: Optional[Dict] = None) -> bytes\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"The object to encode."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"info"}),(0,t.jsx)(n.td,{children:"Optional information."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Encodes an object using dill."}),"\n",(0,t.jsx)(n.h2,{id:"encode_torch_state_dict",children:(0,t.jsx)(n.code,{children:"encode_torch_state_dict"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"encode_torch_state_dict(module,\n     info)\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"module"}),(0,t.jsx)(n.td,{children:"Module."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"info"}),(0,t.jsx)(n.td,{children:"Information."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Encode torch state dictionary."}),"\n",(0,t.jsx)(n.h2,{id:"file_check",children:(0,t.jsx)(n.code,{children:"file_check"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"file_check(path: Any,\n     info: Optional[Dict] = None) -> str\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"path"}),(0,t.jsx)(n.td,{children:"The file path to check."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"info"}),(0,t.jsx)(n.td,{children:"Optional information."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Checks if a file path exists."}),"\n",(0,t.jsx)(n.h2,{id:"get_serializer",children:(0,t.jsx)(n.code,{children:"get_serializer"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"get_serializer(identifier: str,\n     method: str,\n     encodable: str,\n     db: Optional[ForwardRef('Datalayer')] = None)\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"identifier"}),(0,t.jsx)(n.td,{children:"The identifier of the serializer."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"method"}),(0,t.jsx)(n.td,{children:"The method of the serializer."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"encodable"}),(0,t.jsx)(n.td,{children:"The type of encodable object."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db"}),(0,t.jsx)(n.td,{children:"The Datalayer instance."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Get a serializer."}),"\n",(0,t.jsx)(n.h2,{id:"json_decode",children:(0,t.jsx)(n.code,{children:"json_decode"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"json_decode(b: str,\n     info: Optional[Dict] = None) -> Any\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"b"}),(0,t.jsx)(n.td,{children:"The JSON string to decode"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"info"}),(0,t.jsx)(n.td,{children:"Optional information"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Decode the JSON string to an dict."}),"\n",(0,t.jsx)(n.h2,{id:"json_encode",children:(0,t.jsx)(n.code,{children:"json_encode"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"json_encode(object: Any,\n     info: Optional[Dict] = None) -> str\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"The object to encode"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"info"}),(0,t.jsx)(n.td,{children:"Optional information"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Encode the dict to a JSON string."}),"\n",(0,t.jsx)(n.h2,{id:"torch_decode",children:(0,t.jsx)(n.code,{children:"torch_decode"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"torch_decode(b: bytes,\n     info: Optional[Dict] = None) -> Any\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"b"}),(0,t.jsx)(n.td,{children:"The bytes to decode."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"info"}),(0,t.jsx)(n.td,{children:"Optional information."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Decodes bytes to a torch model."}),"\n",(0,t.jsx)(n.h2,{id:"torch_encode",children:(0,t.jsx)(n.code,{children:"torch_encode"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"torch_encode(object: Any,\n     info: Optional[Dict] = None) -> bytes\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"The object to encode."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"info"}),(0,t.jsx)(n.td,{children:"Optional information."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Saves an object in torch format."}),"\n",(0,t.jsx)(n.h2,{id:"encoder",children:(0,t.jsx)(n.code,{children:"Encoder"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"Encoder(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = <factory>,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     encoder: Optional[Callable] = None,\n     decoder: Optional[Callable] = None,\n     info: Optional[Dict] = None,\n     shape: Optional[Sequence] = None,\n     directory: Optional[str] = None,\n     encodable: str = 'encodable',\n     bytes_encoding: Optional[str] = <BytesEncoding.BYTES: 'Bytes'>,\n     intermediate_type: Optional[str] = 'bytes',\n     media_type: Optional[str] = None) -> None\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"identifier"}),(0,t.jsx)(n.td,{children:"Identifier of the leaf."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db"}),(0,t.jsx)(n.td,{children:"Datalayer instance."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uuid"}),(0,t.jsx)(n.td,{children:"UUID of the leaf."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"artifacts"}),(0,t.jsxs)(n.td,{children:["A dictionary of artifacts paths and ",(0,t.jsx)(n.code,{children:"DataType"})," objects"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"encoder"}),(0,t.jsx)(n.td,{children:"A callable that converts an encodable object of this encoder to bytes."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"decoder"}),(0,t.jsx)(n.td,{children:"A callable that converts bytes to an encodable object of this encoder."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"info"}),(0,t.jsx)(n.td,{children:"An optional information dictionary."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"shape"}),(0,t.jsx)(n.td,{children:"The shape of the data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"directory"}),(0,t.jsx)(n.td,{children:"The directory to store file types."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"encodable"}),(0,t.jsx)(n.td,{children:"The type of encodable object ('encodable', 'lazy_artifact', or 'file')."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bytes_encoding"}),(0,t.jsx)(n.td,{children:"The encoding type for bytes ('base64' or 'bytes')."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"intermediate_type"}),(0,t.jsx)(n.td,{children:"Type of the intermediate data [IntermediateType.BYTES, IntermediateType.STRING]"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"media_type"}),(0,t.jsx)(n.td,{children:"The media type."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"A data type component that defines how data is encoded and decoded."}),"\n",(0,t.jsx)(n.h2,{id:"artifact",children:(0,t.jsx)(n.code,{children:"Artifact"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"Artifact(self,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = <factory>,\n     x: Any = <EMPTY>,\n     *,\n     identifier: str = '',\n     file_id: Optional[str] = None,\n     datatype: superduperdb.components.datatype.DataType,\n     uri: Optional[str] = None,\n     sha1: Optional[str] = None) -> None\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"identifier"}),(0,t.jsx)(n.td,{children:"Identifier of the leaf."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db"}),(0,t.jsx)(n.td,{children:"Datalayer instance."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uuid"}),(0,t.jsx)(n.td,{children:"UUID of the leaf."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"file_id"}),(0,t.jsx)(n.td,{children:"unique-id of the content"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"datatype"}),(0,t.jsx)(n.td,{children:"The datatype of the content."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uri"}),(0,t.jsx)(n.td,{children:"URI of the content, if any."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sha1"}),(0,t.jsx)(n.td,{children:"SHA1 hash of the content."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"x"}),(0,t.jsx)(n.td,{children:"The artifact object."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Class for representing data to be saved on disk or in the artifact-store."}),"\n",(0,t.jsx)(n.h2,{id:"decodetorchstatedict",children:(0,t.jsx)(n.code,{children:"DecodeTorchStateDict"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"DecodeTorchStateDict(self,\n     cls)\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cls"}),(0,t.jsx)(n.td,{children:"Torch state cls"})]})})]}),"\n",(0,t.jsx)(n.p,{children:"Torch state dictionary decoder."}),"\n",(0,t.jsx)(n.h2,{id:"encodable",children:(0,t.jsx)(n.code,{children:"Encodable"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"Encodable(self,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = <factory>,\n     x: Any = <EMPTY>,\n     blob: dataclasses.InitVar[typing.Optional[bytearray]] = None,\n     *,\n     identifier: str = '',\n     file_id: Optional[str] = None,\n     datatype: superduperdb.components.datatype.DataType,\n     uri: Optional[str] = None,\n     sha1: Optional[str] = None) -> None\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"identifier"}),(0,t.jsx)(n.td,{children:"Identifier of the leaf."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db"}),(0,t.jsx)(n.td,{children:"Datalayer instance."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uuid"}),(0,t.jsx)(n.td,{children:"UUID of the leaf."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"file_id"}),(0,t.jsx)(n.td,{children:"unique-id of the content"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"datatype"}),(0,t.jsx)(n.td,{children:"The datatype of the content."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uri"}),(0,t.jsx)(n.td,{children:"URI of the content, if any."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sha1"}),(0,t.jsx)(n.td,{children:"SHA1 hash of the content."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"x"}),(0,t.jsx)(n.td,{children:"The encodable object."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"blob"}),(0,t.jsx)(n.td,{children:"The blob data."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Class for encoding non-Python datatypes to the database."}),"\n",(0,t.jsx)(n.h2,{id:"file",children:(0,t.jsx)(n.code,{children:"File"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"File(self,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = <factory>,\n     x: Any = <EMPTY>,\n     file_name: Optional[str] = None,\n     *,\n     identifier: str = '',\n     file_id: Optional[str] = None,\n     datatype: superduperdb.components.datatype.DataType,\n     uri: Optional[str] = None,\n     sha1: Optional[str] = None) -> None\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"identifier"}),(0,t.jsx)(n.td,{children:"Identifier of the leaf."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db"}),(0,t.jsx)(n.td,{children:"Datalayer instance."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uuid"}),(0,t.jsx)(n.td,{children:"UUID of the leaf."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"file_id"}),(0,t.jsx)(n.td,{children:"unique-id of the content"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"datatype"}),(0,t.jsx)(n.td,{children:"The datatype of the content."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uri"}),(0,t.jsx)(n.td,{children:"URI of the content, if any."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sha1"}),(0,t.jsx)(n.td,{children:"SHA1 hash of the content."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"x"}),(0,t.jsx)(n.td,{children:"path to the file"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"file_name"}),(0,t.jsx)(n.td,{children:"File name"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Data to be saved on disk and passed as a file reference."}),"\n",(0,t.jsx)(n.h2,{id:"lazyartifact",children:(0,t.jsx)(n.code,{children:"LazyArtifact"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"LazyArtifact(self,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = <factory>,\n     x: Any = <EMPTY>,\n     *,\n     identifier: str = '',\n     file_id: Optional[str] = None,\n     datatype: superduperdb.components.datatype.DataType,\n     uri: Optional[str] = None,\n     sha1: Optional[str] = None) -> None\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"identifier"}),(0,t.jsx)(n.td,{children:"Identifier of the leaf."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db"}),(0,t.jsx)(n.td,{children:"Datalayer instance."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uuid"}),(0,t.jsx)(n.td,{children:"UUID of the leaf."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"file_id"}),(0,t.jsx)(n.td,{children:"unique-id of the content"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"datatype"}),(0,t.jsx)(n.td,{children:"The datatype of the content."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uri"}),(0,t.jsx)(n.td,{children:"URI of the content, if any."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sha1"}),(0,t.jsx)(n.td,{children:"SHA1 hash of the content."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"x"}),(0,t.jsx)(n.td,{children:"The artifact object."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Data to be saved and loaded only when needed."}),"\n",(0,t.jsx)(n.h2,{id:"lazyfile",children:(0,t.jsx)(n.code,{children:"LazyFile"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"LazyFile(self,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = <factory>,\n     x: Any = <EMPTY>,\n     file_name: Optional[str] = None,\n     *,\n     identifier: str = '',\n     file_id: Optional[str] = None,\n     datatype: superduperdb.components.datatype.DataType,\n     uri: Optional[str] = None,\n     sha1: Optional[str] = None) -> None\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"identifier"}),(0,t.jsx)(n.td,{children:"Identifier of the leaf."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db"}),(0,t.jsx)(n.td,{children:"Datalayer instance."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uuid"}),(0,t.jsx)(n.td,{children:"UUID of the leaf."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"file_id"}),(0,t.jsx)(n.td,{children:"unique-id of the content"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"datatype"}),(0,t.jsx)(n.td,{children:"The datatype of the content."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uri"}),(0,t.jsx)(n.td,{children:"URI of the content, if any."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sha1"}),(0,t.jsx)(n.td,{children:"SHA1 hash of the content."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"x"}),(0,t.jsx)(n.td,{children:"path to the file"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"file_name"}),(0,t.jsx)(n.td,{children:"File name"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Class is used to load a file only when needed."}),"\n",(0,t.jsx)(n.h2,{id:"native",children:(0,t.jsx)(n.code,{children:"Native"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"Native(self,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = <factory>,\n     x: Optional[Any] = None,\n     *,\n     identifier: str = '',\n     file_id: Optional[str] = None,\n     datatype: superduperdb.components.datatype.DataType,\n     uri: Optional[str] = None,\n     sha1: Optional[str] = None) -> None\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"identifier"}),(0,t.jsx)(n.td,{children:"Identifier of the leaf."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db"}),(0,t.jsx)(n.td,{children:"Datalayer instance."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uuid"}),(0,t.jsx)(n.td,{children:"UUID of the leaf."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"file_id"}),(0,t.jsx)(n.td,{children:"unique-id of the content"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"datatype"}),(0,t.jsx)(n.td,{children:"The datatype of the content."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uri"}),(0,t.jsx)(n.td,{children:"URI of the content, if any."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sha1"}),(0,t.jsx)(n.td,{children:"SHA1 hash of the content."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"x"}),(0,t.jsx)(n.td,{children:"The encodable object."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Class for representing native data supported by the underlying database."})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>r,x:()=>c});var t=d(6540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);