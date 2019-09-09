import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Font from 'expo-font'

import { R, L, K, suppose, equals } from 'camarche/core'
import { pinpoint, un } from 'camarche/optics'
import { go, trace, panic } from 'camarche/effects'
import { faith, belief, show, please, L_ } from 'camarche/faith'

import { step_stat_state, user_state, team_state, client_state, cache_state } from './state'
import { deserialize, on_interest_ } from './aux'





var backend_url = 'http://ec2-3-19-76-6.us-east-2.compute.amazonaws.com:8080'
//var backend_url = 'http://localhost:8080'

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
var signup = ({ email, password, user }) =>
	_fetch ('/signup', { email, password, user }) 
var login = ({ email, password }) =>
	_fetch ('/login', { email, password })
var id_email = ({ client: _client, id }) =>
	_fetch ('/email?' + pinpoint (un (L .querystring)) ({ client: _client || show (client_state), id }))
	.then (R .tap (_email => {;please (L_ .set (_email)) (id_email_state_ (id))}))
var id_user = ({ client: _client, id }) =>
	_fetch ('/user?' + pinpoint (un (L .querystring)) ({ client: _client || show (client_state), id }))
	.then (R .tap (_user => {;please (L_ .set (_user)) (id_user_state_ (id))}))
var id_team = ({ client: _client, id }) =>
	_fetch ('/team?' + pinpoint (un (L .querystring)) ({ client: _client || show (client_state), id }))
	.then (R .tap (_team => {;please (L_ .set (_team)) (id_team_state_ (id))}))
var user_ranking = ({ client: _client }) =>
	_fetch ('/user-ranking?' + pinpoint (un (L .querystring)) ({ client: _client || show (client_state), offset: 0 }))
	.then (R .tap (_user_ranking => {;please (L_ .set (_user_ranking)) (user_ranking_state)}))
var team_ranking = ({ client: _client }) =>
	_fetch ('/team-ranking?' + pinpoint (un (L .querystring)) ({ client: _client || show (client_state), offset: 0 }))
	.then (R .tap (_team_ranking => {;please (L_ .set (_team_ranking)) (team_ranking_state)}))
var user = ({ client: _client }) =>
	_fetch ('/client/user?' + pinpoint (un (L .querystring)) ({ client: _client || show (client_state) }))
	.then (R .tap (_user => {;please (L_ .set (_user)) (user_state) }))
var team = ({ client: _client }) =>
	_fetch ('/client/team?' + pinpoint (un (L .querystring)) ({ client: _client || show (client_state) }))
	.then (R .tap (_team => {;please (L_ .set (_team)) (team_state) }))
var step_stat = ({ client: _client }) =>
	_fetch ('/client/step-stat?' + pinpoint (un (L .querystring)) ({ client: _client || show (client_state) }))
	.then (R .tap (_step_stat => {;please (L_ .set (_step_stat)) (step_stat_state) }))
var update_user = ({ client: _client, user }) =>
	_fetch ('/client/user', { client: _client || show (client_state), user })
var invites = ({ client: _client }) =>
	_fetch ('/client/invite?' + pinpoint (un (L .querystring)) ({ client: _client || show (client_state) }))
	.then (R .tap (_invites => {;please (L_ .set (_invites)) (invites_state)}))
var invite = ({ client: _client, email }) =>
	_fetch ('/client/invite', { client: _client || show (client_state), email })
var accept = ({ client: _client, email }) =>
	_fetch ('/client/accept', { client: _client || show (client_state), email })
var reject = ({ client: _client, email }) =>
	_fetch ('/client/reject', { client: _client || show (client_state), email })
var merge_step_stat = ({ client: _client, step_stat }) =>
	_fetch ('/client/step-stat', { client: _client || show (client_state), step_stat })



// TODO: adt serialization/deserialization facilities


var memoize = fn => suppose (
	( cache = new Map
	) =>
	x =>
	suppose (
	( $__invalidate_cache = jinx (_ => {
		if (not (cache .has (x))) {;cache .set (x, fn (x))} } )
	) =>
	cache .get (x) ) )


var id_email_state_ = memoize (_id => belief ([ 'email', _id, on_interest_ (_ => id_email ({ client: show (client_state), id: _id })) ]) (cache_state))
var id_user_state_ = memoize (_id => belief ([ 'user', _id, on_interest_ (_ => id_user ({ client: show (client_state), id: _id })) ]) (cache_state))
var id_team_state_ = memoize (_id => belief ([ 'team', _id, on_interest_ (_ => id_team ({ client: show (client_state), id: _id })) ]) (cache_state))
var invites_state = belief ([ 'invites', on_interest_ (_ => invites (show (client_state))) ]) (cache_state)
var user_ranking_state = belief ([ 'user-ranking', on_interest_ (_ => user_ranking (show (client_state))) ]) (cache_state)
var team_ranking_state = belief ([ 'team-ranking', on_interest_ (_ => team_ranking (show (client_state))) ]) (cache_state)



export
{ id_email_state_
, id_user_state_
, id_team_state_
, invites_state
, user_ranking_state
, team_ranking_state }

export default
{ load
, signup, login
, id_email, id_user, id_team
, user_ranking, team_ranking
, step_stat, merge_step_stat
, user, update_user
, team, invites, invite, accept, reject }
