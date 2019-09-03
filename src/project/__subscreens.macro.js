var { equals, suppose, by, L, R, I, K } = require ('camarche/core')
var { pinpoint, pinpoints } = require ('camarche/optics')
var { trace, trace_as } = require ('camarche/effects')
var { createMacro } = require ('babel-plugin-macros')
var fs = require ('fs')
var path = require ('path')
var { as_string } = require ('./aux')

var file_tree_ = ([ ... _path ]) =>
	suppose (
	( files = []
	, $__read_path = fs .readdirSync (path .join (... _path)) .forEach (_file => {
		var file_path = [ ... _path, _file ]
		if (fs .lstatSync (path .join (... file_path)). isDirectory ()) {
			;files = [ ... files, ... file_tree_ (file_path) ] }
		else {
			;files = [ ... files, file_path ] } } )
	) =>
	files )

var screen_paths_ = _path =>
        pinpoints
        ( L .elems, L .modify (L .last) (pinpoint (L .split ('.'), L .when (pinpoint (L .last, L .is ('js'))), L .first)), L .when (I)
        , L .when (pinpoint
                ( L .when (_path => R .length (_path) >= 2), L .suffix (2)
                , ([ a, b ]) =>
                        equals (L .join ('') ([ L .split ('-'), L .elems, L .modify ([ as_string, L .first ]) (R .toUpper) ]) (a)) (b) ) )
        , L .suffix (-1), L .prefix (-1)
        ) (file_tree_ ([ _path ]) )

// trace (__dirname)

module .exports = createMacro (({ references, state, babel }) => {
	;references .default .forEach (_path => {
		;_path .replaceWithSourceString (
			pinpoint
			( L .joinAs (([ ... _path ]) => 
				suppose (
				( path_str = R .join ('/') (_path)
				, file_name = L .join ('') ([ L .elems, L .modify ([ as_string, L .first ]) (R .toUpper) ]) (R .split ('-') (R .last (_path)))
				) =>
				'"' + path_str + '": require ("./' + path_str + '/' + file_name + '")' )
				) (', ') (L .elems )
			, _requires => '{ ' + _requires + ' }'
			) (
			screen_paths_ (path .dirname (state .file .opts .filename)) ) ) } ) } )
