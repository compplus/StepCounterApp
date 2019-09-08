var { $, data } = require ('camarche/adt')

var untyped = data ()

var bool = data ()
var str = data ()
var nat = data ()
var number = data ()
var id = data ()
var unbound = a => a
var v = $ ((... a) => data ())
var list = $ (a => data ())
var map = $ (a => (... b) => list (v (a, ... b)))
var maybe = $ (a => data (
	( nothing
	, just = { just :- a } ) => maybe (a) ) )
var either = $ (left => right => data (
	( left_ = { _ :- left }
	, right_ = { _ :- right } ) => either ) )
var mention = $ (a => data (
	( mention_ = { _ :- id }
	, subject = { subject :- a } ) => mention (a) ) )

var password = data ()

var coord = data ()

var client = id
var month = data ()
var day_of_month = data ()
var hour_of_day = data ()
var email = data ()
var faculty = data ()
var department = data ()
var first_name = data ()
var last_name = data ()
var age = data ()
var height = data ()
var weight = data ()
var category = data (
	( staff
	, student
	, alumni
	, other
	) => category )
var gender = data (
	( male
	, female
	, other
	) => gender )
var time_unit = data (
	( hour
	, day
	, month
	) => time_unit )

var step_sample = data (
	( _ =
	{ steps :- nat, distance :- number, calories :- number }
	) => step_sample)
var step_stat = data (
	( _ =
	{ by_months :- map (month) (step_sample) 
	, by_days :- map (day_of_month) (step_sample) 
	, by_hours :- map (hour_of_day) (step_sample) }
	) => step_stat )


var user = data (
	( _ =
	{ _ :- id
	, _ :- faculty
	, _ :- department
	, _ :- category
	, _ :- gender
	, _ :- first_name
	, _ :- last_name
	, _ :- age
	, _ :- height
	, _ :- weight } ) => user )

var team = data (
	( _ =
	{ _ :- id
	, captain :- mention (user)
	, members :- list (mention (user))
	, invitations :- list (email) }
	) => team )

var forgot_password_view = data (
	( _ = { _ :- email, committing_yes :- bool } ) => forgot_password_view )

var signup_view = data (
	( _ = { _ :- email, _ :- password, password_confirmation :- password, committing_yes :- bool } ) => signup_view )
var login_view = data (
	( _ = { _ :- email, _ :- password, _ :- maybe (forgot_password_view), committing_yes :- bool } ) => login_view )
var settings_view = data (
	( settings
	, about ) => settings_view )
var profile_view = data (
	( _ = { unbound_user :- user, committing_yes :- bool }
	) => profile_view )
var activity_view = data (
	( _ =
	{ _ :- time_unit }
	) => activity_view )
var main_view = data (
	( main
	, settings = { _ :- settings_view }
	, profile = { _ :- profile_view }
	, awards
	, activity = { _ :- activity_view }
	, map ) => main_view )
var contest_view = data (
	( contest
	, individual_rank
	, team_formation
	, team_rank ) => settings_view )
var in_view = data (
	( main = { _ :- main_view }
	, contest = { _ :- contest_view } ) => in_view )

var in_features = data (
	( _ =
	{ _ :- client, _ :- email, _ :- user, _ :- step_stat, _ :- team }
	) => in_features )


var nav = data (
	( loading
	, signup = { _ :- signup_view }
	, login = { _ :- login_view }
	, in_ = { _ :- maybe (in_features), _ :- in_view } ) => nav )



var orientation = data (
	( portrait
	, landscape ) => orientation )
var dimensions = data (
	( _ = 
	{ width :- number
	, height :- number } ) => dimensions )


// region feature

var state = data (
	( _ =
	{ history :- list (nav)
	, _ :- dimensions
	, _ :- coord
	, local :- untyped
	, cache :- untyped }
	) => state )









module .exports =
{ bool, str, nat, id, unbound, v, list, map, either, maybe

, client, faculty, department, category, gender, first_name, last_name, age, height, weight

, time_unit, step_sample, step_stat
, orientation, dimensions, coord

, user, team

, in_features

, state
, nav, in_view, contest_view, main_view, profile_view, settings_view, activity_view
, login_view, signup_view, forgot_password_view }
