import { faith, belief, please, L_ } from 'camarche'
import * as L from 'partial.lenses'

var backend_url = 'http://13.58.102.164'

var post = x => (
	{ method: 'POST'
	, headers:
		{ 'Accept': 'application/json'
		, 'Content-Type': 'application/json' }
	, body: JSON .stringify (x) })




//api
var sign_up = ({ email, password }) =>
	fetch (backend_url + '/any/signup', post ({ email, password }))
	.then (res => res .json ())
	.then (res => {;
		if (res .client) {
			;please (L_ .set (res .client)) (client) }
		else {
			throw res .error } })
var login = ({ email, password }) =>
	fetch (backend_url + '/any/login', post ({ email, password }))
	.then (res => res .json ())
	.then (res => {;
		if (res .client) {
			;please (L_ .set (res .client)) (client) }
		else {
			throw res .error } })



//state
var state = faith (
	{ client: undefined })

var client = belief ([ 'client' ]) (state)
var logged_in = belief ([ L .is (undefined), L .complement ]) (client)

export { sign_up, login, state, client, logged_in }
