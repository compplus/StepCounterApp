import { Dimensions, Platform, Linking } from 'react-native'
import { SplashScreen } from 'expo'
import { Pedometer } from 'expo-sensors'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'

import { R, L, equals, S } from 'camarche/core'
import { L_, belief, show, mark, please } from 'camarche/faith'
import { go } from 'camarche/effects'
import { un, as_match, case_ } from 'camarche/optics'
import { as, as_in } from 'camarche/adt'
import { as_to, as_into } from './aux'
import { promise_ } from './aux'

import api from './api'
import default_ from './default_'
import { calories_, hour_, day_, month_ } from '~/project/domain-aux'
import { dimensions, user, step_stat, step_sample, maybe, in_features, signup_step_one, signup_step_two } from './types'
import { nav, in_view, main_view, signup_view, login_view, profile_view } from './types'
import { nav_state, inner_nav_state, user_state, step_stat_state } from './state'
import { coord_state, width_state, height_state } from './state'

var maybe_as_bool = as_match (
	case_ (as_in (maybe .just)) (true),
	case_ (as_in (maybe .nothing)) (false) )



var debug_globals = true
var debug_network = false

;S .root (_ => {

	;S (_ => {
		if (debug_globals) {
			if (typeof GLOBAL !== 'undefined') {
				var globals =
					{ ... global
					, ... require ('camarche'), ... require ('~/project/aux'), ... require ('~/project/domain-aux')
					, ... require ('~/project/types'), ... require ('~/project/state'), ... require ('~/project/api')
					, default_: require ('~/project/default_') .default
					, api: require ('~/project/api') .default }
				;for (var i in globals) {;GLOBAL [i] = globals [i]} } }
		} )

	;S (_ => {
		if (debug_network) {
			;GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
			;GLOBAL.Blob = GLOBAL.originalBlob || GLOBAL.Blob
			;GLOBAL.FileReader = GLOBAL.originalFileReader || GLOBAL.FileReader }
		} )

	;S (_ => {
		var { width, height } = Dimensions .get ('window')
		;S .freeze (_ => {
			;please (L_ .set (width)) (width_state)
			;please (L_ .set (height)) (height_state) } )
		;Dimensions .addEventListener ('change', ({ window: { width, height } }) => {
			;S .freeze (_ => {
				;please (L_ .set (width)) (width_state)
				;please (L_ .set (height)) (height_state) } )
			} )
		} )


	;S (_ => {
		;SplashScreen .preventAutoHide ()
		;go
		.then (api .load)
		.then (_ => {
			;please (L_ .set (default_ (nav .login))) (inner_nav_state)
			;SplashScreen .hide ()
			} )
		} )



	var signup_state = belief (as_to (nav) (signup_view)) (nav_state)
	var step_one_state = belief (as_to (signup_view) (signup_step_one)) (signup_state)
	var signup_email_state = belief (as (signup_step_one) .email) (step_one_state)
	var signup_password_state = belief (as (signup_step_one) .password) (step_one_state)
	var step_two_state = belief (as_to (signup_view) (signup_step_two)) (signup_state)
	var signup_user_state = belief (as (signup_step_two) .unbound_user) (step_two_state)
	var signup_committing_yes_state = belief (as (signup_view) .committing_yes) (signup_state)
	var in_features_state = belief (as_to (nav) (maybe (in_features))) (nav_state)
	;S (_ => {
		if (equals (mark (signup_committing_yes_state)) (true)) {
			var _email = show (signup_email_state)
			;api .signup ({ _email, _password: show (signup_password_state), _user: show (signup_user_state) })
			.then (_client => go .then (_ => {
				;please (
				L_ .set (default_ (nav .in) (maybe .nothing))
				) (inner_nav_state ) } ) .then (_ =>
			Promise .all (
			[ api .user ({ _client })
			, api .step_stat ({ _client })
			, api .team ({ _client })
			, api .permissions ] ) )
			.then (([ _user, _step_stat, _team ]) => {
				;please (
				L_ .set (maybe .just (in_features (_client, _email, _user, _step_stat, _team)))
				) (in_features_state ) } ) )
			.catch (_err => {
				;alert (_err .message)
				;please (L_ .set (false)) (signup_committing_yes_state) } )
				// TODO: doesn't work if transaction reaches half
			}
		} )

	var login_state = belief (as_to (nav) (login_view)) (nav_state)
	var login_email_state = belief (as (login_view) .email) (login_state)
	var login_password_state = belief (as (login_view) .password) (login_state)
	var login_committing_yes_state = belief (as (login_view) .committing_yes) (login_state)
	;S (_ => {
		if (equals (mark (login_committing_yes_state)) (true)) {
			var _email = show (login_email_state)
			;api .login ({ _email: show (login_email_state), _password: show (login_password_state) })
			.then (_client => go .then (_ => {
				;please (
				L_ .set (default_ (nav .in) (maybe .nothing))
				) (inner_nav_state ) } ) .then (_ =>
			Promise .all (
			[ api .user ({ _client })
			, api .step_stat ({ _client })
			, api .team ({ _client })
			, api .permissions ] ) )
			.then (([ _user, _step_stat, _team ]) => {
				;please (
				L_ .set (maybe .just (in_features (_client, _email, _user, _step_stat, _team)))
				) (in_features_state ) } ) )
			.catch (_err => {
				//TODO: what if fails on nav?
				;alert (_err .message)
				;please (L_ .set (false)) (login_committing_yes_state) } ) }
		} )
	
	var in_client_state = belief (as_to (maybe (in_features)) (in_features) .client) (in_features_state)
	var in_step_stat_state = belief (as_to (maybe (in_features)) (in_features) .step_stat) (in_features_state)
	;S (_ => {
		if (L_ .isDefined (mark (in_client_state))) {
			;api .merge_step_stat ({ _client: show (in_client_state), _step_stat: mark (in_step_stat_state) }) } } )

	var profile_state = belief (as_to (nav) (profile_view)) (nav_state)
	var profile_unbound_user_state = belief (as (profile_view) .unbound_user) (profile_state)
	var profile_committing_yes_state = belief (as (profile_view) .committing_yes) (profile_state)
	;S (_ => {
		if (equals (mark (profile_committing_yes_state)) (true)) {
			var _client = show (in_client_state)
			;api .update_user ({ _client, _user: show (profile_unbound_user_state) }) .then (_ =>
			api .user (_client) )
			.then (_user => {
				;please (
				L .set (as_to (maybe (in_features)) (in_features) .user) (_user)
				) (in_features_state ) } )
			.catch (_err => {
				;alert (_err .message) } )
			.then (_ => {
				;please (L_ .set (false)) (profile_committing_yes_state) } ) }
		} )

	var in_yes_state = belief (L .isDefined (as_to (nav) (in_view))) (nav_state)
	;S (_ => {
		if (mark (in_yes_state)) {
			var weight_state = belief (as (user) .weight) (user_state)
			;S (_ => {
				var last_steps = 0
				;Pedometer .watchStepCount (({ steps }) => {
					var timestamp = new Date

					var _hour = hour_ (timestamp)
					var _day = day_ (timestamp)
					var _month = month_ (timestamp)

					var steps_delta = steps - last_steps
					var calories_delta = !! L_ .isDefined (show (weight_state)) ? calories_ (show (weight_state)) (steps_delta) : 0
					;last_steps = steps
					// TODO: refactor
					;S .freeze (_ => {
						;please (L .modify ([ as (step_stat) .by_hours, un (L .keyed), _hour, L .valueOr (step_sample (0, 0, 0)), as (step_sample) .steps ]) (R .add (steps_delta))) (step_stat_state)
						;please (L .modify ([ as (step_stat) .by_days, un (L .keyed), _day, L .valueOr (step_sample (0, 0, 0)), as (step_sample) .steps ]) (R .add (steps_delta))) (step_stat_state)
						;please (L .modify ([ as (step_stat) .by_months, un (L .keyed), _month, L .valueOr (step_sample (0, 0, 0)), as (step_sample) .steps ]) (R .add (steps_delta))) (step_stat_state)
						
						;please (L .modify ([ as (step_stat) .by_hours, un (L .keyed), _hour, L .valueOr (step_sample (0, 0, 0)), as (step_sample) .steps ]) (R .add (calories_delta))) (step_stat_state)
						;please (L .modify ([ as (step_stat) .by_days, un (L .keyed), _day, L .valueOr (step_sample (0, 0, 0)), as (step_sample) .steps ]) (R .add (calories_delta))) (step_stat_state)
						;please (L .modify ([ as (step_stat) .by_months, un (L .keyed), _month, L .valueOr (step_sample (0, 0, 0)), as (step_sample) .steps ]) (R .add (calories_delta))) (step_stat_state)

						//;please (L .modify ([ as (step_stat) .by_hours, _hour, L .valueOr (step_sample (0, 0, 0)), as (step_sample) .distance ]) (R .add (distance))) (step_stat_state)
						//;please (L .modify ([ as (step_stat) .by_days, _day, L .valueOr (step_sample (0, 0, 0)), as (step_sample) .distance ]) (R .add (distance))) (step_stat_state)
						//;please (L .modify ([ as (step_stat) .by_months, _month, L .valueOr (step_sample (0, 0, 0)), as (step_sample) .distance ]) (R .add (distance))) (step_stat_state)
						} )
					} )
				;S .cleanup (_ => {}) } )


			var permission_ = _ => promise_ (grant_ =>
				Permissions .askAsync (Permissions .LOCATION)
				.then (({ status }) => {
					if (status !== 'granted') {
						;alert ('Please enable the Location permissions for StepCounter to participate in the competition!')
						if (equals (Platform .OS) ('ios')) {
							;Linking .openURL ('app-settings:') }
						return permission_ () } } )
				.then (grant_) )
			var location_ready_yes_ = S .data (false)
			;go .then (permission_) .then (_ => {;location_ready_yes_ (true)})
			;S (_ => {
				if (location_ready_yes_ ()) {
					;Location .getCurrentPositionAsync ({})
					.then (_location => {
						;please (L_ .set (_location)) (coord_state) } )

					;Location .watchPositionAsync (
						{ enableHighAccuracy: true
						, timeout: 24 * 60 * 60 * 1000
						, maximumAge: 1000 }
					, ({ coords }) => {
						;please (L_ .set (coords)) (coord_state) } )
					.then (({ remove }) => {;_remove = remove})

					var _remove
					;S .cleanup (_ => {;_remove && _remove ()})
					//TODO: add for background Location.startLocationUpdatesAsync(taskName, options)
					}
				} )
			}
		} )
	} )
