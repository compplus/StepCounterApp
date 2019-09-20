import { by, R, L, K, suppose, not, equals } from 'camarche/core'
import { L_, faith, belief, show } from 'camarche/faith'
import { un, pinpoint } from 'camarche/optics'
import { variant_type_, variant_, as, as_in } from 'camarche/adt'

import { state, nav, daily_surprise, dimensions, orientation, in_features, user, step_stat, team } from './types'
import { as_to, as_into, nav_path_ } from './aux'

var _state = faith (state ([], dimensions (0, 0)))



var innermost_nav = by (nav =>
	pinpoint (
	L .choice 
	( [ L .values, L .entries, L .when (([ slot_name, _ ]) => R .endsWith ('_nav') (slot_name)), ([ _, val ]) => val, innermost_nav ]
	, L .identity ) ) )
var transfer = a => b =>
	!! equals (b) (undefined) ? a
	: equals (variant_ (a)) (undefined) ? b
	: not (equals (variant_ (a)) (variant_ (b))) ? b
	: L .modify ([ as_in (variant_ (a)), L .entries ]) (([ slot, a_slot_val ]) => [ slot, transfer (a_slot_val) (pinpoint (as_in (variant_ (a)) [slot]) (b)) ]) (a)

var end_trim_ = trim_yes_ => _list =>
	!! equals (_list) ([]) ? _list
	: not (trim_yes_ (R .last (_list))) ? _list
	: end_trim_ (trim_yes_) (R .slice (0) (-1) (_list))

var undo_history = by (history =>
	suppose (
	( hyper_path //= _nav => nav_path_ (_nav) + !! if has committing_yes, add '!' at end
	, path = nav_path_ (R .last (history))
	) =>
	end_trim_ (pinpoint (nav_path_, equals (path))) ) )

var history_state = belief (as (state) .history) (_state)
var nav_state = belief ([ L .lens (L .get (L .last)) ((location, history) => L .set ([ L .rewrite (R .dropRepeats), L .appendTo ]) (location) (history)), L .valueOr (nav .loading) ]) (history_state)
var inner_nav_state = belief (L .lens (innermost_nav) ((to, from) => transfer (from) (pinpoint (un (as_to (nav) (variant_type_ (variant_ (to))))) (to)))) (nav_state)


var in_features_state = belief (as_to (nav) (in_features)) (nav_state)
var client_state = belief (as (in_features) .client) (in_features_state)
var email_state = belief (as (in_features) .email) (in_features_state)
var user_state = belief (as (in_features) .user) (in_features_state)
var step_stat_state = belief (as (in_features) .step_stat) (in_features_state)
var team_state = belief (as (in_features) .team) (in_features_state)


var width_state = belief (as_to (state) (dimensions) .width) (_state)
var height_state = belief (as_to (state) (dimensions) .height) (_state)
var orientation_state = belief (_ => !! (show (width_state) < show (height_state)) ? orientation .portrait : orientation .landscape) (_state)

var coord_state = belief (as (state) .coord) (_state)


var local_state = belief (as (state) .local) (_state)

var cache_state = belief (as (state) .cache) (_state)


export
{ _state

, history_state
, nav_state
, inner_nav_state

, in_features_state
, client_state
, email_state
, user_state
, step_stat_state
, team_state

, width_state
, height_state
, orientation_state

, coord_state

, local_state

, cache_state

, undo_history }
