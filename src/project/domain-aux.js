let { by, I, K, L, R, S, equals, not, suppose } = require ('camarche/core')
let { pinpoint, pinpoints, as_points, match, case_ } = require ('camarche/optics')
let { satisfy } = require ('camarche/modules')
let { L_ } = require ('camarche/faith')
let { T } = require ('camarche/calling')
let { jinx } = require ('camarche/effects')
let { as_in, variant_, signature_ } = require ('camarche/adt')

let { time_unit } = require ('./types')

suppose (
( calories_ = weight_by_kg => steps => 
	suppose (
	( steps_per_mile = 2105
        , calories_per_mile = 0.57 * 2.205 * weight_by_kg
	) =>
        calories_per_mile * steps / steps_per_mile )


, hour_stamp_ = _date => + (new Date (_date)) .setMinutes (0, 0, 0)
, day_stamp_ = _date => + (new Date (_date)) .setHours (0, 0, 0, 0)
, month_stamp_ = _date => + (new Date ((new Date (_date)) .setDate (1))) .setHours (0, 0, 0, 0)


, hour_ = _stamp => ('' + (new Date (_stamp)) .getHours ()) .padStart (2, '0') + ':00'
, day_ = _stamp => '' + (new Date (_stamp)) .getDate ()
, month_ = _stamp => match (
	case_ (L .subset (equals (0))) ('Jan'),
	case_ (L .subset (equals (1))) ('Feb'),
	case_ (L .subset (equals (2))) ('Mar'),
	case_ (L .subset (equals (3))) ('Apr'),
	case_ (L .subset (equals (4))) ('May'),
	case_ (L .subset (equals (5))) ('Jun'),
	case_ (L .subset (equals (6))) ('Jul'),
	case_ (L .subset (equals (7))) ('Aug'),
	case_ (L .subset (equals (8))) ('Sep'),
	case_ (L .subset (equals (9))) ('Oct'),
	case_ (L .subset (equals (10))) ('Nov'),
	case_ (L .subset (equals (11))) ('Dec') 
	) ((new Date (_stamp)) .getMonth () )

, display_stamp_ = by (_time_unit => match (
	case_ (as_in (time_unit .hour)) (hour_), 
	case_ (as_in (time_unit .day)) (day_), 
	case_ (as_in (time_unit .month)) (month_) ) )


, hour_as_ordinal = L .lens (_timestamp => (new Date (_timestamp)) .getHours ()) ((_ordinal, _timestamp) => + (new Date (hour_stamp_ (_timestamp))) .setHours (_ordinal, 0, 0, 0))
, day_as_ordinal = L .lens (_timestamp => (new Date (_timestamp)) .getDate () - 1) ((_ordinal, _timestamp) => + (new Date (day_stamp_ (_timestamp))) .setDate (_ordinal + 1))
, month_as_ordinal = L .lens (_timestamp => (new Date (_timestamp)) .getMonth ()) ((_ordinal, _timestamp) => + (new Date (month_stamp_ (_timestamp))) .setMonth (_ordinal))
	

, days_in_month_ = pinpoint (
	as_points (
	[ [ 'Jan', 31 ]
	, [ 'Feb', 28 ]
	, [ 'Mar', 31 ]
	, [ 'Apr', 30 ]
	, [ 'May', 31 ]
	, [ 'Jun', 30 ]
	, [ 'Jul', 31 ]
	, [ 'Aug', 31 ]
	, [ 'Sep', 30 ]
	, [ 'Oct', 31 ]
	, [ 'Nov', 30 ]
	, [ 'Dec', 31 ] ] ) )


, departments = require ('./data-departments.json')
, faculties = require ('./data-faculties.json')

) =>

satisfy (module
) ({
 ...
{ calories_ }
,...
{ hour_stamp_, day_stamp_, month_stamp_ }
,...
{ hour_, day_, month_, display_stamp_ }
,...
{ hour_as_ordinal, day_as_ordinal, month_as_ordinal }
,...
{ days_in_month_ }
,...
{ departments, faculties }
} ) )
