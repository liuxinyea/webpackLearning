var loaderUtils=require("loader-utils");
module.exports=function(content,sourceMap){
	var useStrictPrefix='\'use strict\';\n\n';
	if(this.cacheable){
		this.cacheable();
	}
	//source-map
	var options=loaderUtils.getOptions(this)||{};
	if(options.sourceMap&&sourceMap){
		var currentRequest=loaderUtils.getCurrentRequest(this);
		var node=SourceNode.fromStringWithSourceMap(content,new SourceMapConsumer(sourceMap));
		node.prepend(useStrictPrefix);
		var result=node.toStringWithSourceMap({file:currentRequest});
		var callback=this.async();
		callback(null,result.code,result.map.toJSON());
	}
	//不支持sourceMap的情况
	return useStrictPrefix+content;
}