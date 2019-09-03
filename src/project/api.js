import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Font from 'expo-font'

import { L, K, suppose, equals } from 'camarche/core'
import { pinpoint } from 'camarche/optics'
import { go, trace, panic } from 'camarche/effects'
import { faith, belief, please, L_ } from 'camarche/faith'

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
var user = client =>
	_fetch ('/client/user?' + pinpoint (un (L .querystring)) ({ client }))
var update_user = ({ client, step_stat }) =>
	_fetch ('/client/step-stat', { client, step_stat })
var email = ({ client, id }) =>
	_fetch ('/client/email?' + pinpoint (un (L .querystring)) ({ client, id }))
var step_stat = client =>
	_fetch ('/client/step-stat?' + pinpoint (un (L .querystring)) ({ client }))
var merge_step_stat = ({ client, step_stat }) =>
	_fetch ('/client/step-stat', { client, step_stat })
var team = client =>
	_fetch ('/client/team?' + pinpoint (un (L .querystring)) ({ client }))
var invites = client =>
	_fetch ('/client/invite?' + pinpoint (un (L .querystring)) ({ client }))
var invite = ({ client, email }) =>
	_fetch ('/client/invite', { client, email })
var accept = ({ client, email }) =>
	_fetch ('/client/accept', { client, email })



// TODO: adt serialization/deserialization facilities

export default { load, signup, login, user, update_user, email, step_stat, merge_step_stat, team, invites, invite, accept }
