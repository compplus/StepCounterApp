import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Font from 'expo-font'

import { L, K, suppose, equals } from 'camarche/core'
import { pinpoint } from 'camarche/optics'
import { go, trace, panic } from 'camarche/effects'
import { faith, belief, please, L_ } from 'camarche/faith'

import { cache_state } from './state'
import { on_interest_ } from './aux'





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
		payload)
	) =>
	fetch (backend_url + endpoint, _payload)
	.then (_req => _req .json ())
	.then (R .tap (_res => {
		if (log_fetches_yes) {
			;trace (endpoint, payload, _res ) } } ) )
	.then (
		pinpoint (
		L .choice
		( [ 'error', L .when (L_ .isDefined), panic ]
		, 'response' ) ) ) )






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
var signup = ({ email, password }) =>
	_fetch ('/signup', { email, password, user: {} }) 
var login = ({ email, password }) =>
	_fetch ('/login', { email, password })
var id_user = ({ client, id }) =>
	_fetch ('/user?' + pinpoint (un (L .querystring)) ({ client, id }))
	.then (R .tap (_user => {;L_ .set (_user) (id_user_state_ (id))}))
var id_team = ({ client, id }) =>
	_fetch ('/team?' + pinpoint (un (L .querystring)) ({ client, id }))
	.then (R .tap (_team => {;L_ .set (_team) (id_team_state_ (id))}))
var user_rank = client =>
	_fetch ('/user-ranks?' + pinpoint (un (L .querystring)) ({ client, offset: 0 }))
	.then (R .tap (_user_rank => {;L_ .set (_user_rank) (user_rank_state)}))
var team_rank = client =>
	_fetch ('/team-ranks?' + pinpoint (un (L .querystring)) ({ client, offset: 0 }))
	.then (R .tap (_team_rank => {;L_ .set (_team_rank) (team_rank_state)}))
var user = client =>
	_fetch ('/client/user?' + pinpoint (un (L .querystring)) ({ client }))
var update_user = ({ client, user }) =>
	_fetch ('/client/user', { client, user })
var team = client =>
	_fetch ('/client/team?' + pinpoint (un (L .querystring)) ({ client }))
var email = ({ client, id }) =>
	_fetch ('/client/email?' + pinpoint (un (L .querystring)) ({ client, id }))
var step_stat = client =>
	_fetch ('/client/step-stat?' + pinpoint (un (L .querystring)) ({ client }))
var merge_step_stat = ({ client, step_stat }) =>
	_fetch ('/client/step-stat', { client, step_stat })
var invites = client =>
	_fetch ('/client/invite?' + pinpoint (un (L .querystring)) ({ client }))
var invite = ({ client, email }) =>
	_fetch ('/client/invite', { client, email })
var accept = ({ client, email }) =>
	_fetch ('/client/accept', { client, email })



// TODO: adt serialization/deserialization facilities




var id_user_state_ = _id => belief ([ 'user', _id, on_interest_ (_ => user ({ client: show (client_state), id: _id })) ]) (cache_state)
var id_team_state_ = _id => belief ([ 'team', _id, on_interest_ (_ => team ({ client: show (client_state), id: _id })) ]) (cache_state)
var user_rank_state = belief ([ 'user-rank', on_interest_ (_ => user_rank (show (client_state))) ]) (cache_state)
var team_rank_state = belief ([ 'team-rank', on_interest_ (_ => team_rank (show (client_state))) ]) (cache_state)



export default
{ load, signup, login
, id_user, id_team
, user_rank, team_rank
, user, update_user
, team, email
, step_stat, merge_step_stat
, invites, invite, accept


, id_user_state_
, id_team_state_
, user_rank_state
, team_rank_state }
