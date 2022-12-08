import x2js from "x2js"
const xx = new x2js()
const xmlStr = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Body><HisInterFaceResponse xmlns="http://tempuri.org/"><HisInterFaceResult>&lt;response&gt;&lt;resultCode&gt;0&lt;/resultCode&gt;&lt;resultContent&gt;调用接口成功！&lt;/resultContent&gt;&lt;rowCount&gt;3&lt;/rowCount&gt;&lt;rows&gt;&lt;row&gt;&lt;IDENTITY_NAME&gt;辽宁&lt;/IDENTITY_NAME&gt;&lt;/row&gt;&lt;row&gt;&lt;IDENTITY_NAME&gt;河北&lt;/IDENTITY_NAME&gt;&lt;/row&gt;&lt;/rows&gt;&lt;/response&gt;</HisInterFaceResult></HisInterFaceResponse></soap:Body></soap:Envelope>'
// 嵌套多层，需要多次调用 xx.xml2js
const jsonObj = xx.xml2js(xmlStr)
const resultObj= xx.xml2js(jsonObj.Envelope.Body.HisInterFaceResponse.HisInterFaceResult)
console.log("解析结果",  resultObj)
