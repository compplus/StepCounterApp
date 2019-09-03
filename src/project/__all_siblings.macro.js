var { createMacro } = require ('babel-plugin-macros')
var { equals } = require ('camarche/core')
var fs = require ('fs')
var path = require ('path')

module .exports = createMacro (({ references, state, babel }) => {
	var file_path = state .file .opts .filename
	var exports = fs .readdirSync (path .dirname (file_path))
		.filter (function (_file) { return _file [0] !== '.' })
		.filter (function (_file) { return _file !== 'index.js' })
		.filter (function (_file) { return _file !== path .basename (file_path) })
		.map (function (_file) { return _file .split ('.') [0] })
		.map (function (_name) { return 'export { default as ' + _name + ' } from "./' + _name + '"' })
		.map (function (_code) { return babel .template (_code, { sourceType: 'module' } ) () })
	var body = references .default [0] .findParent (function (path) { return path .isProgram () }) .get ('body')
	var last_path = body .slice (-1) [0]
	;exports .forEach (function (node) { ;last_path .insertAfter (node) })

	;references .default .forEach (function (_path) {
		;_path .findParent (function (parent_path) { 
			var parent_node = parent_path .node
			return body .some (function (top_path) {
				var top_node = top_path .node
				return equals (top_node .loc) (parent_node .loc) } ) } )
		.remove () } )
	} )
