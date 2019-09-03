let { by, I, K, L, R, S, equals, not, suppose } = require ('camarche/core')
let { pinpoint, pinpoints, as_point } = require ('camarche/optics')
let { satisfy } = require ('camarche/modules')
let { L_ } = require ('camarche/faith')
let { T } = require ('camarche/calling')
let { jinx, panic_on } = require ('camarche/effects')
let { variant_name_, as, as_in, variant_, signature_ } = require ('camarche/adt')

suppose (
( memoize = fn => suppose (
	( cache = new Map
	) =>
	x =>
	suppose (
	( $__invalidate_cache = jinx (_ => {
		if (not (cache .has (x))) {;cache .set (x, fn (x))} } )
	) =>
	cache .get (x) ) )


, map_v_as_key = L .first
, map_v_as_value = L .last
, as_value_of = key => 
	[ L .elems, L .when (([ _key, _val ]) => equals (key) (_key)), L .valueOr ([ key, undefined ]), L .last ]

, as_complete = L .when (L .none (equals (undefined)) (L .values))
, complete_ = L .get (as_complete)

, as_string = L .normalize (L .join ('') (L .elems))

, _as_to = memoize (type => memoize (to_type =>
	!! equals (type) (to_type) ? 
	by (pinpoint)
	( K ([ L .identity ])
	, R .tap (_as_to => {
		var _as = as (type)
		;T (Object .keys (_as)) (R .forEach (slot => {
			;_as_to [slot] = [ ... _as_to, _as [slot] ] } ) ) } ) )
	:
	suppose (
	( variants = pinpoints (L .values) (type)
	) =>
	pinpoint
	( L .elems
	, L .choose (variant =>
		[ signature_, L .entries
		, ([ key, sub_type ]) => [ key, _as_to (sub_type) (to_type) ]
		, L .when (([ _, sub_path ]) => sub_path)
		, L .choose (([ key, sub_path ]) =>
		[ K ([ as_in (variant), key, ... sub_path ])
		, R .tap (_as_to => {
			;T (Object .keys (sub_path)) (R .forEach (slot => {
				if (slot !== '' + (+slot)) {
					;_as_to [slot] = [ ... _as_to, R .last (sub_path [slot]) ] } } ) ) } ) ] ) ] )
	) (variants ) ) ) )
, _as_into = memoize (type => memoize (cons =>
	suppose (
	( variants = pinpoints (L .values) (type)
	) =>
	pinpoint
	( L .choice
		( [ L .elems, L .when (equals (cons)), _variant => [ as_in (_variant) ] ]
		, [ L .elems, L .choose (variant =>
			[ signature_, L .entries
			, ([ slot, slot_type ]) => [ slot, _as_into (slot_type) (cons) ]
			, L .when (([ _, slot_as_into ]) => slot_as_into)
			, ([ slot, slot_as_into ]) => [ as_in (variant) [slot], ... slot_as_into ] ] ) ] )
	, R .tap (_as_into => {
		var last_in = R .last (_as_into)
		;T (Object .keys (last_in)) (R .forEach (slot => {
			;_as_into [slot] = [ ... _as_into, slot ] } ) ) } )
	) (variants ) ) ) )

, as_to = a => b => by (pinpoint)
	( K (_as_to (a) (b))
	, panic_on ([ [ equals (undefined), 'cannot find type in as_to! maybe the type is not exported?' ] ]) )
, as_into = a => b => by (pinpoint)
	( K (_as_into (a) (b)) 
	, panic_on ([ [ equals (undefined), 'cannot find type in as_into! maybe the type is not exported? or maybe you just changed the data from a unicons to a multicon?' ] ]) )

, l_undefined =
	suppose (
	( flip_defined = x => !! equals (x) (undefined) ? {} : undefined
	) =>
	L .iso (flip_defined) (flip_defined) )

, nested_path_ = marker => by (_nesting =>
	pinpoint (
	L .lazy (rec =>
	[ L .choose (val =>
		[ variant_, L .when (I)
		, _variant =>
			[ variant_name_ (_variant), pinpoint (as_in (_variant)) (val) ] ] )
	, L .choose (([ name, val ]) =>    
		L .choice
		( [ K (val), L .entries, L .when (pinpoint ([ L .first, R .endsWith ('_' + marker) ])), L .last, rec, sub_path => [ name, ... sub_path ] ]
		, K ([ name ]) ) ) ] ) ) )
	
, nav_path_ = by (nav => nested_path_ ('nav'))

, path_screen_ = screens => lift_defined (path => 
	pinpoint (
	L .lazy (rec =>
	L .choice
	( [ R .join ('/'), R .replace ('_') ('-'), path => screens [path], 'default' ]
	, [ L .prefix (-1), L .unless (equals ([])), rec ] ) )
	) (
	path ) )

, last_n = n => memoize (signal => S .root (_ => S (([ _, ...last_n_less_one ]) => [ ...last_n_less_one, signal () ], (new Array (n)) )))

, promise_ = fn => new Promise (fn)
, promise_on_ = _ =>
	suppose (
	( on_
	, err_
	, promise = new Promise ((resolve, reject) => {;on_ = resolve ;err_ = reject})
	) =>
	[ promise, on_, err_ ] )


) =>

satisfy (module
) ({
 ...
{ map_v_as_key, map_v_as_value, as_value_of
, as_complete, complete_
, as_string
, last_n

, promise_, promise_on_
, as_to, as_into
, l_undefined
, nested_path_, nav_path_, path_screen_ }
} ) )
