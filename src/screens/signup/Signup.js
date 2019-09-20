import StepOne from './StepOne'
import StepTwo from './StepTwo'

import { not } from 'camarche/core'
import { belief, mark } from 'camarche/faith'
import { as_match, case_ } from 'camarche/optics'
import { calmm } from 'camarche/calmm'
import { as, as_in } from 'camarche/adt'
import { as_to } from '~/project/aux'

import { nav, signup_view, maybe } from '~/project/types'
import { nav_state } from '~/project/state'

var maybe_as_bool = as_match (
	case_ (as_in (maybe .just)) (true),
	case_ (as_in (maybe .nothing)) (false) )

var signup_state = belief (as_to (nav) (signup_view)) (nav_state)
var step_two_yes_state = belief (as (signup_view) .step_two, maybe_as_bool) (signup_state)

export default calmm (_ =>
	!! not (mark (step_two_yes_state)) ?
	<StepOne />
	:
	<StepTwo /> )
