import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Font from 'expo-font'

import { not, R, L, K, suppose, equals } from 'camarche/core'
import { pinpoint, un } from 'camarche/optics'
import { jinx, go, trace, panic } from 'camarche/effects'
import { faith, belief, show, please, L_ } from 'camarche/faith'

import { step_stat_state, user_state, team_state, client_state, cache_state } from './state'
import { serialize, deserialize, on_interest_ } from './aux'





var backend_url = /**/'http://ec2-3-19-76-6.us-east-2.compute.amazonaws.com:8080'/*/'http://localhost:8080'/**/

var log_fetches_yes = true

var _fetch = (endpoint, payload) =>
	suppose (
	( _payload = pinpoint (
		L .choice 
		( [ L .when (equals (undefined)), K ({ method: 'GET' }) ]
		, x => (
			{ method: 'POST'
			, headers:
				{ 'Accept': 'application/json'
				, 'Content-Type': 'application/json' }
			, body: JSON .stringify (x) }) )
		) (
		serialize (payload) )
	) =>
	fetch (backend_url + endpoint, _payload)
	.then (_req => _req .json ())
	.catch (_err => ({ error: _err }))
	.then (R .tap (_res => {
		if (log_fetches_yes) {
			;trace (endpoint, serialize (payload), _res) } } ) )
	.then (
		pinpoint (
		L .choice
		( [ 'error', L .when (L_ .isDefined), panic ]
		, 'response' ) ) )
	.then (deserialize) )

var param_or_ = x => fn => y => fn (y || x)
var with_client_ = fn => param_or_ ({}) (({ ... params }) =>
	fn ({ _client: show (client_state), ... params }) )

var query_ = ({ ... _query }) => '?' + pinpoint (un (L .querystring)) (_query)
var interested_ = _state => _then =>
	_then
	.then (R .tap (x => {;please (L_ .set (x)) (_state)}))





var load = _ =>
	go
	.then (_ =>
		Promise .all (
		[ Font .loadAsync (
			{ 'anticon': require ('__/assets/fonts/anticon.ttf')
			, 'Gill Sans': require('__/assets/fonts/Gillsans.ttf')
			, 'AntDesign': require ('__/assets/fonts/anticon.ttf') } )
		, Font .loadAsync (MaterialIcons .font)
		, Font .loadAsync (Ionicons .font) ] ) )
var signup = ({ _email, _password, _user }) =>
	_fetch ('/signup', { _email, _password, _user }) 
var login = ({ _email, _password }) =>
	_fetch ('/login', { _email, _password })
var id_email = with_client_ (({ _client, _id }) => interested_ (id_email_state_ (_id)) (
	_fetch ('/email' + query_ ({ _client, _id })) ))
var id_user = with_client_ (({ _client, _id }) => interested_ (id_user_state_ (_id)) (
	_fetch ('/user' + query_ ({ _client, _id })) ) )
var id_team = with_client_ (({ _client, _id }) => interested_ (id_team_state_ (_id)) (
	_fetch ('/team' + query_ ({ _client, _id })) ) )
var user_ranking = with_client_ (({ _client }) => interested_ (user_ranking_state) (
	_fetch ('/user-ranking' + query_ ({ _client, offset: 0 })) ) )
var team_ranking = with_client_ (({ _client }) => interested_ (team_ranking_state) (
	_fetch ('/team-ranking' + query_ ({ _client, offset: 0 })) ) )
var user = with_client_ (({ _client }) => interested_ (user_state) (
	_fetch ('/client/user' + query_ ({ _client })) ) )
var team = with_client_ (({ _client }) => interested_ (team_state) (
	_fetch ('/client/team' + query_ ({ _client })) ) )
var step_stat = with_client_ (({ _client }) => interested_ (step_stat_state) (
	_fetch ('/client/step-stat' + query_ ({ _client })) ) )
var merge_step_stat = with_client_ (({ _client, _step_stat }) =>
	_fetch ('/client/step-stat', { _client, _step_stat }) )
var update_user = with_client_ (({ _client, _user }) =>
	_fetch ('/client/user', { _client, _user }) )
var invites = with_client_ (({ _client }) => interested_ (invites_state) (
	_fetch ('/client/invite' + query_ ({ _client })) ) )
var invite = with_client_ (({ _client, _email }) =>
	_fetch ('/client/invite', { _client, _email }) )
var accept = with_client_ (({ _client, _email }) =>
	_fetch ('/client/accept', { _client, _email }) )
var reject = with_client_ (({ _client, _email }) =>
	_fetch ('/client/reject', { _client, _email }) )
var remove = with_client_ (({ _client, _email }) =>
	_fetch ('/client/remove', { _client, _email }) )
var uninvite = with_client_ (({ _client, _email }) =>
	_fetch ('/client/uninvite', { _client, _email }) )
var rename_team = with_client_ (({ _client, _name }) =>
	_fetch ('/client/team/rename', { _client, _name }) )




var memoize = fn => suppose (
	( cache = new Map
	) =>
	x =>
	suppose (
	( $__invalidate_cache = jinx (_ => {
		if (not (cache .has (x))) {;cache .set (x, fn (x))} } )
	) =>
	cache .get (x) ) )


var id_email_state_ = memoize (_id => belief ([ 'email', _id, on_interest_ (_ => api .id_email ({ _id })) ]) (cache_state))
var id_user_state_ = memoize (_id => belief ([ 'user', _id, on_interest_ (_ => api .id_user ({ _id })) ]) (cache_state))
var id_team_state_ = memoize (_id => belief ([ 'team', _id, on_interest_ (_ => api .id_team ({ _id })) ]) (cache_state))
var invites_state = belief ([ 'invites', on_interest_ (_ => api .invites ()) ]) (cache_state)
var user_ranking_state = belief ([ 'user-ranking', on_interest_ (_ => api .user_ranking (show (client_state))) ]) (cache_state)
var team_ranking_state = belief ([ 'team-ranking', on_interest_ (_ => api .team_ranking (show (client_state))) ]) (cache_state)


var api =
	{ load
	, signup, login
	, id_email, id_user, id_team
	, user_ranking, team_ranking
	, step_stat, merge_step_stat
	, user, update_user
	, team, invites, invite, accept, reject, remove, uninvite, rename_team }


export
{ id_email_state_
, id_user_state_
, id_team_state_
, invites_state
, user_ranking_state
, team_ranking_state }

export default api
